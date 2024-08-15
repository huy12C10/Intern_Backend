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
exports.SalesInvoiceSchema = exports.SaleInvoice = exports.StatusSaleInvoice = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var moment = require("moment");
var mongoose_2 = require("mongoose");
var StatusSaleInvoice;
(function (StatusSaleInvoice) {
    StatusSaleInvoice["PENDING"] = "PENDING";
    StatusSaleInvoice["PAID"] = "PAID";
    StatusSaleInvoice["CANCELED"] = "CANCELED";
})(StatusSaleInvoice = exports.StatusSaleInvoice || (exports.StatusSaleInvoice = {}));
var SaleInvoice = /** @class */ (function (_super) {
    __extends(SaleInvoice, _super);
    function SaleInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true })
    ], SaleInvoice.prototype, "userId");
    __decorate([
        mongoose_1.Prop({
            type: Map,
            of: {
                productName: { type: mongoose_2.Schema.Types.String, required: true },
                quantity: { type: mongoose_2.Schema.Types.Number, required: true },
                price: { type: mongoose_2.Schema.Types.Number, required: true }
            },
            required: true
        })
    ], SaleInvoice.prototype, "saleProducts");
    __decorate([
        mongoose_1.Prop({ required: true, "enum": StatusSaleInvoice })
    ], SaleInvoice.prototype, "statusSaleInvoice");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Number, required: true })
    ], SaleInvoice.prototype, "sumPrice");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Number, required: true })
    ], SaleInvoice.prototype, "sumBill");
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Schema.Types.Date, "default": Date.now })
    ], SaleInvoice.prototype, "createdAt");
    SaleInvoice = __decorate([
        mongoose_1.Schema()
    ], SaleInvoice);
    return SaleInvoice;
}(mongoose_2.Document));
exports.SaleInvoice = SaleInvoice;
exports.SalesInvoiceSchema = mongoose_1.SchemaFactory.createForClass(SaleInvoice);
// Middleware pre-save để chuyển đổi ngày
exports.SalesInvoiceSchema.pre('save', function (next) {
    if (this.createdAt) {
        this.createdAt = moment(this.createdAt).startOf('day').toDate();
    }
    next();
});
exports.SalesInvoiceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        if (ret.createdAt) {
            ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
        }
    }
});
