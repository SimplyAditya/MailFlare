"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getCompleteUserByEmailOrMobile = exports.getUserByEmailOrMobile = exports.getUserById = exports.createUser = void 0;
const db_1 = __importDefault(require("../db"));
const userSelect = {
    id: true,
    email: true,
    mobile: true,
    name: true,
    createdAt: true,
    role: true,
};
const createUser = (data) => db_1.default.user.create({ data: data, select: userSelect });
exports.createUser = createUser;
const getUserById = (id) => db_1.default.user.findUnique({
    where: { id },
    select: userSelect,
});
exports.getUserById = getUserById;
const getUserByEmailOrMobile = (email, mobile) => db_1.default.user.findFirst({
    where: {
        OR: [{ email }, { mobile }],
    },
    select: userSelect,
});
exports.getUserByEmailOrMobile = getUserByEmailOrMobile;
const getCompleteUserByEmailOrMobile = (email, mobile) => db_1.default.user.findFirst({
    where: {
        OR: [{ email }, { mobile }],
    },
});
exports.getCompleteUserByEmailOrMobile = getCompleteUserByEmailOrMobile;
const getAllUsers = () => db_1.default.user.findMany({
    where: { isDeleted: false },
    select: userSelect,
});
exports.getAllUsers = getAllUsers;
const updateUser = (id, data) => db_1.default.user.update({
    where: { id },
    data: data,
    select: userSelect,
});
exports.updateUser = updateUser;
const deleteUser = (id) => db_1.default.user.update({
    where: { id },
    data: { isDeleted: true },
    select: userSelect,
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.repository.js.map