import mongoose, { Schema } from "mongoose";
import { IPlayer } from "../interfaces/IPlayer";
import { skillsSchema } from "./SkillsSchema";

// 2. Create a Schema corresponding to the document interface.
export const playerSchema = new Schema<IPlayer>({
  name: { type: String, required: true, lowercase: true },
  email: { type: String, required: true },
  createDate: { type: Date, default: () => new Date(), immutable: true },
  skills: [skillsSchema],
  achievements: {
    bestPlayerOfYear: { type: Boolean, immutable: true },
    neverDead: { type: Boolean, immutable: true },
    collectedAllAwards: { type: Boolean, immutable: true },
  },
  avatar: String,
  bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "Player" },
});
