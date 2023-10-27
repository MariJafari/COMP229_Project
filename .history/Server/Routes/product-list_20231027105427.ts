import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindProductsByKeyword } from '../Controllers/product-list';

router.get('/product-list',  DisplayProductList);

/*Process Add Page */
router.post('/add', AuthGuard, ProcessAddPage);

/*Process Edit Page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

/*Find products that contains 'kw' */
// Route to find all products containing a keyword
router.get('/find/:keyword',  ProcessFindProductsByKeyword);

export default router;
