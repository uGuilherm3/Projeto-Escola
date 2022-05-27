<?php

function getConexao(){
    $dsn= 'mysql:host=localhost; dbname=bd_escola; charset=utf8';
    $user= 'root';
    $pass= '';
    try{
        $pdo=new PDO($dsn,$user,$pass);
        return $pdo;
    } catch (PDOException $e){
        echo "erro: ".$e->getMessage();
    }catch (Exception $e){
        echo "erro generico: ".$e->getMessage();
    }
}


?>