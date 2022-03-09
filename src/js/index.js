import { letsConnect, codepen, emailPersonal, letterboxd, linkedin, resume, spotify, twitter } from "../data/lets_connect.js";

import { generateThisWeekLearning } from "../js/utility_functions.js";
import { generateThisWeekReading } from "../js/utility_functions.js";
import { generateThisWeekWatching } from "../js/utility_functions.js";
import { generateThisWeekHotTrack} from "../js/utility_functions.js";
import { generateThisWeekHotLaugh} from "../js/utility_functions.js";

import { personal_data } from "../data/personal.js";

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

// Current Location

currentLocation = document.querySelector("#current_location");
console.log(currentLocation);
currentLocation.textContent = `${personal_data.current_location}`;