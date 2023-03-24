document.addEventListener('DOMContentLoaded', () => {
  const poem = document.getElementById("poem");
  const author = document.getElementById("author");

  const lineCount = Math.floor(Math.random() * 5) + 1;
  const apiEndpoint = `https://poetrydb.org/linecount/${lineCount}`;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const poemResult = data[randomIndex];

      poem.innerHTML = `<em><br>${poemResult.lines.join("<br>")}<em>`;
      author.innerHTML = `<p> - ${poemResult.author} (${poemResult.title})<p>`
    })
    .catch(error => console.error(error));
});