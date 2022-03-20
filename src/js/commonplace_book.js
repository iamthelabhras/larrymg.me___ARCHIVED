// Import relevant modules.

import { allCommonplaceBookEntries } from "../data/all_commonplace_book_entries.js";
import { generateCardStack } from "./utility_functions.js";
import { generateCardStackIcons } from "./utility_functions.js";

// Grab all Commonplace Book entries & insert into HTML.

const totalCommonplaceBookEntries = document.querySelector("#total--commonplace_book_entries");
totalCommonplaceBookEntries.innerHTML = `Commonplace Book (${allCommonplaceBookEntries.length})`;

// Use generateCardStack function to dynamically generate HTML for Coding Rules & Coding Assumptions card stacks.

generateCardStack(allCommonplaceBookEntries, container_commonplace_book_entries);
generateCardStackIcons();

