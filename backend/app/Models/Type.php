<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public function type()
    {
        return $this->hasMany(Product::class);
    }
}
