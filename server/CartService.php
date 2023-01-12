<?php

class CartService
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getPrice(): int
    {
        $statement = $this->pdo->prepare(
            'SELECT SUM(price * cart.count) AS total_price
                    FROM products JOIN cart
                    ON cart.product_id = products.id'
        );
        $statement->execute([]);
        $totalPrice = $statement->fetch(PDO::FETCH_ASSOC);
        return $totalPrice['total_price'];
    }

    public function addProduct(int $id): void
    {
        $statement = $this->pdo->prepare(
            'INSERT INTO cart (product_id, count)
                    VALUES (:product_id, :count)
                    ON CONFLICT (product_id) DO UPDATE SET count = count + 1'
        );
        $statement->execute([
            ':product_id' => $id,
            ':count' => 1
        ]);
    }

    public function getCount(int $id): int
    {
            $statement = $this->pdo->prepare(
                'SELECT count FROM cart WHERE product_id = :product_id'
            );
            $statement->execute([
                ':product_id' => $id
            ]);
            $result = $statement->fetch(PDO::FETCH_ASSOC);
            if ($result) return $result['count'];
                else return 0;
    }


    public function removeProduct(int $id): void
    {
        $statement = $this->pdo->prepare(
            'DELETE FROM cart WHERE product_id = :product_id'
        );
        $statement->execute([
            ':product_id' => $id
        ]);
    }

    public function clearCart(): void
    {
        $statement = $this->pdo->prepare(
            'DELETE FROM cart'
        );
        $statement->execute([]);
    }

    public function deleteProduct(int $id): void
    {
        try {
            $count = $this->getCount($id);
            if ($count > 1) {
                $statement = $this->pdo->prepare(
                    'UPDATE cart SET count = count - 1 WHERE product_id = :product_id'
                );
                $statement->execute([
                    ':product_id' => $id
                ]);
            } else {
               $this->removeProduct($id);
            }
        } catch (Throwable) {
            $this->removeProduct($id);
        }
    }

    public function getProducts(): array
    {
        $statement = $this->pdo->prepare(
            'SELECT * FROM products 
                    JOIN cart 
                    ON cart.product_id = products.id'
        );
        $statement->execute([]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }


}