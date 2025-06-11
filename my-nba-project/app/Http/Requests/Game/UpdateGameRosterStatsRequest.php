<?php

namespace App\Http\Requests\Game;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGameRosterStatsRequest extends FormRequest
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
        if (Request()->isMethod('PUT')) {
            return [
                'game_id' => 'required|exists:games,id',
                'roster_id' => 'required|exists:rosters,id',
                'minutes_played' => 'required|integer|min:0',
                'points' => 'required|integer|min:0',
                'rebounds' => 'required|integer|min:0',
                'assists' => 'required|integer|min:0',
                'steals' => 'required|integer|min:0',
                'blocks' => 'required|integer|min:0',
                'turnovers' => 'required|integer|min:0',
                'fouls' => 'required|integer|min:0',
            ];
        } else {
            return [
                'game_id' => 'sometimes|required|exists:games,id',
                'roster_id' => 'sometimes|required|exists:rosters,id',
                'minutes_played' => 'sometimes|required|integer|min:0',
                'points' => 'sometimes|required|integer|min:0',
                'rebounds' => 'sometimes|required|integer|min:0',
                'assists' => 'sometimes|required|integer|min:0',
                'steals' => 'sometimes|required|integer|min:0',
                'blocks' => 'sometimes|required|integer|min:0',
                'turnovers' => 'sometimes|required|integer|min:0',
                'fouls' => 'sometimes|required|integer|min:0',
            ];
        }
    }
}
