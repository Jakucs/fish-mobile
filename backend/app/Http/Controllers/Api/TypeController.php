<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function getTypes(){
        $types = Type::all();
        return $types;
    }

    public function getType(Request $request){
        $type = Type::where( "type", $request["type"])->first();
        return $type;
    }

    public function newType(Request $request){
        $type = new Type();
        $type->type = $request["type"];
        $type->save();
        return $type;
    }

    public function modifyType(Request $request, $id){
        $type=Type::find($id);
        $type->type = $request["type"];
        $type->update();
        return $type;
    }
    
    public function destroyType(Request $request){
        $type = Type::where("type", $request["type"])->first();
        $type->delete();
        return $type;
    }
}
