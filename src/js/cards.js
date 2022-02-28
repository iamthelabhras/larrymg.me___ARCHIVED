function generateCardStack(arrayOfCards, cardContainerSelector) {
  // Initialize a variable to collect the HTML for our entire card stack. 
  let html ="";
  let cardStackHTML = "";

  // Loop through each card object in our array and generate its HTML.
  arrayOfCards.forEach((card, index) => {
    // Increment each array item's index by one so rules start at #1.
    card.card_number = index+1;
    // Generate the HTML for each card in the stack. 
    cardStackHTML+=   
      `<div class="card" id="${card.card_number}">` + 
      `<span class="card_number">#${card.card_number}</span>` +
      `<p class="card_text">${card.body}</p>`;
    // If card links to Twitter, grab link & icon & insert into card. 
      if (card.social_link !== "") {
        cardStackHTML+= 
          `<span class="card_image">`  + 
          `<a href="${card.social_link}" target="_blank">` +
          `<img 
              src="../images/icons/icons8-twitter-blue.png"
              alt="Blue Twitter icon."
              loading="lazy" />` +
          `</a>` +
          `</span>`;
      };
  
    cardStackHTML+=
      `<span class="card_attribution">`;
    
    // If card links to source, insert a linked span element.
      if (card.source_link !== "")  {
        cardStackHTML+= 
          `<span class="card_source">` + 
           `<a href="${card.source_link}" target="_blank">Source:</a>` +
           `</span>`;
      }
    // Otherwise just insert an unlinked span.
      else {
        cardStackHTML+= 
          `<span class="source">Source:</span>`;
      }
              
   cardStackHTML+=` ${card.source}</span>` +
           `<div class="card_justifications">` +
           `<span class="cursive">Justifications:</span>` +
           `<ul>`;  
 
// If card has justifications , insert them as list items.

// Note that we are looping within an array within the object we are currently looping over here!

      if (card.justifications !== "") {
        card.justifications.forEach (justification => {
          cardStackHTML+=
            `<li>${justification}</li>`;
        });
      }
  
        cardStackHTML+=  
          `</ul>` +
          `</div>` +
          `<div class="card_concrete_applications">` +
          `<span class="cursive">Concrete Applications:</span>` +
          `<ul>`;
 
// If card has concrete applications, instert them as list items.

// Note that we are looping within an array within the object we are currently looping over here!
 
      if (card.concrete_applications !== "") {
        card.concrete_applications.forEach (application => {
          cardStackHTML+=
            `<li>${application}</li>`;
          });
        }            
// Add the final HTML to each card in our looped array.   

    cardStackHTML+=   
              `</ul>` + 
              `</div>` +
              `</div>`;
  
  
  });

// Collect each stacked card's HTML in a single variable for insertion into the DOM. 

  html+= cardStackHTML;
  console.log(html);
  cardContainerSelector.innerHTML = `${html}</div>`;

};


let allCodingRules = [

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/billsourour",
    source_link: "",
    source: "B. Sourour",
    body: "Refactor code into lots of small, independent components whenever & wherever you can.",
    justifications: ["This makes code easier to reason about!", "Not following this rule makes code difficult to reuse & costly to change."],
    concrete_applications: ["<a href='https://confreaks.tv/events/railsconf2014' target='_blank'>RailsConf 2014</a> | S. Metz, <a href='https://www.youtube.com/watch?v=8bZh5LMaSmE' target='_blank'>All The Little Things</a>"],
  },    
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/bradwestfall",
    source_link: "https://css-tricks.com/how-well-do-you-know-css-layout/",
    source: "B. Westfall",
    body: "Don't change a UI to accomodate Box Model issues that are easily avoided.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/bradwestfall",
    source_link: "",
    source: "B. Westfall",
    body: "Always look for patterns when solving problems.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/billsourour",
    source_link: "",
    source: "B. Sourour",
    body: "First make it work; then make it better.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/holtbt",
    source_link: "",
    source: "B. Holt",
    body: "Optimize for delete-ability.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/martinfowler",
    source_link: "",
    source: "M. Fowler",
    body: "Commit frequently & only do one thing per commit.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/iamthelabhras",
    source_link: "",
    source: "Mise Mé Féin",
    body: "When starting a new side project, create the site locally first and then purchase the domain name.",
    justifications: ["At any give time, Gandi has too many cool domain names on sale."],
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/MikeRiethmuller",
    source_link: "https://www.smashingmagazine.com/2016/05/fluid-typography/",
    source: "M. Riethmuller",
    body: "To avoid older browser bugs with calc() & viewport units (e.g. vw & vh ), set sensible default font sizes before declaring a fluid calc() expression.",
    justifications: "",
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/CoreyMSchafer",
    source_link: "https://www.youtube.com/watch?v=HVsySz-h9r4",
    source: "C. Schafer",
    body: "GUI tools are useful but it's better to learn command line tools from the beginning.",
    justifications: ["GUIs can only do so much and you will eventually run into a situation where you get stuck and the underlying knowledge of the command line would be extremely useful."],
    concrete_applications: "",
  },

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/goldbergyoni",
    source_link: "https://github.com/goldbergyoni/javascript-testing-best-practices",
    source: "Y. Goldberg",
    body: "One should look at a test and get the intent instantly.",
    justifications: "",
    concrete_applications: "",
  },

]; 

