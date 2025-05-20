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

Route::get('/statistic', function () {
    return Inertia::render('statistic');
})->name('statistic');

Route::get('/schedule', function () {
    return Inertia::render('schedule');
})->name('schedule');
