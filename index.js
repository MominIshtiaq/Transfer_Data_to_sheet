let url =
  "https://script.google.com/macros/s/AKfycbzoh82evLQSpOpPJ004_eU-2XVQNgY1aMKo4yvwuyAuq8mdWThEV61aQEjSwqExRRYAkw/exec";

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.target.btn.innerHTML = "Submitting...";
  let formData = new FormData(form);
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((finalResponse) => {
      let span = document.createElement("span");
      span = document.createTextNode(finalResponse);
      document.querySelector(".res_result").append(span);
    });
  e.preventDefault();
});
