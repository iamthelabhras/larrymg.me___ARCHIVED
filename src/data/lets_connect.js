// Social media and personal networking data.
export let letsConnect = 
  {
    codepen: 'https://codepen.io/iamthelabhras',
    emailPersonal: 'mailto:hello@larrymg.me',
    emailWork: 'mailto:working@larrymg.me',
    letterboxd: 'https://letterboxd.com/iamthelabhras/',
    linkedin: 'https://www.linkedin.com/in/larrymg/',
    resume: 'http://larrymg.me/my_work/resume.html',
    resumePDF: 'https://labhras.link/213',
    spotify: 'https://open.spotify.com/user/1287879969?si=feuL7qGwStCY3DLiKp1viw',
    twitter: 'http://www.twitter.com/iamthelabhras',
    website: 'https://larrymg.me',
  };


// Sitewide data-attribute-driven variabes for working with social media and networking data in the DOM.

export const codepen = document.querySelector("[data-lets_connect ='codepen']");

export const emailPersonal = document.querySelector("[data-lets_connect ='emailPersonal']");

export const emailWork = document.querySelector("[data-lets_connect ='emailWork']");

export const letterboxd = 
document.querySelector("[data-lets_connect ='letterboxd']");

export const linkedin = 
document.querySelector("[data-lets_connect ='linkedin']");

export const resume = 
document.querySelector("[data-lets_connect ='resume']");

export const resumePDF = 
document.querySelector("[data-lets_connect ='resumePDF'");

export const spotify = 
document.querySelector("[data-lets_connect ='spotify'");

export const twitter = document.querySelector("[data-lets_connect ='twitter'");

export const website = document.querySelector("[data-lets_connect ='website'");