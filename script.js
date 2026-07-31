const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  // Temporary AI reply
  setTimeout(() => {
    addMessage("Hello! Main NexaAI hoon. Abhi demo mode mein hoon.", "ai");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
