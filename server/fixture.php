<?php

$pdo = new PDO('sqlite:database.db', null, null, [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);

$query = 'CREATE TABLE products (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       title TEXT NOT NULL UNIQUE,
                       description TEXT NOT NULL,
                       img TEXT NOT NULL,
                       price INTEGER
                      )';
$statement = $pdo->query($query);

$query = 'CREATE TABLE cart (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       product_id INTEGER NOT NULL UNIQUE,
                       count INTEGER NOT NULL
)';
$statement = $pdo->query($query);



