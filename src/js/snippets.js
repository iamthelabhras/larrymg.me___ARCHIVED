import { letsConnect, emailPersonal, letterboxd, linkedin, spotify, twitter } from "../data/lets_connect.js";

import { generateThisWeekLearning } from "./utility_functions.js";
import { generateThisWeekReading } from "./utility_functions.js";
import { generateThisWeekWatching } from "./utility_functions.js";
import { generateThisWeekHotTrack} from "./utility_functions.js";
import { generateThisWeekHotLaugh} from "./utility_functions.js";

// Let's Connect

emailPersonal.setAttribute("href", `${letsConnect.emailPersonal}`);
letterboxd.setAttribute("href", `${letsConnect.letterboxd}`);
linkedin.setAttribute("href", `${letsConnect.linkedin}`);
spotify.setAttribute("href", `${letsConnect.spotify}`);
twitter.setAttribute("href", `${letsConnect.twitter}`);

// This Week

generateThisWeekLearning();
generateThisWeekReading();
generateThisWeekWatching();
generateThisWeekHotTrack();
generateThisWeekHotLaugh();
