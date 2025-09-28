<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\api\TypeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get ("/products", [ProductController::class, "getProducts"]);
Route::post ("/newproducts", [ProductController::class, "newProduct"]);
Route::put ("/updateproducts/{id}", [ProductController::class, "updateProduct"]);
Route::delete ("/destroyproducts/{id}", [ProductController::class, "destroyProduct"]);