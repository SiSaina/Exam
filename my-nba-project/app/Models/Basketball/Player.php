<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    /** @use HasFactory<\Database\Factories\PlayerFactory> */
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'birth_date',
        'position',
        'birth_date',
        'nationality',
        'height',
        'weight',
        'image_url',
        'college',
        'draft_year',
        'status'
    ];

    public function rosters()
    {
        return $this->hasMany(Roster::class);
    }
}
