import express from 'express';
const router = express.Router();



import { DisplayAddPage, DisplayEditPage, DisplayUsersList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindUsersByKeyword } from '../Controllers/users1-list';


router.get('/users-list',  DisplayUsersList);

router.get('/users', DisplayAddPage);

router.get('/users/edit/id', DisplayEditPage);

/*Process Add Page */
router.post('/users/add', ProcessAddPage);

/*Process Edit Page */
router.post('/users/edit/:id',ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', ProcessDeletePage);

/*Find products that contains 'kw' */
// Route to find all products containing a keyword
router.get('/find/:keyword',  ProcessFindUsersByKeyword);

export default router;