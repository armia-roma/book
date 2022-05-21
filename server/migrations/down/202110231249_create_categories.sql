BEGIN;

DROP TABLE categories;

DELETE FROM migrations WHERE name = '202110231249_create_categories';

COMMIT;