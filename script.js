// MUSIC CONTROL
var music = document.getElementById("bgMusic");
var musicBar = document.getElementById("musicBar");
var isPlaying = false;

musicBar.addEventListener("click", function() {
  if(!isPlaying) {
    music.play().then(function() {
      isPlaying = true;
      musicBar.innerText = "🎶 Playing our story";
    }).catch(function(err) {
      console.log("Music play blocked:", err);
    });
  } else {
    music.pause();
    isPlaying = false;
    musicBar.innerText = "🎵 Tap to play our story";
  }
});

// FADE-IN ON SCROLL
var scenes = document.querySelectorAll(".scene");
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

scenes.forEach(function(scene){observer.observe(scene);});

// FLOATING PARTICLES AND HEARTS
var particleContainer = document.querySelector(".particles");

function createParticle() {
  var particle = document.createElement("span");
  var type = Math.random() < 0.6 ? "✨" : "❤️"; // 60% stars, 40% hearts
  particle.innerText = type;
  particle.style.left = Math.random()*100 + "vw";
  particle.style.fontSize = (Math.random()*12 + 12) + "px";
  particle.style.animationDuration = (Math.random()*5 + 6) + "s";
  particleContainer.appendChild(particle);
  setTimeout(function(){ particle.remove(); },12000);
}

setInterval(createParticle, 400);
