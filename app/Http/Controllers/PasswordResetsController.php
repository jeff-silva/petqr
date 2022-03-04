<?php

namespace App\Http\Controllers;

class PasswordResetsController extends Controller
{
	public function __construct()
	{
		$this->model = new \App\Models\PasswordResets;

		$this->middleware('auth:api', [
			'except' => ['search', 'find'],
		]);
	}
}
