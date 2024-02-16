"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfile = exports.getProfile = void 0;
const profileModel_1 = __importDefault(require("../db/models/profileModel"));
const getProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profileModel_1.default.find();
        return profile.map(mapToProfile);
    }
    catch (error) {
        throw new Error(`Failed to get Profile: ${error.message}`);
    }
});
exports.getProfile = getProfile;
const createProfile = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profileModel_1.default.create(body);
        return profile ? mapToProfile(profile) : null;
    }
    catch (error) {
        throw new Error(`Failed to get profile: ${error.message}`);
    }
});
exports.createProfile = createProfile;
// Function to map the mongoose document to a Profile object
const mapToProfile = (profile) => ({
    description: profile.description,
});
