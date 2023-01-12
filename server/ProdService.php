<?php

class ProdService
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getProducts(): array | bool
    {
        $statement = $this->pdo->prepare(
            'SELECT * FROM products'
        );
        $statement->execute([]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProduct(int $id): array | bool
    {
        $statement = $this->pdo->prepare(
            'SELECT * FROM products WHERE id = :id'
        );
        $statement->execute([
            ':id' => $id
        ]);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }

}