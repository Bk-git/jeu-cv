window.addEventListener("DOMContentLoaded", function () {

  var zoneDuMenu = document.getElementById('zone-de-Menu');

  // Choix du personnage ici au click sur Mario 
  var clickMario = document.getElementById("choixPersonnageMario").addEventListener("click", Mario);


  // var sonPrincipal = function () {
  //   var audio1 = new Audio("OverWorldMario.mp3");
  //   console.log('audioprincipale fonctionne')
  //   audio1.pause();
  //   // audio1.currentTime = 0;
  //   // audio1.play();
  // }


  var gestionSonChoixMario = function () {

    var audioChoixMario = new Audio("itsmeMario.mp3");
    audioChoixMario.pause();
    audioChoixMario.currentTime = 0;
    audioChoixMario.volume = 0.01;
    audioChoixMario.play();

  };



  var gestionSonPiece = function () {
    var audio = new Audio("piece.wav");
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.01;
    audio.play();
  };

  function Mario() {
    gestionSonChoixMario();

    var maZoneDeJeu = document.getElementById("zone-de-jeu")
    maZoneDeJeu.style.display = "block";
    zoneDuMenu.style.display = "none";

    // 
    containerLuigi.style.display = "none"
    document.getElementById("choixPersonnageMario").innerHTML = console.log('coucou')
    var maZoneDeJeu = document.getElementById("zone-de-jeu");
    var masqueContainer = document.getElementById("container");
    var spriteContenu = document.getElementById("contenu");
    var masqueX = "200px"; //left
    var masqueY = "321px"; //top

    masqueContainer.style.left = masqueX;
    masqueContainer.style.top = masqueY;
    maZoneDeJeu.style.top = parseFloat(maZoneDeJeu);
    masqueX = parseFloat(masqueX);
    masqueY = parseFloat(masqueY);

    // Compteur mouvement
    var i = 0; //  gauche des sprites
    var j = 0; //  haut  des sprites
    var k = 0; //   droit  des sprite
    var l = 0; //   bas sprite
    var m = 0; //  entrer sprite
    var n = 0; //  saut sprite
    // distance en px
    var y = 0; // top + 0
    var limiteDuSolY = 321;
    var limiteDuSaut = 281;
    var limiteZoneDeJeuDroit = 972;
    var limiteZoneDeJeuGauche = 0;
    var deplacementOff = 0;
    // "drapeaux" de gestion d'appui des touches
    var gaucheEnfoncee = false;
    var droiteEnfoncee = false;
    var entreeEnfoncee = false;
    var hautEnfoncee = false;
    var basEnfoncee = false;
    var espaceEnfonce = false;
    var sautOn = false; // validation du saut
    var IntervalmouvementSaut;

    var sautMario = function () {
      // console.log("saut");
      // gestionSonSaut();
      masqueContainer.style.animation = "saut 0.5s 0s 1 alternate ease-out";
      var logoHTML = document.getElementById("logoHTML5");
      var affichageLogoHtml = document.getElementById("recuPlogoHtml5");

      console.log(logoHTML.offsetTop);
      console.log(masqueContainer.offsetTop);
      if (
        logoHTML.offsetTop >= masqueContainer.offsetTop - 50 &&
        logoHTML.offsetLeft <= masqueContainer.offsetLeft + 40 &&
        logoHTML.offsetLeft >= masqueContainer.offsetLeft - 40
      ) {
        // console.log("je recupere le logo HTML");
        affichageLogoHtml.style.display = "block";
        logoHTML.style.display = "none";
        gestionSonPiece();

      }

      var logoCSS3 = document.getElementById("logoCSS3");
      var affichageLogoCSS3 = document.getElementById("recuPlogoCSS3");
      if (
        logoCSS3.offsetTop >= masqueContainer.offsetTop - 50 &&
        logoCSS3.offsetLeft <= masqueContainer.offsetLeft + 40 &&
        logoCSS3.offsetLeft >= masqueContainer.offsetLeft - 40
      ) {
        // console.log("je recupere le logo CSS");
        affichageLogoCSS3.style.display = "block";
        logoCSS3.style.display = "none";
        gestionSonPiece();

      }

      var logoJS = document.getElementById("logoJS");
      var affichageLogoJS = document.getElementById("recuPlogoJS");

      if (
        logoJS.offsetTop >= masqueContainer.offsetTop - 50 &&
        logoJS.offsetLeft <= masqueContainer.offsetLeft + 40 &&
        logoJS.offsetLeft >= masqueContainer.offsetLeft - 40
      ) {
        console.log("je recupere le logo JS");
        affichageLogoJS.style.display = "block";
        logoJS.style.display = "none";
        gestionSonPiece();

      }

      // Apres recolte des logos , affichage du message "you win"
      var youWin = document.getElementById("youWin");
      if (
        affichageLogoHtml.style.display == "block" &&
        affichageLogoCSS3.style.display == "block" &&
        affichageLogoJS.style.display == "block"
      ) {
        // ici je demasque l'image "you win", masque les logos et personnages
        youWin.style.display = "block";
        logoHTML.style.display = "none";
        logoCSS3.style.display = "none";
        logoJS.style.display = "none";
        masqueContainer.style.display = "none";
        var masqueDeBowser = document.getElementById("MasqueDeBowser");
        masqueDeBowser.style.display = "none";
        affichageLogoHtml.style.display = "none";
        affichageLogoCSS3.style.display = "none";
        affichageLogoJS.style.display = "none";
        vie1 = document.getElementById("vieMario1");
        vie1.style.display = "none"; // Masque l'image
        vie2 = document.getElementById("vieMario2");
        vie2.style.display = "none";
        vie3 = document.getElementById("vieMario3");
        vie3.style.display = "none";
        vie4 = document.getElementById("vieMario4");
        vie4.style.display = "none";
        // activation = false;
        gestionSonPiece = false;
        // sonPrincipal();
      }
    };

    var setMouvementSaut = function () {
      // console.log("A" + sautOn);
      if (sautOn == false) {
        // console.log("B");

        IntervalmouvementSaut = window.setInterval(sautMario, 0);
        sautOn = true;
      }
    };

    var unsetMouvementSaut = function () {
      //console.log("ClearInterval");
      masqueContainer.style.animation = "";
      window.clearInterval(IntervalmouvementSaut);
      sautOn = false;
    };

    var moveGauche = function (i) {
      var deplacementGauche = 4;

      if (parseFloat(masqueContainer.style.left) >= limiteZoneDeJeuGauche) {
        masqueX = masqueX - deplacementGauche; // - par rapport a left
        masqueContainer.style.left = masqueX + "px"; //
      }

      if (i == 0) {
        spriteContenu.style.top = "-48px";
        spriteContenu.style.left = "-10px";
      }
      if (i == 1) {
        spriteContenu.style.top = "-48px";
        spriteContenu.style.left = "-48px";
      }
      i++;
      if (i > 1) {
        i = 0;
      }
      return i;
    };

    var moveDroite = function (k) {
      // condition de collision et deplacement
      var deplacementDroit = 4;
      var tuberVertX = 616;

      if (parseFloat(masqueContainer.style.left) >= limiteZoneDeJeuDroit) {
        masqueX = masqueX + deplacementOff; // - par rapport a left
        masqueContainer.style.left = masqueX + "px";
      } else {
        masqueX = masqueX + deplacementDroit; // + par rapport a left
        masqueContainer.style.left = masqueX + "px";
      }
      // var tuberVert = {
      //     width: 50,
      //     heigth: 50,
      //     top: 321,
      //     left: 616
      //   };

      //   if (masqueContainer.offsetLeft == tuberVert.left) {
      //     masqueX = masqueX + deplacementOff; // + par rapport a left
      //     masqueContainer.style.left = masqueX + "px";
      //   } else {
      //     masqueX = masqueX + deplacementDroit; // + par rapport a left
      //     masqueContainer.style.left = masqueX + "px";
      //   }
      // mouvement Sprite
      if (k == 0) {
        spriteContenu.style.top = "-48px";
        spriteContenu.style.left = "-205px";
      }
      if (k == 1) {
        spriteContenu.style.top = "-88px";
        spriteContenu.style.left = "-249px";
      }
      k++;
      if (k > 1) {
        k = 0;
      }
      return k;
    };

    var moveBas = function (l) {
      var x = 2; //  left + 2
      if (parseFloat(masqueContainer.style.top) >= x) {
        masqueY = masqueY - x; // - par rapport a top
        masqueContainer.style.top = masqueY + "px";
      }

      masqueY = masqueY + x; // + par rapport a top
      masqueContainer.style.top = masqueY + "px";
      if (l == 0) {
        spriteContenu.style.top = "-124px";
        spriteContenu.style.left = "-208px";
      }
      if (l == 1) {
        spriteContenu.style.top = "-84px";
        spriteContenu.style.left = "-209px";
      }
      l++;
      if (l > 1) {
        l = 0;
      }

      return l;
    };

    var toucheEntrer = function (m) {
      if (m == 0) {
        spriteContenu.style.top = "-332px";
        spriteContenu.style.left = "-341px";
      }
      if (m == 1) {
        spriteContenu.style.top = "-291px";
        spriteContenu.style.left = "-366px";
      }
      m++;
      if (m > 1) {
        m = 0;
      }
      return m;
    };

    window.onkeydown = function (event) {
      //  Quand la touche est  enfoncée
      var code = event.keyCode;

      switch (code) {
        case 37: //*instructions* // gauche
          gaucheEnfoncee = true;
          // i= moveGauche(i);
          break;
        case 38: //instructions// haut
          hautEnfoncee = true;
          break;
        case 39: // touche fleche droite
          droiteEnfoncee = true;

          break;
        case 40:
          //instructions// bas
          basEnfoncee = true;
          break;
        case 13: // touche entrer
          m = toucheEntrer(m);
          break;
        case 32: // touche espace
          //espaceEnfonce = true;
          setMouvementSaut();
          break;
      }
    };

    window.onkeyup = function (event) {
      // Quand la touche est rela
      var code = event.keyCode;

      switch (code) {
        case 37: //*instructions* // gauche
          gaucheEnfoncee = false;
          break;
        case 38: //instructions// haut
          hautEnfoncee = false;

          break;
        case 39: // touche fleche droite
          droiteEnfoncee = false;
          break;

        case 40:
          //instructions// bas
          basEnfoncee = false;
          break;

        case 13: // touche entrer
          break;

        case 32: // touche espace
          //espaceEnfonce = false;
          if (sautOn) {
            unsetMouvementSaut();
          }
          break;
      }
    };

    setInterval(function () {
      if (gaucheEnfoncee) {
        i = moveGauche(i);
      }

      if (droiteEnfoncee) {
        k = moveDroite(k);
      }

      if (basEnfoncee) {
        l = moveBas(l);
      }
      // if (hautEnfoncee) {
      //   j = moveHaut(j);

      if (espaceEnfonce) {
        //n = saut(n)
        setMouvementSaut();
      }
    }, 10);

    var deplacementLogoHtml = function () {
      logoHTML5.style.animation =
        "deplacementDuLogoHTML5 3s 0s infinite alternate ease-out";
    };
    var IntervalmouvementLogo = window.setInterval(deplacementLogoHtml, 100);

    var deplacementLogoCSS = function () {
      logoCSS3.style.animation =
        "deplacementDulogoCSS3 3s 0s infinite alternate ease-out";
    };

    IntervalmouvementLogo = window.setInterval(deplacementLogoCSS, 200);

    var deplacementLogoJS = function () {
      logoJS.style.animation =
        "deplacementDulogoJS 3s 0s infinite alternate ease-out";
    };
    IntervalmouvementLogo = window.setInterval(deplacementLogoJS, 200);


  };






  var clickLuigi = document.getElementById("choixPersonnageLuigi").addEventListener("click", myFunction);

  function myFunction() {
    var masqueContainer = document.getElementById("container");
    var maZoneDeJeu = document.getElementById("zone-de-jeu")
    zoneDuMenu.style.display = "none";
    maZoneDeJeu.style.display = "block";
    masqueContainer.style.display = "none";

    document.getElementById("choixPersonnageLuigi").innerHTML = console.log('coucou Luigi')
    var maZoneDeJeu = document.getElementById("zone-de-jeu");
    var containerLuigi = document.getElementById("containerLuigi");
    var spriteContenuLuigi = document.getElementById("contenuLuigi");
    var masqueX = "200px"; //left
    var masqueY = "321px"; //top

    containerLuigi.style.left = masqueX;
    containerLuigi.style.top = masqueY;
    maZoneDeJeu.style.top = parseFloat(maZoneDeJeu);
    masqueX = parseFloat(masqueX);
    masqueY = parseFloat(masqueY);

    // Compteur mouvement
    var i = 0; //  gauche des sprites
    var j = 0; //  haut  des sprites
    var k = 0; //   droit  des sprite
    var l = 0; //   bas sprite
    var m = 0; //  entrer sprite
    var n = 0; //  saut sprite
    // distance en px
    var y = 0; // top + 0
    var limiteDuSolY = 321;
    var limiteDuSaut = 281;
    var limiteZoneDeJeuDroit = 972;
    var limiteZoneDeJeuGauche = 0;
    var deplacementOff = 0;
    // "drapeaux" de gestion d'appui des touches
    var gaucheEnfoncee = false;
    var droiteEnfoncee = false;
    var entreeEnfoncee = false;
    var hautEnfoncee = false;
    var basEnfoncee = false;
    var espaceEnfonce = false;
    var sautOn = false; // validation du saut
    var IntervalmouvementSaut;

    var sautLuigi = function () {
      // console.log("saut");

      containerLuigi.style.animation = "saut 0.5s 0s 1 alternate ease-out";
      var logoHTML = document.getElementById("logoHTML5");
      var affichageLogoHtml = document.getElementById("recuPlogoHtml5");

      console.log(logoHTML.offsetTop);
      console.log(containerLuigi.offsetTop);
      if (
        logoHTML.offsetTop >= containerLuigi.offsetTop - 50 &&
        logoHTML.offsetLeft <= containerLuigi.offsetLeft + 40 &&
        logoHTML.offsetLeft >= containerLuigi.offsetLeft - 40
      ) {
        // console.log("je recupere le logo HTML");
        affichageLogoHtml.style.display = "block";
        logoHTML.style.display = "none";
        gestionSonPiece();

      }

      var logoCSS3 = document.getElementById("logoCSS3");
      var affichageLogoCSS3 = document.getElementById("recuPlogoCSS3");
      if (
        logoCSS3.offsetTop >= containerLuigi.offsetTop - 50 &&
        logoCSS3.offsetLeft <= containerLuigi.offsetLeft + 40 &&
        logoCSS3.offsetLeft >= containerLuigi.offsetLeft - 40
      ) {
        // console.log("je recupere le logo CSS");
        affichageLogoCSS3.style.display = "block";
        logoCSS3.style.display = "none";
        gestionSonPiece();

      }

      var logoJS = document.getElementById("logoJS");
      var affichageLogoJS = document.getElementById("recuPlogoJS");

      if (
        logoJS.offsetTop >= containerLuigi.offsetTop - 50 &&
        logoJS.offsetLeft <= containerLuigi.offsetLeft + 40 &&
        logoJS.offsetLeft >= containerLuigi.offsetLeft - 40
      ) {
        console.log("je recupere le logo JS");
        affichageLogoJS.style.display = "block";
        logoJS.style.display = "none";
        gestionSonPiece();

      }

      // Apres recolte des logos , affichage du message "you win"
      var youWin = document.getElementById("youWin");
      if (
        affichageLogoHtml.style.display == "block" &&
        affichageLogoCSS3.style.display == "block" &&
        affichageLogoJS.style.display == "block"
      ) {
        // ici je demasque l'image "you win", masque les logos et personnages
        youWin.style.display = "block";
        logoHTML.style.display = "none";
        logoCSS3.style.display = "none";
        logoJS.style.display = "none";
        containerLuigi.style.display = "none";
        var masqueDeBowser = document.getElementById("MasqueDeBowser");
        masqueDeBowser.style.display = "none";
        affichageLogoHtml.style.display = "none";
        affichageLogoCSS3.style.display = "none";
        affichageLogoJS.style.display = "none";
        vie1 = document.getElementById("vieMario1");
        vie1.style.display = "none"; // Masque l'image
        vie2 = document.getElementById("vieMario2");
        vie2.style.display = "none";
        vie3 = document.getElementById("vieMario3");
        vie3.style.display = "none";
        vie4 = document.getElementById("vieMario4");
        vie4.style.display = "none";
        keybordGame = document.getElementById("keybordGame");
        keybordGame.style.display = "none";
        var github = document.getElementById("logoGithub");
        github.style.display = "block";
        var Etoile = document.getElementById("Etoile");
        Etoile.style.display = "block";
        var toad = document.getElementById("toad");
        toad.style.display = "block";
        gestionSonPiece = false;


      }
    };

    var setMouvementSaut = function () {
      // console.log("A" + sautOn);
      if (sautOn == false) {
        // console.log("B");

        IntervalmouvementSaut = window.setInterval(sautLuigi, 10);
        sautOn = true;
      }
    };

    var unsetMouvementSaut = function () {
      //console.log("ClearInterval");
      containerLuigi.style.animation = "";
      window.clearInterval(IntervalmouvementSaut);
      sautOn = false;
    };

    var moveGauche = function (i) {
      var deplacementGauche = 4;

      if (parseFloat(containerLuigi.style.left) >= limiteZoneDeJeuGauche) {
        masqueX = masqueX - deplacementGauche; // - par rapport a left
        containerLuigi.style.left = masqueX + "px"; //
      }

      if (i == 0) {
        spriteContenuLuigi.style.top = "-115px";
        spriteContenuLuigi.style.left = "-127px";
      }
      if (i == 1) {
        spriteContenuLuigi.style.top = "-115px";
        spriteContenuLuigi.style.left = "-72px";
      }
      i++;
      if (i > 1) {
        i = 0;
      }
      return i;
    };

    var moveDroite = function (k) {
      // condition de collision et deplacement
      var deplacementDroit = 4;
      var tuberVertX = 616;

      if (parseFloat(containerLuigi.style.left) >= limiteZoneDeJeuDroit) {
        masqueX = masqueX + deplacementOff; // - par rapport a left
        containerLuigi.style.left = masqueX + "px";
      } else {
        masqueX = masqueX + deplacementDroit; // + par rapport a left
        containerLuigi.style.left = masqueX + "px";
      }
      // var tuberVert = {
      //     width: 50,
      //     heigth: 50,
      //     top: 321,
      //     left: 616
      //   };

      //   if (masqueContainer.offsetLeft == tuberVert.left) {
      //     masqueX = masqueX + deplacementOff; // + par rapport a left
      //     masqueContainer.style.left = masqueX + "px";
      //   } else {
      //     masqueX = masqueX + deplacementDroit; // + par rapport a left
      //     masqueContainer.style.left = masqueX + "px";
      //   }
      // mouvement Sprite
      if (k == 0) {
        spriteContenuLuigi.style.top = "-114px";
        spriteContenuLuigi.style.left = "-283px";
      }
      if (k == 1) {
        spriteContenuLuigi.style.top = "-114px";
        spriteContenuLuigi.style.left = "-337px";
      }
      k++;
      if (k > 1) {
        k = 0;
      }
      return k;
    };

    var moveBas = function (l) {
      var x = 2; //  left + 2
      if (parseFloat(containerLuigi.style.top) >= x) {
        masqueY = masqueY - x; // - par rapport a top
        containerLuigi.style.top = masqueY + "px";
      }

      masqueY = masqueY + x; // + par rapport a top
      containerLuigi.style.top = masqueY + "px";
      if (l == 0) {
        spriteContenuLuigi.style.top = "-194px";
        spriteContenuLuigi.style.left = "-424px";

      }
      if (l == 1) {
        spriteContenuLuigi.style.top = "-194px";
        spriteContenuLuigi.style.left = "-424px";
      }
      l++;
      if (l > 1) {
        l = 0;
      }

      return l;
    };

    // var toucheEntrer = function (m) {
    //   if (m == 0) {
    //     spriteContenuLuigi.style.top = "-332px";
    //     spriteContenuLuigi.style.left = "-341px";
    //   }
    //   if (m == 1) {
    //     spriteContenuLuigi.style.top = "-291px";
    //     spriteContenuLuigi.style.left = "-366px";
    //   }
    //   m++;
    //   if (m > 1) {
    //     m = 0;
    //   }
    //   return m;
    // };

    window.onkeydown = function (event) {
      //  Quand la touche est  enfoncée
      var code = event.keyCode;

      switch (code) {
        case 37: //*instructions* // gauche
          gaucheEnfoncee = true;
          // i= moveGauche(i);
          break;
        case 38: //instructions// haut
          hautEnfoncee = true;
          break;
        case 39: // touche fleche droite
          droiteEnfoncee = true;

          break;
        case 40:
          //instructions// bas
          basEnfoncee = true;
          break;
        case 13: // touche entrer
          // m = toucheEntrer(m);
          break;
        case 32: // touche espace
          //espaceEnfonce = true;
          setMouvementSaut();
          break;
      }
    };

    window.onkeyup = function (event) {
      // Quand la touche est rela
      var code = event.keyCode;

      switch (code) {
        case 37: //*instructions* // gauche
          gaucheEnfoncee = false;
          break;
        case 38: //instructions// haut
          hautEnfoncee = false;

          break;
        case 39: // touche fleche droite
          droiteEnfoncee = false;
          break;

        case 40:
          //instructions// bas
          basEnfoncee = false;
          break;

        case 13: // touche entrer
          break;

        case 32: // touche espace
          //espaceEnfonce = false;
          if (sautOn) {
            unsetMouvementSaut();
          }
          break;
      }
    };

    setInterval(function () {
      if (gaucheEnfoncee) {
        i = moveGauche(i);
      }

      if (droiteEnfoncee) {
        k = moveDroite(k);
      }

      if (basEnfoncee) {
        l = moveBas(l);
      }
      // if (hautEnfoncee) {
      //   j = moveHaut(j);

      if (espaceEnfonce) {
        //n = saut(n)
        setMouvementSaut();
      }
    }, 10);

    var deplacementLogoHtml = function () {
      logoHTML5.style.animation =
        "deplacementDuLogoHTML5 3s 0s infinite alternate ease-out";
    };
    var IntervalmouvementLogo = window.setInterval(deplacementLogoHtml, 100);

    var deplacementLogoCSS = function () {
      logoCSS3.style.animation =
        "deplacementDulogoCSS3 3s 0s infinite alternate ease-out";
    };

    IntervalmouvementLogo = window.setInterval(deplacementLogoCSS, 200);

    var deplacementLogoJS = function () {
      logoJS.style.animation =
        "deplacementDulogoJS 3s 0s infinite alternate ease-out";
    };
    IntervalmouvementLogo = window.setInterval(deplacementLogoJS, 200);


  }






});
