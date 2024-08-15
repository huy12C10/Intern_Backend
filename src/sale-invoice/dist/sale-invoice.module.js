"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SaleInvoiceModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var sale_invoice_controller_1 = require("./sale-invoice.controller");
var sale_invoice_service_1 = require("./sale-invoice.service");
var sale_invoice_schema_1 = require("./schemas/sale-invoice.schema");
var SaleInvoiceModule = /** @class */ (function () {
    function SaleInvoiceModule() {
    }
    SaleInvoiceModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: sale_invoice_schema_1.SaleInvoice.name, schema: sale_invoice_schema_1.SalesInvoiceSchema },
                ]),
            ],
            providers: [sale_invoice_service_1.SaleInvoiceService],
            controllers: [sale_invoice_controller_1.SaleInvoiceController]
        })
    ], SaleInvoiceModule);
    return SaleInvoiceModule;
}());
exports.SaleInvoiceModule = SaleInvoiceModule;
