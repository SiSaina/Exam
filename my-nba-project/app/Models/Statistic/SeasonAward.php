<?php

namespace App\Models\Statistic;

use App\Models\Basketball\Roster;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeasonAward extends Model
{
    /** @use HasFactory<\Database\Factories\SeasonAwardFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'roster_id'
    ];

    public function roster()
    {
        return $this->belongsTo(Roster::class);
    }
}
