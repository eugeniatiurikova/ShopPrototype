<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
include_once 'ProdService.php';
include_once 'CartService.php';

$pdo = require 'db.php';
$prodService = new ProdService($pdo);
$cart = new CartService($pdo);
$products = $prodService->getProducts();

if (isset($_GET['action'])) {
    try {
        $data = json_decode(file_get_contents('php://input'));
        $prodId = null;
        if ($data) $prodId = $data->id;

// add - add 1 product with id to cart
// cnt - count of product with id in cart
// del - delete 1 product with id from cart
// rmv - remove all products with id from cart
// clr - clear cart
// all - get all products in the catalog
// crt - get all products in the cart
// ttl - get total price of products in the cart

        switch ($_GET['action']) {
            case 'add':
            if ($prodId && ($prodId !== '')) {
                    $newProd = $prodService->getProduct($prodId);
                    if ($newProd) {
                        $cart->addProduct($newProd['id']);
                        $response = [
                            'status' => 'success'
                        ];
                    } else {
                        $response = [
                            'status' => 'error',
                            'error_text' => 'no product with such id'
                        ];
                    }
                } else {
                    $response = [
                        'status' => 'error',
                        'error_text' => 'no product id'
                    ];
                }
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'cnt':
                if ($prodId && ($prodId !== '')) {
                    $response = [
                        'status' => 'success',
                        'id' => $prodId,
                        'count' => $cart->getCount($prodId)
                    ];
                } else {
                    $response = [
                        'status' => 'error',
                        'error_text' => 'no product id'
                    ];
                }
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'del':
                if ($prodId && ($prodId !== '')) {
                    $cart->deleteProduct($prodId);
                    $response = [
                        'status' => 'success',
                        'id' => $prodId
                    ];
                } else {
                    $response = [
                        'status' => 'error',
                        'error_text' => 'no product id'
                    ];
                }
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'rmv':
                if ($prodId && ($prodId !== '')) {
                    $cart->removeProduct($prodId);
                    $response = [
                        'status' => 'success',
                        'id' => $prodId
                    ];
                } else {
                    $response = [
                        'status' => 'error',
                        'error_text' => 'no product id'
                    ];
                }
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'clr':
                $cart->clearCart();
                $response = [
                    'status' => 'success',
                    'products' => []
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'all':
                $response = [
                    'status' => 'success',
                    'products' => $products
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'crt':
                $response = [
                    'status' => 'success',
                    'products' => $cart->getProducts()
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;

            case 'ttl':
                $response = [
                    'status' => 'success',
                    'total' => $cart->getPrice()
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                die();
                break;
        }
    } catch (Error | Exception $e) {
        $response = [
            'status' => 'error',
            'error_text' => $e->getMessage()
        ];
        echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        die();
    }

}

