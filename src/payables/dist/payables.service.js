"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PayablesService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var purchase_invoice_schema_1 = require("../purchase-invoice/schemas/purchase-invoice.schema");
var payables_schema_1 = require("./schemas/payables.schema");
var PayablesService = /** @class */ (function () {
    function PayablesService(payableModel, purchaseInvoiceModel) {
        this.payableModel = payableModel;
        this.purchaseInvoiceModel = purchaseInvoiceModel;
    }
    PayablesService.prototype.create = function (createPayableDto) {
        return __awaiter(this, void 0, Promise, function () {
            var purchaseInvoice, newPayable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.purchaseInvoiceModel.findById(createPayableDto.purchaseInvoicedId).exec()];
                    case 1:
                        purchaseInvoice = _a.sent();
                        if (!purchaseInvoice) {
                            throw new common_1.BadRequestException('PurchaseInvoice không tồn tại');
                        }
                        newPayable = new this.payableModel(__assign(__assign({}, createPayableDto), { purchaseInvoicedId: purchaseInvoice._id }));
                        return [2 /*return*/, newPayable.save()];
                }
            });
        });
    };
    PayablesService.prototype.findAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.payableModel.find().exec()];
            });
        });
    };
    PayablesService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                if (!mongoose_2.isValidObjectId(id)) {
                    throw new common_1.BadRequestException('Invalid ID');
                }
                return [2 /*return*/, this.payableModel.findById(id).exec()];
            });
        });
    };
    PayablesService.prototype.updateById = function (id, updatePayableDto) {
        return __awaiter(this, void 0, Promise, function () {
            var updatedPayable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.payableModel.findByIdAndUpdate(id, updatePayableDto, {
                            "new": true,
                            runValidators: true
                        }).exec()];
                    case 1:
                        updatedPayable = _a.sent();
                        if (!updatedPayable) {
                            throw new common_1.BadRequestException('Payable not found');
                        }
                        return [2 /*return*/, updatedPayable];
                }
            });
        });
    };
    PayablesService.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var deletedPayable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.payableModel.findByIdAndDelete(id).exec()];
                    case 1:
                        deletedPayable = _a.sent();
                        if (!deletedPayable) {
                            throw new common_1.BadRequestException('Payable not found');
                        }
                        return [2 /*return*/, deletedPayable];
                }
            });
        });
    };
    PayablesService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(payables_schema_1.Payable.name)),
        __param(1, mongoose_1.InjectModel(purchase_invoice_schema_1.PurchaseInvoice.name))
    ], PayablesService);
    return PayablesService;
}());
exports.PayablesService = PayablesService;
