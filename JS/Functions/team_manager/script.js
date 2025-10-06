const teams = [
    "Habs",
    "Lightning",
    "Maple Leafs",
    "Golden Knights",
    "Penguins"];


function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {
            (function (newI) {
                listItems[newI].addEventListener("click", (e) => {
                    e.target.textContent = teams[newI];
                });
            })(i);
    }
    document.getElementById("team-loader").disabled = true;
}