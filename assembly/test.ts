import "wasi";
import {
  JSON
} from ".";

// @ts-ignore
@json
class Vec2 {
  /**
   * x > 4 && x < 100
   */
  private x: f32 = 0;
  y: f32;
}

// @ts-ignore
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec2;
  isVerified: boolean;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    y: 1.2,
  },
  isVerified: true,
};

const vec: Vec2 = {
  y: 0.0
}
const serializedPlayer = JSON.stringify<Player>(player);
console.log("Serialized Player: " + serializedPlayer);
const deserializedPlayer = JSON.parse<Player>(serializedPlayer);
console.log("Deserialized Player: " + JSON.stringify(deserializedPlayer));

const serializedVec2 = JSON.stringify<Vec2>(vec);
console.log("Serialized Vec2: " + serializedVec2);
const deserializedVec2 = JSON.parse<Vec2>(serializedVec2);

console.log("Deserialized Vec2: " + JSON.stringify(deserializedVec2));