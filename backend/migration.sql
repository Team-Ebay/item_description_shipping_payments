DROP TABLE if EXISTS itemspecifics;

CREATE TABLE itemspecifics(
    item_id SERIAL PRIMARY KEY,
    item_name TEXT,
    price NUMERIC,
    condition TEXT,
    department TEXT,
    style TEXT,
    theme TEXT,
    pattern TEXT,
    season TEXT,
    handmade TEXT,
    item_width TEXT,
    brand TEXT,
    item_type TEXT,
    material TEXT,
    fabric_type TEXT,
    features TEXT,
    size TEXT,
    item_length TEXT
);
