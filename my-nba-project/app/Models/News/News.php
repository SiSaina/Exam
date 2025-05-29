<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    /** @use HasFactory<\Database\Factories\NewsFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'main_content',
        'sub_content',
        'published_at',
        'author_id',
        'video_url'
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
    public function newsImages()
    {
        return $this->hasMany(NewsImage::class);
    }
}
