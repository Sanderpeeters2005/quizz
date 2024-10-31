<?php
$servername = "localhost"; // of de server waar je database draait
$username = "je_database_gebruiker"; // je database gebruiker
$password = "je_database_wachtwoord"; // je database wachtwoord
$dbname = "quizz_ranglijst"; // je database naam

// Maak een connectie
$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer de connectie
if ($conn->connect_error) {
    die("Connectie mislukt: " . $conn->connect_error);
}

// Haal de gegevens van de POST-aanroep
$name = isset($_POST['name']) ? $_POST['name'] : '';
$score = isset($_POST['score']) ? $_POST['score'] : 0;

// Voorkom SQL-injectie
$name = $conn->real_escape_string($name);

// Voeg de score toe aan de database
$sql = "INSERT INTO leaderboard (name, score) VALUES ('$name', $score)";
if ($conn->query($sql) === TRUE) {
    echo "Score succesvol opgeslagen!";
} else {
    echo "Fout bij opslaan: " . $conn->error;
}

$conn->close();
?>
