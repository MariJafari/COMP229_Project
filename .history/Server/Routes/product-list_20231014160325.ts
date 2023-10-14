import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

//import { DisplayMovieList } from '../Controllers/movie-list';
import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/product-list';

//router.get('/movie-list', AuthGuard, DisplayMovieList);
router.get('/product-list', AuthGuard, DisplayProductList);

/*Display Add Page */
router.get('/product', AuthGuard, DisplayAddPage);

/*Display Edit Page */
router.get('/product/:id', AuthGuard, DisplayEditPage);

/*Process Add Page */
router.post('/product', AuthGuard, ProcessAddPage);

/*Process Edit Page */
router.post('/product/:id', AuthGuard, ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);


export default router;
