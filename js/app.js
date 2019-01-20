// Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Automatically update year in footer

const yyyy = new Date().getFullYear();
document.getElementById("year").innerHTML = `Nick Socha dot net #${yyyy}`;
