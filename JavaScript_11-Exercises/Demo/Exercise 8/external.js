function storyTeller() {
  const who = document.getElementById("who").value;
  const what = document.getElementById("what").value;
  const when = document.getElementById("when").value;

  const story = `${who} ${what} ${when}!`;

  const storyDiv = document.getElementById("story");
  storyDiv.innerText = `Once upon a time, ${story}`;
}
