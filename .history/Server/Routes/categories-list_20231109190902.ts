import express from 'express';
const router = express.Router();



import { DisplayAddPage, DisplayEditPage, DisplayCategorList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindProductsByKeyword } from '../Controllers/product-list';

router.get('/categories-list',  DisplayCategoriesList);

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
