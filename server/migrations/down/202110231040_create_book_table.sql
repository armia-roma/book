BEGIN;

DROP TABLE book;

DELETE FROM migrations WHERE name = '202110231040_create_book_table';

COMMIT;