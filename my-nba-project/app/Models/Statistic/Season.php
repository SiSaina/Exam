<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    /** @use HasFactory<\Database\Factories\SeasonFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'start_date',
        'end_date'
    ];

    public function championships()
    {
        return $this->hasMany(Championship::class);
    }
    public function seasonAwards()
    {
        return $this->hasMany(SeasonAward::class);
    }
    public function teamSeasonStats()
    {
        return $this->hasMany(TeamSeasonStats::class);
    }
    public function weekGames()
    {
        return $this->hasMany(WeekGame::class);
    }
    public function rosters()
    {
        return $this->hasMany(Roster::class);
    }
    public function teamCoaches()
    {
        return $this->hasMany(TeamCoach::class);
    }
}
