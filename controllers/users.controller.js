"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const constants_1 = require("../constants");
const services_1 = require("../services");
const service_helpers_1 = require("../services/service.helpers");
const getUsers = async (request, response) => {
    try {
        const users = await services_1.userService.getAllUsers(request.query);
        return response.json(users).send({ status: 'success' });
    }
    catch (error) {
        response.status(error.status).send();
    }
};
const getUserById = async (request, response) => {
    try {
        const user = await services_1.userService.getUserById(request.params.userId);
        if (!user)
            throw ({ status: 404, message: constants_1.ERRORS.userNotFound });
        return response.send({ user: service_helpers_1.userToResponse(user), status: 'success' });
    }
    catch (error) {
        const err = http_errors_1.default(400, { message: error.message });
        response.status(error.status).send({ error: err });
    }
};
const addUser = async (request, response) => {
    try {
        const user = await services_1.userService.addUser(request.body);
        response.send({ status: 'success' }).json(user);
    }
    catch (error) {
        const err = http_errors_1.default(400, { message: error.message });
        response.status(err.status).send({ error: err });
    }
};
const updateUser = async (request, response) => {
    try {
        await services_1.userService.updateUser(request.params.userId, request.body);
        response.send({ status: 'success' });
    }
    catch (error) {
        const err = http_errors_1.default(404, { message: error.message });
        response.status(err.status).send({ error: err });
    }
};
const deleteUser = async (request, response) => {
    try {
        await services_1.userService.deleteUser(request.params.userId);
        response.send({ status: 'success' });
    }
    catch (error) {
        const err = http_errors_1.default(404, { message: error.message });
        response.status(err.status).send({ error: err });
    }
};
const notAllowed = (request, response) => {
    let err = http_errors_1.default(405, constants_1.ERRORS.methodNotAllowed);
    response.status(err.status).send({ status: err.status, message: err.message });
};
exports.usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser,
    notAllowed
};
