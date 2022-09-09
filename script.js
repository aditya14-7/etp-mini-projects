const songs = [
  "For_Aisha.mp3",
  "Lost_The_Game.mp3",
  "Only_Time.mp3",
  "Silent_Child_F_U.mp3",
  "Stephen_Crossfire.mp3",
];

const player = document.getElementById("player");

const createSongsList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }

  return list;
};

const songsList = document.getElementById("songs-list");
songsList.appendChild(createSongsList());
const links = document.querySelectorAll("li");

for (const link of links) {
  console.log("Link:", link);
  link.addEventListener("click", setSong);
}


function setSong(e) {
  document.querySelector(".player-logo").classList.remove("pulse")

  console.log(e);

  const source = document.getElementById("source");
  console.log(source.src);
  source.src = "songs/" + e.target.innerText;
  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing: ${e.target.innerText}`;
  player.load();
  player.play();
  document.querySelector(".player-logo").classList.add("pulse")
}

function playAudio(){
  document.querySelector(".play-btn").classList.add("pulse")
  player.play()
  document.querySelector(".pause-btn").classList.remove("pulse")

}

function pauseAudio(){
  document.querySelector(".pause-btn").classList.add("pulse")
  player.pause()
  document.querySelector(".play-btn").classList.remove("pulse")

}

const slider = document.getElementById("volumeSlider")
slider.oninput = function(e) {
  console.log(e.target.value)
  const volumeBar = e.target.value;
  player.volume = volumeBar;
}

function updateProgress(){
  if(player.currentTime>0){
    const progressBar = document.querySelector("#progress")
    progressBar.value = (player.currentTime/player.duration)*100;
  }
}


var q = window.document.getElementById("player").innerHTML;
console.log(q)