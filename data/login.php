<?php
$error='';
if (isset($_POST['loginBtn'])) {
    if (empty($_POST['login'])) {
        $error=" <label class='error' >enter login</label>";
    }else if (empty($_POST['password'])) {
        $error=" <label class='error' >enter password</label>";
    }else{
        foreach(   )
        if (file_exists('users.json')) {
            $currentData=file_get_contents('users.json');
            $array_data = json_decode($currentData, true);  
        }
    }
}

