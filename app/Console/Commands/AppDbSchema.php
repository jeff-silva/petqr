<?php

// composer require nette/php-generator
// https://github.com/nette/php-generator

namespace App\Console\Commands;

class AppDbSchema extends AppBase
{

    protected $signature = 'app:db-schema';
    protected $description = 'Cria um dump do schema do banco de dados';

    public function handle() {
        $sqls = [];
        $sqls[] = '-- File generated in '. date('Y-m-d H:i:s');
        $sqls[] = '-- SET FOREIGN_KEY_CHECKS=0;';
        $sqls[] = '-- SET GLOBAL FOREIGN_KEY_CHECKS=0;';
        foreach($this->getTables() as $table) {
            $sqls[] = '';
            $sqls[] = '';
            $sql = collect( \DB::select("SHOW CREATE table {$table->Name};") )->pluck('Create Table')->first() .';';
            $sql = preg_replace('/AUTO_INCREMENT=[0-9]+\s/', '', $sql);
            $sqls[] = $sql;
        }
        file_put_contents(database_path('schema.sql'), implode("\n", $sqls));
        $this->comment('Arquivo do banco gerado em '. database_path('schema.sql'));
    }
}
