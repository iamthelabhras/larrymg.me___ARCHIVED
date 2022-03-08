// Import relevant modules.

import { allPersonalAssumptions } from "../data/all_personal_assumptions.js";
import { allPersonalRules } from "../data/all_personal_rules.js";
import { generateCardStack } from "./utility_functions.js";

// Grab total number of Coding Assumptions & insert into HTML.

const totalPersonalRules = document.querySelector("#total--personal_rules");
totalPersonalRules.innerHTML = `Personal Rules (${allPersonalRules.length})`;

// Grab total number of Coding Assumptions & insert into HTML.

const totalPersonalAssumptions = document.querySelector("#total--personal_assumptions");
totalPersonalAssumptions.innerHTML = `Personal Assumptions (${allPersonalAssumptions.length})`;

// Use generateCardStack function to dynamically generate HTML for Coding Rules & Coding Assumptions card stacks.

generateCardStack(allPersonalRules, container_personal_rules);
generateCardStack(allPersonalAssumptions, container_personal_assumptions);

