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
exports.createExperience = exports.getExperience = void 0;
const experienceModel_1 = __importDefault(require("../db/models/experienceModel"));
const getExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const experience = yield experienceModel_1.default.find();
        return experience.map(mapToExperience);
    }
    catch (error) {
        throw new Error(`Failed to get Experience: ${error.message}`);
    }
});
exports.getExperience = getExperience;
const createExperience = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const experience = yield experienceModel_1.default.create(body);
        return experience ? mapToExperience(experience) : null;
    }
    catch (error) {
        throw new Error(`Failed to get Experience: ${error.message}`);
    }
});
exports.createExperience = createExperience;
// Function to map the mongoose document to a Experience object
const mapToExperience = (experience) => ({
    title: experience.title,
    date: experience.date,
    company: experience.company,
    description: experience.description
});
