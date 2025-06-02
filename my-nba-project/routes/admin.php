<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminGameController;
use App\Http\Controllers\Admin\AdminPlayerController;
use App\Http\Controllers\Admin\AdminTeamController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/news', [AdminController::class, 'news'])->name('news');
    Route::get('/schedule', [AdminController::class, 'schedule'])->name('schedule');
    Route::get('/statistic', [AdminController::class, 'statistic'])->name('statistic');
    Route::get('/user', [AdminController::class, 'user'])->name('user');

    Route::get('/player/index', [AdminPlayerController::class, 'index'])->name('player.index');
    Route::get('/player/create-player', [AdminPlayerController::class, 'createPlayer'])->name('player.create-player');
    Route::get('/player/create-roster', [AdminPlayerController::class, 'createRoster'])->name('player.create-roster');
    Route::get('/player/create-coach', [AdminPlayerController::class, 'createCoach'])->name('player.create-coach');
    Route::get('/player/create-team-coach', [AdminPlayerController::class, 'createTeamCoach'])->name('player.create-team-coach');
    
    Route::get('/team/index', [AdminTeamController::class, 'index'])->name('team.index');

    Route::get('/game/index', [AdminGameController::class, 'index'])->name('game.index');
    Route::get('/game/create', [AdminGameController::class, 'create'])->name('game.create');
    Route::get('/game/edit/{id}', [AdminGameController::class, 'edit'])->name('game.edit');
});
