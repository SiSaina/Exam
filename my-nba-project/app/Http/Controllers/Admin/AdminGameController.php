<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminGameController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/game/index');
    }

    public function create()
    {
        return Inertia::render('admin/game/create');
    }

    public function edit($id)
    {
        return Inertia::render('admin/game/edit', ['id' => $id]);
    }

    public function show($id)
    {
        return Inertia::render('admin/game/show', ['id' => $id]);
    }
}
