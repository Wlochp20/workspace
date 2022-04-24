<?php
$error='';
if (isset($_POST['loginBtn'])) {
    if (empty($_POST['login'])) {
        $error=" <label class='error' >enter login</label>";
    }else if (empty($_POST['password'])) {
        $error=" <label class='error' >enter password</label>";
    }else{
        if (file_exists('../data/users.json')) {
            $currentData=file_get_contents('../data/users.json');
            $array_data = json_decode($currentData, true);  
            foreach ($array_data as $row) {
                if ($row['username']==$_POST['login']) {
                    if ($row['password']==$_POST['password']) {
                        header('Location: loginindex.html');
                        session_start();
                        $_SESSION["name"]=$row['name'];
                    }else {
                        $error="<label class='error'>wrong password</label>";
                    }
                }else {
                    $error="<label class='error'>this user doesn't exist</label>";
                }
            }
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
      <div>
        <span class="back"><a href="../index.html">back</a></span>
        <span class="big">Log in</span>
        <form style="height: 350px;" method="post">
          <input type="text" name="login" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="loginBtn" value="login" />
          <?php
          if (isset($error)) {
            echo $error;
          }
          ?>
        </form>
        <span><a href="#">forgot password</a> </span>
        <span>no account?<a href="register.php">Create one</a></span>
      </div>
    </section>
  </body>
</html>
