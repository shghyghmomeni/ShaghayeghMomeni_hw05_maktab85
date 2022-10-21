let ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  function () {
    alert("you agreed.");
  },
  function () {
    alert("you canceled the execution.");
  }
);
