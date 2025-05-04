"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_middleware_1 = require("../middlewares/user.middleware");
const appPassword_controller_1 = require("../controllers/appPassword.controller");
const validation_1 = require("../middlewares/validation");
const appPasswordRouter = express_1.default.Router();
appPasswordRouter
    .route("/")
    .post(validation_1.createAppPasswordValidate, user_middleware_1.userMiddleware, appPassword_controller_1.createNewAppPassword);
appPasswordRouter.route("/").get(user_middleware_1.userQueryMiddleware, appPassword_controller_1.getUsersAppPassword);
exports.default = appPasswordRouter;
//# sourceMappingURL=appPassword.route.js.map