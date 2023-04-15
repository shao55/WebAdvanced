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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const PlayerModel_1 = require("./models/PlayerModel");
const app = (0, express_1.default)();
app.use(express_1.default.json());
run().catch((err) => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/thegame");
        }
        catch (err) {
            console.log(" db connection failed" + err);
        }
        // 4. Connect to MongoDB
    });
}
app.get("/player", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield PlayerModel_1.Player.findOne();
        res.status(200).json(player);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Something is wrong in server (");
    }
}));
app.get("/player/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield PlayerModel_1.Player.where("name").equals("serik crud");
        res.status(200).json(player);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Something is wrong in server (");
    }
}));
app.post("/player/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = new PlayerModel_1.Player({
            name: "Serik CRUD",
            email: "serik@initech.com",
            skills: [
                { name: "fly", level: 51 },
                { name: "run", level: 10 },
            ],
            avatar: "https://i.imgur.com/dM7Thhn.png",
        });
        const bestFriend = yield PlayerModel_1.Player.findById("63da6d7e07fcdf1d28c2f925");
        player.bestFriend = bestFriend._id;
        // await player.fight();
        // await Player.updateOne(
        //   { _id: "63da6f7d8ade3e4919beb056" },
        //   { createDate: new Date() },
        //   { strict: "throw" }
        // );
        yield player.save();
        console.log(player.email); // 'bill@initech.com'
        res.json(player);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}));
app.listen(8080, () => {
    console.log("server is running");
});
