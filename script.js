//your JS code here. If required.
// List of sounds (make sure these files exist in the "sounds" folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = sound.replace(".mp3", ""); // label without extension

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${sound}`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});

buttonsContainer.appendChild(stopBtn);
