"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMailTemplate = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newMailTemplate = joi_1.default.object({
    subject: joi_1.default.string().required(),
    body: joi_1.default.string().required(),
});
//# sourceMappingURL=mailTemplate.validation.js.map