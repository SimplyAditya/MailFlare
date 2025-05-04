"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAppPassword = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newAppPassword = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(12).max(30).required(),
});
//# sourceMappingURL=appPassword.validation.js.map