let allCodingAssumptions = [

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "",
    source_link: "",
    source: "A. Bell",
    body: "We build the web for everyone, not ourselves or our peers.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/billsourour",
    source_link: "",
    source: "B. Sourour",
    body: "Almost every bug rests on a bad assumption.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/sarah_edo",
    source_link: "",
    source: "S. Drasner",
    body: "By choosing to be a developer, you are choosing to learn.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "",
    source_link: "",
    source: "Anonymous",
    body: "It only takes on instance of losing a few hours of work to know that slow and steady is the way to go.",
    justifications: "",
    concrete_applications: "",
  }, 

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/realdonaldknuth",
    source_link: "",
    source: "D. Knuth",
    body: "People that comptuer science is the art of geniuses but the actual reality is the opposite: just many people doing things that build on each, like a wall of mini-stones.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/syntaxfm",
    source_link: "",
    source: "Syntax Podcast",
    body: "If you write it, you don't have to learn it.",
    justifications: "",
    concrete_applications: "",
  }, 

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "",
    source_link: "",
    source: "Anonymous",
    body: "The first 90% of your code accounts for the first 90% of development time; the remaining 10% of the code accounts for the other 90% of development time.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/joanperals",
    source_link: "https://zerodivs.com/#/about",
    source: "J. Perals",
    body: "The first 90% of your code accounts for the first 90% of development time; the remaining 10% of the code accounts for the other 90% of development time.",
    justifications: "",
    concrete_applications: "",
  }, 
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/jamesqquick",
    source_link: "",
    source: "J. Quick",
    body: "The best way to learn is to build.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/KevinJPowell",
    source_link: "",
    source: "K. Powell",
    body: "CSS is a visual language at the end of the day: make the visual punch you in the face so you really understand what's going on, then tone things down.",
    justifications: "",
    concrete_applications: "",
  }, 

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/KevinJPowell",
    source_link: "",
    source: "K. Powell",
    body: "Although we use several different languages when putting together websites, CSS is the only one that has to deal with the 'webiness' of the web.",
    justifications: "",
    concrete_applications: ["This is the primary challenge of working with CSS!"],
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/holtbt",
    source_link: "",
    source: "B. Holt",
    body: "If something is delete-able, it's modular; and if it's modular, it's great ",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/billsourour",
    source_link: "",
    source: "B. Sourour",
    body: "The best devs deeply understand how the languages & frameworks they use actually work (versus how they think they work).",
    justifications: ["Almost every bug rests on a bad assumption."],
    concrete_applications: ["<a href='https://overreacted.io/' target='_blank'>Overreacted</a> | D. Abramov, <a href='https://overreacted.io/how-does-react-tell-a-class-from-a-function/' target='blank'>How React distinguishes a JavaScript class from a JavaScript function.</a>"],
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/rachelandrew",
    source_link: "",
    source: "R. Andrews",
    body: "Mastering core skills & concepts (e.g. HTML, Pure CSS, Vanilla JS) allows devs to hold the tools built on top of those skills lightly, learn quicky, and switch easily.",
    justifications: "",
    concrete_applications: "",
  },
  
  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/MarijnJH",
    source_link: "",
    source: "M. Haverbeke",
    body: "Computing new values is less error-prone than changing existing values.",
    justifications: "",
    concrete_applications: "",
  }, 

  {
    card_number: undefined,  // value is dynamically via .forEach method below.
    social_link: "https://twitter.com/goldbergyoni",
    source_link: "",
    source: "Y. Goldberg",
    body: "A test should feel like a friendly assistant - there to help you - and should never feel like a hindrance.",
    justifications: "",
    concrete_applications: "",
  }, 

];

// Calculate total number of Coding Rules & insert into HTML.

const totalCodingRules = document.querySelector("#total--coding_rules");
totalCodingRules.innerHTML = `Coding Rules (${allCodingRules.length})`;

// Calculate total number of Coding Assumptions & insert into HTML.

const totalCodingAssumptions = document.querySelector("#total--coding_assumptions");
totalCodingAssumptions.innerHTML = `Coding Assumptions (${allCodingAssumptions.length})`;

// Use generateCardStack function to dynamically generate HTML for all card stacks on page.

generateCardStack(allCodingRules, container_coding_rules);
generateCardStack(allCodingAssumptions, container_coding_assumptions);

