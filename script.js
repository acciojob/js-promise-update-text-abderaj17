const output = document.getElementById('output');

// Create a Promise that resolves after 1 second
const fun = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 1000);
});

// When the Promise resolves, update the output div
fun.then((message) => {
  output.innerHTML = `<h1>${message}</h1>`;
});
