BEGIN;

ALTER TABLE authors 
ADD name VARCHAR(255);

INSERT INTO migrations (name)
VALUES('202110231324_update_authors_add_name');

COMMIT;