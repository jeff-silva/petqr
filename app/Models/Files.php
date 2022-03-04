<?php

namespace App\Models;

class Files extends \Illuminate\Database\Eloquent\Model
{
	use \Illuminate\Database\Eloquent\Factories\HasFactory;
	use \App\Traits\Model;

	public $fillable = [
		'id',
		'slug',
		'name',
		'folder',
		'size',
		'mime',
		'type',
		'ext',
		'is_text',
		'url',
		'content',
		'created_at',
		'updated_at',
		'deleted_at',
	];

	protected $hidden = [
	    // 'content',
	];


	public function setFolderAttribute($value)
	{
		$this->attributes['folder'] = trim($value, '/');
	}


	public function getFolderAttribute($value)
	{
		return trim($value, '/');
	}


	public function validationRules()
	{
		return [];
	}


	public static function folders()
	{
		$folders = self::select(['folder'])
			->whereNotNull('folder')
			->where('folder', '!=', '')
			->groupBy('folder')
			->get();

		return $folders;
	}


	public static function upload($save)
	{
		$save = array_merge([
			'slug' => '',
			'name' => '',
			'file' => false,
		], $save);

		$file = false;
		$file_contents = false;
		$storage_type = config('app_model_files.storage_type'); // database | file

		// If has file
		if (isset($save['file']) AND !empty($save['file'])) {
			$file = $save['file'];
			$file_contents = file_get_contents($file);
			$file_type = preg_replace('/([a-zA-Z0-9+])\/.+/', '$1', (new \finfo(FILEINFO_MIME))->buffer($file_contents));

			$save['slug'] = \Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) .'-'. uniqid() .'.'. $file->getClientOriginalExtension();
			$save['name'] = $save['name']? $save['name']: pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
			$save['size'] = $file->getSize();
			$save['mime'] = $file->getClientMimeType();
			$save['type'] = $file_type;
			$save['ext'] = $file->getClientOriginalExtension();
			$save['is_text'] = ($save['type']=='text' OR in_array($save['ext'], ['svg']))? 1: null;
			// Salvar arquivo locamente se necessário
		}



		// If no file and has url
		if (!$file AND isset($save['url']) AND !empty($save['url'])) {
			$file_contents = file_get_contents($save['url']);
			$exp = array_map('strtolower', preg_split('/[^a-zA-Z0-9]/', (new \finfo(FILEINFO_MIME))->buffer($file_contents)));

			$save['ext'] = str_replace(['jpeg'], ['jpg'], $exp[1]);
			$save['slug'] = uniqid() .'.'. $save['ext'];
			$save['name'] = $save['name']? $save['name']: $save['url'];
			$save['mime'] = str_replace(['image/svg'], ['image/svg+xml'], "{$exp[0]}/{$exp[1]}");
			$save['type'] = $exp[0];
			$save['is_text'] = ($save['type']=='text' OR in_array($save['ext'], ['svg']))? 1: null;
			$save['size'] = call_user_func(function($url) {
				$ch = curl_init($url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
				curl_setopt($ch, CURLOPT_HEADER, TRUE);
				curl_setopt($ch, CURLOPT_NOBODY, TRUE);
				$data = curl_exec($ch);
				$size = curl_getinfo($ch, CURLINFO_CONTENT_LENGTH_DOWNLOAD);
				curl_close($ch);
				return $size;
			}, $save['url']);
		}


		// Content
		if ($file_contents AND $storage_type=='database') {
			$save['content'] = $file_contents;

			if (!$save['is_text']) {
				$save['content'] = "data:{$save['mime']};base64,". base64_encode($file_contents);
			}
		}


		// Slug
		if ($save['slug']) {
			if ($storage_type=='database') {
				$save['url'] = "/api/files/view/{$save['slug']}";
			}
			else if ($storage_type=='file') {
				$save['url'] = "/uploads/{$save['slug']}";
			}
		}

		$save = self::create($save);

		if ($save->id AND $storage_type=='file' AND $file_contents) {
			\Storage::disk('public')->put($save->slug, $file_contents);
		}

		return $save;
	}


	public function user()
	{
		return $this->belongsTo(App\Models\User::class);
	}


	public function petqrCollar()
	{
		return $this->belongsTo(App\Models\PetqrCollars::class);
	}
}
