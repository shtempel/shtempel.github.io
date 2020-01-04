"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersBySubstring = (collection, substring) => substring && collection.filter((user) => user.login.toLowerCase().includes(substring.toLowerCase())) || [];
