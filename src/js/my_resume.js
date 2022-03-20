// Import relevant modules.

import { allResumeData } from "../data/all_resume_data.js";

// Insert currently studying data into the DOM. 

const currentlyStudying = document.querySelector("#container--currently_studying_icons_and_text");

const currentlyStudyingTopicHTML = `<span class="text_bold">${allResumeData.currently_studying}</span>`;

currentlyStudying.innerHTML += 
   `${currentlyStudyingTopicHTML}`;

// Insert latest discovery data into the DOM. 

const latestDiscovery = document.querySelector("#latest_discovery");

const latestDiscoveryHTML = `Latest discovery: <a href="${allResumeData.latest_discovery_link}" target="_blank">${allResumeData.latest_discovery}</a>`;

latestDiscovery.innerHTML = latestDiscoveryHTML;

console.log("It works!");