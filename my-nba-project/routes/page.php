<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/game', function () {
    return Inertia::render('game');
})->name('game');

Route::get('/new', function () {
    return Inertia::render('new');
})->name('new');

Route::get('/player', function () {
    return Inertia::render('player');
})->name('player');

Route::get('/schedule', function () {
    return Inertia::render('schedule');
})->name('schedule');

Route::get('/team', function () {
    return Inertia::render('team');
})->name('team');
