import express from 'express';
const router = express.Router();



import { DisplayAddPage, DisplayEditPage, DisplayCategoryList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindCategoriesByKeyword } from '../Controllers/delete_categories-list';

router.get('/categories-list',  DisplayCategoryList);

router.get('/categories/add', DisplayAddPage);

router.get('/categories/edit/id', DisplayEditPage);

/*Process Add Page */
router.post('/categories/add', ProcessAddPage);

/*Process Edit Page */
router.post('/categories/edit/:id',ProcessEditPage);

/*Process Delete Page */
router.get('/categories/delete/:id', ProcessDeletePage);

/*Find products that contains 'kw' */
// Route to find all products containing a keyword
router.get('/categories/find/:keyword',  ProcessFindCategoriesByKeyword);

export default router;
