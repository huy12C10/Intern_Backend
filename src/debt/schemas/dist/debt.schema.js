"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DebtSchema = exports.Debt = exports.StatusDebt = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var moment = require("moment");
var mongoose_2 = require("mongoose");
var StatusDebt;
(function (StatusDebt) {
    StatusDebt["PENDING"] = "PENDING";
    StatusDebt["PAID"] = "PAID";
    StatusDebt["CANCELED"] = "CANCELED";
})(StatusDebt = exports.StatusDebt || (exports.StatusDebt = {}));
var Debt = /** @class */ (function (_super) {
    __extends(Debt, _super);
    function Debt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Number, required: true })
    ], Debt.prototype, "amount");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Date, unique: true, required: true })
    ], Debt.prototype, "dueDate");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Date, "default": Date.now })
    ], Debt.prototype, "createdAt");
    __decorate([
        mongoose_1.Prop({ required: true, "enum": StatusDebt })
    ], Debt.prototype, "statusDebt");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.String, required: true })
    ], Debt.prototype, "description");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.String, required: true })
    ], Debt.prototype, "supplier");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'Supplier', required: true })
    ], Debt.prototype, "supplierId");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true })
    ], Debt.prototype, "userId");
    Debt = __decorate([
        mongoose_1.Schema({ timestamps: true })
    ], Debt);
    return Debt;
}(mongoose_2.Document));
exports.Debt = Debt;
exports.DebtSchema = mongoose_1.SchemaFactory.createForClass(Debt);
exports.DebtSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        ret.dueDate = moment(ret.dueDate).format('YYYY-MM-DD');
        ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
    }
});
