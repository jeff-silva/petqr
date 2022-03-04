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
