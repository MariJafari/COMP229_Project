import express from 'express';

import Users1 from '../Models/users1';

import { UserDisplayName } from '../Util';
import { CallbackError } from 'mongoose';

export function DisplayUsersList(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    Users1.find(function(err, users1Collection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //res.render('index', {title: 'Product List', page: 'product-list', product: productCollection, displayName: UserDisplayName(req) });
        res.json({success:true,msg: 'Users List display Successfully ',Users1:users1Collection, user:req.user});
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
      res.json({success:true,msg: 'Edit Page Displayed Successfully ',users1: users1ToEdit});
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  // instantiate a new Product to Add
  let newUsers1 = new Users1
  ({
    "Name": req.body.users1DisplayName,
    "EmailAddress": req.body.users1EmailAddress,
    "Password": req.body.user1password,
    "Created": req.body.users1Created,
    "Updated": req.body.users1Updated,

    Name: String,
    Email: String,
    Password: Number,
    Created: Date,
    Updated: Date
},

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
    res.json({success: true, msg: 'Successfully Added Product', user1: newUsers1});
  })


}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // instantiate a new Product to Edit
  let updatedUsers1 = new Users1
  ({
    "_id" : id,
    "DisplayName": req.body.users1DisplayName,
    "username": req.body.users1username,
    "EmailAddress": req.body.users1EmailAddress,
    "Password": req.body.user1password,
    "Created": req.body.users1Created,
    "Updated": req.body.users1Updated,



  });

   //update product in the database
   Users1.updateOne({_id:id}, updatedUsers1, function(err: CallbackError)
   {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful --> go to product-list page
    res.json({success: true, msg: 'Successfully Updated Product', product: updatedUsers1});

   })

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    //pass the id to the database and delete the product
    Users1.remove({_id:id}, function(err: CallbackError){
        if(err)
        {
          console.error(err);
          res.end(err);
        }

        //delete was successful
        res.json({success: true, msg: 'Successfully Deleted Product'});
    
    })
   

}

export   function ProcessFindUsersByKeyword(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  try {
    // Extracting the keyword from the request
    const keyword = encodeURIComponent(req.params.keyword);

    console.log('Keyword:', keyword);

        // Find products that contain the keyword in their name (case-insensitive)
        Users1.find({ DisplayName: ({ $regex: new RegExp(keyword, 'i') }) }, function (err: any, matchingNames: any[]) {
            if (err) {
                console.error(err);
                res.status(500).send({ error: 'Internal Server Error' });
                return;
            }

            // Sending the matching products as the response
            res.send({ matchingNames });

         });
    } catch (error) {
        // Handle errors appropriately
        console.error('Error in ProcessFindUsersByKeyword:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }

  

}