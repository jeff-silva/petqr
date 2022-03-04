<?php

namespace App\Console\Commands;

class AppBase extends \Illuminate\Console\Command
{

    protected $signature = 'app:test';
    protected $description = 'App test';

    public function handle() {
        $this->comment('Hello');
    }

    public function classInfo($params=[]) {
        $params = (object) array_merge([
            'name' => '',
            'namespace' => '',
            'path' => '',
            'suffix' => '',
        ], $params);

        if ($params->name=='users') { $params->name = 'user'; }

        $return = (object) ['Name' => ((string) \Str::of($params->name)->slug()->studly()) .$params->suffix ];
        $return->Namespace = $params->namespace;
        $return->NameFull = "{$params->namespace}\\{$return->Name}";
        $return->File = "\\{$params->path}\\{$return->Name}.php";
        $return->FileExists = file_exists(base_path($return->File));

        return $return;
    }

    public function getFieldSchema($field) {
        $field = (array) $field;
        $schema = [ $field['Type'] ];
        $schema[] = (($field['Null']=='NO' || $field['Key']=='PRI')? 'NOT NULL': 'NULL');
        if ($field['Extra']=='auto_increment') $schema[] = 'AUTO_INCREMENT';
        if ($field['Key'] != 'PRI' AND !str_contains($field['Type'], 'varchar') AND !str_contains($field['Type'], 'int') AND $field['Type']!='longtext' AND $field['Type']!='timestamp') {
            $schema[] = ($field['Default']===NULL? 'DEFAULT NULL': "DEFAULT '{$field['Default']}'");
        }
        return implode(' ', $schema);
    }

    public function getTables() {
        $database = env('DB_DATABASE');
        $tables = [];

        foreach(\DB::select('SHOW TABLE STATUS') as $table) {

            $deletes = [
                'Version', 'Row_format', 'Rows', 'Avg_row_length', 'Data_length', 'Max_data_length', 'Index_length',
                'Data_free', 'Create_time', 'Update_time', 'Check_time', 'Checksum', 'Create_options',
            ];
            foreach($deletes as $delete) { unset($table->$delete); }

            $table->Model = $this->classInfo([
                'name' => $table->Name,
                'namespace' => 'App\Models',
                'path' => 'app\Models',
            ]);

            $table->Controller = $this->classInfo([
                'name' => $table->Name,
                'namespace' => 'App\Http\Controllers',
                'path' => 'app\Http\Controllers',
                'suffix' => 'Controller',
            ]);
            

            $statement = collect(\DB::select("SHOW CREATE TABLE `{$table->Name}`;"))->pluck('Create Table')->first();
            $statement = str_replace('CREATE TABLE', 'CREATE TABLE IF NOT EXISTS', $statement);
            $table->Sql = str_replace(["\n", "\t"], '', $statement);
            
            $table->Fields = [];
            foreach(\DB::select("SHOW COLUMNS FROM {$table->Name}") as $col) {
                $col->Sql = $this->getFieldSchema($col);
                $table->Fields[ $col->Field ] = $col;
            }

            $tables[ $table->Name ] = $table;
        }        

        return $tables;
    }

    public function getFks() {
        $database = env('DB_DATABASE');
        $fks = [];

        foreach(\DB::select("SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME != 'PRIMARY' AND REFERENCED_TABLE_NAME IS NOT NULL ") as $fk) {
            $fks[ $fk->CONSTRAINT_NAME ] = $fk;
        }

        return $fks;
    }
}
