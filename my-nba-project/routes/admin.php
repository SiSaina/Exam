<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/game', [AdminController::class, 'game'])->name('game');
    Route::get('/news', [AdminController::class, 'news'])->name('news');
    Route::get('/schedule', [AdminController::class, 'schedule'])->name('schedule');
    Route::get('/statistic', [AdminController::class, 'statistic'])->name('statistic');
    Route::get('/user', [AdminController::class, 'user'])->name('user');
});
