<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function game()
    {
        // return Inertia::render('admin/game');
    }
    public function news()
    {
        return Inertia::render('admin/news');
    }
    public function schedule()
    {
        return Inertia::render('admin/schedule');
    }
    public function statistic()
    {
        return Inertia::render('admin/statistic');
    }
    public function user()
    {
        return Inertia::render('admin/user');
    }
}
