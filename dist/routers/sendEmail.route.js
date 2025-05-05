"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sendEmail_controller_1 = require("../controllers/sendEmail.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const validation_1 = require("../middlewares/validation");
const sendEmailRouter = express_1.default.Router();
sendEmailRouter.route("/").post(validation_1.sendEmailValidate, user_middleware_1.userMiddleware, sendEmail_controller_1.sendEmail);
exports.default = sendEmailRouter;
//# sourceMappingURL=sendEmail.route.js.map