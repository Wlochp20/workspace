<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/jquery/1.11.3/jquery.min.js"></script>
    <link
      href="https://cdn.jsdelivr.net/jquery.roundslider/1.3/roundslider.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/jquery.roundslider/1.3/roundslider.min.js"></script>
    <link rel="stylesheet" href="../css/countdown.css">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Workspace</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../css/style.css" />
  </head>
  <body>
    <!-- <div class="animation"> <div class="clock"></div> </div> -->
    <div class="doneActivityModal">
      <img class="closeBtn" src="../img/x.png" alt="close">
      <h2>congratulates</h2>
      <div class="doneActivityModal-container">
        <div>
        <img src="../img/aBeer.png">
        <h3>Activity</h3>
      </div>
        <h4>you were doing your activity for <span>0</span> minutes</h4>
      </div>
      <div class="descriptionSpan">
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati doloremque in doloribus atque ut recusandae omnis fugit voluptate nihil? Quae in error possimus non fuga eveniet id exercitationem dolores nam?</span>
      </div>
      <div class="modalFooter"> 
        <img src="../img/share.png" alt="share">
        <img src="../img/save.png" alt="download">
      </div>

    </div>
  
    <header><img src="../img/obraz2.png" alt="miasto" /></header>

    <nav>
      <ul>
        <li><a href="#timepiece">timepiece</a></li>
        <li><a href="planner.html">planner</a></li>
        <li><a href="#about">about</a></li>
        <li class="register">
          <div class="yourProfile">
            <img class="pfp" src="../img/pfp.png" alt="profile_picture" /><img
              class="arrow"
              src="../img/downArrow.png"
              alt="downArrow"
            />
          </div>
          <ul class="ac">
            <li>name</li>
            <li><a href="">profile</a></li>
            <li><a href="">statistics</a></li>
            <li><a href="">log out</a></li>
            <li>
              <div class="moneyy">
                <img src="../img/coin.png" alt="coin" />2700$
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <section id="timepiece"> 
      <div class="activityModal">

        <div class="activityModalContent">
          <div class="x1">
            <img class="x1img"  src="../img/x.png" alt="x">
          </div>
          
          <div class="choosenImg">
            <img >
            <span class="modalText"></span>
          </div>
          <div class="modalImages"></div>
          <div class="modalOptions">
            <div>
            <img src="../img/aBeer.png" alt="Beer">
            <img src="../img/aBike.png" alt="Bike">
            <img src="../img/aBook.png" alt="Book">
            <img src="../img/aComputer.png" alt="computer">
            <img src="../img/aCook.png" alt="Cook">
          </div>
          <div>
            <img src="../img/aFood.png" alt="Food">
            <img src="../img/aGame.png" alt="Game">
            <img src="../img/aGuitar.png" alt="Guitar">
            <img src="../img/aMusic.png" alt="Music">
            <img src="../img/aRun.png" alt="run">
          </div>
          <div>
            <img src="../img/aShop.png" alt="shop">
            <img src="../img/aSport.png" alt="sport">
            <img src="../img/aTennis.png" alt="tennis">
            <img src="../img/aWork.png" alt="work">
            <img src="../img/tabler_writing.png" alt="">
          </div>
          </div>
          <div class="addActivity">
            <span class="modalText">Add activity</span>
          </div>
        </div>
      </div>
      <div class="descriptionmodal">
      <div class="modalcontent">
        
        <img class="x" src="../img/x.png" alt="close">
        <span>Description</span>
        <textarea name="description" cols="60" rows="22" placeholder="write some text..."></textarea>
        <div class="iconContainer">
          <img src="../img/bin.png" alt="delete">
          <img src="../img/folder.png" alt="addFile">
          <img src="../img/decoratelist.png" alt="list">
          <img src="../img/numberlist.png" alt="numberlist">
          <img src="../img/boldText.png" alt="boldText">
          <img src="../img/italicText.png" alt="italicText">
          <img class="save" src="../img/saveIcon.png" alt="saveIcon">
        </div>
      </div>
    </div>
      

      <div class="countdownModal">
        <div class="name"><img src="../img/aComputer.png" alt=""><span>activity</span></div>
        
        <div id="countdown">
          <div id="countdown-number"></div>
          <svg viewBox="200 250 1000 1000" >
            <circle class="circle" r="308" cx="700" cy="700"></circle>
          </svg>
        </div>

        <div class="downOptionss">
          <div class="description"><span class="text">description</span>
            <div class="descriptionText">
              <span ></span></div>
        </div>  
        <div class="buttons">
        <span class="text" >actions</span>
        <button>pause</button>
        <button>give up</button>
        </div>

      </div>
      
    </div>

      <div class="optionsContainer">
        <!-- 
        <div class="downOptions megaOption">
          <div class="option">
            <div class="nameModal">
              <input type="text" name="name" placeholder="wtite name">
              <img class="saver" src="../img/saveIcon.png" alt="save">
            </div>
            <span>add name</span><div><img src="../img/add.png" class="namer" alt="plus" /></div>
          </div>
          <div class="option">
            <span>add description</span><div><img class="desc" src="../img/add.png" alt="plus" /></div>
          </div>
          <div class="option">
            <span>add activity</span><div><img class="activitybtn" src="../img/add.png" alt="plus" /></div>
          </div>
        </div>

       
       
       -->


        <div class="downOptionsContainer a2">
            <div class="upOptions">

              <div class="downOptions megaOption aaa2">
                <div class="option">
                  <div class="nameModal">
                    <input type="text" name="name" placeholder="wtite name">
                    <img class="saver" src="../img/saveIcon.png" alt="save">
                  </div>
                  <span>add name</span><div><img src="../img/add.png" class="namer" alt="plus" /></div>
                </div>
                <div class="option">
                  <span>add description</span><div><img class="desc" src="../img/add.png" alt="plus" /></div>
                </div>
                <div class="option">
                  <span>add activity</span><div><img class="activitybtn" src="../img/add.png" alt="plus" /></div>
                </div>
              </div>

            <div class="startButton"><span>Start</span></div>
            <div class="downOptions aa2"><div class="dataa"><span style="font-size: 40px;" class="data" >12:00</span><span class="data" style="font-size: 30px;" >02.04.2022</span></div></div>
            </div>
            <div class="upOptions">
        <div class="downOptions"><span>Item</span><img src="../img/item.png" alt=""></div>
        <div class="downOptions"><span>statistics</span><img src="../img/statistics.png" alt=""></div>
        <div class="downOptions"><span>timer</span><div id="slider1"></div></div>
        </div>
       </div>
      </div>
      </div>
    </section>
    <section class="about" id="about">
    </section>
    <script src="../js/script.js"></script>
    <script src="../js/loginindex.js"></script>
  </body>
</html>



