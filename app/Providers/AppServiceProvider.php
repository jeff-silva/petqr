<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        ini_set('post_max_size', '1024M');
        ini_set('upload_max_filesize', '1024M');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (! \Schema::hasTable('settings')) return;
        config(\App\Models\Settings::getAll());
    }
}
