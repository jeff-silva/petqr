<?php

namespace App\Http\Controllers;

class PetqrCollarsController extends Controller
{
	public function __construct()
	{
		$this->model = new \App\Models\PetqrCollars;

		$this->middleware('auth:api', [
			'except' => ['search', 'find'],
		]);
	}
}
