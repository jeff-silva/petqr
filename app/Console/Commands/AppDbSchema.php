<?php

// composer require nette/php-generator
// https://github.com/nette/php-generator

namespace App\Console\Commands;

class AppDbSchema extends AppBase
{

    protected $signature = 'app:db-schema';
    protected $description = 'Cria um dump do schema do banco de dados';

    public function handle() {
        $database = env('DB_DATABASE');

        $schema_php = ['<?php', ''];

        $schema_sql = [];
        $schema_sql[] = '-- SET FOREIGN_KEY_CHECKS=0;';
        $schema_sql[] = '-- SET GLOBAL FOREIGN_KEY_CHECKS=0;';
        foreach($this->getTables() as $table) {
            $sql_create = collect( \DB::select("SHOW CREATE table {$table->Name};") )->pluck('Create Table')->first();
            $sql_create = str_replace('CREATE TABLE', 'CREATE TABLE IF NOT EXISTS', $sql_create);
            $sql_create = preg_replace('/AUTO_INCREMENT=[0-9]+\s/', '', $sql_create);

            $schema_sql[] = '';
            $schema_sql[] = '';
            $schema_sql[] = $sql_create;

            $schema_php[] = '';
            $schema_php[] = '';
            $schema_php[] = "// Create table {$table->Name}";
            $schema_php[] = "\DB::select(\"{$sql_create}\");";

            foreach(\DB::select("SHOW COLUMNS FROM {$table->Name}") as $col) {
                preg_match("/(`{$col->Field}`.+),/", $sql_create, $field_type);
                if (! isset($field_type[1])) continue;
                $field_type = $field_type[1];

                // Tables
                $schema_php[] = '';
                $schema_php[] = '';
                $schema_php[] = "// Create/Update column {$table->Name}.{$col->Field}";
                $schema_php[] = "\Schema::hasColumn('{$table->Name}', '{$col->Field}')?";
                $schema_php[] = "\t\DB::select(\"ALTER TABLE {$table->Name} MODIFY COLUMN {$field_type}\"):";
                $schema_php[] = "\t\DB::select(\"ALTER TABLE {$table->Name} ADD COLUMN {$field_type}\");";

                // Foreign keys
                preg_match_all('/CONSTRAINT\s+`(.+?)`.+/', $sql_create, $constraints);
                if (isset($constraints[0]) AND is_array($constraints[0])) {
                    foreach($constraints[0] as $i => $const_sql) {
                        $const_name = $constraints[1][$i];

                        $schema_php[] = '';
                        $schema_php[] = '';
                        $schema_php[] = "// Create fk {$const_name}";
                        $schema_php[] = "\$exists = collect(\DB::select(\"SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='{$const_name}' \"))->first();";
                        $schema_php[] = "dump(\"{$const_name} exists\", \$exists, gettype(\$exists));";
                        // $schema_php[] = "if (\$exists==null) {";
                        // $schema_php[] = "\t\DB::select(\"ALTER TABLE `{$table->Name}` ADD {$const_sql}\");";
                        // $schema_php[] = "}";
                    }
                }
            }
        }

        file_put_contents(database_path('schema.sql'), implode("\n", $schema_sql));
        $this->comment('Arquivo do banco gerado em '. database_path('schema.sql'));

        file_put_contents(database_path('schema.php'), implode("\n", $schema_php));
        $this->comment('Arquivo do banco gerado em '. database_path('schema.php'));
    }
}
