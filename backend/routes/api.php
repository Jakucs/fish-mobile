<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\api\TypeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get ("/products", [ProductController::class, "getProducts"]);
Route::get ("/product", [ProductController::class, "getProduct"]);
Route::post ("/newproducts", [ProductController::class, "newProduct"]);
Route::put ("/updateproducts/{id}", [ProductController::class, "updateProduct"]);
Route::delete ("/destroyproducts/{id}", [ProductController::class, "destroyProduct"]);

Route::get ("/types", [TypeController::class, "getTypes"]);
Route::get ("/type", [TypeController::class, "getType"]);
Route::post ("/newtype", [TypeController::class, "newType"]);
Route::put ("/updatetype/{id}", [TypeController::class, "updateType"]);
Route::delete ("/destroytype/{id}", [TypeController::class, "destroyType"]);