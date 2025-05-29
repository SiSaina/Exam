<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamSeasonStats extends Model
{
    /** @use HasFactory<\Database\Factories\TeamSeasonStatsFactory> */
    use HasFactory;

    protected $fillable = [
        'game_team_stats_id',
        'season_id',
        'wins',
        'losses'
    ];

    public function gameTeamStats()
    {
        return $this->belongsTo(GameTeamStats::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }
}
