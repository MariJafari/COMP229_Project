import express from 'express';

import Movie from '../Models/categories';

import { UserDisplayName } from '../Util';

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, productCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Product List', page: 'product-list', product: productCollection, displayName: UserDisplayName(req) });
    });
}