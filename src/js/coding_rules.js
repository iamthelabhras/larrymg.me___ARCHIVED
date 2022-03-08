// Import relevant modules.

import { allCodingAssumptions } from "../data/all_coding_assumptions.js";
import { allCodingRules } from "../data/all_coding_rules.js"
import { generateCardStack } from "./utility_functions.js";
import { generateCardStackIcons } from "./utility_functions.js";

// Grab total number of Coding Assumptions & insert into HTML.

const totalCodingRules = document.querySelector("#total--coding_rules");
totalCodingRules.innerHTML = `Coding Rules (${allCodingRules.length})`;

// Grab total number of Coding Assumptions & insert into HTML.

const totalCodingAssumptions = document.querySelector("#total--coding_assumptions");
totalCodingAssumptions.innerHTML = `Coding Assumptions (${allCodingAssumptions.length})`;

// Use generateCardStack function to dynamically generate HTML for Coding Rules & Coding Assumptions card stacks.

generateCardStack(allCodingRules, container_coding_rules);
generateCardStack(allCodingAssumptions, container_coding_assumptions);
generateCardStackIcons();

