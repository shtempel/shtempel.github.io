"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const users_parser_1 = require("../services/users.parser");
const constants_2 = require("./constants");
const db_1 = require("./db");
const dal_helpers_1 = require("./dal.helpers");
const dbInstance = db_1.getDbInstance();
const IS_DELETED = false;
const DEFAULT_START = 0;
const DEFAULT_END = 10;
const getAll = async (params) => {
    const { login, limit, offset } = params;
    const users = users_parser_1.usersParser(await dbInstance.getCollection(constants_2.DTO_CONSTANTS.users));
    const start = offset && parseInt(offset, 10) || DEFAULT_START;
    const end = limit && parseInt(limit, 10) + start || DEFAULT_END;
    return login
        ? dal_helpers_1.getUsersBySubstring(users, login).slice(start, end)
        : users.slice(start, end);
};
const getUser = async (userId) => {
    const collection = await dbInstance.getCollection(constants_2.DTO_CONSTANTS.users).then(users => users.filter(user => !user.isDeleted));
    return await collection.find((collectionItem) => collectionItem.id === userId) || undefined;
};
const insertUser = async (newUser, id) => {
    const collection = await dbInstance.getCollection(constants_2.DTO_CONSTANTS.users);
    if (collection.some(existingUser => existingUser.login.toLowerCase() === newUser.login.toLowerCase())) {
        throw new Error(`${newUser.login} ${constants_1.ERRORS.userExist}`);
    }
    collection.push({
        id: id,
        login: newUser.login,
        password: newUser.password,
        age: newUser.age,
        isDeleted: IS_DELETED
    });
};
const updateUser = async (userId, userToUpdate) => {
    const collection = await dbInstance.getCollection(constants_2.DTO_CONSTANTS.users);
    const user = collection.find(collectionItem => collectionItem.id === userId);
    if (!user) {
        throw new Error(constants_1.ERRORS.userNotFound);
    }
    else {
        Object.assign(user, userToUpdate);
    }
};
const deleteUser = async (userId) => {
    const collection = await dbInstance.getCollection(constants_2.DTO_CONSTANTS.users);
    const user = collection.find(collectionItem => collectionItem.id === userId);
    if (user && user.isDeleted || !user) {
        throw new Error(constants_1.ERRORS.userNotFound);
    }
    else {
        user.isDeleted = true;
    }
};
exports.userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};
