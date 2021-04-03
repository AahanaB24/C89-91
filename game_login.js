function addUser(){
    player_1 = document.getElementById("login_input1").value;
    player_2 = document.getElementById("login_input2").value;

    localStorage.setItem("player1_name", player_1);
    localStorage.setItem("player2_name", player_2);

    window.location = "game_page.html";
} 