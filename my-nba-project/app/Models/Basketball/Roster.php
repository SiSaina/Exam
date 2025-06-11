<?php

namespace App\Models\Basketball;

use App\Models\Game\GameRosterStats;
use App\Models\Statistic\Season;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roster extends Model
{
    /** @use HasFactory<\Database\Factories\RosterFactory> */
    use HasFactory;

    protected $fillable = [
        'player_id',
        'team_id',
        'season_id',
        'jersey_number',
        'position'
    ];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }
    public function gameRosterStats()
    {
        return $this->hasMany(GameRosterStats::class);
    }
}
