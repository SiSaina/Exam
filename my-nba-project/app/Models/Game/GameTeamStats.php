<?php

namespace App\Models\Game;

use App\Models\Basketball\Team;
use App\Models\Statistic\TeamSeasonStats;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameTeamStats extends Model
{
    /** @use HasFactory<\Database\Factories\GameTeamStatsFactory> */
    use HasFactory;

    protected $fillable = [
        'game_id',
        'team_id',
        'points',
        'rebounds',
        'assists',
        'blocks',
        'steals',
        'turnovers',
        'fouls',
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
    public function teamSeasonStats()
    {
        return $this->hasMany(TeamSeasonStats::class);
    }
}
