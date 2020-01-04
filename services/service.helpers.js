"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToResponse = (response) => ({
    id: response.id,
    login: response.login,
    age: response.age
});
