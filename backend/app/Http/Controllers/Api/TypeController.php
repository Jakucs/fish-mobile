<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Type;
use App\Http\Requests\TypeRequest;

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

    public function newType(TypeRequest $request){
        $request->validated();
        $type = new Type();
        $type->type = $request["type"];
        $type->save();
        return $type;
    }

    public function updateType(Request $request, $id){
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
