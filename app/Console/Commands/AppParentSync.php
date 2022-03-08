<?php

// composer require nette/php-generator
// https://github.com/nette/php-generator

namespace App\Console\Commands;

class AppParentSync extends AppBase
{

    protected $signature = 'app:parent-sync';
    protected $description = 'Instalação da aplicação';

    public function handle() {
        $app_parent = env('APP_PARENT');
        if (!$app_parent) return $this->comment('APP_PARENT não definido');

        $files = [];
        $files[] = base_path('app/Http/Controllers/Controller.php');
        $files[] = base_path('app/Providers/AppServiceProvider.php');
        $files = array_merge($files, glob(base_path('app/Console/Commands/*.php')));
        $files = array_merge($files, glob(base_path('app/Traits/*.php')));
        $files = array_merge($files, glob(base_path('app/Mail/*.php')));
        $files = array_merge($files, glob(base_path('client/components/ui/**/*.vue')));
        $files = array_merge($files, glob(base_path('client/components/ui/*.vue')));
        $files = array_merge($files, glob(base_path('client/layouts/default/*.vue')));
        $files[] = base_path('client/pages/admin/settings/email.vue');
        $files[] = base_path('client/pages/admin/settings/files.vue');
        $files[] = base_path('client/pages/admin/settings/index.vue');
        $files = array_map('realpath', $files);

        foreach($files as $from_file) {
            $here = $this->fileInfo($from_file);
            $there = $this->fileInfo(str_replace(base_path(), $app_parent, $from_file));

            if ($here->content != $there->content) {

                // subir
                if ($here->modified > $there->modified) {
                    $this->comment("⇈ {$there->path}");
                    if (!file_exists($there->dirname)) mkdir($there->dirname, 0777, true);
                    file_put_contents($there->path, $here->content);
                }

                // baixar
                else if ($here->modified < $there->modified) {
                    $this->comment("⇊ {$there->path}");
                    if (!file_exists($here->dirname)) mkdir($here->dirname, 0777, true);
                    file_put_contents($here->path, $there->content);
                }
            }
        }
    }

    public function fileInfo($path) {
        $path = preg_replace('/\\\+/', DIRECTORY_SEPARATOR, $path);
        $file = (object) array_merge(['path' => $path], pathinfo($path));
        $file->file_exists = file_exists($path);
        $file->folder_exists = file_exists($file->dirname);
        $file->is_dir = is_dir($path);
        $file->modified = $file->file_exists? \File::lastModified($path): 0;
        $file->content = (!$file->is_dir AND $file->file_exists)? file_get_contents($file->path): null;
        return $file;
    }
}
