<?php

namespace App\Http\Controllers;

class PersonalAccessTokensController extends Controller
{
	public function __construct()
	{
		$this->model = new \App\Models\PersonalAccessTokens;

		$this->middleware('auth:api', [
			'except' => ['search', 'find'],
		]);
	}
}
