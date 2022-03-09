<?php

$database = env('DB_DATABASE');

\DB::select('SET FOREIGN_KEY_CHECKS=0;')
\DB::select('SET GLOBAL FOREIGN_KEY_CHECKS=0;')


// Create table failed_jobs
\DB::select("CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column failed_jobs.id
\Schema::hasColumn('failed_jobs', 'id')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column failed_jobs.uuid
\Schema::hasColumn('failed_jobs', 'uuid')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.connection
\Schema::hasColumn('failed_jobs', 'connection')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `connection` text COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `connection` text COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.queue
\Schema::hasColumn('failed_jobs', 'queue')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `queue` text COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `queue` text COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.payload
\Schema::hasColumn('failed_jobs', 'payload')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.exception
\Schema::hasColumn('failed_jobs', 'exception')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column failed_jobs.failed_at
\Schema::hasColumn('failed_jobs', 'failed_at')?
	\DB::select("ALTER TABLE failed_jobs MODIFY COLUMN `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP"):
	\DB::select("ALTER TABLE failed_jobs ADD COLUMN `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP");


// Create table files
\DB::select("CREATE TABLE IF NOT EXISTS `files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `mime` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ext` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_text` int(1) DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column files.id
\Schema::hasColumn('files', 'id')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE files ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column files.slug
\Schema::hasColumn('files', 'slug')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.name
\Schema::hasColumn('files', 'name')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.folder
\Schema::hasColumn('files', 'folder')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.size
\Schema::hasColumn('files', 'size')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `size` int(11) DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `size` int(11) DEFAULT NULL");


// Create/Update column files.mime
\Schema::hasColumn('files', 'mime')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `mime` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `mime` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.type
\Schema::hasColumn('files', 'type')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `type` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.ext
\Schema::hasColumn('files', 'ext')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `ext` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `ext` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.is_text
\Schema::hasColumn('files', 'is_text')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `is_text` int(1) DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `is_text` int(1) DEFAULT NULL");


// Create/Update column files.url
\Schema::hasColumn('files', 'url')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column files.content
\Schema::hasColumn('files', 'content')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `content` longtext COLLATE utf8_unicode_ci"):
	\DB::select("ALTER TABLE files ADD COLUMN `content` longtext COLLATE utf8_unicode_ci");


// Create/Update column files.created_at
\Schema::hasColumn('files', 'created_at')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create/Update column files.updated_at
\Schema::hasColumn('files', 'updated_at')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create/Update column files.deleted_at
\Schema::hasColumn('files', 'deleted_at')?
	\DB::select("ALTER TABLE files MODIFY COLUMN `deleted_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE files ADD COLUMN `deleted_at` datetime DEFAULT NULL");


// Create table migrations
\DB::select("CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column migrations.id
\Schema::hasColumn('migrations', 'id')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column migrations.migration
\Schema::hasColumn('migrations', 'migration')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column migrations.batch
\Schema::hasColumn('migrations', 'batch')?
	\DB::select("ALTER TABLE migrations MODIFY COLUMN `batch` int(11) NOT NULL"):
	\DB::select("ALTER TABLE migrations ADD COLUMN `batch` int(11) NOT NULL");


// Create table pages
\DB::select("CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `owner` bigint(20) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pages_users` (`owner`),
  CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column pages.id
\Schema::hasColumn('pages', 'id')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `id` int(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE pages ADD COLUMN `id` int(20) unsigned NOT NULL AUTO_INCREMENT");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.name
\Schema::hasColumn('pages', 'name')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.slug
\Schema::hasColumn('pages', 'slug')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.content
\Schema::hasColumn('pages', 'content')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `content` longtext COLLATE utf8_unicode_ci"):
	\DB::select("ALTER TABLE pages ADD COLUMN `content` longtext COLLATE utf8_unicode_ci");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.owner
\Schema::hasColumn('pages', 'owner')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `owner` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `owner` bigint(20) unsigned DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.created_at
\Schema::hasColumn('pages', 'created_at')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.updated_at
\Schema::hasColumn('pages', 'updated_at')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column pages.deleted_at
\Schema::hasColumn('pages', 'deleted_at')?
	\DB::select("ALTER TABLE pages MODIFY COLUMN `deleted_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE pages ADD COLUMN `deleted_at` datetime DEFAULT NULL");


// Create fk FK_pages_users
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_pages_users'"))->first()) {
	\DB::select("ALTER TABLE `pages` ADD CONSTRAINT `FK_pages_users` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create table password_resets
\DB::select("CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column password_resets.email
\Schema::hasColumn('password_resets', 'email')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column password_resets.token
\Schema::hasColumn('password_resets', 'token')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column password_resets.created_at
\Schema::hasColumn('password_resets', 'created_at')?
	\DB::select("ALTER TABLE password_resets MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE password_resets ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create table personal_access_tokens
\DB::select("CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column personal_access_tokens.id
\Schema::hasColumn('personal_access_tokens', 'id')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column personal_access_tokens.tokenable_type
\Schema::hasColumn('personal_access_tokens', 'tokenable_type')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.tokenable_id
\Schema::hasColumn('personal_access_tokens', 'tokenable_id')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `tokenable_id` bigint(20) unsigned NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `tokenable_id` bigint(20) unsigned NOT NULL");


// Create/Update column personal_access_tokens.name
\Schema::hasColumn('personal_access_tokens', 'name')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.token
\Schema::hasColumn('personal_access_tokens', 'token')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create/Update column personal_access_tokens.abilities
\Schema::hasColumn('personal_access_tokens', 'abilities')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `abilities` text COLLATE utf8mb4_unicode_ci"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `abilities` text COLLATE utf8mb4_unicode_ci");


// Create/Update column personal_access_tokens.last_used_at
\Schema::hasColumn('personal_access_tokens', 'last_used_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `last_used_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `last_used_at` timestamp NULL DEFAULT NULL");


// Create/Update column personal_access_tokens.created_at
\Schema::hasColumn('personal_access_tokens', 'created_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create/Update column personal_access_tokens.updated_at
\Schema::hasColumn('personal_access_tokens', 'updated_at')?
	\DB::select("ALTER TABLE personal_access_tokens MODIFY COLUMN `updated_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE personal_access_tokens ADD COLUMN `updated_at` timestamp NULL DEFAULT NULL");


// Create table petqr_collars
\DB::select("CREATE TABLE IF NOT EXISTS `petqr_collars` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `owner_id` bigint(20) unsigned DEFAULT NULL,
  `pet_photo_id` bigint(20) unsigned DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_petqr_collars_files` (`pet_photo_id`),
  CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column petqr_collars.id
\Schema::hasColumn('petqr_collars', 'id')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.slug
\Schema::hasColumn('petqr_collars', 'slug')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.name
\Schema::hasColumn('petqr_collars', 'name')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.owner_id
\Schema::hasColumn('petqr_collars', 'owner_id')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `owner_id` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `owner_id` bigint(20) unsigned DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.pet_photo_id
\Schema::hasColumn('petqr_collars', 'pet_photo_id')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `pet_photo_id` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `pet_photo_id` bigint(20) unsigned DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.description
\Schema::hasColumn('petqr_collars', 'description')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `description` text COLLATE utf8_unicode_ci"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `description` text COLLATE utf8_unicode_ci");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.created_at
\Schema::hasColumn('petqr_collars', 'created_at')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.updated_at
\Schema::hasColumn('petqr_collars', 'updated_at')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create/Update column petqr_collars.deleted_at
\Schema::hasColumn('petqr_collars', 'deleted_at')?
	\DB::select("ALTER TABLE petqr_collars MODIFY COLUMN `deleted_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE petqr_collars ADD COLUMN `deleted_at` datetime DEFAULT NULL");


// Create fk FK_petqr_collars_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_petqr_collars_files'"))->first()) {
	\DB::select("ALTER TABLE `petqr_collars` ADD CONSTRAINT `FK_petqr_collars_files` FOREIGN KEY (`pet_photo_id`) REFERENCES `files` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
}


// Create table settings
\DB::select("CREATE TABLE IF NOT EXISTS `settings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


// Create/Update column settings.id
\Schema::hasColumn('settings', 'id')?
	\DB::select("ALTER TABLE settings MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE settings ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create/Update column settings.name
\Schema::hasColumn('settings', 'name')?
	\DB::select("ALTER TABLE settings MODIFY COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE settings ADD COLUMN `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL");


// Create/Update column settings.value
\Schema::hasColumn('settings', 'value')?
	\DB::select("ALTER TABLE settings MODIFY COLUMN `value` text COLLATE utf8_unicode_ci"):
	\DB::select("ALTER TABLE settings ADD COLUMN `value` text COLLATE utf8_unicode_ci");


// Create/Update column settings.created_at
\Schema::hasColumn('settings', 'created_at')?
	\DB::select("ALTER TABLE settings MODIFY COLUMN `created_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE settings ADD COLUMN `created_at` datetime DEFAULT NULL");


// Create/Update column settings.updated_at
\Schema::hasColumn('settings', 'updated_at')?
	\DB::select("ALTER TABLE settings MODIFY COLUMN `updated_at` datetime DEFAULT NULL"):
	\DB::select("ALTER TABLE settings ADD COLUMN `updated_at` datetime DEFAULT NULL");


// Create table users
\DB::select("CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_id` bigint(20) unsigned DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `FK_users_files` (`photo_id`),
  CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");


// Create/Update column users.id
\Schema::hasColumn('users', 'id')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT"):
	\DB::select("ALTER TABLE users ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.name
\Schema::hasColumn('users', 'name')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.email
\Schema::hasColumn('users', 'email')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.photo_id
\Schema::hasColumn('users', 'photo_id')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `photo_id` bigint(20) unsigned DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `photo_id` bigint(20) unsigned DEFAULT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.email_verified_at
\Schema::hasColumn('users', 'email_verified_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `email_verified_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `email_verified_at` timestamp NULL DEFAULT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.password
\Schema::hasColumn('users', 'password')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.remember_token
\Schema::hasColumn('users', 'remember_token')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.created_at
\Schema::hasColumn('users', 'created_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `created_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `created_at` timestamp NULL DEFAULT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}


// Create/Update column users.updated_at
\Schema::hasColumn('users', 'updated_at')?
	\DB::select("ALTER TABLE users MODIFY COLUMN `updated_at` timestamp NULL DEFAULT NULL"):
	\DB::select("ALTER TABLE users ADD COLUMN `updated_at` timestamp NULL DEFAULT NULL");


// Create fk FK_users_files
if (! collect(\DB::select("SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA='{$database}' AND CONSTRAINT_NAME='FK_users_files'"))->first()) {
	\DB::select("ALTER TABLE `users` ADD CONSTRAINT `FK_users_files` FOREIGN KEY (`photo_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE SET NULL");
}