import { model } from "mongoose";
import { ISkills } from "../interfaces/ISkills";
import { skillsSchema } from "../schemas/SkillsSchema";

// 3. Create a Model.
export const Skill = model<ISkills>("Player", skillsSchema);
