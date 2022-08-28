import { prayersCopy } from "./database.js";
const nprayers = prayersCopy();

const displayQuote = () => {
  let x = "";
  for (let p of nprayers) {
    x += `<p id="Quote" class="singleQuote">${p.id}</p>`;
  }
  document.addEventListener("click", (taco) => {
    if (taco.target.id === "submit") {
      document.getElementById("quoteBlocks").innerHTML = x;
    }
  });
};
displayQuote();
