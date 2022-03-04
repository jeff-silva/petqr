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
        foreach($this->getTables() as $table) {
            $sql = collect( \DB::select("SHOW CREATE table {$table->Name};") )->pluck('Create Table')->first() .';';
            $sql = preg_replace('/AUTO_INCREMENT=[0-9]+\s/', '', $sql);
            $sqls[] = $sql;
        }
        file_put_contents(database_path('schema.sql'), implode("\n\n", $sqls));
    }
}
