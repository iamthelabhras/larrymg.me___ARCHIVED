const font = new FontFace(
  "cursive_flourish",
  "url(./fonts/learning_curve_bold_ot_tt.ttf)"
);

font.load().then(() => {
  document.fonts.add(font);
  document.body.style.fontFamily = "cursive_flourish, cursive";
});
