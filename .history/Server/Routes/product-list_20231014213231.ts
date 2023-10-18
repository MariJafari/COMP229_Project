import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/product-list';

router.get('/product-list', AuthGuard, DisplayProductList);

/*Display Add Product Page */
router.get('/add', AuthGuard, DisplayAddPage);

/*Display Edit Page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/*Process Add Page */
router.post('/add', AuthGuard, ProcessAddPage);

/*Process Edit Page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/*Process Delete Page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

/*

export default router;
