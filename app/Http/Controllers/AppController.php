<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
	public function __construct()
	{
		$this->model = new \App\Models\Settings;

		$this->middleware('auth:api', [
			'except' => [],
		]);
	}

	public function endpoints()
	{
		$routes = [];

		foreach(\Route::getRoutes() as $item) {
			// dd($item->parameterNames(), get_class_methods($item));

			$route = (object) [
				'uri' => $item->uri(),
				'methods' => $item->methods(),
				'parameterNames' => $item->parameterNames(),
				'name' => $item->getName(),
			];

			if ($route->uri=='{path}') continue;
			if (\Str::startsWith($route->uri, '_ignition')) continue;
			if (\Str::startsWith($route->uri, 'sanctum')) continue;

			$routes[] = $route;
		}

		return $routes;
	}


	public function search()
	{
		$return = [];

		$return[] = [
			'name' => 'Arquivos',
			'items' => (new \App\Models\Files)->select(['id', 'name'])->search()->get()->transform(function($item) {
				return ['name' => $item->name, 'url' => "/admin/files/{$item->id}"];
			}),
		];
		
		$return[] = [
			'name' => 'Páginas',
			'items' => (new \App\Models\Pages)->select(['id', 'name'])->search()->get()->transform(function($item) {
				return ['name' => $item->name, 'url' => "/admin/pages/{$item->id}"];
			}),
		];

		$return[] = [
			'name' => 'Petqr Coleiras',
			'items' => (new \App\Models\PetqrCollars)->select(['id', 'name'])->search()->get()->transform(function($item) {
				return ['name' => $item->name, 'url' => "/admin/petqr-collars/{$item->id}"];
			}),
		];

		$return[] = [
			'name' => 'Usuários',
			'items' => (new \App\Models\User)->select(['id', 'name'])->search()->get()->transform(function($item) {
				return ['name' => $item->name, 'url' => "/admin/user/{$item->id}"];
			}),
		];

		return $return;
	}


	public function mailTest() {
		$params = array_merge([
			'to' => '',
			'subject' => '',
			'body' => '',
		], request()->all());

		\Mail::send([], [], function($message) use ($params) {
            $message->to($params['to']);
			$message->subject($params['subject']);
			$message->setBody($params['body'], 'text/html');
        });

		return [
			'failures' => \Mail::failures(),
		];
	}
}
