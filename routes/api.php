<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function($router) {
    Route::post('login', '\App\Http\Controllers\AuthController@login');
    Route::post('logout', '\App\Http\Controllers\AuthController@logout');
    Route::post('refresh', '\App\Http\Controllers\AuthController@refresh');
    Route::post('me', '\App\Http\Controllers\AuthController@me');
    Route::post('register', '\App\Http\Controllers\AuthController@register');
    Route::post('password-reset-start', '\App\Http\Controllers\AuthController@passwordResetStart');
    Route::post('password-reset-change', '\App\Http\Controllers\AuthController@passwordResetChange');
});

Route::post('app/mail-test', '\App\Http\Controllers\AppController@mailTest');

Route::get('settings', '\App\Http\Controllers\SettingsController@getAll');
Route::post('settings', '\App\Http\Controllers\SettingsController@saveAll');

\App\Http\Controllers\Controller::automaticRoutes(\App\Models\Files::class);
Route::post('files/upload', '\App\Http\Controllers\FilesController@upload');
Route::get('files/view/{slug}', '\App\Http\Controllers\FilesController@view');

\App\Http\Controllers\Controller::automaticRoutes(\App\Models\Pages::class);
\App\Http\Controllers\Controller::automaticRoutes(\App\Models\PetqrCollars::class);
\App\Http\Controllers\Controller::automaticRoutes(\App\Models\User::class);