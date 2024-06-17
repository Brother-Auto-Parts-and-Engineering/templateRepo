CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` varchar(255),
  `firstname` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `title` varchar(255),
  `isVerified` bool,
  `created_at` timestamp
);

CREATE TABLE `course` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `course_name` varchar(255),
  `user_id` integer,
  `price` varchar(255),
  `description` varchar(255),
  `image` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `chapter` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `course_id` integer,
  `chapter_name` varchar(255),
  `type` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `choiceChapter` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `chapter_id` integer,
  `question` varchar(255),
  `option1` varchar(255),
  `option2` varchar(255),
  `option3` varchar(255),
  `option4` varchar(255),
  `correct_option` varchar(255),
  `modified_at` timestamp
);

CREATE TABLE `recordGameChapter` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `chapter_id` integer,
  `board_initial_setup` varchar(255),
  `board_move` varchar(255),
  `description` varchar(255),
  `modified_at` timestamp
);

CREATE TABLE `predictGameChapter` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `chapter_id` integer,
  `board_initial_setup` varchar(255),
  `board_move` varchar(255),
  `description` varchar(255),
  `modified_at` timestamp
);

CREATE TABLE `introChapter` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `chapter_id` integer,
  `image` varchar(255),
  `description` varchar(255),
  `modified_at` timestamp
);

CREATE TABLE `comment` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer,
  `course_id` integer,
  `comment_text` varchar(255),
  `created_at` timestamp
);

ALTER TABLE `course` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `chapter` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`id`);

ALTER TABLE `choiceChapter` ADD FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`id`);

ALTER TABLE `recordGameChapter` ADD FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`id`);

ALTER TABLE `introChapter` ADD FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`id`);

ALTER TABLE `predictGameChapter` ADD FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`id`);
