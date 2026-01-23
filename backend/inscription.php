<?php
try {
    $connexion = new PDO('mysql:host=localhost;dbname=bibliotheque_en_ligne;charset=utf8', 'root', '');
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo json_encode(["error" => "Connexion à la base échouée : " . $e->getMessage()]);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom        = htmlspecialchars_decode($_POST['nom'] ?? '');
    $prenom     = htmlspecialchars_decode($_POST['prenom'] ?? '');
    $email      = $_POST['email'] ?? '';
    $telephone  = $_POST['telephone'] ?? '';
    $motdepasse = $_POST['password'] ?? '';
    $action     = $_POST['action'] ?? '';

    // --- INSCRIPTION ---
    if ($action === "inscription") {
        if (!empty($nom) && !empty($prenom) && !empty($email) && !empty($telephone) && !empty($motdepasse)) {
            $hash = password_hash($motdepasse, PASSWORD_DEFAULT);

            $sql = "INSERT INTO utilisateur (nom, prenom, email, numero_telephone, mot_de_passe, role) 
                    VALUES (?, ?, ?, ?, ?, 'utilisateur')";
            $stmt = $connexion->prepare($sql);
            $stmt->execute([$nom, $prenom, $email, $telephone, $hash]);

            echo json_encode(["message" => "Inscription réussie"]);
        } else {
            echo json_encode(["error" => "Veuillez remplir tous les champs"]);
        }
    }

    // --- CONNEXION ---
    elseif ($action === "connexion") {
        if (!empty($email) && !empty($motdepasse)) {
            $sql = "SELECT * FROM utilisateur WHERE email = ?";
            $stmt = $connexion->prepare($sql);
            $stmt->execute([$email]);
            $utilisateur = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($utilisateur && password_verify($motdepasse, $utilisateur['mot_de_passe'])) {
                echo json_encode([
                    "message" => "Connexion réussie, bienvenue " . htmlspecialchars($utilisateur['nom']),
                    "role"    => $utilisateur['role']
                ]);
            } else {
                echo json_encode(["error" => "Email ou mot de passe incorrect"]);
            }
        } else {
            echo json_encode(["error" => "Remplissez tous les champs"]);
        }
    }
}