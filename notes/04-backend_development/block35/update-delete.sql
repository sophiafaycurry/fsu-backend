DROP DATABASE IF EXISTS demo35;
CREATE DATABASE demo35;
\c demo35;

-- Create table (schema)
\echo Creating table.
CREATE TABLE customers (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  age integer NOT NULL
);

-- Insert records (seed)
\echo Seeding customer.
INSERT INTO customers
  (first_name, last_name, age)
VALUES
  ('foo', 'bar', 99)
RETURNING *;

-- Update records
\echo Change first and last name of customer
UPDATE customers
SET
  first_name = 'wobble',
  last_name = 'thud'
WHERE id = 1 -- Try to update on unique columns to minimize risk
RETURNING *;

-- Delete records
\echo Delete the customer with id 1
DELETE from customers
WHERE id = 1; -- Same as update, try to delete on unique columns