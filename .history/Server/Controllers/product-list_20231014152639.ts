import express from 'express';

import Movie from '../Models/product';

import { UserDisplayName } from '../Util';

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction) :void
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

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    res.render('index', {title : 'Add' , page: 'edit', product: ' ', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    res.render('index', {title : 'Edit' , page: 'edit', product: ' ', displayName: UserDisplayName(req)});
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{

}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{

}