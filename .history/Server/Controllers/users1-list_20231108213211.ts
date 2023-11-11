import express from 'express';

import Users1 from '../Models/users1';

import { UserDisplayName } from '../Util';
import { CallbackError } from 'mongoose';

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    Users1.find(function(err, users1Collection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //res.render('index', {title: 'Product List', page: 'product-list', product: productCollection, displayName: UserDisplayName(req) });
        res.json({success:true,msg: 'Users List display Successfully ',users:users1Collection, user:req.user});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  res.json({success:true,msg: 'Add Page  display Successfully '});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // pass the id to the db and read the product into the edit page
    Users1.findById(id, {}, {}, function(err, users1ToEdit)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // show the edit view with the data
      res.json({success:true,msg: 'Edit Page Displayed Successfully ',product: users1ToEdit});
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  // instantiate a new Product to Add
  let newUsers1 = new Users1
  ({
    "DisplayName": req.body.productName,
    "username": req.body.productDescription,
    "EmailAddress": req.body.productPrice,
    "Password": req.body.productQuantity,
    "Created": req.body.productCategory,
    "Updated"



    DisplayName: String,
    username: String,
    EmailAddress: String,
    Password: String,
  });

  // Insert the new Product object into the database (movies collection)
  Users1.create(newUsers1, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new movie has been added -> refresh the product-list
    res.json({success: true, msg: 'Successfully Added Product', product: newUsers1});
  })


}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // instantiate a new Product to Edit
  let updatedUsers1 = new Users1
  ({
    "_id" : id,
    "DisplayName": req.body.productName,
    "username": req.body.productDescription,
    "EmailAddress": req.body.productPrice,
    "Password": req.body.productQuantity,
    "Created": req.body.productCategory,
    "Updated":



  });

   //update product in the database
   Product.updateOne({_id:id}, updatedProduct, function(err: CallbackError)
   {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful --> go to product-list page
    res.json({success: true, msg: 'Successfully Updated Product', product: updatedProduct});

   })

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    //pass the id to the database and delete the product
    Product.remove({_id:id}, function(err: CallbackError){
        if(err)
        {
          console.error(err);
          res.end(err);
        }

        //delete was successful
        res.json({success: true, msg: 'Successfully Deleted Product'});
    
    })
   

}

export   function ProcessFindProductsByKeyword(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  try {
    // Extracting the keyword from the request
    const keyword = encodeURIComponent(req.params.keyword);

    console.log('Keyword:', keyword);

        // Find products that contain the keyword in their name (case-insensitive)
        Product.find({ Name: ({ $regex: new RegExp(keyword, 'i') }) }, function (err: any, matchingProducts: any[]) {
            if (err) {
                console.error(err);
                res.status(500).send({ error: 'Internal Server Error' });
                return;
            }

            // Sending the matching products as the response
            res.send({ matchingProducts });

         });
    } catch (error) {
        // Handle errors appropriately
        console.error('Error in ProcessFindProductsByKeyword:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }

  

}