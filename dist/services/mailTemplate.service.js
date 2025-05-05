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
exports.getMailTemplateById = exports.getMailTemplateByUserId = exports.generateMailTemplate = void 0;
const mailTemplate_repository_1 = require("../repositories/mailTemplate.repository");
const generateMailTemplate = (subject, body, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const existingMailTemplate = yield (0, exports.getMailTemplateByUserId)(userId);
    const updatedList = existingMailTemplate.filter((existingMailTemplateRecord) => existingMailTemplateRecord.subject === subject &&
        existingMailTemplateRecord.body === body);
    if (updatedList.length > 0) {
        return yield (0, mailTemplate_repository_1.updateMailTemplate)(updatedList[0].id, {
            body,
            subject,
        });
    }
    return yield (0, mailTemplate_repository_1.createMailTemplate)(subject, body, userId);
});
exports.generateMailTemplate = generateMailTemplate;
const getMailTemplateByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const mailTemplate = yield (0, mailTemplate_repository_1.getMailTemplateByUserId)(userId);
    if (!mailTemplate) {
        throw new Error("Mail template not found");
    }
    return mailTemplate;
});
exports.getMailTemplateByUserId = getMailTemplateByUserId;
const getMailTemplateById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const mailTemplate = yield (0, mailTemplate_repository_1.getMailTemplateById)(id);
    if (!mailTemplate) {
        throw new Error("Mail template not found");
    }
    return mailTemplate;
});
exports.getMailTemplateById = getMailTemplateById;
//# sourceMappingURL=mailTemplate.service.js.map