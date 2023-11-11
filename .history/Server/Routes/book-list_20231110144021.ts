import express from 'express';
const router = express.Router();



import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindBooksByKeyword } from '../Controllers/book-list';

router.get('/product-list',  DisplayProductList);

router.get('/add', DisplayAddPage);

router.get('/edit/id', DisplayEditPage);

/*Process Add Page */
router.post('/add', ProcessAddPage);

/*Process Edit Page */
router.post('/edit/:id',ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', ProcessDeletePage);

/*Find products that contains 'kw' */
// Route to find all products containing a keyword
router.get('/find/:keyword',  ProcessFindProductsByKeyword);

export default router;
