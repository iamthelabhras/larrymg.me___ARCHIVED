import { thisWeekLearning } from "../data/this_week.js";
import { thisWeekReading } from "../data/this_week.js";
import { thisWeekWatching } from "../data/this_week.js";
import { thisWeekHotTrack } from "../data/this_week.js";
import { thisWeekHotLaugh } from "../data/this_week.js";

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
    // If card links to Twitter, grab link & insert into card. 

    // NOTE:  Linked icon is added via a separate call to generateCardStickIcons() to ensure Parcel can 'see' it at build time.  See: https://parceljs.org/languages/javascript/#url-dependencies for more details.

      if (card.social_link !== "") {
        cardStackHTML+= 
          `<span class="card_image">`  + 
          `<a href="${card.social_link}" class="card_icon" target="_blank">` +
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

export function generateCardStackIcons() {
  //  NOTE: This function must be run *after* generateCardStack(). 
  
  //  Select all cards in the DOM that need icons.
  const cardsWithIcons = document.querySelectorAll(".card_icon");

  //  Loop over all cards in the DOM that need icons & add icons.
  cardsWithIcons.forEach(card  => {
  const icon  = document.createElement('img');
  icon.src = new URL('../images/icons/icons8-twitter-blue.png', import.meta.url);
  card.appendChild(icon);
  });
};

export function generateThisWeekLearning() {
  let learningList = document.querySelector("#what_im_learning_list");
  thisWeekLearning.subjects.forEach(function (subject) {
    let html = "";
    if (subject.subjectBullets !== []) {
      html += `<li>`; 
      html += `${subject.subjectName}`;
      html += `<ul>`;
      subject.subjectBullets.forEach(bullet => html += `<li>${bullet}</li>`);
      html += `</ul>`;
      html += `</li>`;
      }
    else {
      html += `<li>`;
      html += `${subject.subjectName}`;
      html += `<li>`;
      }
    learningList.innerHTML += html;
    });
};

export function generateThisWeekReading() {
  let readingList = document.querySelector("#what_im_reading_list");
  thisWeekReading.readings.forEach(function (reading) {
    let html = "";
    if (reading.readingAuthorLink !== "") {
      html += `<li>`;
      html += `${reading.readingTitle}`;
      html += `<span class="author">`;
      html += `<a href="`;
      html+= `${reading.readingAuthorLink}`;
      html += `" target="_blank">`;
      html += `${reading.readingAuthor}`;
      html += `</a>`;
      html += `</li>`;
      }
    else {
      html += `<li>`; 
      html += `${reading.readingTitle}`;
      html += `<span class="author">`;
      html += `${reading.readingAuthor}`;
      html += `</li>`;
      }
    readingList.innerHTML += html;
    });
};

export function generateThisWeekWatching() {
  let watchingList = document.querySelector("ul#what_im_watching_list");
  thisWeekWatching.videos.forEach(function (video, index) {
    let html = "";
    index += 1;
    const li = document.createElement(`li`);
    li.id = "thisWeekWatching-" + `${index}`;
    watchingList.appendChild(li);
    const watchingListItem = document.querySelector(`#thisWeekWatching-${index}`);
    if (video.videoTrailer !== "") {
      const trailer = document.createElement(`video`);
      trailer.id = "video-" + `${index}`;
      trailer.controls = true;
      watchingListItem.appendChild(trailer);
      const trailerSource = document.createElement(`source`);
      trailerSource.src = new URL(`${video.videoTrailer}`, import.meta.url);
      trailerSource.type = `video/mp4`;
      const appendedTrailer = document.querySelector(`#video-${index}`);
      appendedTrailer.appendChild(trailerSource);
      appendedTrailer.innerHTML += `Sorry, your browser doesn't support embedded videos.`;
      watchingListItem.innerHTML += `${video.videoTitle}`;
      }
    else {
      watchingListItem.innerHTML += `${video.videoTitle}`;
      }
    html += `<span class="clean_break_on_wrap">`;
    html += ` (${video.videoYear}, `;
    if (video.videoDirectorLink !== "") {
      html += `dir. `;
      html += `<a href="`;
      html += `${video.videoDirectorLink}`;
      html += `" target="_blank">`;
      html += `${video.videoDirector}`;
      html += `</a>)`;
    }
    else {
      html += `dir. `;
      html += `${video.videoDirector})`;
    };
    html += `</span>`;
    html += `</li>`;
    watchingListItem.innerHTML += html;
    });
};

export function generateThisWeekHotTrack () {
    let hotTrack = document.querySelector("#hot_track_container");
    let html = "";
    const ul = document.createElement(`ul`);
    const li = document.createElement(`li`);
    hotTrack.appendChild(ul);
    const hotTrackUnorderedList = document.querySelector("#hot_track_container ul");
    hotTrackUnorderedList.appendChild(li);
    const hotTrackListItem = document.querySelector("#hot_track_container li");
    const video = document.createElement(`video`);
    video.id = `trackVideoLink`;
    video.controls = true;
    hotTrackListItem.appendChild(video);
    const videoSource = document.createElement(`source`);
    videoSource.src = new URL(`${thisWeekHotTrack.trackVideoLink}`, import.meta.url);
    videoSource.type = `video/mp4`;
    const appendedVideo = document.querySelector("#trackVideoLink");
    appendedVideo.appendChild(videoSource);
    appendedVideo.innerHTML += `Sorry, your browser doesn't support embedded videos.`;
    html += `<a href="${thisWeekHotTrack.trackTitleLink}" target="_blank">`;
    html += `${thisWeekHotTrack.trackTitle}</a>`;
    html += `<span class="clean_break_on_wrap">`;
    html += `(${thisWeekHotTrack.trackYear}, `;
    html += `<a href="${thisWeekHotTrack.trackArtistLink}" target="_blank">`;
    html += `${thisWeekHotTrack.trackArtist}`;
    html += `</a>`;
    html += `)`;
    html += `</span>`;
    hotTrackListItem.innerHTML += html;
};


export function generateThisWeekHotLaugh () {
  let hotLaugh = document.querySelector("#hot_laugh_container");
  let html = "";
  const ul = document.createElement(`ul`);
  const li = document.createElement(`li`);
  hotLaugh.appendChild(ul);
  const hotLaughUnorderedList = document.querySelector("#hot_laugh_container ul");
  hotLaughUnorderedList.appendChild(li);
  const hotLaughListItem = document.querySelector("#hot_laugh_container li");
  const video = document.createElement(`video`);
  video.id = `laughVideoLink`;
  video.controls = true;
  hotLaughListItem.appendChild(video);
  const videoSource = document.createElement(`source`);
  videoSource.src = new URL(`${thisWeekHotLaugh.laughVideoLink}`, import.meta.url);
  videoSource.type = `video/mp4`;
  const appendedVideo = document.querySelector("#laughVideoLink");
  appendedVideo.appendChild(videoSource);
  appendedVideo.innerHTML += `Sorry, your browser doesn't support embedded videos.`;
  html += `<a href="${thisWeekHotLaugh.laughTitleLink}" target="_blank">`;
  html += `${thisWeekHotLaugh.laughTitle}</a>`;
  html += `<span class="clean_break_on_wrap">`;
  html += `(${thisWeekHotLaugh.laughYear}, `;
  html += `<a href="${thisWeekHotLaugh.laughArtistLink}" target="_blank">`;
  html += `${thisWeekHotLaugh.laughArtist}`;
  html += `</a>`;
  html+= `)`;
  html += `</span>`;
  hotLaughListItem.innerHTML += html;
};
