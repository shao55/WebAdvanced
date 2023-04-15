"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const SkillsSchema_1 = require("../schemas/SkillsSchema");
// 3. Create a Model.
exports.Skill = (0, mongoose_1.model)("Player", SkillsSchema_1.skillsSchema);
