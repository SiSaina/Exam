<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('user/index', [
            'users' => \App\Models\User::all()
        ]);
    }
    public function create()
    {
        return Inertia::render('user/create');
    }
    
    public function edit()
    {
        return Inertia::render('user/edit');
    }
    public function store(){

    }
}
