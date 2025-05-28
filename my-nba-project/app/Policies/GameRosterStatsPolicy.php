<?php

namespace App\Policies;

use App\Models\GameRosterStats;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class GameRosterStatsPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, GameRosterStats $gameRosterStats): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, GameRosterStats $gameRosterStats): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, GameRosterStats $gameRosterStats): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, GameRosterStats $gameRosterStats): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, GameRosterStats $gameRosterStats): bool
    {
        return false;
    }
}
