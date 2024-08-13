"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DebtModule = void 0;
// debt.module.ts
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var user_schema_1 = require("src/auth/schemas/user.schema");
var debt_controller_1 = require("./debt.controller");
var debt_service_1 = require("./debt.service");
var debt_schema_1 = require("./schemas/debt.schema");
var DebtModule = /** @class */ (function () {
    function DebtModule() {
    }
    DebtModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: debt_schema_1.Debt.name, schema: debt_schema_1.DebtSchema },
                    { name: user_schema_1.User.name, schema: user_schema_1.UserSchema }
                ]),
            ],
            controllers: [debt_controller_1.DebtController],
            providers: [debt_service_1.DebtService],
            exports: [debt_service_1.DebtService]
        })
    ], DebtModule);
    return DebtModule;
}());
exports.DebtModule = DebtModule;
