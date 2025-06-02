<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminGameController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/news', [AdminController::class, 'news'])->name('news');
    Route::get('/schedule', [AdminController::class, 'schedule'])->name('schedule');
    Route::get('/statistic', [AdminController::class, 'statistic'])->name('statistic');
    Route::get('/user', [AdminController::class, 'user'])->name('user');

    Route::get('/game/index', [AdminGameController::class, 'index'])->name('game.index');
    Route::get('/game/create', [AdminGameController::class, 'create'])->name('game.create');
    Route::get('/game/edit/{id}', [AdminGameController::class, 'edit'])->name('game.edit');
});
