import express from 'express';

import Product from '../Models/product';

import { UserDisplayName } from '../Util';

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    Product.find(function(err, productCollection)
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
    res.render('index', {title : 'Product' , page: 'edit', product: ' ', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // pass the id to the db and read the product into the edit page
    Product.findById(id, {}, {}, function(err, productToEdit)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // show the edit view with the data
      res.json({success: true, message: 'Edit Page Displayed Successfully!', product: productToEdit});
    });
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