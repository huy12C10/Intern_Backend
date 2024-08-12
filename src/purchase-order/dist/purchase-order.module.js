"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseOrderModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var purchase_order_controller_1 = require("./purchase-order.controller");
var purchase_order_service_1 = require("./purchase-order.service");
var purchase_order_schema_1 = require("./schema/purchase-order.schema");
var PurchaseOrderModule = /** @class */ (function () {
    function PurchaseOrderModule() {
    }
    PurchaseOrderModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: purchase_order_schema_1.PurchaseOrder.name, schema: purchase_order_schema_1.PurchaseOrderSchema },
                ]),
            ],
            providers: [purchase_order_service_1.PurchaseOrderService],
            controllers: [purchase_order_controller_1.PurchaseOrderController]
        })
    ], PurchaseOrderModule);
    return PurchaseOrderModule;
}());
exports.PurchaseOrderModule = PurchaseOrderModule;
