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
exports.sendEmail = void 0;
const sendEmail_service_1 = require("../services/sendEmail.service");
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emails, appPasswordId, mailTemplateId } = req.body;
        yield (0, sendEmail_service_1.sendEmailService)(emails, appPasswordId, mailTemplateId);
        res.status(200).json({ message: "Email sent successfully" });
    }
    catch (error) {
        console.error("Error sending email:", error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.controller.js.map