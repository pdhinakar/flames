<?php

$name = filter_input(INPUT_POST,'name');
$name1 = filter_input(INPUT_POST,'name1');

if((!empty($name)) && (!empty($name1))){

$host = "localhost:3307";
$dbusername = "root";
$dbpassword = "root";
$dbname = "project";


//create

$conn = mysqli_connect ($host, $dbusername, $dbpassword, $dbname);

if(mysqli_connect_error()){
	die('Connect Error('. mysqli_connect_errno() .') '. mysqli_connect_error());
}
else{
$sql = "INSERT INTO flames (Yourname,Crushname) values('$name','$name1')";
if($conn->query($sql)){
	echo "new record inserted";
}
else{
echo "error is occur";
}
$conn->close();
}
header('location: index.html');
}
?>