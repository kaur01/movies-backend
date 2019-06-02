var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const UserService_1 = require("../services/UserService");
const check_1 = require("express-validator/check");
const User_1 = require("../models/User");
let UserController = class UserController {
    constructor(userService) {
        this.service = userService;
    }
    getByPhone(number, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.service.findUser(number);
            res.json(user);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRequest = new User_1.User(req.body.name, req.body.number);
            const createdUser = yield this.service.create(userRequest);
            res.status(201).json(createdUser);
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet('/:phoneNumber', check_1.param('phoneNumber').exists().not().isEmpty()),
    __param(0, inversify_express_utils_1.requestParam('phoneNumber')), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getByPhone", null);
__decorate([
    inversify_express_utils_1.httpPost(''),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
UserController = __decorate([
    inversify_express_utils_1.controller('/user'),
    __metadata("design:paramtypes", [UserService_1.UserService])
], UserController);
exports.UserController = UserController;
