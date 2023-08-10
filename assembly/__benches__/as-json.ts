import { JSON } from "..";
import { backSlashCode, quoteCode } from "../src/chars";
import { atoi_fast, parseSciInteger, snip_fast, unsafeCharCodeAt } from "../src/util";
import { HASH } from "util/hash";


let last = 1;
let char = 0;
let inStr = false;
let key: string | null = null;
let pos = 0;

@json
class Vec3 {
  x: i32;
  y: i32;
  z: i32;
}

const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8,
}
/*
bench("Parse Number SNIP", () => {
  blackbox<i32>(snip_fast<i32>("12345"));
});

bench("Parse Number ATOI", () => {
  blackbox<i32>(atoi_fast<i32>("12345"));
})

bench("Parse Number STDLIB", () => {
  blackbox<i32>(i32.parse("12345"));
});

bench("Parse Number OLD", () => {
  blackbox<i32>(parseSciInteger<i32>("12345"));
});

//bench("Stringify Object (Vec3)", () => {
//  blackbox<string>(vec.__JSON_Serialize());
//});

// TODO: Make this allocate without crashing
//bench("Parse Object (Vec3)", () => {
//  blackbox<Vec3>(vec.__JSON_Deserialize('{"x":0,"y":0,"z":0}', vec));
//});

bench("Stringify Number Array", () => {
  blackbox(JSON.stringify<i32[]>([1, 2, 3]));
});
*/
bench("Parse Number Array", () => {
  blackbox(JSON.parse<i32[]>(blackbox("[1,2,3]")));
});

bench("Stringify String", () => {
  blackbox(JSON.stringify(blackbox('Hello "World!')));
});

bench("Parse String", () => {
  blackbox(JSON.parse<string>(blackbox('"Hello "World!"')));
});
/*
bench("Stringify Boolean Array", () => {
  blackbox(JSON.stringify<boolean[]>([true, false, true]));
});

bench("Stringify String Array", () => {
  blackbox(JSON.stringify<string[]>(["a", "b", "c"]));
});

bench("Stringify Boolean", () => {
  blackbox(JSON.stringify(blackbox(true)));
});

bench("Parse Boolean", () => {
  blackbox(JSON.parse<boolean>(blackbox("true")));
});

bench("Stringify Integer", () => {
  blackbox(JSON.stringify(blackbox(314)));
});*/

bench("Parse Integer", () => {
  blackbox(JSON.parse<i32>(blackbox("314")));
});
/*
bench("Stringify Float", () => {
  blackbox(JSON.stringify(blackbox(3.14)));
});

bench("Parse Float", () => {
  blackbox(JSON.parse<f32>(blackbox("3.14")));
});
*/