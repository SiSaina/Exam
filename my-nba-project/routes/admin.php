<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminGameController;
use App\Http\Controllers\Admin\AdminPlayerController;
use App\Http\Controllers\Admin\AdminStatisticController;
use App\Http\Controllers\Admin\AdminTeamController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/game', [AdminController::class, 'game'])->name('game');
    Route::get('/player', [AdminController::class, 'player'])->name('player');
    Route::get('/team', [AdminController::class, 'team'])->name('team');
    Route::get('/news', [AdminController::class, 'news'])->name('news');
    Route::get('/schedule', [AdminController::class, 'schedule'])->name('schedule');
    Route::get('/statistic', [AdminController::class, 'statistic'])->name('statistic');
    Route::get('/user', [AdminController::class, 'user'])->name('user');

    Route::get('/player/create', [AdminPlayerController::class, 'createPlayer'])->name('player.create');
    Route::get('/coach/create', [AdminPlayerController::class, 'createCoach'])->name('coach.create');
    Route::get('/roster/create', [AdminPlayerController::class, 'createRoster'])->name('roster.create');
    Route::get('/team-coach/create', [AdminPlayerController::class, 'createTeamCoach'])->name('team-coach.create');

    Route::post('/player/storePlayer', [AdminPlayerController::class, 'storePlayer'])->name('player.store-player');
    Route::post('/coach/storeCoach', [AdminPlayerController::class, 'storeCoach'])->name('coach.store-coach');
    Route::post('/roster/storeRoster', [AdminPlayerController::class, 'storeRoster'])->name('roster.store-roster');
    Route::post('/team-coach/storeTeamCoach', [AdminPlayerController::class, 'storeTeamCoach'])->name('team-coach.store-team-coach');

    //team
    Route::get('/team/index', [AdminTeamController::class, 'index'])->name('team.index');
    Route::post('/team/storeTeam', [AdminTeamController::class, 'storeTeam'])->name('team.store-team');
    Route::get('/team/create', [AdminTeamController::class, 'createTeam'])->name('team.create');

    //game
    Route::get('/game/create', [AdminGameController::class, 'createGame'])->name('game.create');
    Route::post('/game/storeGame', [AdminGameController::class, 'storeGame'])->name('game.store-game');
    Route::get('/game/startGame/{game}', [AdminGameController::class, 'startGame'])->name('game.start-game');
    Route::delete('/game/delete/{game}', [AdminGameController::class, 'deleteGame'])->name('game.delete-game');

    Route::post('/game/updateRosterStats', [AdminGameController::class, 'updateGameRosterStats'])->name('game.update-roster-stats');

    Route::get('/season/create', [AdminStatisticController::class, 'createSeason'])->name('season.create');
    Route::post('/season/storeSeason', [AdminStatisticController::class, 'storeSeason'])->name('season.store-season');
});
