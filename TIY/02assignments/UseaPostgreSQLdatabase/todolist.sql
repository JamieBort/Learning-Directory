-- Create database
create database todoList;

-- Create table with id, title, details, priority, created_at, and completed_at as fields. And serial primary key, not optional string up to 255 characters, optinal text, not optional integer with a default of 1, not optional date and time as the data types repsectively.
create table todos (id integer, title varchar not null, details varchar, priority integer not null, created_at timestamp not null, completed_at timestamp);


-- Write INSERT statements to insert five todos into this table, with one of them completed.
INSERT INTO todos (id, title, details, priority, created_at, completed_at)
VALUES ('Happy Birthday', 'old version', 1, 2015-08-07 05:00:01),
       ('The Old Man and the Sea', 'new version', 3, 2015-09-07 05:00:01),
       ('Into The Wild', 'old version', 1, 2015-12-07 05:00:01),
       ('Star Wars', 'old version', 2, 2015-12-07 05:00:01, 2015-12-10 05:00:01),
       ('Finish this project', 'I like data', 1, now(), 2017-08-07 07:03:56);


-- Write a SELECT statement to find all incomplete todos.
SELECT  *
FROM todos
WHERE completed_at IS null;

--Write a SELECT statement to find all todos with a priority above 1.
SELECT *
FROM todos
WHERE priority > 1;

-- Write an UPDATE statement to complete one todo by its id. Your ids may differ, so you will choose the id to up
UPDATE todos
SET  completed_at = timestamp now()
WHERE id = 1;

-- Write a DELETE statement to delete all completed todos
DELETE
FROM todos
WHERE completed_at IS not null;


-- More complex toDo Statements

-- insert into todos and create 20 new items
INSERT INTO todos (id, title, details, priority, created_at, completed_at)
VALUES ('have car serviced', 'oil change', 2, now()),
       ('backup hard drive', 'backup hard drive', 1, now(), 2017-10-09),
       ('enroll in classes', 'log online', 3, now(), 2017-09-29),
       ('pay utility bill', 'pay water bill', 2, now()),
       ('pay utility bill', 'pay power bill', 3, now()),
       ('pay utility bill', 'pay gas bill', 2, now(), 2017-08-28),
       ('meet grandma', 'meet grandma for lunch', 1, now(), 2017-07-28),
       ('pick up gift', 'pick up gift for Jim', 1, now()),
       ('exercise', 'go to gym', 2, now()),
       ('exercise', 'go running', 3, now(), 2017-12-02),
       ('exercise', 'go swimming', 2, now()),
       ('exercise', 'meet with Pam at gym', 1, now(), 2017-11-07),
       ('exercise', 'ride bike', 2, now()));


-- find all incomplete todos with priority 3.
SELECT *
FROM todos
WHERE completed_at IS NULL AND priority = 3;

-- find the number of incomplete todos by priority.
SELECT count(*)
FROM todos
WHERE completed_at IS NULL
GROUP BY priority

-- find the number of todos by priority created in the last 30 days
SELECT count(*)
FROM todos
WHERE created_at > (Current_date - interval '30 days')
GROUP BY priority;


-- find the next todo you should work on. This is the todo with the highest priority that was created first.
SELECT *
FROM todos
WHERE created_at = (select min(created_at)
FROM todos
WHERE priority = 1
AND completed_at IS NULL);


-- NOTE: In order to backup database type the following command:

-- from lesson
-- pg_dump --no-owner [dbname] > dump.sql

-- slacked from lexi:
-- pg_dump --no-owner yourDataBaseName > yourFileName.sql
