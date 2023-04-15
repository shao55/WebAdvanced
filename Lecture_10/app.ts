import express, { Express, Request, Response } from "express";
import { connect } from "mongoose";
import { Player } from "./models/PlayerModel";

const app: Express = express();

app.use(express.json());

run().catch((err) => console.log(err));

async function run() {
  try {
    await connect("mongodb://127.0.0.1:27017/thegame");
  } catch (err) {
    console.log(" db connection failed" + err);
  }

  // 4. Connect to MongoDB
}

app.get("/player", async (req: Request, res: Response) => {
  try {
    const player = await Player.findOne();
    res.status(200).json(player);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something is wrong in server (");
  }
});

app.get("/player/query", async (req: Request, res: Response) => {
  try {
    const player = await Player.where("name").equals("serik crud");
    res.status(200).json(player);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something is wrong in server (");
  }
});

app.post("/player/create", async (req: Request, res: Response) => {
  try {
    const player = new Player({
      name: "Serik CRUD",
      email: "serik@initech.com",
      skills: [
        { name: "fly", level: 51 },
        { name: "run", level: 10 },
      ],
      avatar: "https://i.imgur.com/dM7Thhn.png",
    });

    const bestFriend: any = await Player.findById("63da6d7e07fcdf1d28c2f925");

    player.bestFriend = bestFriend._id;
    // await player.fight();

    // await Player.updateOne(
    //   { _id: "63da6f7d8ade3e4919beb056" },
    //   { createDate: new Date() },
    //   { strict: "throw" }
    // );
    await player.save();

    console.log(player.email); // 'bill@initech.com'
    res.json(player);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log("server is running");
});
