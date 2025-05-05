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
exports.sendEmailService = void 0;
const appPassword_repository_1 = require("../repositories/appPassword.repository");
const mailTemplate_repository_1 = require("../repositories/mailTemplate.repository");
const sendMail_1 = require("../utilities/sendMail");
const sendEmailService = (email, mailTemplateId, appPasswordId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailTemplate = yield (0, mailTemplate_repository_1.getMailTemplateById)(Number(mailTemplateId));
        const appPassword = yield (0, appPassword_repository_1.getAppPasswordById)(Number(appPasswordId));
        yield Promise.all(email.map((individualEmail) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, sendMail_1.sendMail)(individualEmail, emailTemplate.subject, emailTemplate.body, appPassword.email, appPassword.password);
        })));
        return true;
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
});
exports.sendEmailService = sendEmailService;
//# sourceMappingURL=sendEmail.service.js.map