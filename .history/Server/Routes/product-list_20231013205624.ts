import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMovieList } from '../Controllers/movie-list';
import { DisplayProductList } from '../Controllers/product-list';

router.get('/movie-list', AuthGuard, DisplayMovieList);
router.get('/product-list', AuthGuard, DisplayProductList);

export default router;
