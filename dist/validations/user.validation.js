"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getAllUsers = exports.getUserByEmail = exports.getUserById = exports.newUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newUser = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(20).required(),
    name: joi_1.default.string().min(3).max(30).required(),
    mobile: joi_1.default.string().length(10).required(),
});
exports.getUserById = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
});
exports.getUserByEmail = joi_1.default.object({
    email: joi_1.default.string().email().required(),
});
exports.getAllUsers = joi_1.default.object({
    role: joi_1.default.string().valid("ADMIN", "USER").optional(),
});
exports.updateUser = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
    email: joi_1.default.string().email().optional(),
    password: joi_1.default.string().min(6).max(20).optional(),
    name: joi_1.default.string().min(3).max(30).optional(),
    mobile: joi_1.default.string().length(10).optional(),
});
//# sourceMappingURL=user.validation.js.map