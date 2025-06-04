<?php

namespace App\Http\Requests\Basketball;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeamCoachRequest extends FormRequest
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
            'coach_id' => 'required|exists:coaches,id',
            'season_id' => 'required|exists:seasons,id',
            'position' => 'required|string|max:50',
        ];
    }
}
