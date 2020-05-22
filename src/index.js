const endPoint = "http://localhost:3000/api/v1/foods";

document.addEventListener('DOMContentLoaded', () => {
  getFoods()
});

function getFoods() {
  fetch(endPoint)
  .then(resp => resp.json())
  .then(json => console.log(json));
}
