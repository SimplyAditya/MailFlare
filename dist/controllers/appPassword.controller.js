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
exports.getUsersAppPassword = exports.createNewAppPassword = void 0;
const appPassword_service_1 = require("../services/appPassword.service");
const createNewAppPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, email, password } = req.body;
        const newAppPassword = yield (0, appPassword_service_1.generateAppPassword)(Number(userId), email, password);
        res
            .status(201)
            .json({ message: "App password created successfully", newAppPassword });
    }
    catch (error) {
        console.error("Error creating app password:", error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.createNewAppPassword = createNewAppPassword;
const getUsersAppPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const appPassword = yield (0, appPassword_service_1.getAppPasswordByUserId)(Number(userId));
        res.status(200).json(appPassword);
    }
    catch (error) {
        console.error("Error fetching app password:", error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.getUsersAppPassword = getUsersAppPassword;
//# sourceMappingURL=appPassword.controller.js.map