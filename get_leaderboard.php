<?php
// Databaseverbinding
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizz_ranglijst"; // Aangepaste database naam

// Maak verbinding
$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer verbinding
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}

// Haal de gegevens van de ranglijst op
$sql = "SELECT username, score FROM leaderboard ORDER BY score DESC";
$result = $conn->query($sql);

$leaderboard = [];

if ($result->num_rows > 0) {
    // Voeg elke rij toe aan de array
    while($row = $result->fetch_assoc()) {
        $leaderboard[] = $row;
    }
}

// Sluit de verbinding
$conn->close();

// Geef de data terug als JSON
header('Content-Type: application/json');
echo json_encode($leaderboard);
?>
