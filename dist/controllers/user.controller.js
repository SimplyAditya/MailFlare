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
exports.createNewUser = void 0;
const commonFunctions_1 = require("../utilities/commonFunctions");
const user_service_1 = require("../services/user.service");
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = Object.assign(Object.assign({}, req.body), { password: yield (0, commonFunctions_1.hashText)(req.body.password) });
        const user = yield (0, user_service_1.generateUser)(data);
        res.status(201).json({ user });
    }
    catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.createNewUser = createNewUser;
//# sourceMappingURL=user.controller.js.map