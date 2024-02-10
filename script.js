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
  "Dream it. Wish it. Do it. - Unknown",
  "Though nobody can go back and make a new beginning… Anyone can start over and make a new ending.” ― Chico Xavier",
  "The only person you have to please is yourself.",
  "You won't find your future following someone else's roadmap.",
  "The possibilities are endless as long as you don't limit yourself.",
  "Set high standards for yourself and live up to your own expectations.",
  "Surround yourself with people who inspire you to become even better.",
  "If you listen to the naysayers, you'll never find out what you can really do.",
  "Don't fast forward through life; you'll miss all the good stuff along the way.",
  "Remember the past, but live for today and strive for an even better tomorrow.",
  "The story of your life is in your hands. You alone have the power to write the next chapter.",
  "No matter where you began or what happened along the way, you have the power to get to where you're supposed to be.",
  "Mistakes were made for moving on.",
  "Nothing blundered, nothing gained.",
  "One error in judgment does not a life define.",
  "Mistakes are a powerful source of life lessons.",
  "Giving in to the fear of failure is always a mistake.",
  "The most powerful life lessons often begin as mistakes.",
  "Don't seek to erase errors of the past; learn from them instead.",
  "Your mistakes don't define you, but they can help you find your way.",
  "It's a sign of strength to admit your mistakes and move on from them.",
  "Most mistakes are minor missteps that provide learning opportunities.",
  "Talent isn't a substitute for hard work.",
  "Actions really do speak louder than words.",
  "Success doesn't look the same for everyone.",
  "Life is too short to say yes to things you don't want to do.",
  "Lessons learned the hard way will stick with you forever.",
  "Hope is important, but it takes action to change the world.",
  "The company you choose to keep says a lot about who you are.",
  "The behavior of a bully says more about them than it does about you.",
  "Failure isn't the worst thing that can happen. Failing to try is much worse.",
  "Believe behavior. The way a person acts reflects the reality of who they are.",
  "Just keep swimming. - Finding Nemo, spoken by Dory",
  "You can't start a fire without a spark - Dancing in the Dark by Bruce Springsteen",
  "Every new beginning/ Comes from some other beginning's end - Closing Time by Semisonic",
  "I am beautiful no matter what they say/ Words can't bring me down - Beautiful by Christina Aguilera",
  "You had the power all along, my dear",
  "So make the best of this test, and don't ask why/ It's not a question, but a lesson learned in time - Good Riddance by Green Day",
  "There's nowhere you can be that isn't where you're meant to be/ It's easy. All you need is love - All You Need Is Love by The Beatles",
  "Two roads diverged in a wood, and I - / I took the one less traveled by / And that has made all the difference - The Road Not Taken by Robert Frost",
  "The new dawn balloons as we free it / For there is always light, if only we're brave enough to see it / If only we're brave enough to be it - by Amanda Gorman",
  "You can't always get what you want/ But if you try sometimes, well, you just might find/ You get what you need - You Can't Always Get What You Want, by The Rolling Stones"
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
