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
exports.deleteMailTemplate = exports.updateMailTemplate = exports.getMailTemplateByUserId = exports.getMailTemplateById = exports.createMailTemplate = void 0;
const db_1 = __importDefault(require("../db"));
const createMailTemplate = (subject, body, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const newMailTemplate = yield db_1.default.mailTemplates.create({
        data: {
            subject,
            body,
            userId,
        },
    });
    return newMailTemplate;
});
exports.createMailTemplate = createMailTemplate;
const getMailTemplateById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const mailTemplate = yield db_1.default.mailTemplates.findUnique({
        where: { id },
    });
    return mailTemplate;
});
exports.getMailTemplateById = getMailTemplateById;
const getMailTemplateByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const mailTemplatesList = yield db_1.default.mailTemplates.findMany({
        where: { userId },
    });
    return mailTemplatesList;
});
exports.getMailTemplateByUserId = getMailTemplateByUserId;
const updateMailTemplate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMailTemplate = yield db_1.default.mailTemplates.update({
        where: { id },
        data: data,
    });
    return updatedMailTemplate;
});
exports.updateMailTemplate = updateMailTemplate;
const deleteMailTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMailTemplate = yield db_1.default.mailTemplates.delete({
        where: { id },
    });
    return deletedMailTemplate;
});
exports.deleteMailTemplate = deleteMailTemplate;
//# sourceMappingURL=mailTemplate.repository.js.map