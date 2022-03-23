CREATE TABLE Aholi(
    aholi_id serial Primary key,
    aholi_name varchar(40) not null,
    aholi_age Int not null
);

insert into
    Aholi(aholi_name, aholi_age)
VALUES
    ('Ali', 18);