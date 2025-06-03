<?php

namespace App\Models\News;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsImage extends Model
{
    /** @use HasFactory<\Database\Factories\NewsImageFactory> */
    use HasFactory;

    protected $fillable = [
        'news_id',
        'url'
    ];
    
    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
