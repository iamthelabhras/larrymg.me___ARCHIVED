export function generateCardStack(arrayOfCards, cardContainerSelector) {
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
