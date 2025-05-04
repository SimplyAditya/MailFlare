"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const validation_1 = require("../middlewares/validation");
const userRouter = express_1.default.Router();
userRouter
    .route("/")
    .post((req, res, next) => {
    (0, validation_1.createUserValidate)(req, res, next);
}, user_controller_1.createNewUser);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map