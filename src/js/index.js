import { letsConnect, codepen, emailPersonal, letterboxd, linkedin, spotify, twitter, resume } from "../data/lets_connect";

// Let's Connect

codepen.setAttribute("href", `${letsConnect.codepen}`);
emailPersonal.setAttribute("href", `${letsConnect.emailPersonal}`);
letterboxd.setAttribute("href", `${letsConnect.letterboxd}`);
linkedin.setAttribute("href", `${letsConnect.linkedin}`);
resume.setAttribute("href", `${letsConnect.resume}`);
spotify.setAttribute("href", `${letsConnect.spotify}`);
twitter.setAttribute("href", `${letsConnect.twitter}`);

// TO DO: Figure out why I put this in here?

const font = new FontFace(
  "cursive_flourish",
  "url(./fonts/learning_curve_bold_ot_tt.ttf)"
);

font.load().then(() => {
  document.fonts.add(font);
  document.body.style.fontFamily = "cursive_flourish, cursive";
});

console.log ("INDEX.JS READ.");
console.log (twitter);