import fb from "./assets/fb.svg";
import fbOff from "./assets/fb_disabled.svg";
import vk from "./assets/vk.svg";
import vkOff from "./assets/vk_disabled.svg";
import ok from "./assets/ok.svg";
import okOff from "./assets/ok_disabled.svg";
import insta from "./assets/insta.svg";
import instaOff from "./assets/insta_disabled.svg";
import tikTok from "./assets/tik-tok.svg";
import tiktokOff from "./assets/tik-tok_disabled.svg";

export const minuteMarks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 600,
    label: "600 мин.",
  },
];

export const internetMarks = [
  {
    value: 5,
    label: "5 ГБ",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 25,
    label: "25",
  },
];

export const smsMarks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 150,
    label: "150",
  },
];

export const socials = [
  {
    name: "fb",
    value: 20,
    on: `${fb}`,
    off: `${fbOff}`,
    clicked: false,
  },
  {
    name: "vk",
    value: 20,
    on: `${vk}`,
    off: `${vkOff}`,
    clicked: false,
  },
  {
    name: "ok",
    value: 20,
    on: `${ok}`,
    off: `${okOff}`,
    clicked: false,
  },
  {
    name: "insta",
    value: 60,
    on: `${insta}`,
    off: `${instaOff}`,
    clicked: false,
  },

  {
    name: "tiktok",
    value: 60,
    on: `${tikTok}`,
    off: `${tiktokOff}`,
    clicked: false,
  },
];
