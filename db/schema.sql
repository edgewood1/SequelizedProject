CREATE DATABASE projects_db;
USE projects_db;


CREATE TABLE projects
(
id int NOT NULL AUTO_INCREMENT,
project_name varchar(255) NOT NULL,
completed BOOLEAN DEFAULT false,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

