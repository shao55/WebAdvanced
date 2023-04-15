import { model } from "mongoose";
import { IPlayer } from "../interfaces/IPlayer";
import { playerSchema } from "../schemas/PlayerSchema";

playerSchema.methods.fight = function fight() {
  console.log(this.name + " hitting you by a hammer !");
};

// 3. Create a Model.
export const Player = model<IPlayer>("Player", playerSchema);
