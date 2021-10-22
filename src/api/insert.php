<?php 

$CN=mysqli_connect("localhost", "root", "");
$DB=mysqli_select_db($CN, "syspet_mob");

$usuario=$_POST['usuario'];
$senha=$_POST['senha'];
$nome=$_POST['nome'];

$IQ="insert into usuario(usuario, senha, nome) values('$usuario', '$senha', '$nome')";

$R=mysqli_query($CN, $IQ);

if($R){
    $Message="Estudante cadastrado com sucesso!";
}
else{
    $Message="Erro de servidor: Tente novamente mais tarde.";
}

$Response[]=array("Message"=>$Message);
echo json_encode($Response);

?>