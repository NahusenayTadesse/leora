CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(120) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(30) NOT NULL,
	`company` varchar(180),
	`service` varchar(120) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
