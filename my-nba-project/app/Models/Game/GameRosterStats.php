<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameRosterStats extends Model
{
    /** @use HasFactory<\Database\Factories\GameRosterStatsFactory> */
    use HasFactory;

    protected $table = 'game_roster_stats';
    protected $fillable = [
        'game_id',
        'roster_id',
        'minutes_played',
        'points',
        'rebounds',
        'assists',
        'blocks',
        'steals',
        'turnovers',
        'fouls'
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
    public function roster()
    {
        return $this->belongsTo(Roster::class);
    }
}
