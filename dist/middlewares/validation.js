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
exports.loginValidate = exports.createMailTemplateValidate = exports.createAppPasswordValidate = exports.createUserValidate = void 0;
const user_validation_1 = require("../validations/user.validation");
const auth_validation_1 = require("../validations/auth.validation");
const appPassword_validation_1 = require("../validations/appPassword.validation");
const mailTemplate_validation_1 = require("../validations/mailTemplate.validation");
const createUserValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            message: "Request body is required",
        });
    }
    const { error } = yield user_validation_1.newUser.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            error: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        });
    }
    next();
});
exports.createUserValidate = createUserValidate;
const createAppPasswordValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.status(400).json({
            message: "Request body is required",
        });
        return;
    }
    const { error } = yield appPassword_validation_1.newAppPassword.validate(req.body);
    if (error) {
        res.status(400).json({
            message: "Validation error",
            error: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        });
        return;
    }
    next();
});
exports.createAppPasswordValidate = createAppPasswordValidate;
const createMailTemplateValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.status(400).json({
            message: "Request body is required",
        });
        return;
    }
    const { error } = yield mailTemplate_validation_1.newMailTemplate.validate(req.body);
    if (error) {
        res.status(400).json({
            message: "Validation error",
            error: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        });
        return;
    }
    next();
});
exports.createMailTemplateValidate = createMailTemplateValidate;
const loginValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.status(400).json({
            message: "Request body is required",
        });
        return;
    }
    const { error } = yield auth_validation_1.loginUser.validate(req.body);
    if (error) {
        res.status(400).json({
            message: "Validation error",
            error: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        });
        return;
    }
    next();
});
exports.loginValidate = loginValidate;
//# sourceMappingURL=validation.js.map