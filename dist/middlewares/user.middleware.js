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
exports.userQueryMiddleware = exports.userMiddleware = void 0;
const commonFunctions_1 = require("../utilities/commonFunctions");
const user_repository_1 = require("../repositories/user.repository");
const userMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorization = req.headers["authorization"];
        if (!authorization) {
            throw new Error("Authorization header is missing");
        }
        const token = authorization.split(" ")[1];
        const decodedToken = yield (0, commonFunctions_1.decodeToken)(token);
        const user = yield (0, user_repository_1.getUserById)(decodedToken.userId);
        if (!user) {
            throw new Error("User not found");
        }
        req.body = Object.assign(Object.assign({}, req.body), { userId: decodedToken.userId, role: user.role });
        next();
    }
    catch (error) {
        console.error("Error in user middleware:", error.message);
        res.status(500).json({ message: error.message });
    }
});
exports.userMiddleware = userMiddleware;
const userQueryMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorization = req.headers["authorization"];
        if (!authorization) {
            throw new Error("Authorization header is missing");
        }
        const token = authorization.split(" ")[1];
        const decodedToken = yield (0, commonFunctions_1.decodeToken)(token);
        // Try to extract userId from token; fallback to token.sub if userId is undefined
        const userId = decodedToken.userId || decodedToken.sub;
        if (!userId) {
            throw new Error("User ID not found in token");
        }
        const user = yield (0, user_repository_1.getUserById)(userId);
        if (!user) {
            throw new Error("User not found");
        }
        // Instead of modifying req.query, attach user information to a new property.
        req.body = Object.assign(Object.assign({}, req.body), { userId: userId, role: user.role });
        next();
    }
    catch (error) {
        console.error("Error in user query middleware:", error.message);
        res.status(500).json({ message: error.message });
    }
});
exports.userQueryMiddleware = userQueryMiddleware;
//# sourceMappingURL=user.middleware.js.map