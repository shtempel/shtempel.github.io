"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const constants_1 = require("./constants");
const userRouter = express_1.default.Router();
userRouter.route(constants_1.ROUTES.userRoutes.root)
    .get(controllers_1.usersController.getUsers)
    .post(middlewares_1.validator.body(middlewares_1.addUserBodySchema), controllers_1.usersController.addUser)
    .all(controllers_1.usersController.notAllowed);
userRouter.route(constants_1.ROUTES.userRoutes.userId)
    .get(controllers_1.usersController.getUserById)
    .put(middlewares_1.validator.params(middlewares_1.updateUserQuerySchema), middlewares_1.validator.body(middlewares_1.updateUserBodySchema), controllers_1.usersController.updateUser)
    .delete(controllers_1.usersController.deleteUser)
    .all(controllers_1.usersController.notAllowed);
exports.default = userRouter;
