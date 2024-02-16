"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = () => {
    const dbUri = process.env.DB_URI;
    if (!dbUri) {
        console.error('DB_URI not defined in environment variables');
        return;
    }
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default.connect(dbUri);
    const db = mongoose_1.default.connection;
    db.on('error', (err) => console.error('Error conectando a la BD:', err));
    db.once('open', () => {
        console.log('MongoDB connected 🚀');
    });
};
exports.default = dbConnect;
