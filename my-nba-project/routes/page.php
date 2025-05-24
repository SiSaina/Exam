<?php

use App\Http\Controllers\Employee\EmployeeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/game/game', function () {
    return Inertia::render('game/game');
})->name('game/game');
Route::get('/game/boxScore', function () {
    return Inertia::render('game/boxScore');
})->name('game/boxScore');


Route::get('/news/homeNews', function () {
    return Inertia::render('news/homeNews');
})->name('news.homeNews');
Route::get('/news/topNews', function () {
    return Inertia::render('news/topNews');
})->name('news.topNews');
Route::get('/news/nbaAward', function () {
    return Inertia::render('news/nbaAward');
})->name('news.nbaAward');
Route::get('/news/newsDetail', function () {
    return Inertia::render('news/newsDetail');
})->name('news.newsDetail');


Route::get('/statistic', function () {
    return Inertia::render('statistic');
})->name('statistic');
Route::get('/statistic/homeStat', function () {
    return Inertia::render('statistic/homeStat');
})->name('statistic.homeStat');
Route::get('/statistic/playerStat', function () {
    return Inertia::render('statistic/playerStat');
})->name('statistic.playerStat');
Route::get('/statistic/teamStat', function () {
    return Inertia::render('statistic/teamStat');
})->name('statistic.teamStat');


Route::get('/schedule', function () {
    return Inertia::render('schedule');
})->name('schedule');

Route::get('employee', function () {
    return Inertia::render('employee/index');
})->name('employee.index');

Route::get('admin', function () {
    return Inertia::render('admin/index');
})->name('admin.index');

Route::get('employee/create', [EmployeeController::class, 'create'])->name('employee.create');
Route::get('employee/{id}/edit', [EmployeeController::class, 'edit'])->name('employee.edit');

