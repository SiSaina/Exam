<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminPlayerController extends Controller
{
    public function index()
    {
        return inertia('admin/player/index');
    }

    public function create()
    {
        return inertia('admin/player/create');
    }

    public function edit($id)
    {
        return inertia('admin/player/edit', ['id' => $id]);
    }

    public function show($id)
    {
        return inertia('admin/player/show', ['id' => $id]);
    }
}
