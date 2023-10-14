"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayProductList = void 0;
const product_1 = __importDefault(require("../Models/product"));
const Util_1 = require("../Util");
function DisplayProductList(req, res, next) {
    product_1.default.find(function (err, productCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Product List', page: 'product-list', product: productCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayProductList = DisplayProductList;
//# sourceMappingURL=product-list.js.map