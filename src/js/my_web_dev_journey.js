import { letsConnect, emailPersonal, letterboxd, linkedin, spotify, twitter } from "../data/lets_connect";

import { generateThisWeekLearning } from "./utility_functions";
import { generateThisWeekReading } from "./utility_functions";
import { generateThisWeekWatching } from "./utility_functions";
import { generateThisWeekHotTrack} from "./utility_functions";
import { generateThisWeekHotLaugh} from "./utility_functions";

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