<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
	use HasApiTokens;
	use HasFactory;
	use Notifiable;
	use \App\Traits\Model;

	public $fillable = [
		'id',
		'name',
		'email',
		'photo_id',
		'email_verified_at',
		'password',
		'remember_token',
		'created_at',
		'updated_at',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
	    'password',
	    'remember_token',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
	    'email_verified_at' => 'datetime',
	];


	public function getJWTIdentifier()
	{
		return $this->getKey();
	}


	public function getJWTCustomClaims()
	{
		return [];
	}


	public function validationRules()
	{
		$rules = [
		    'name' => ['required'],
		    'email' => ['required', 'email:rfc,dns'],
		];

		// update
		if ($this->id) {
		    //
		}

		// insert
		else {
		    $rules['email'][] = 'unique:users,email';
		    $rules['password'] = ['required'];
		}

		return $rules;
	}


	public function setPasswordAttribute($value)
	{
		if (! $value) return;
		if (! \Hash::needsRehash($value)) return;
		return $this->attributes['password'] = \Hash::make($value);
	}


	public function passwordResetStart()
	{
		if (! $this->id) return;
		$this->remember_token = substr(uniqid(), 0, 6);
		$this->save();

		(new \App\Mail\UserPasswordReset($this))->sendTo($this->email);

		return $this;
	}


	public function setPhotoIdAttribute($value)
	{
		return $this->attributes['photo_id'] = $value? $value: null;
	}


	public function page()
	{
		return $this->belongsTo(App\Models\Pages::class, 'owner', 'id');
	}


	public function photo()
	{
		return $this->hasOne(Files::class, 'id', 'photo_id');
	}


	public function photos()
	{
		return $this->hasMany(\App\Models\Files::class, 'id', 'photo_id');
	}
}
