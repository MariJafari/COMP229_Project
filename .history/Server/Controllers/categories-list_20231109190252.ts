import express from 'express';

import Categories from '../Models/categories';

import { UserDisplayName } from '../Util';
import { CallbackError } from 'mongoose';

export function DisplayCategoryList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Categories.find(function(err, categoriesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Categories List', page: 'categories-list', categories: categoriesCollection, displayName: UserDisplayName(req) });
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  res.json({success:true,msg: 'Add Page  display Successfully '});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // pass the id to the db and read the categories into the edit page
    Categories.findById(id, {}, {}, function(err, categoriesToEdit)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // show the edit view with the data
      res.json({success:true,msg: 'Edit Page Displayed Successfully ',categories: categoriesToEdit});
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  // instantiate a new Categories to Add
  let newCategories = new Categories
  ({
    "Name": req.body.categorName
  });

  // Insert the new Product object into the database (movies collection)
  Categories.create(newCategories, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new movie has been added -> refresh the product-list
    res.json({success: true, msg: 'Successfully Added Product', categories: newCategories});
  })


}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // instantiate a new Product to Edit
  let updatedCategories = new Categories
  ({
    "_id" : id,
    "Name": req.body.productName
  
  });

   //update product in the database
   Categories.updateOne({_id:id}, updatedCategories, function(err: CallbackError)
   {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful --> go to product-list page
    res.json({success: true, msg: 'Successfully Updated Categories', categories: updatedCategories});

   })

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    //pass the id to the database and delete the product
    Categories.remove({_id:id}, function(err: CallbackError){
        if(err)
        {
          console.error(err);
          res.end(err);
        }

        //delete was successful
        res.json({success: true, msg: 'Successfully Deleted Categories'});
    
    })
   

}

export   function ProcessFindCategoriesByKeyword(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  try {
    // Extracting the keyword from the request
    const keyword = encodeURIComponent(req.params.keyword);

    console.log('Keyword:', keyword);

        // Find categories that contain the keyword in their name (case-insensitive)
        Categories.find({ Name: ({ $regex: new RegExp(keyword, 'i') }) }, function (err: any, matchingCategories: any[]) {
            if (err) {
                console.error(err);
                res.status(500).send({ error: 'Internal Server Error' });
                return;
            }

            // Sending the matching categories as the response
            res.send({ matchingCategories });

         });
    } catch (error) {
        // Handle errors appropriately
        console.error('Error in ProcessFindCategoriesByKeyword:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }

  

}