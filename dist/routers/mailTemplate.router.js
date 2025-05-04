"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../middlewares/validation");
const user_middleware_1 = require("../middlewares/user.middleware");
const mailTemplate_controller_1 = require("../controllers/mailTemplate.controller");
const mailTemplateRouter = express_1.default.Router();
mailTemplateRouter
    .route("/")
    .post(validation_1.createMailTemplateValidate, user_middleware_1.userMiddleware, mailTemplate_controller_1.createNewMailTemplate);
mailTemplateRouter.route("/").get(user_middleware_1.userQueryMiddleware, mailTemplate_controller_1.getUsersMailTemplate);
exports.default = mailTemplateRouter;
//# sourceMappingURL=mailTemplate.router.js.map