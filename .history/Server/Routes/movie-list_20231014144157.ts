import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMovieList } from '../Controllers/movie-list';

router.get('/movie-list', AuthGuard, DisplayMovieList);

/*Display Add Page */

/*Display Edit Page */

export default router;


