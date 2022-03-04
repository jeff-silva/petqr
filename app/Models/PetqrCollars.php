<?php

namespace App\Models;

class PetqrCollars extends \Illuminate\Database\Eloquent\Model
{
	use \Illuminate\Database\Eloquent\Factories\HasFactory;
	use \App\Traits\Model;

	public $fillable = [
		'id',
		'slug',
		'name',
		'owner_id',
		'pet_photo_id',
		'description',
		'created_at',
		'updated_at',
		'deleted_at',
	];

	protected $appends = ['links'];


	public function getLinksAttribute()
	{
		$links = [];

		if (isset($this->attributes['slug'])) {
			$url = url("/petqr-collars/{$this->attributes['slug']}");
			$links['page'] = $url;
			$links['qrcode'] = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl='. urldecode($url);
		}
		
		return $links;
	}


	public function validationRules()
	{
		return [
			'name' => ['required'],
			'owner_id' => ['required'],
		];
	}


	public function petPhoto()
	{
		return $this->hasOne(App\Models\Files::class);
	}


	public function petPhotos()
	{
		return $this->hasMany(App\Models\Files::class);
	}
}
