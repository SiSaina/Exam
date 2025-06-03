<?php

namespace App\Models\Basketball;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    /** @use HasFactory<\Database\Factories\CoachFactory> */
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'birth_date',
        'nationality',
        'image_url'
    ];

    public function teamCoaches()
    {
        return $this->hasMany(TeamCoach::class);
    }
}
