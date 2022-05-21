BEGIN;

DROP TABLE countries;

DELETE FROM migrations WHERE name = '202110231258_create_countries';

COMMIT;