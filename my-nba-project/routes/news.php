<?php
use App\Http\Controllers\News\NewsController;
use Illuminate\Support\Facades\Route;

Route::prefix('news')->name('news.')->group(function () {
    Route::get('/', [NewsController::class, 'home'])->name('home');
    Route::get('/top-news', [NewsController::class, 'topNews'])->name('top');
    Route::get('/nba-award', [NewsController::class, 'nbaAward'])->name('award');
    Route::get('/news-detail', [NewsController::class, 'show'])->name('detail');

    Route::get('/create', [NewsController::class, 'create'])->name('create');
    Route::post('/', [NewsController::class, 'store'])->name('store');
    Route::get('/{id}/edit', [NewsController::class, 'edit'])->name('edit');
    Route::put('/{id}', [NewsController::class, 'update'])->name('update');
    Route::delete('/{id}', [NewsController::class, 'destroy'])->name('destroy');
});