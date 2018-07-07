window.addEventListener("DOMContentLoaded", function () {
  var test = false;
  var MouvementSpriteBowser = function () {
    var masqueDeBowser = document.getElementById("MasqueDeBowser");
    var maZoneDeJeu = document.getElementById("zone-de-jeu");
    var spriteBowser = document.getElementById("spriteBowser");
    var masqueBowserX = 766; //left
    var masqueBowserY = 302; //top``
    var positionDeDepart = 766;
    var masqueContainer = document.getElementById("container");

    masqueDeBowser.style.left = masqueBowserX + "px";
    masqueDeBowser.style.top = masqueBowserY + "px";
    var compteurIndexTableauDeplacement = 0;
    var deplacement = 10;
    var limiteZoneDeJeuGauche = 7;
    var limiteZoneDeJeuDroit = 920;
    var limiteDeSaut = 300;
    var changementDeSens = false;
    // ici definition du mouvement sprite gauche uniquement car nous allons voir par la suite le scaleX(number) pour inverser le mouvement sprite gauche vers la droite.
    this.mouvementspriteGauche = {
      deplacementGauche: [
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        },

        {
          largeurDuMasque: "63px",
          hauteurDuMasque: "49px",
          topSprite: "-170px",
          leftSprite: "-142px"
        },

        {
          largeurDuMasque: "69px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-442px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        }, {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        }, {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        }, {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        }, {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        }, {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-97px",
          leftSprite: "-17px"
        },
        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-15px"
        },

        {
          largeurDuMasque: "68px",
          hauteurDuMasque: "50px",
          topSprite: "-170px",
          leftSprite: "-79px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        }, {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-243px",
          leftSprite: "-345px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-250px"
        },
        {
          largeurDuMasque: "90px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-155px"
        },
        {
          largeurDuMasque: "76px",
          hauteurDuMasque: "49px",
          topSprite: "-242px",
          leftSprite: "-82px"
        }
      ]
    };

    // Ici j'utilise le  offset  => Renvoie la position de l'élémenT en lecture seul
    var that = this;
    var score = 0;
    //var cantTouch = true;

    this.mouvementBowserXY = function () {
      // Position Bowser
      if (
        changementDeSens === false &&
        masqueDeBowser.offsetLeft > limiteZoneDeJeuGauche &&
        masqueDeBowser.offsetLeft <
        maZoneDeJeu.clientWidth - masqueDeBowser.clientWidth // M + sa largeur
      ) {
        masqueBowserX = masqueBowserX - deplacement;
        masqueDeBowser.style.left = masqueBowserX + "px";
      } else if (masqueDeBowser.offsetLeft == 6 || changementDeSens === true) {
        masqueDeBowser.style.transform = "scaleX(-1)"; //' Ici Inversement' sprite
        changementDeSens = true;
        masqueBowserX = masqueBowserX + deplacement;
        masqueDeBowser.style.left = masqueBowserX + "px";
      }
      if (
        changementDeSens &&
        masqueDeBowser.offsetLeft >= limiteZoneDeJeuDroit
      ) {
        masqueDeBowser.style.transform = "scaleX(1)"; // 'RéInversement' du sprite
        masqueBowserX = masqueBowserX - deplacement;
        masqueDeBowser.style.left = masqueBowserX + "px";
        changementDeSens = false;
      }
      if (
        compteurIndexTableauDeplacement >=
        that.mouvementspriteGauche.deplacementGauche.length
      ) {
        compteurIndexTableauDeplacement = 0;
      }
      masqueDeBowser.style.width =
        that.mouvementspriteGauche.deplacementGauche[
          compteurIndexTableauDeplacement
        ].largeurDuMasque;

      masqueDeBowser.style.height =
        that.mouvementspriteGauche.deplacementGauche[
          compteurIndexTableauDeplacement
        ].hauteurDuMasque;

      spriteBowser.style.top =
        that.mouvementspriteGauche.deplacementGauche[
          compteurIndexTableauDeplacement
        ].topSprite;

      spriteBowser.style.left =
        that.mouvementspriteGauche.deplacementGauche[
          compteurIndexTableauDeplacement
        ].leftSprite;
      compteurIndexTableauDeplacement++;

      //collision;
      if (
        masqueContainer.offsetLeft + 20 >= masqueDeBowser.offsetLeft &&
        masqueContainer.offsetLeft - 60 <= masqueDeBowser.offsetLeft &&
        masqueContainer.offsetTop >= 320
      ) {
        //alert("");
        console.log("collision");
        test = true;

        // Point de Vie de Mario ("4 coeurs")
        score++;
        if (score == 1) {
          vie1 = document.getElementById("vieMario1");
          vie1.style.display = "none"; // Masque l'image
        } else if (score == 10) {
          vie2 = document.getElementById("vieMario2");
          vie2.style.display = "none";
        } else if (score == 20) {
          vie3 = document.getElementById("vieMario3");
          vie3.style.display = "none";
        } else if (score == 30) {
          vie4 = document.getElementById("vieMario4");
          vie4.style.display = "none";
          gameOver = document.getElementById("divGameOver");
          gameOver.style.display = "block";

        }
      }




      //collision;
      var containerLuigi = document.getElementById("containerLuigi");
      var spriteContenuLuigi = document.getElementById("contenuLuigi");
      if (
        containerLuigi.offsetLeft + 20 >= masqueDeBowser.offsetLeft &&
        containerLuigi.offsetLeft - 60 <= masqueDeBowser.offsetLeft &&
        containerLuigi.offsetTop >= 320
      ) {
        //alert("");
        console.log("collision");
        test = true;

        // Point de Vie de Luigi ("4 coeurs")
        score++;
        if (score == 1) {
          vie1 = document.getElementById("vieMario1");
          vie1.style.display = "none"; // Masque l'image
        } else if (score == 10) {
          vie2 = document.getElementById("vieMario2");
          vie2.style.display = "none";
        } else if (score == 20) {
          vie3 = document.getElementById("vieMario3");
          vie3.style.display = "none";
        } else if (score == 30) {
          vie4 = document.getElementById("vieMario4");
          vie4.style.display = "none";
          gameOver = document.getElementById("divGameOver");
          gameOver.style.display = "block";

        }
      }



      //restart;
      buttonRestart = document.getElementById("buttonRestart");
      buttonRestart.addEventListener("click", function () {
        // ici window.location.reload() sert à rafraichir ma page
        window.location.reload();
        //cela m'évite donc d'initialiser les changements manuellement
        // var restart = true;
        // gameOver.style.display = "none";
        // vie1.style.display = "inline-block";
        // vie2.style.display = "inline-block";
        // vie3.style.display = "inline-block";
        // vie4.style.display = "inline-block";
        // score = 0;
        // var logoJS = document.getElementById("logoJS");
        // logoJS.style.display = "block";
        // var affichageLogoJS = document.getElementById("recuPlogoJS");
        // affichageLogoJS.style.display = "none";
        // var logoCSS3 = document.getElementById("logoCSS3");
        // logoCSS3.style.display = "block";
        // var affichageLogoCSS3 = document.getElementById("recuPlogoCSS3");
        // affichageLogoCSS3.style.display = "none";
        // var logoHTML = document.getElementById("logoHTML5");
        // logoHTML.style.display = "block";
        // var affichageLogoHtml = document.getElementById("recuPlogoHtml5");
        // affichageLogoHtml.style.display = "none";
      });
    };
  };

  var bowser = new MouvementSpriteBowser();

  var containerLuigi = document.getElementById("containerLuigi")
  var container = document.getElementById("container")




  testinterval = setInterval(bowser.mouvementBowserXY, 20); // 20 idéalement // 





});
