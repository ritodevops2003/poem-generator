const webhookUrl =
  "https://ritdev.app.n8n.cloud/webhook/7328b5a1-1932-418d-98eb-1417ef672559";

const form = document.getElementById("keywordForm");
const inputScreen = document.getElementById("screen-input");
const resultScreen = document.getElementById("screen-result");
const resultBox = document.getElementById("resultBox");
const historyBox = document.getElementById("history");

const creationMoments = [
  "Listening to the silence...",
  "Gathering scattered thoughts...",
  "Letting the words arrive...",
  "Breathing life into a poem...",
];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const keyword = document.getElementById("keyword").value;
  const style = document.getElementById("style").value;
  const mood = document.getElementById("mood").value;
  const length = document.getElementById("length").value;
  const intensity = document.getElementById("intensity").value;

  // Reset & switch screens
  inputScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // Apply style atmosphere
  resultScreen.className = `screen poem-screen style-${style}`;

  // Moment of creation
  const moment =
    creationMoments[Math.floor(Math.random() * creationMoments.length)];
  resultBox.textContent = moment;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword,
        style,
        mood,
        length,
        intensity,
      }),
    });

    const poemRaw = await response.text();
    const poem = poemRaw.replace(/\*\*/g, "");

    // Delay for anticipation
    setTimeout(() => {
      resultBox.textContent = poem;
      savePoem(poem);
      renderHistory();
    }, 1000);
  } catch (error) {
    resultBox.textContent = "Something went wrong. Please try again.";
    console.error(error);
  }
});

/* --- Poem memory --- */
function savePoem(poem) {
  const poems = JSON.parse(localStorage.getItem("poems") || "[]");
  poems.unshift(poem);
  localStorage.setItem("poems", JSON.stringify(poems.slice(0, 3)));
}

function renderHistory() {
  const poems = JSON.parse(localStorage.getItem("poems") || "[]");
  historyBox.innerHTML = "";

  if (poems.length > 1) {
    historyBox.innerHTML = "<h3>Previous poems</h3>";
    poems.slice(1).forEach((p) => {
      const pre = document.createElement("pre");
      pre.textContent = p;
      historyBox.appendChild(pre);
    });
  }
}

function goBack() {
  resultScreen.classList.add("hidden");
  inputScreen.classList.remove("hidden");
  document.getElementById("keyword").value = "";
}
