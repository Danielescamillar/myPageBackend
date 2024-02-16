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
exports.createSkill = exports.getSkillById = exports.getAllSkills = void 0;
const skillModel_1 = __importDefault(require("../db/models/skillModel"));
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield skillModel_1.default.find();
        return skills.map(mapToSkill);
    }
    catch (error) {
        throw new Error(`Failed to get skill: ${error.message}`);
    }
});
exports.getAllSkills = getAllSkills;
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield skillModel_1.default.findById(id);
        return skill ? mapToSkill(skill) : null;
    }
    catch (error) {
        throw new Error(`Error al obtener la habilidad: ${error.message}`);
    }
});
exports.getSkillById = getSkillById;
const createSkill = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield skillModel_1.default.create(body);
        return skill ? mapToSkill(skill) : null;
    }
    catch (error) {
        throw new Error(`Failed to get skill: ${error.message}`);
    }
});
exports.createSkill = createSkill;
// Función para mapear el documento de mongoose a un objeto Skill
const mapToSkill = (skill) => ({
    id: skill._id.toString(),
    name: skill.name,
    description: skill.description,
    image: skill.image
});
