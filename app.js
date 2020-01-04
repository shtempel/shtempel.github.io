"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(constants_1.PORT, () => console.log(`Listening on port ${constants_1.PORT}`));
exports.default = app;
