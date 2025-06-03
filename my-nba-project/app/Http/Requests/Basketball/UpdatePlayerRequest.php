<?php

namespace App\Http\Requests\Basketball;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlayerRequest extends FormRequest
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
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'position' => 'required|string|max:50',
            'birth_date' => 'nullable|date',
            'nationality' => 'nullable|string|max:50',
            'height' => 'required|numeric|min:0',
            'weight' => 'required|numeric|min:0',
            'image_url' => 'nullable|url',
            'collage' => 'nullable|string|max:255',
            'draft_year' => 'nullable|integer|min:1900|max:' . date('Y'),
            'status' => 'required|string|max:50',
        ];
    }
}
