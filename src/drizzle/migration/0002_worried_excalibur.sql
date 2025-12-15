ALTER TABLE `applicants` MODIFY COLUMN `date_of_birth` date;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('admin','applicant','employer') NOT NULL DEFAULT 'applicant';