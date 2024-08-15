"use strict";
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
exports.SaleInvoiceService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var sale_invoice_schema_1 = require("./schemas/sale-invoice.schema");
var SaleInvoiceService = /** @class */ (function () {
    function SaleInvoiceService(saleModel) {
        this.saleModel = saleModel;
    }
    SaleInvoiceService.prototype.create = function (createSaleDto) {
        return __awaiter(this, void 0, Promise, function () {
            var newSale;
            return __generator(this, function (_a) {
                newSale = new this.saleModel(createSaleDto);
                return [2 /*return*/, newSale.save()];
            });
        });
    };
    //   async findOne(id: string): Promise<SaleInvoice> {
    //     if (!isValidObjectId(id)) {
    //       throw new BadRequestException('Invalid ID ');
    //     }
    //     return this.saleModel.findById(id).exec();
    //   }
    SaleInvoiceService.prototype.updateById = function (id, updateSaleDto) {
        return __awaiter(this, void 0, Promise, function () {
            var updatedSale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!mongoose_2.isValidObjectId(id)) {
                            throw new common_1.BadRequestException('Invalid ID');
                        }
                        return [4 /*yield*/, this.saleModel.findByIdAndUpdate(id, updateSaleDto, {
                                "new": true,
                                runValidators: true
                            }).exec()];
                    case 1:
                        updatedSale = _a.sent();
                        if (!updatedSale) {
                            throw new common_1.BadRequestException('SaleInvoice not found');
                        }
                        return [2 /*return*/, updatedSale];
                }
            });
        });
    };
    SaleInvoiceService.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var deletedInvoice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!mongoose_2.isValidObjectId(id)) {
                            throw new common_1.BadRequestException('Invalid ID');
                        }
                        return [4 /*yield*/, this.saleModel.findByIdAndDelete(id).exec()];
                    case 1:
                        deletedInvoice = _a.sent();
                        if (!deletedInvoice) {
                            throw new common_1.BadRequestException('SaleInvoice not found');
                        }
                        return [2 /*return*/, deletedInvoice];
                }
            });
        });
    };
    SaleInvoiceService.prototype.findAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.saleModel.find().exec()];
            });
        });
    };
    SaleInvoiceService.prototype.filterSaleInvoice = function (query) {
        return __awaiter(this, void 0, Promise, function () {
            var filters, date;
            return __generator(this, function (_a) {
                filters = {};
                if (query.id) {
                    filters._id = query.id;
                }
                if (query.userId) {
                    filters.userId = query.userId;
                }
                if (query.statusSaleInvoice) {
                    filters.statusSaleInvoice = query.statusSaleInvoice;
                }
                if (query.sumBill) {
                    filters.sumBill = query.sumBill;
                    ;
                }
                if (query.sumPrice) {
                    filters.sumPrice = query.sumPrice;
                }
                if (query.createdAt) {
                    date = new Date(query.createdAt);
                    if (!isNaN(date.getTime())) { // Kiểm tra xem có phải là ngày hợp lệ không
                        filters.createdAt = {
                            $gte: new Date(date.setHours(0, 0, 0, 0)),
                            $lte: new Date(date.setHours(23, 59, 59, 999)) // Kết thúc vào cuối ngày
                        };
                    }
                }
                if (query.saleProducts) {
                    filters.saleProducts = query.saleProducts;
                }
                return [2 /*return*/, this.saleModel.find(filters).exec()];
            });
        });
    };
    SaleInvoiceService.prototype.searchSaleInvoice = function (keyword) {
        return __awaiter(this, void 0, Promise, function () {
            var searchKeyword, numericKeyword;
            return __generator(this, function (_a) {
                searchKeyword = {};
                if (!isNaN(Number(keyword))) {
                    numericKeyword = Number(keyword);
                }
                if (numericKeyword !== undefined) {
                    // Tìm kiếm theo số
                    searchKeyword.$or = [
                        { sumPrice: numericKeyword },
                        { sumBill: numericKeyword }
                    ];
                }
                else {
                    // Tìm kiếm theo chuỗi
                    searchKeyword.$or = [
                        // Tìm kiếm theo userId
                        { userId: { $regex: keyword, $options: 'i' } },
                        // Tìm kiếm theo các thuộc tính trong mảng đối tượng saleProducts
                        {
                            saleProducts: {
                                $elemMatch: {
                                    productName: { $regex: keyword, $options: 'i' }
                                }
                            }
                        },
                        // Tìm kiếm theo statusSaleInvoice
                        { statusSaleInvoice: { $regex: "^" + keyword + "$", $options: 'i' } }
                    ];
                }
                // Thực hiện truy vấn và trả kết quả
                return [2 /*return*/, this.saleModel.find(searchKeyword).exec()];
            });
        });
    };
    SaleInvoiceService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(sale_invoice_schema_1.SaleInvoice.name))
    ], SaleInvoiceService);
    return SaleInvoiceService;
}());
exports.SaleInvoiceService = SaleInvoiceService;
