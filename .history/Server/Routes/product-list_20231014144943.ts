import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

//import { DisplayMovieList } from '../Controllers/movie-list';
import { DisplayProductList } from '../Controllers/product-list';

//router.get('/movie-list', AuthGuard, DisplayMovieList);
router.get('/product-list', AuthGuard, DisplayProductList);

/*Display Add Page */
router.get('/product-list', AuthGuard, DisplayProductList);

/*Display Edit Page */

/*Process Add Page */

/*Process Edit Page */

/*Process Delete Page */


export default router;
