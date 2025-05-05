"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const joi_1 = __importDefault(require("joi"));
exports.sendEmail = joi_1.default.object({
    emails: joi_1.default.array().items(joi_1.default.string().email()).required(),
    appPasswordId: joi_1.default.number().integer().required(),
    mailTemplateId: joi_1.default.number().integer().required(),
});
//# sourceMappingURL=sendMail.validation.js.map