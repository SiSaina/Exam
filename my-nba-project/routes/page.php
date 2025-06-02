<?php

use App\Http\Controllers\Employee\EmployeeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/about', 'about')->name('about');
Route::inertia('/contact', 'contact')->name('contact');

Route::get('/game', function () { return Inertia::render('game/game'); })->name('game.game');
Route::get('/game/box-score', function () { return Inertia::render('game/box-score'); })->name('game.box-score');

Route::get('/statistic', function () { return Inertia::render('statistic'); })->name('statistic');
Route::get('/statistic/home-stats', function () { return Inertia::render('statistic/home-stats'); })->name('statistic.home-stats');
Route::get('/statistic/player-stats', function () { return Inertia::render('statistic/player-stats'); })->name('statistic.player-stats');
Route::get('/statistic/team-stats', function () { return Inertia::render('statistic/team-stats'); })->name('statistic.team-stats');


Route::get('/schedule', function () { return Inertia::render('schedule/schedule'); })->name('schedule.schedule');
Route::get('/schedule/schedule-detail', function () { return Inertia::render('schedule/schedule-detail'); })->name('schedule.schedule-detail');

Route::get('user', function () { return Inertia::render('user/index'); })->name('user.index');

Route::get('admin', function () { return Inertia::render('admin/index'); })->name('admin.index');

Route::get('user/create', [UserController::class, 'create'])->name('user.create');
Route::get('user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
