<?php

// $mahasiswa = [
// 	[
// 		"nama"  => "fajar",
// 		"nim"   => "123456",
// 		"email" => "fajar@gmail.com"
// 	],

// 	[
// 		"nama"  => "jpjo",
// 		"nim"   => "342423423",
// 		"email" => "jojo@gmail.com"
// 	]

// ];

$dbh = new PDO('mysql:host=localhost;dbname=restapi_laravel10', 'root', '');
$db = $dbh->prepare('SELECT * FROM users');
$db->execute();
$users = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($users);
echo $data;
