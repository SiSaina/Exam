<?php

namespace App\Http\Resources\News;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'main_content' => $this->main_content,
            'sub_content' => $this->sub_content,
            'published_at' => $this->published_at,
            'author_id' => $this->author_id,
            'video_url' => $this->video_url,
            'image_url' => $this->image_url,
            'news_images' => NewsImageResource::collection($this->whenLoaded('newsImages'))
        ];
    }
}
