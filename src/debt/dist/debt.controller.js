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
exports.DebtController = void 0;
var common_1 = require("@nestjs/common");
var DebtController = /** @class */ (function () {
    function DebtController(debtService) {
        this.debtService = debtService;
    }
    DebtController.prototype.filterDebts = function (query) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.filterDebts(query)];
            });
        });
    };
    DebtController.prototype.searchDebts = function (keyword) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.searchDebts(keyword)];
            });
        });
    };
    DebtController.prototype.createDebt = function (createDebtDto) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.create(createDebtDto)];
            });
        });
    };
    DebtController.prototype.getDebt = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.findOne(id)];
            });
        });
    };
    DebtController.prototype.updateDebt = function (id, updateDebtDto) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.updateById(id, updateDebtDto)];
            });
        });
    };
    DebtController.prototype.deleteDebt = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.deleteById(id)];
            });
        });
    };
    DebtController.prototype.getAllDebts = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debtService.findAll()];
            });
        });
    };
    __decorate([
        common_1.Get('filter'),
        __param(0, common_1.Query())
    ], DebtController.prototype, "filterDebts");
    __decorate([
        common_1.Get('search'),
        __param(0, common_1.Query('keyword'))
    ], DebtController.prototype, "searchDebts");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], DebtController.prototype, "createDebt");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], DebtController.prototype, "getDebt");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], DebtController.prototype, "updateDebt");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], DebtController.prototype, "deleteDebt");
    __decorate([
        common_1.Get()
    ], DebtController.prototype, "getAllDebts");
    DebtController = __decorate([
        common_1.Controller('debts')
    ], DebtController);
    return DebtController;
}());
exports.DebtController = DebtController;
