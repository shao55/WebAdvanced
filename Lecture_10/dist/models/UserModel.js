"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = require("mongoose");
const UserSchema_1 = require("../schemas/UserSchema");
UserSchema_1.playerSchema.methods.fight = function fight() {
    console.log(this.name + " hitting you by a hammer !");
};
// 3. Create a Model.
exports.Player = (0, mongoose_1.model)("Player", UserSchema_1.playerSchema);
