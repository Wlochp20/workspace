<?php
$error='';
$message='';
if(isset($_POST['createAccount'])){
    if (empty($_POST['username'])) {
        $error=" <label class='error' >enter username</label>";
    }else if(empty($_POST['email'])){
        $error=" <label class='error' >enter email</label>";
    }else if(empty($_POST['password'])){
        $error=" <label class='error' >enter password</label>";
    }else{
        if (file_exists('users.json')) {
            $current_data = file_get_contents('users.json');  
            $array_data = json_decode($current_data, true);  
            $date=array(
                'email' => $_POST['email'],
                'username' => $_POST['username'],
                'password' => $_POST['password']
            );
            $array_data[] = $date;  
            $final_data = json_encode($array_data);  
            if(file_put_contents('users.json', $final_data))  
            {  
                header("location: ../podstrony/loginindex.html");
                
            }  
        }else{
            echo "file doesn't exist";
        }
    }
}else{
    echo "a problem occured";
}