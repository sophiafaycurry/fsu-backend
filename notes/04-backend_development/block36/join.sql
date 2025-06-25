--  psql -f join.sql

DROP DATABASE IF EXISTS demo36;
CREATE DATABASE demo36;
\c demo36;

CREATE TABLE teams (
  id serial PRIMARY KEY,
  name text UNIQUE NOT NULL
);

CREATE TABLE puppies (
  id serial PRIMARY KEY,
  name text NOT NULL,
  team_id int REFERENCES teams(id) ON DELETE CASCADE
);

INSERT INTO teams
  (name)
VALUES
  ('Fluff'),
  ('Ruff'),
  ('Bark'),
  ('Squeak');

INSERT INTO puppies
  (name, team_id)
VALUES
  ('Logan', 1),
  ('Chase', 1),
  ('Lincoln', 1),
  ('Boots', 2),
  ('Filbert', 2),
  ('Gina', NULL),
  ('Huck', 3),
  ('Kenny', NULL);

\echo 'Get all puppies on team 1'
SELECT * FROM puppies WHERE team_id = 1;

-- inner join
\echo 'inner join'
\echo 'Get all puppies on a team with team name'
SELECT
  puppies.*,
  teams.name AS team_name
FROM
  puppies
  JOIN teams ON teams.id = puppies.team_id;

-- left outer join
\echo 'left outer join'
\echo 'Get all puppies, and teams if applicable'
SELECT
  puppies.*,
  teams.name AS team_name
FROM
  puppies
  LEFT JOIN teams ON teams.id = puppies.team_id;

-- right outer join
\echo 'right outer join'
\echo 'Get all teams, and puppies if applicable'
SELECT
  puppies.*,
  teams.name AS team_name
FROM
  puppies
  RIGHT JOIN teams ON teams.id = puppies.team_id;

-- full outer join
\echo 'full outer join'
\echo 'Get all puppies and teams, even if no relation'
SELECT
  puppies.*,
  teams.name AS team_name
FROM
  puppies
  FULL JOIN teams ON teams.id = puppies.team_id;