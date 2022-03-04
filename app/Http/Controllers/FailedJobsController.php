<?php

namespace App\Http\Controllers;

class FailedJobsController extends Controller
{
	public function __construct()
	{
		$this->model = new \App\Models\FailedJobs;

		$this->middleware('auth:api', [
			'except' => ['search', 'find'],
		]);
	}
}
