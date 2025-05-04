"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginUser = joi_1.default.object({
    email: joi_1.default.string().email(),
    password: joi_1.default.string().min(6).max(20).required(),
    mobile: joi_1.default.string().length(10),
}).or("email", "mobile");
//# sourceMappingURL=auth.validation.js.map