import { letsConnect, codepen, emailPersonal, letterboxd, linkedin, resume, spotify, twitter } from "../data/lets_connect";

import { generateThisWeekLearning } from "../js/utility_functions";
import { generateThisWeekReading } from "../js/utility_functions";
import { generateThisWeekWatching } from "../js/utility_functions";
import { generateThisWeekHotTrack} from "../js/utility_functions";
import { generateThisWeekHotLaugh} from "../js/utility_functions";

// Let's Connect

codepen.setAttribute("href", `${letsConnect.codepen}`);
emailPersonal.setAttribute("href", `${letsConnect.emailPersonal}`);
letterboxd.setAttribute("href", `${letsConnect.letterboxd}`);
linkedin.setAttribute("href", `${letsConnect.linkedin}`);
resume.setAttribute("href", `${letsConnect.resume}`);
spotify.setAttribute("href", `${letsConnect.spotify}`);
twitter.setAttribute("href", `${letsConnect.twitter}`);

// This Week

generateThisWeekLearning();
generateThisWeekReading();
generateThisWeekWatching();
generateThisWeekHotTrack();
generateThisWeekHotLaugh();