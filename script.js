let sessionCount = 0;
let countdownInterval;
let sessionDuration = 30 * 60; // 30 minutes in seconds
let breakDuration = 8 * 60; // 8 minutes in seconds
let countdown = sessionDuration;

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your limitation—it's only your imagination. - Unknown",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Don't stop when you're tired. Stop when you're done. - Unknown",
  "Dream it. Wish it. Do it. - Unknown"
];

function startSession() {
  document.getElementById("startButton").disabled = true;
  document.getElementById("endButton").disabled = false;
  countdownInterval = setInterval(updateTimer, 1000);

  // Display a random motivational quote
  displayRandomQuote();
}

function endSession() {
  clearInterval(countdownInterval);
  sessionCount++;
  document.getElementById("session").innerText = "Session: " + sessionCount;
  document.getElementById("startButton").disabled = false;
  document.getElementById("endButton").disabled = true;
  countdown = sessionDuration;
  document.getElementById("countdown").innerText = formatTime(sessionDuration);
}

function clearSessionCount() {
  sessionCount = 0;
  document.getElementById("session").innerText = "Session: " + sessionCount;
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

function updateTimer() {
  countdown--;

  if (countdown <= 0) {
    sessionCount++;
    document.getElementById("session").innerText = "Session: " + sessionCount;
    clearInterval(countdownInterval);
    countdown = breakDuration;
    document.getElementById("countdown").innerText = formatTime(breakDuration);
    setTimeout(startSession, 1000);

    // Display a random motivational quote
    displayRandomQuote();
  } else {
    document.getElementById("countdown").innerText = formatTime(countdown);
  }
}

function formatTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
