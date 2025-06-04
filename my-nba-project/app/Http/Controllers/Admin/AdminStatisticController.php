<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Statistic\StoreSeasonRequest;
use App\Models\Statistic\Season;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminStatisticController extends Controller
{
    public function createSeason()
    {
        return Inertia::render('admin/season/create');
    }
    public function storeSeason(StoreSeasonRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        Season::create($validatedData);
        return to_route('admin.statistic')->with('success', 'Season created successfully.');
    }
}
