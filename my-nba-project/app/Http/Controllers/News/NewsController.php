<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Http\Requests\News\StoreNewsRequest;
use App\Http\Requests\News\UpdateNewsRequest;
use App\Http\Resources\News\NewsCollection;
use App\Http\Resources\News\NewsResource;
use Inertia\Inertia;

class NewsController extends Controller
{
    //show home page of news
    public function home()
    {
        return Inertia::render('news/home-news'
        // , [
        //     'news' => new NewsCollection(News::with('newsImages')->latest()->paginate(10)),
        // ]
        );
    }
    //show top news page
    public function topNews()
    {
        return Inertia::render('news/top-news'
        // , [
        //     'news' => new NewsCollection(News::with('newsImages')->latest()->paginate(10)),
        // ]
        );
    }
    //show nba award page
    public function nbaAward()
    {
        return Inertia::render('news/nba-award');
    }
    //show news detail page
    public function show(News $news)
    {
        $news->load('newsImages');
        return Inertia::render('news/news-detail',
            [
                'news' => new NewsResource($news),
            ]
        );
    }
    //show create news page
    public function create()
    {
        return Inertia::render('news/create-news');
    }
    //store news
    public function store(StoreNewsRequest $request)
    {
        $validatedData = $request->validated();
        News::create($validatedData);

        return redirect()->route('news.home')->with('success', 'News created successfully.');
    }
    //show edit news page
    public function edit(News $news)
    {
        return Inertia::render('news/edit-news', [
            'news' => $news,
        ]);
    }
    //update news
    public function update(UpdateNewsRequest $request, News $news)
    {
        $validatedData = $request->validated();
        $news->update($validatedData);

        return redirect()->route('news.home')->with('success', 'News updated successfully.');
    }
    //delete news
    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('news.home')->with('success', 'News deleted successfully.');
    }
}
