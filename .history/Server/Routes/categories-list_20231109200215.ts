import express from 'express';
const router = express.Router();



import { DisplayAddPage, DisplayEditPage, DisplayCategoryList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindCategoriesByKeyword } from '../Controllers/categories-list';

router.get('/categories-list',  DisplayCategoryList);

router.get('/categories/add', DisplayAddPage);

router.get('/categories/edit/id', DisplayEditPage);

/*Process Add Page */
router.post('/categories/add', ProcessAddPage);

/*Process Edit Page */
router.post('/categoriesedit/:id',ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', ProcessDeletePage);

/*Find products that contains 'kw' */
// Route to find all products containing a keyword
router.get('/find/:keyword',  ProcessFindCategoriesByKeyword);

export default router;
