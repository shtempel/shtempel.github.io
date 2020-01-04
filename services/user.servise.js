"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
const dto_1 = require("../dto");
const getAllUsers = (query) => dto_1.userDAL.getAll(query);
const getUserById = (userId) => dto_1.userDAL.getUser(userId);
const addUser = (newUser) => dto_1.userDAL.insertUser(newUser, uuid_1.default.v1().toString());
const updateUser = (userId, userToUpdate) => dto_1.userDAL.updateUser(userId, userToUpdate);
const deleteUser = (userId) => dto_1.userDAL.deleteUser(userId);
exports.userService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
