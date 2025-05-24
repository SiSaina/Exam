<?php

use App\Http\Controllers\Employee\EmployeeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () { return Inertia::render('about'); })->name('about');
Route::get('/contact', function () { return Inertia::render('contact'); })->name('contact');

Route::get('/game', function () { return Inertia::render('game/game'); })->name('game.game');
Route::get('/game/box-score', function () { return Inertia::render('game/box-score'); })->name('game.box-score');

Route::get('/news', function () { return Inertia::render('news/home-news'); })->name('news.home-news');
Route::get('/news/top-news', function () { return Inertia::render('news/top-news'); })->name('news.top-news');
Route::get('/news/nba-award', function () { return Inertia::render('news/nba-award');})->name('news.nba-award');
Route::get('/news/news-detail', function () { return Inertia::render('news/news-detail');})->name('news.news-detail');

Route::get('/statistic', function () { return Inertia::render('statistic'); })->name('statistic');
Route::get('/statistic/home-stats', function () { return Inertia::render('statistic/home-stats'); })->name('statistic.home-stats');
Route::get('/statistic/player-stats', function () { return Inertia::render('statistic/player-stats'); })->name('statistic.player-stats');
Route::get('/statistic/team-stats', function () { return Inertia::render('statistic/team-stats'); })->name('statistic.team-stats');


Route::get('/schedule', function () { return Inertia::render('schedule/schedule'); })->name('schedule.schedule');
Route::get('/schedule/schedule-detail', function () { return Inertia::render('schedule/schedule-detail'); })->name('schedule.schedule-detail');

Route::get('employee', function () { return Inertia::render('employee/index'); })->name('employee.index');

Route::get('admin', function () { return Inertia::render('admin/index'); })->name('admin.index');

Route::get('employee/create', [EmployeeController::class, 'create'])->name('employee.create');
Route::get('employee/{id}/edit', [EmployeeController::class, 'edit'])->name('employee.edit');
