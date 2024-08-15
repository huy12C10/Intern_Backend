"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdatePurchaseDto = void 0;
var class_validator_1 = require("@nestjs/class-validator");
var purchase_invoice_schema_1 = require("../schemas/purchase-invoice.schema");
var UpdatePurchaseDto = /** @class */ (function () {
    function UpdatePurchaseDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdatePurchaseDto.prototype, "supplierId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], UpdatePurchaseDto.prototype, "purchaseProducts");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(purchase_invoice_schema_1.StatusPurchaseInvoice)
    ], UpdatePurchaseDto.prototype, "statusPurchaseInvoice");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdatePurchaseDto.prototype, "adminId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString()
    ], UpdatePurchaseDto.prototype, "dueDate");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString()
    ], UpdatePurchaseDto.prototype, "createdAt");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], UpdatePurchaseDto.prototype, "sumBill");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdatePurchaseDto.prototype, "supplier");
    return UpdatePurchaseDto;
}());
exports.UpdatePurchaseDto = UpdatePurchaseDto;
