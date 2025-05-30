<?php

namespace App\Http\Controllers;

use App\Models\NewsImage;
use App\Http\Requests\News\StoreNewsImageRequest;

class NewsImageController extends Controller
{
    public function store(StoreNewsImageRequest $request)
    {
        $validatedData = $request->validated();
        NewsImage::create($validatedData);

        return redirect()->route('news.home')->with('success', 'News image created successfully.');
    }
    public function destroy(NewsImage $newsImage)
    {
        $newsImage->delete();

        return redirect()->route('news.home')->with('success', 'News image deleted successfully.');
    }
}
