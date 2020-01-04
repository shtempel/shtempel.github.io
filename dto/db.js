"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
exports.getDbInstance = () => DB;
const getDbCollection = async (collection) => exports.getDbInstance().db[collection];
const DB = {
    getCollection: getDbCollection,
    db: {
        ['users']: [
            {
                id: uuid_1.default.v1(),
                login: 'Jake',
                password: 'ewq',
                age: 35,
                isDeleted: false
            },
            {
                id: '123',
                login: 'Kit',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid_1.default.v1(),
                login: 'Nik',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid_1.default.v1(),
                login: 'Bruce',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid_1.default.v1(),
                login: 'John',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid_1.default.v1(),
                login: 'Mike',
                password: 'qwe',
                age: 35,
                isDeleted: false
            }
        ]
    }
};
