<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamCoach extends Model
{
    /** @use HasFactory<\Database\Factories\TeamCoachFactory> */
    use HasFactory;

    protected $fillable = [
        'team_id',
        'coach_id',
        'season_id',
        'position'
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
    public function coach()
    {
        return $this->belongsTo(Coach::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }
}
