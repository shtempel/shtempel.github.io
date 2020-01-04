"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("@hapi/joi"));
const express_joi_validation_1 = require("express-joi-validation");
const MIN_AGE = 4;
const MAX_AGE = 130;
exports.validator = express_joi_validation_1.createValidator();
exports.addUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().required().greater(MIN_AGE).less(MAX_AGE),
    password: Joi.string().required().alphanum()
});
exports.updateUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().required().greater(MIN_AGE).less(MAX_AGE)
});
exports.updateUserQuerySchema = Joi.object({
    userId: Joi.string().required()
});
