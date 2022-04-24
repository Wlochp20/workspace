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
        if (file_exists('../data/users.json')) {
            $current_data = file_get_contents('../data/users.json');  
            $array_data = json_decode($current_data, true);
            $used=false;  
              foreach ($array_data as $row) {
              if ($_POST['username']==$row['username']) {
                  $error="<label class='error' >this username is taken</label>";
                  $used=true;
                  break;
              }else if($_POST['email']==$row['email'] ){
                $error="<label class='error' >this email has already been used</label>";
                $used=true;
                break;
              }
            }
            if ($used==false) {
                $date=array(
                  'email' => $_POST['email'],
                  'username' => $_POST['username'],
                  'password' => $_POST['password']
              );
              $array_data[] = $date;  
              $final_data = json_encode($array_data);  
              if(file_put_contents('../data/users.json', $final_data))  
              {  
                 $message="<label class='message'>your account has been created</label>";
                
              }  
            }

        }else{
          $error="<label class='error' >file doesn't exist</label>";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="../css/loginRegiser.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <img src="../img/obraz2.png" alt="" />
    <section>
      <span class="back"><a href="../index.html">back</a></span>
      <div>
        <span class="big">Sign up</span>
        <form method="post">
          <?php
          if (isset($error)) {
            echo $error;
          }
          if (isset($message)) {
            echo $message;
          }
          ?>
          <input type="text" name="username" id="username" placeholder="username"/>
          <input type="email" name="email" id="email" placeholder="email">
          <input type="password" name="password" id="password" placeholder="password"/>
          <input type="submit" name="createAccount" value="Create account" />
        </form>
        <span>already have an account? <a href="login.php">log in</a></span>
      </div>
    </section>
  </body>
</html>
