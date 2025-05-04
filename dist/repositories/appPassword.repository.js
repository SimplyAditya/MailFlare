"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppPassword = exports.updateAppPassword = exports.getAppPasswordByUserId = exports.getAppPasswordById = exports.createAppPassword = void 0;
const db_1 = __importDefault(require("../db"));
const createAppPassword = (email, password, id) => __awaiter(void 0, void 0, void 0, function* () {
    const appPassword = yield db_1.default.appPasswords.create({
        data: {
            email,
            password,
            userId: id,
        },
    });
    return appPassword;
});
exports.createAppPassword = createAppPassword;
const getAppPasswordById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appPassword = yield db_1.default.appPasswords.findUnique({
        where: { id, isDeleted: false },
    });
    return appPassword;
});
exports.getAppPasswordById = getAppPasswordById;
const getAppPasswordByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const appPasswords = yield db_1.default.appPasswords.findMany({
        where: { userId, isDeleted: false },
    });
    return appPasswords;
});
exports.getAppPasswordByUserId = getAppPasswordByUserId;
const updateAppPassword = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const appPassword = yield db_1.default.appPasswords.update({
        where: { id },
        data: data,
    });
    return appPassword;
});
exports.updateAppPassword = updateAppPassword;
const deleteAppPassword = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appPassword = yield db_1.default.appPasswords.update({
        where: { id },
        data: { isDeleted: true },
    });
    return appPassword;
});
exports.deleteAppPassword = deleteAppPassword;
//# sourceMappingURL=appPassword.repository.js.map