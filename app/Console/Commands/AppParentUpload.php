<?php

// composer require nette/php-generator
// https://github.com/nette/php-generator

namespace App\Console\Commands;

class AppParentUpload extends AppBase
{

    protected $signature = 'app:parent-upload';
    protected $description = 'Instalação da aplicação';

    public function handle() {
        $app_parent = env('APP_PARENT');
        if (!$app_parent) return $this->comment('APP_PARENT não definido');

        $files = [];
        $files[] = base_path('app/Http/Controllers/Controller.php');
        $files[] = base_path('app/Providers/AppServiceProvider.php');
        $files = array_merge($files, glob(base_path('app/Console/Commands/*.php')));
        $files = array_merge($files, glob(base_path('app/Mail/*.php')));
        $files = array_merge($files, glob(base_path('client/components/ui/**/*.vue')));
        $files = array_merge($files, glob(base_path('client/components/ui/*.vue')));
        $files = array_merge($files, glob(base_path('client/layouts/default/*.vue')));
        $files[] = base_path('client/pages/admin/settings/email.vue');
        $files[] = base_path('client/pages/admin/settings/files.vue');
        $files[] = base_path('client/pages/admin/settings/index.vue');
        $files = array_map('realpath', $files);

        foreach($files as $from_file) {
            $to_file = str_replace(base_path(), $app_parent, $from_file);
            $to_folder = pathinfo($to_file, PATHINFO_DIRNAME);
            if (!file_exists($to_folder)) mkdir($to_folder, 0777, true);
            $from_content = file_get_contents($from_file);
            file_put_contents($to_file, $from_content);
        }

        $this->comment("Arquivos enviados para {$app_parent}");
    }

    public function fixFilename($files) {
        
        foreach($files as $i => $file) {
            $file = realpath(base_path($file));

            if (!is_file($file)) {
                $files = $this->fixFilename($file);
                unset($files[ $i ]);
                continue;
            }

            $files[ $i ] = $file;
        }

        return $files;
    }
}
