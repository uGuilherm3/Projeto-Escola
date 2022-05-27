<?php

include 'phpconex.php';

function insertDB($nome,$email,$idade,$curso_desejado){
    $conn = getConexao();
$sql = "INSERT INTO tb_MiguelGurgel(nome,email,idade,curso_desejado)
VALUES (:nome,:email,:idade,:curso_desejado)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(":nome",$nome);
$stmt->bindParam(":email",$email);
$stmt->bindParam(":idade",$idade);
$stmt->bindParam(":curso_desejado",$curso_desejado);

if($stmt->execute()){
    echo "Save successfull";
}else{
    echo "error saving";
}
}

insertDB($_GET['nome'],$_GET['email'],$_GET['idade'],$_GET['curso_desejado']);

?>