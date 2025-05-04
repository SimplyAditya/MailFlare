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
exports.getUsersMailTemplate = exports.createNewMailTemplate = void 0;
const mailTemplate_service_1 = require("../services/mailTemplate.service");
const createNewMailTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { subject, body, userId } = req.body;
        const newMailTemplate = yield (0, mailTemplate_service_1.generateMailTemplate)(subject, body, Number(userId));
        res.status(201).json(newMailTemplate);
    }
    catch (error) {
        console.error("Error creating mail template:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});
exports.createNewMailTemplate = createNewMailTemplate;
const getUsersMailTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const mailTemplate = yield (0, mailTemplate_service_1.getMailTemplateByUserId)(Number(userId));
        res.status(200).json(mailTemplate);
    }
    catch (error) {
        console.error("Error fetching mail template:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});
exports.getUsersMailTemplate = getUsersMailTemplate;
//# sourceMappingURL=mailTemplate.controller.js.map