
var Rey = {
    Name: "Rey",
    HealthPoints: 100,
    AttackPower: 10,
    CounterAttackPower: 10
}

var Finn = {
    Name: "Finn",
    HealthPoints: 125,
    AttackPower: 15,
    CounterAttackPower: 15
}

var ObiWan = {
    Name: "Obi-Wan",
    HealthPoints: 150,
    AttackPower: 5,
    CounterAttackPower: 5
}

// Enemy Characters

var DarthVader = {
    Name: "Darth Vader",
    HealthPoints: 120,
    CounterAttackPower: 25
}

var KyloRen = {
    Name: "Kylo Ren",
    HealthPoints: 150,
    CounterAttackPower: 35
}

var Trooper = {
    Name: "Trooper",
    HealthPoints: 100,
    CounterAttackPower: 5
}

var Phasma = {
    Name: "Capt. Phasma",
    HealthPoints: 130,
    CounterAttackPower: 15
}

var selectedChar = " ";
var selectedEnemy = " ";
var charHP = " ";
var enemyHP = " ";
var roundNumber = 1;

$(function() {
    $("#reyImg").click(function() {
        charHP = $("#tag1");
        $("#Char2").hide();
        $("#Char3").hide();
        selectedChar = Rey;
    })
    $("#finnImg").click(function() {
        $("#Char1").hide();
        $("#Char3").hide();
        selectedChar = Finn;
    })
    $("#obiwanImg").click(function() {
        $("#Char1").hide();
        $("#Char2").hide();
        selectedChar = ObiWan;
    })

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

    function dealDamage(x, y) {
        if (x && y !== " ") {
            y.HealthPoints = y.HealthPoints - x.CounterAttackPower;
            $("#BattleMsg").html("You dealt " + x.CounterAttackPower + " damage!");
            x.CounterAttackPower = x.CounterAttackPower + (x.AttackPower * roundNumber);
            x. HealthPoints = x.HealthPoints - y.CounterAttackPower;
           // $("#BattleMsg").html("You took " + y.CounterAttackPower + " damage!");
            ++roundNumber;
        } else if (x == " ") {
            $("#BattleMsg").html("Please choose a character");
        } else {
            $("#BattleMsg").html("Please choose an opponent");
        }
    }

    function refreshStats(x, y) {
        switch (x) {
            case Rey:
                $("#tag1").html(Rey.HealthPoints);
                break;
            case Finn:
                $("#tag2").html(Finn.HealthPoints);
                break;
            case ObiWan:
                $("#tag3").html(ObiWan.HealthPoints);
                break;
            default:
                break;
        }
        switch (y) {
            case DarthVader:
                $("#tag4").html(DarthVader.HealthPoints);
                break;
            case KyloRen:
                $("#tag5").html(KyloRen.HealthPoints);
                break;
            case Trooper:
                $("#tag6").html(Trooper.HealthPoints);
                break;
            case Phasma:
                $("#tag7").html(Phasma.HealthPoints);
        }
    }

    function resultCheck(x, y) {
        if (x.HealthPoints <= 0) {
            $("#BattleMsg").html("You Lose!");
            window.location.reload(true);
        } else if (y.HealthPoints <= 0) {
            $("#BattleMsg").html("You win! Choose next opponent.");
            if (selectedEnemy == DarthVader) {
                $("#Enem1").hide();
            } else if (selectedEnemy == KyloRen) {
                $("#Enem2").hide();
            } else if (selectedEnemy == Trooper) {
                $("#Enem3").hide();
            } else if (selectedEnemy = Phasma) {
                $("#Enem4").hide();
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
    

    $(":button").click(function() {
        dealDamage(selectedChar, selectedEnemy);
        refreshStats(selectedChar, selectedEnemy);
        resultCheck(selectedChar, selectedEnemy);
    })
})