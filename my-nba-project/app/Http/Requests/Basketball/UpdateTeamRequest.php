<?php

namespace App\Http\Requests\Basketball;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTeamRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:teams,slug',
            'slug_two' => 'required|string|max:255|unique:teams,slug_two',
            'logo_url' => 'required|url',
            'stadium' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'conference' => 'required|string|max:50',
        ];
    }
}
