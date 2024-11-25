import { updateTime } from "./updateTime.js";
setInterval(() => {
  updateTime();
}, 1000);

import { updateDate } from "./updateDate.js";
updateDate();

import { updateNavig } from "./updateNavig.js";
updateNavig();
