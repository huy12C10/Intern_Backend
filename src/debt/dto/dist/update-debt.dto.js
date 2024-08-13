"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateDebtDto = void 0;
var class_validator_1 = require("@nestjs/class-validator");
var debt_schema_1 = require("../schemas/debt.schema"); // Import enum StatusDebt
var UpdateDebtDto = /** @class */ (function () {
    function UpdateDebtDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateDebtDto.prototype, "amount");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString()
    ], UpdateDebtDto.prototype, "dueDate");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDateString()
    ], UpdateDebtDto.prototype, "createdAt");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(debt_schema_1.StatusDebt)
    ], UpdateDebtDto.prototype, "statusDebt");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateDebtDto.prototype, "description");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateDebtDto.prototype, "supplier");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateDebtDto.prototype, "supplierId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], UpdateDebtDto.prototype, "userId");
    return UpdateDebtDto;
}());
exports.UpdateDebtDto = UpdateDebtDto;
