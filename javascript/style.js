// common counter increase function
let callData = [];
function getcurrentbalance(id) {
  const getinnertext = document.getElementById(id).innerText;
  const getint = parseInt(getinnertext);
  return getint;
}
// function for counterincrease
function counterincrease(classs, id, isCopy = false) {
  const buttons = document.getElementsByClassName(classs);
  for (btns of buttons) {
    btns.addEventListener("click", function () {
      const currentbalance = getcurrentbalance(id);
      const newbalance = currentbalance + 1;
      document.getElementById(id).innerText = newbalance;
      if (isCopy) {
        const targetId = this.getAttribute("data-target");
        const numberToCopy = document.getElementById(targetId).innerText;

        navigator.clipboard.writeText(numberToCopy);
        alert("Number was Copied: " + numberToCopy);
      }

      return newbalance;
    });
  }
}

counterincrease("copy-btn-class", "copy-value", true);

counterincrease("heart-btn-class", "heart-value", false);

// decrease coin

// Function to handle call buttons
function callingButton() {
  const callButtons = document.getElementsByClassName("call-btn-class");

  for (let btn of callButtons) {
    btn.addEventListener("click", function () {
      // Get service name and phone number
      const serviceName = this.getAttribute("data-name");
      const numberId = this.getAttribute("data-target");
      const phoneNumber = document.getElementById(numberId).innerText;

      // Deduct coins
      const coinnn = document.getElementById("coin-value");
      let currentCoins = parseInt(coinnn.innerText);
      let newCoins = currentCoins - 20;

      if (newCoins < 0) {
        alert("Insufficient Coins");
        return;
      }
      coinnn.innerText = newCoins;

      // Alert message
      alert(`Calling ${serviceName} ${phoneNumber}...`);

      // Save call data with timestamp
      const timestamp = new Date().toLocaleTimeString();
      callData.push({ serviceName, phoneNumber, timestamp });

      // Update UI
      renderCallHistory();
    });
  }
}

function renderCallHistory() {
  const historyContainer = document.getElementById("call-history-list");
  historyContainer.innerHTML = ""; // clear old items

  for (let i = 0; i < callData.length; i++) {
    const call = callData[i];
    const card = document.createElement("div");
    card.className =
      "card bg-base-100 card-xs shadow-sm mt-5 bg-[rgba(250,250,250,1)] flex flex-row justify-between items-center p-3 hind-madurai-regular";

    card.innerHTML = `
      <div class="card-body">
        <h1 class="card-title font-bold text-[18px]">${call.serviceName}</h1>
        <p class="text-[18px] text-gray-500">${call.phoneNumber}</p>
      </div>
      <div>
        <h1>${call.timestamp}</h1>
      </div>
    `;

    historyContainer.appendChild(card);
  }
}

// Clear history button functionality
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    callData = []; // reset the array
    renderCallHistory(); // refresh UI
  });

callingButton();
