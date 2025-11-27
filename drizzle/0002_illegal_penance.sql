CREATE TABLE `blog_post` (
	`id` varchar(255) NOT NULL,
	`slug` varchar(200) NOT NULL,
	`title` varchar(200) NOT NULL,
	`excerpt` varchar(500),
	`content` text NOT NULL,
	`author_id` varchar(255),
	`is_published` int NOT NULL DEFAULT 0,
	`published_at` datetime,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `blog_post_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_post_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` varchar(255) NOT NULL,
	`category` int NOT NULL,
	`slug` varchar(200) NOT NULL,
	`title` varchar(200) NOT NULL,
	`short_description` varchar(400),
	`description` text NOT NULL,
	`live_url` varchar(500),
	`featured` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `project_id` PRIMARY KEY(`id`),
	CONSTRAINT `project_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `project_category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`description` varchar(500),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `project_category_id` PRIMARY KEY(`id`),
	CONSTRAINT `project_category_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `project_gallery` (
	`id` int AUTO_INCREMENT NOT NULL,
	`project_id` varchar(255) NOT NULL,
	`url` varchar(1000) NOT NULL,
	`alt_text` varchar(255),
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `project_gallery_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `blog_post` ADD CONSTRAINT `blog_post_author_id_user_id_fk` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project` ADD CONSTRAINT `project_category_project_category_id_fk` FOREIGN KEY (`category`) REFERENCES `project_category`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project_gallery` ADD CONSTRAINT `project_gallery_project_id_project_id_fk` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON DELETE no action ON UPDATE no action;