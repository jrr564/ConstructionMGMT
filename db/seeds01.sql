
-- Disable foreign checks:
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `mgmt`.`tasks` (`task_description`,  `created_by_user_id`, `assigned_to_user_id`, `project_id`, `due_date`) 
VALUES ('Paint Wall', '1', '2', '1', '2018-03-04 00:00:00');

INSERT INTO `mgmt`.`tasks` (`task_description`,  `created_by_user_id`, `assigned_to_user_id`, `project_id`, `due_date`) 
VALUES ('Install Light Fixture', '2', '3', '2', '2018-03-16 00:00:00');

INSERT INTO `mgmt`.`tasks` (`task_description`,  `created_by_user_id`, `assigned_to_user_id`, `project_id`, `due_date`) 
VALUES ('Provide Close Out Documents', '3', '4', '3', '2018-03-28 00:00:00');


INSERT INTO `mgmt`.`projects` (`project_name`) 
VALUES ('Project 01');

INSERT INTO `mgmt`.`projects` (`project_name`) 
VALUES ('Project 02');

INSERT INTO `mgmt`.`projects` (`project_name`) 
VALUES ('Project 03');


INSERT INTO `mgmt`.`updates` (`user`, `comment`, `status`, `task_id`) 
VALUES ('2', 'wall will be painted on 3/3/3', 'Open', '1');

INSERT INTO `mgmt`.`updates` (`user`, `comment`, `status`, `task_id`) 
VALUES ('3', 'ok', 'Open', '2');

INSERT INTO `mgmt`.`updates` (`user`, `comment`, `status`, `task_id`) 
VALUES ('4', 'No', 'Open', '3');



INSERT INTO `mgmt`.`users` (`username`, `password`, `email`, `role`) 
VALUES ('matt', 'matt', 'matt@email.com', 'Programmer');

INSERT INTO `mgmt`.`users` (`username`, `password`, `email`, `role`) 
VALUES ('chen', 'chen', 'chen@email.com', 'Programmer');

INSERT INTO `mgmt`.`users` (`username`, `password`, `email`, `role`) 
VALUES ('jon', 'jon', 'jon@email.com', 'Programmer');

INSERT INTO `mgmt`.`users` (`username`, `password`, `email`, `role`)  
VALUES ('diego', 'diego', 'diego@email.com', 'Programmer');


-- Enable foreign checks:
SET FOREIGN_KEY_CHECKS = 1;