import { Schema } from "mongoose";
import { ISkills } from "../interfaces/ISkills";

// 2. Create a Schema corresponding to the document interface.
export const skillsSchema = new Schema<ISkills>({
  name: { type: String, required: true, lowercase: true },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    validate: {
      validator: (v: number) => v % 2 === 0,
      message: (params) => `${params.value} can not be odd :(*`,
    },
  },
});
