let selectedChar = " ";
let selectedEnemy = " ";
let charHP = " ";
let enemyHP = " ";
let roundNumber = 1;
let selected = 0; // 0 = No heroes selected yet
let eselected = 0; // 0 = No enenmies selected yet
// Hero Skill variables
let punch = 1; //Hero1
// Monster Skill variables
let endure = 1;
let doubleStrike = 1;
let forceDrain = 0;
// Boss Skill variables
let fireBreath = 1; //Boss1 (Dragon)

$(function() {

    // Select characters
    $('.charimg').click(this.id, function() {
        let clickedChar = $(`#${this.id}`);
        let clickedCharClass = clickedChar.attr('id');
        if (selected === 1 && !clickedChar.hasClass('selected')) {
            $("#BattleMsg").html("Please remove a character from your group first.");
        } else {
            if ( clickedChar.hasClass('selected') ) {
                clickedChar.removeClass('selected');
                $(`.${clickedCharClass}`).removeClass('textselected');
                selectedChar = " ";
                selected-- ;
            } else {
                clickedChar.addClass('selected');
                $(`.${clickedCharClass}`).addClass('textselected');
                selectedChar = clickedCharClass;
                selected++ ;
            }
        }
      });

    // Select enemies
    $('.enemimg').click(this.id, function() {
        let clickedEnem = $(`#${this.id}`);
        let clickedEnemClass = clickedEnem.attr('id');
        console.log(clickedEnem,clickedEnemClass);
        if (eselected === 1 && !clickedEnem.hasClass('selected')) {
            $("#BattleMsg").html("Please deslect an enemy first.");
        } else {
            if ( clickedEnem.hasClass('selected') ) {
                clickedEnem.removeClass('selected');
                $(`.${clickedEnemClass}`).removeClass('textselected');
                selectedEnemy = " ";
                eselected-- ;
            } else {
                clickedEnem.addClass('selected');
                $(`.${clickedEnemClass}`).addClass('textselected');
                selectedEnemy = clickedEnemClass;
                console.log(selectedEnemy);
                eselected++ ;
            }
        }
      });

    function defenderSelect(elem, obj) {
        if (selectedEnemy === " ") {
            $(elem).appendTo("#Defender");
            $(".BattleStatus").css("margin-top", "130px");
            selectedEnemy = obj;
            console.log(selectedEnemy);
        } else {
            $("#BattleMsg").html("You already have an opponent!");
        }
    }

    function skillActivate() {
        // if (selectedEnemy == DarthVader) {
        //     if (endure == 1 && selectedEnemy.HealthPoints <= 0) {
        //         endure = 0;
        //         selectedEnemy.HealthPoints = 1;
        //         $("#BattleMsg").append("<br> Darth Vader endured the hit with 1 HP");
        //     }
        // } else if (selectedEnemy == Assassin) {
        //     if (doubleStrike == 1) {
        //         x = selectedChar;
        //         x.HealthPoints = x.HealthPoints - Assassin.CounterAttackPower;
        //         doubleStrike--;
        //         $("#BattleMsg").append("<br> Assassin striked you again for " + Assassin.CounterAttackPower + " damage!");
        //     }
        // } else if (selectedEnemy == KyloRen) {
        //     forceDrain = 1;
        //     if (forceDrain == 1) {
        //         drainedHP = selectedEnemy.CounterAttackPower;
        //         selectedEnemy.HealthPoints = selectedEnemy.HealthPoints + drainedHP;
        //         $("#BattleMsg").append("<br> Kylo drained you for " + drainedHP + " HP!");
        //         forceDrain = 0;
        //     }
        // }
    }

    function dealDamage(x, y) {
        console.log(x);
        console.log(y);
        if (x !== " " && y !== " ") {
            y.HealthPoints = y.HealthPoints - x.CounterAttackPower;
            $("#BattleMsg").html("You dealt " + x.CounterAttackPower + " damage!");
            x.CounterAttackPower = x.CounterAttackPower + (x.AttackPower * roundNumber);
            console.log(x.CounterAttackPower);
            x. HealthPoints = x.HealthPoints - y.CounterAttackPower;
            $("#BattleMsg").append("<br> You took " + y.CounterAttackPower + " damage!");
            ++roundNumber;
            skillActivate();
        } else if (x == " ") {
            $("#BattleMsg").html("Please choose a character");
        } else {
            $("#BattleMsg").html("Please choose an opponent");
        }
    }

    function refreshStats(x, y) {
        // switch (x) {
        //     case Rey:
        //         $("#tag1").html(Rey.HealthPoints);
        //         break;
        //     case Finn:
        //         $("#tag2").html(Finn.HealthPoints);
        //         break;
        //     case ObiWan:
        //         $("#tag3").html(ObiWan.HealthPoints);
        //         break;
        //     default:
        //         break;
        // }
        // switch (y) {
        //     case DarthVader:
        //         $("#tag4").html(DarthVader.HealthPoints);
        //         break;
        //     case KyloRen:
        //         $("#tag5").html(KyloRen.HealthPoints);
        //         break;
        //     case Trooper:
        //         $("#tag6").html(Trooper.HealthPoints);
        //         break;
        //     case Phasma:
        //         $("#tag7").html(Phasma.HealthPoints);
        //         break;
        //     case Assassin:
        //         $("#tag8").html(Assassin.HealthPoints);
        //         break;
        // }
    }

    function resultCheck(x, y) {
        if (x.HealthPoints <= 0) {
            $("#BattleMsg").html("You Lose!");
            window.location.reload(true);
        } else if (y.HealthPoints <= 0) {
            $("#BattleMsg").append("<br> You win! Choose next opponent.");
            if (selectedEnemy == DarthVader) {
                $("#Enem1").hide();
            } else if (selectedEnemy == KyloRen) {
                $("#Enem2").hide();
            } else if (selectedEnemy == Trooper) {
                $("#Enem3").hide();
            } else if (selectedEnemy == Phasma) {
                $("#Enem4").hide();
            } else if (selectedEnemy == Assassin) {
                $("#Enem5").hide();
            }
            selectedEnemy = " ";
        }
    }
    
    $("#darthImg").click(function() {
        defenderSelect($("#Enem1"),DarthVader);
    })
    $("#kyloImg").click(function() {
        defenderSelect($("#Enem2"),KyloRen);
    })
    $("#troopImg").click(function() {
        defenderSelect($("#Enem3"),Trooper);
    })
    $("#phasmaImg").click(function() {
        defenderSelect($("#Enem4"),Phasma);
    })
    $("#assasImg").click(function() {
        defenderSelect($("#Enem5"),Assassin);
    })

    $(":button").click(function() {
        dealDamage(selectedChar, selectedEnemy);
        refreshStats(selectedChar, selectedEnemy);
        resultCheck(selectedChar, selectedEnemy);
    })
})