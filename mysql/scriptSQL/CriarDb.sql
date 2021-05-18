USE nodedb;

CREATE TABLE people (
    id int(3) auto_increment primary key,
    nome varchar(100) not null
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;
