<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    static function automaticRoutes($model, $params=[]) {
        $inst = app($model);
        $name = (new \ReflectionClass($inst))->getShortName();
        $prefix = (string) \Str::of($name)->studly()->kebab();
        
        \Illuminate\Support\Facades\Route::get("/{$prefix}/search", "\App\Http\Controllers\\{$name}Controller@search")->name("{$prefix}-search");
        \Illuminate\Support\Facades\Route::get("/{$prefix}/find/{id}", "\App\Http\Controllers\\{$name}Controller@find")->name("{$prefix}-find");
        \Illuminate\Support\Facades\Route::post("/{$prefix}/save", "\App\Http\Controllers\\{$name}Controller@save")->name("{$prefix}-save");
        \Illuminate\Support\Facades\Route::post("/{$prefix}/valid", "\App\Http\Controllers\\{$name}Controller@valid")->name("{$prefix}-valid");
        \Illuminate\Support\Facades\Route::post("/{$prefix}/delete", "\App\Http\Controllers\\{$name}Controller@delete")->name("{$prefix}-delete");
        \Illuminate\Support\Facades\Route::post("/{$prefix}/restore", "\App\Http\Controllers\\{$name}Controller@restore")->name("{$prefix}-restore");
        \Illuminate\Support\Facades\Route::get("/{$prefix}/clone/{id}", "\App\Http\Controllers\\{$name}Controller@clone")->name("{$prefix}-clone");
        \Illuminate\Support\Facades\Route::post("/{$prefix}/import", "\App\Http\Controllers\\{$name}Controller@import")->name("{$prefix}-import");
        \Illuminate\Support\Facades\Route::get("/{$prefix}/export", "\App\Http\Controllers\\{$name}Controller@export")->name("{$prefix}-export");
    }

    public function search()
    {
        return $this->model->search()->paginate(request('per_page', 15));
    }


    public function find($id)
    {
        return $this->model->whereDeleted(false)->findIdOrSlug($id);
    }


    public function save()
    {
        return $this->model->updateOrCreate(['id' => request('id')], request()->all());
    }


    public function valid()
    {
        return ['valid'];
    }


    public function delete()
    {
        return $this->model->search()->deleteAll();
    }


    public function restore()
    {
        return $this->model->search()->restoreAll();
    }


    public function clone($id)
    {
        return ['clone'];
    }


    public function import()
    {
        return ['import'];
    }


    public function export()
    {
        return $this->model->search()->export();
    }
}
