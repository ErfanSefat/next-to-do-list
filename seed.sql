create table todo(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    todotext VARCHAR(256),
    todotime time
);

insert into todo (todotext, todotime, done) values ('Make dinner', CURRENT_TIME, false);