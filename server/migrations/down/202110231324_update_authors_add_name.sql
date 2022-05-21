BEGIN;

ALTER TABLE authors DROP COLUMN name;

DELETE FROM migrations WHERE name = '202110231324_update_authors_add_name';

COMMIT;