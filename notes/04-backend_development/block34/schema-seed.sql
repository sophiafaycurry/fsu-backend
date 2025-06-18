DROP DATABASE IF EXISTS demo;
CREATE DATABASE demo;
\c demo;

-- Create table (schema)
\echo Creating table.
CREATE TABLE dogs (
  id serial PRIMARY KEY,
  dog_name text NOT NULL,
  breed text NOT NULL,
  age integer NOT NULL
);

-- Insert records (seed)
\echo Seeding dog.
INSERT INTO dogs
  (dog_name, breed, age)
VALUES
  ('lincoln', 'mixed rescue', 6)
RETURNING *;