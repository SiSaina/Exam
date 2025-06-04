<?php

namespace App\Http\Requests\Statistic;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeamSeasonStatsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'season_id' => 'required|exists:seasons,id',
            'game_team_stats_id' => 'required|exists:game_team_stats,id',
            'wins' => 'required|integer|min:0',
            'losses' => 'required|integer|min:0',
        ];
    }
}
