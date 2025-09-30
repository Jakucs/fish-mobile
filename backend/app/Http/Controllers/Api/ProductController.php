<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Requests\ProductRequest;

class ProductController extends ResponseController
{
        public function getProducts()
    {
        $products = Product::with("type")->get();
        return $this->sendResponse(ProductResource::collection($products), "Adat betöltve");
    }


        public function newProduct(ProductRequest $request){
        $request->validated();
        $product = new Product();
        $product->name = $request["name"]; 
        $product->description = $request["description"];
        $product->category = $request["category"];
        $product->price = $request["price"];
        $product->image	= $request["image"];
        $product->stock = $request["stock"];
        $product->save();
        return response(new ProductResource($product), 200);
    }


        public function updateProduct(ProductRequest $request, $id){
        $request->validated();
        $product = Product::find($id);
        $product->name = $request["name"]; 
        $product->description = $request["description"];
        $product->category = $request["category"];
        $product->price = $request["price"];
        $product->image	= $request["image"];
        $product->stock = $request["stock"];
        $product->save();
        return $product;
    }


    	public function destroyProduct ($id){
        $product = Product::find ($id);
        $product->delete();
        return $product;
    }


}
