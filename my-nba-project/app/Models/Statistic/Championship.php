<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Championship extends Model
{
    /** @use HasFactory<\Database\Factories\ChampionshipFactory> */
    use HasFactory;

    protected $fillable = [
        'season_id',
        'team_id'
    ];

    public function season()
    {
        return $this->belongsTo(Season::class);
    }
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
