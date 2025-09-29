<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\Product as ProductResource;

class ProductController extends ResponseController
{
        public function getProducts()
    {
        $products = Product::with("type")->get();
        return ProductResource::collection($products);
    }


        public function newProduct(Request $request){
        $product = new Product();
        $product->name = $request["name"]; 
        $product->description = $request["description"];
        $product->category = $request["category"];
        $product->price = $request["price"];
        $product->image	= $request["image"];
        $product->stock = $request["stock"];
        $product->save();
        return $product;
    }


        public function updateProduct(Request $request, $id){
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
