let homeScore = 0;
let guestScore = 0;
let leaderPoint = 0;

function increaseScore(team, points) {
    if (team === "home") {
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        document.getElementById("guest-score").textContent = guestScore;
    }
    if(homeScore>guestScore){
       /* let teamEl = document.getElementById("team-el");
        teamEl.textContent = "HOME"; */
        leaderPoint = homeScore - guestScore;
        let pointEl = document.getElementById("point-el");
        pointEl.textContent = "Home is Leading By: " + leaderPoint + " Points";
    }
    else if(guestScore>homeScore){
        leaderPoint = guestScore - homeScore;
        let pointEl = document.getElementById("point-el");
        pointEl.textContent = "AWAY is Leading By: " + leaderPoint + " Points";

    }
    else if(homeScore === guestScore){
        let pointEl = document.getElementById("point-el");
        pointEl.textContent = "Scores are EQUAL";
    }
}
