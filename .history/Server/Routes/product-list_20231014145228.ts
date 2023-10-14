import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

//import { DisplayMovieList } from '../Controllers/movie-list';
import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessEditPage } from '../Controllers/product-list';

//router.get('/movie-list', AuthGuard, DisplayMovieList);
router.get('/product-list', AuthGuard, DisplayProductList);

/*Display Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

/*Display Edit Page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/*Process Add Page */
router.post('/add', AuthGuard, ProcessAddPage);

/*Process Edit Page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', AuthGuard, Proce);


export default router;
