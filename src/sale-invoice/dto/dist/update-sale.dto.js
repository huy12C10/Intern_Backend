"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateSaleDto = void 0;
var class_validator_1 = require("@nestjs/class-validator");
var sale_invoice_schema_1 = require("../schemas/sale-invoice.schema");
var UpdateSaleDto = /** @class */ (function () {
    function UpdateSaleDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateSaleDto.prototype, "userId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString() // Sửa thành @IsString
    ], UpdateSaleDto.prototype, "saleProducts");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(sale_invoice_schema_1.StatusSaleInvoice)
    ], UpdateSaleDto.prototype, "statusSaleInvoice");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], UpdateSaleDto.prototype, "sumPrice");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], UpdateSaleDto.prototype, "sumBill");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString()
    ], UpdateSaleDto.prototype, "createdAt");
    return UpdateSaleDto;
}());
exports.UpdateSaleDto = UpdateSaleDto;
