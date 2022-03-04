<?php

namespace App\Models;

class PetqrCollars extends \Illuminate\Database\Eloquent\Model
{
	use \Illuminate\Database\Eloquent\Factories\HasFactory;
	use \App\Traits\Model;

	public $fillable = ['id', 'name', 'owner_id', 'pet_photo_id', 'description', 'created_at', 'updated_at', 'deleted_at'];


	public function petPhoto()
	{
		return $this->hasOne(App\Models\Files::class);
	}


	public function petPhotos()
	{
		return $this->hasMany(App\Models\Files::class);
	}
}
