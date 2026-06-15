function burst() {
  const colors = ["#ff4d88","#ffb6d5","#fff"];

  for (let i = 0; i < 100; i++) {
    const b = document.createElement("div");
    b.classList.add("burst");

    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 600;

    b.style.setProperty("--x", Math.cos(angle)*dist+"px");
    b.style.setProperty("--y", Math.sin(angle)*dist+"px");

    b.style.background = colors[Math.floor(Math.random()*colors.length)];

    document.getElementById("burst").appendChild(b);
    setTimeout(()=>b.remove(),2000);
  }
}

window.onload = () => {
  burst();
  setTimeout(burst, 500);
  setTimeout(burst, 1000);
};

function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}

document.querySelector(".msg-btn").onclick = () => {
  document.getElementById("audio").play();
};

const start = new Date("2026-05-16"); // FIXED AS REQUESTED

setInterval(() => {
  const d = new Date() - start;

  const days = Math.floor(d/86400000);
  const hrs = Math.floor(d/3600000)%24;
  const mins = Math.floor(d/60000)%60;
  const secs = Math.floor(d/1000)%60;

  document.getElementById("counter").innerText =
    `${days}d ${hrs}h ${mins}m ${secs}s`;
}, 1000);