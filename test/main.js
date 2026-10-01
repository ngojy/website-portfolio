/* ===== ADD IMAGES HERE =====
   Paste an image link or a data: URI between the quotes. Leave "" to keep white.
   avatar = your picture (circle). hero = top banner background.
   about / projects / skills / contact = background of each section.
   shot1 / shot2 = project screenshots. */
var IMAGES = {
  hero: "images/A6701073.JPG",
  avatar: "images/avatar.png",
  about: "",
  projects: "images/A6701490.JPG",
  skills: "",
  contact: "",
  shot1: "",
  shot2: ""
};
/* ===== END ===== */

function bg(id, url){ if(url){ document.getElementById(id).style.backgroundImage = 'url("' + url + '")'; } }
function pic(id, url, alt){ if(url){ var el = document.getElementById(id); el.textContent = ""; var i = new Image(); i.src = url; i.alt = alt; el.appendChild(i); } }
bg("topbg", IMAGES.hero); bg("projects", IMAGES.projects);
bg("skills", IMAGES.skills); bg("contact", IMAGES.contact);
pic("avatar", IMAGES.avatar, "Jeremy"); pic("shot1", IMAGES.shot1, "Project 1 screenshot"); pic("shot2", IMAGES.shot2, "Project 2 screenshot");

/* Stretch the banner image from the top of the page to the bottom of About */
function sizeTopBg(){
  var about = document.getElementById("about");
  document.getElementById("topbg").style.height = (about.offsetTop + about.offsetHeight) + "px";
}
sizeTopBg();
window.addEventListener("load", sizeTopBg);
window.addEventListener("resize", sizeTopBg);
