import { ISkills } from "./ISkills";
import { Types } from "mongoose";

interface IAchievements {
  bestPlayerOfYear: boolean;
  neverDead: boolean;
  collectedAllAwards: boolean;
}

// 1. Create an interface representing a document in MongoDB.
export interface IPlayer {
  name: string;
  email: string;
  avatar?: string;
  fight: () => void;
  skills: ISkills[];
  createDate: Date;
  achievements: IAchievements;
  bestFriend: Types.ObjectId;
}
