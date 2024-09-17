//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const outputDiv = document.getElementById("output");

  // Helper function to generate a random number between 1 and 10
  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  // Create a promise that resolves 50% of the time, rejects otherwise
  const createPromise = (index) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 50% chance to resolve or reject
        if (Math.random() > 0.5) {
          resolve(getRandomNumber());
        } else {
          reject(`Promise ${index + 1} rejected with error`);
        }
      }, 1000); // Simulate a delay for the promise
    });
  };

  // Create an array of 5 promises
  const promises = Array.from({ length: 5 }, (_, index) => createPromise(index));

  // Wait for all promises to settle
  Promise.allSettled(promises).then((results) => {
    results.forEach((result, index) => {
      const p = document.createElement("p");
      if (result.status === "fulfilled") {
        p.textContent = `Promise ${index + 1} resolved with number ${result.value}`;
      } else {
        p.textContent = result.reason;
      }
      outputDiv.appendChild(p);
    });
  });
});
