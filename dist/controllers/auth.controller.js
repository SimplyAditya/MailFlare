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
exports.loginUser = void 0;
const user_service_1 = require("../services/user.service");
const commonFunctions_1 = require("../utilities/commonFunctions");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, mobile, password } = req.body;
        const user = yield (0, user_service_1.getUserByEmailOrMobile)(email, mobile);
        const isPasswordValid = yield (0, commonFunctions_1.compareText)(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        const token = yield (0, commonFunctions_1.generateToken)(user.id);
        delete user.password;
        delete user.isDeleted;
        delete user.createdAt;
        res.status(200).json({ message: "Login successful", token, user });
    }
    catch (error) {
        console.error("Error logging in:", error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=auth.controller.js.map