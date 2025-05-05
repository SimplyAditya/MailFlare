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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppPasswordById = exports.getAppPasswordByUserId = exports.generateAppPassword = void 0;
const appPassword_repository_1 = require("../repositories/appPassword.repository");
const generateAppPassword = (userId, email, appPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const existingAppPassword = yield (0, appPassword_repository_1.getAppPasswordByUserId)(userId);
    const updatedList = existingAppPassword.filter((existingAppPasswordRecord) => existingAppPasswordRecord.email === email &&
        existingAppPasswordRecord.password === appPassword);
    if (updatedList.length > 0) {
        if (updatedList[0].isDeleted === false) {
            throw new Error("App password already exists");
        }
        else if (updatedList[0].isDeleted === true) {
            const appPasswordRecord = yield (0, appPassword_repository_1.updateAppPassword)(updatedList[0].id, { email, password: appPassword, isDeleted: false });
            return appPasswordRecord;
        }
    }
    return yield (0, appPassword_repository_1.createAppPassword)(email, appPassword, userId);
});
exports.generateAppPassword = generateAppPassword;
const getAppPasswordByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const appPasswords = yield (0, appPassword_repository_1.getAppPasswordByUserId)(userId);
    if (!appPasswords || appPasswords.length === 0) {
        throw new Error("App password not found");
    }
    return appPasswords.map(({ id, email, userId }) => ({ id, email, userId }));
});
exports.getAppPasswordByUserId = getAppPasswordByUserId;
const getAppPasswordById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appPassword = yield (0, appPassword_repository_1.getAppPasswordById)(id);
    if (!appPassword) {
        throw new Error("App password not found");
    }
    return appPassword;
});
exports.getAppPasswordById = getAppPasswordById;
//# sourceMappingURL=appPassword.service.js.map