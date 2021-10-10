<?php 
require_once('./db.php');
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$nome = $_POST['nome'];

//insert usuário

$IQ="INSERT INTO usuario(usuario, senha, nome) VALUES('$usuario', '$senha', '$nome')";

$R=mysqli_query($CN, $IQ);

if ($R){

    $Message = "Usuário inserido com sucesso!";

}
else{

    $Message = "Erro no sistema. Tente novamente mais tarde";

}

echo($Message);

?>