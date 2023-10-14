"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const product_list_1 = require("../Controllers/product-list");
router.get('/product-list', Util_1.AuthGuard, product_list_1.DisplayProductList);
exports.default = router;
//# sourceMappingURL=product-list.js.map