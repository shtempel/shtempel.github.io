"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersParser = (users) => {
    return users
        .filter(user => !user.isDeleted).map(user => ({
        id: user.id,
        login: user.login,
        age: user.age
    }));
};
