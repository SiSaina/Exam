<?php

namespace App\Http\Requests\Basketball;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRosterRequest extends FormRequest
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
            'team_id' => 'required|exists:teams,id',
            'player_id' => 'required|exists:players,id',
            'season_id' => 'required|exists:seasons,id',
            'position' => 'required|string|max:50',
            'jersey_number' => 'required|integer|min:0|max:99',
        ];
    }
}
