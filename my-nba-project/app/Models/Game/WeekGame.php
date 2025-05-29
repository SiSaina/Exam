<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeekGame extends Model
{
    /** @use HasFactory<\Database\Factories\WeekGameFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'game_id',
        'season_id'
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }
}
