"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseInvoiceSchema = exports.PurchaseInvoice = exports.StatusPurchaseInvoice = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var moment = require("moment");
var StatusPurchaseInvoice;
(function (StatusPurchaseInvoice) {
    StatusPurchaseInvoice["PENDING"] = "PENDING";
    StatusPurchaseInvoice["PAID"] = "PAID";
    StatusPurchaseInvoice["CANCELED"] = "CANCELED";
})(StatusPurchaseInvoice = exports.StatusPurchaseInvoice || (exports.StatusPurchaseInvoice = {}));
var PurchaseInvoice = /** @class */ (function () {
    function PurchaseInvoice() {
    }
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "supplierId");
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "purchaseProducts");
    __decorate([
        mongoose_1.Prop({ required: true, "enum": StatusPurchaseInvoice })
    ], PurchaseInvoice.prototype, "statusPurchaseInvoice");
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "adminId");
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "dueDate");
    __decorate([
        mongoose_1.Prop({ required: true, "default": Date.now })
    ], PurchaseInvoice.prototype, "createdAt");
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "sumBill");
    __decorate([
        mongoose_1.Prop({ required: true })
    ], PurchaseInvoice.prototype, "supplier");
    PurchaseInvoice = __decorate([
        mongoose_1.Schema()
    ], PurchaseInvoice);
    return PurchaseInvoice;
}());
exports.PurchaseInvoice = PurchaseInvoice;
exports.PurchaseInvoiceSchema = mongoose_1.SchemaFactory.createForClass(PurchaseInvoice);
exports.PurchaseInvoiceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        ret.dueDate = moment(ret.dueDate).format('YYYY-MM-DD');
        ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
    }
});
