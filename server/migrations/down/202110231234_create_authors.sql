BEGIN;

DROP TABLE authors;

DELETE FROM migrations WHERE name = '202110231234_create_authors';

COMMIT;