import express from 'express';

import Movie from '../Models/product';

import { UserDisplayName } from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, productCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req) });
    });
}

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, productCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Product List', page: 'product-list', movies: productCollection, displayName: UserDisplayName(req) });
    });
}