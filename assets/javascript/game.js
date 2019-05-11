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
                eselected++ ;
            }
        }
      });

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

    // Finds index of "attr(character name)" in "array(either characterlist or enemylist)"
    function findInArray(array, attr) {
        for ( let i = 0; i < array.length; i++ ) {
            if ( array[i].Name == attr.toString() ) {
                return i;
            }
        }
    }

    // Returns player object from characterlist
    function pullPlayerObj(x) {
        let index = findInArray(characterlist, x);
        let character = characterlist[index];
        return character;
    }

    // Returns enemy object from enemylist
    function pullEnemyObj(y) {
        let eindex = findInArray(enemylist, y);
        let enemy = enemylist[eindex];
        return enemy;
    }

    // Returns player character index in characterlist
    function pullPlayerIndex(x) {
        let index = findInArray(characterlist, x);
        return index;
    }

    // Returns enemy character index in enemylist
    function pullEnemyIndex(y) {
        let eindex = findInArray(enemylist, y);
        return eindex;
    }

    // Handles calculating damage dealt
    function dealDamage(x, y) {
        let enemy = pullEnemyObj(y);
        let character = pullPlayerObj(x);
        if (x !== " " && y !== " ") {
            enemy.HealthPoints = enemy.HealthPoints - character.CounterAttackPower;
            $("#BattleMsg").html("You dealt " + character.CounterAttackPower + " damage!");
            character.CounterAttackPower = character.CounterAttackPower + (character.AttackPower * roundNumber);
            character.HealthPoints = character.HealthPoints - enemy.CounterAttackPower;
            $("#BattleMsg").append("<br> You took " + enemy.CounterAttackPower + " damage!");
            ++roundNumber;
            skillActivate();
        } else if (x == " ") {
            $("#BattleMsg").html("Please choose a character");
        } else {
            $("#BattleMsg").html("Please choose an opponent");
        }
    }

    // Updates selected character and enemy "HP" and "ATTACK"
    function refreshStats(x, y) {
        let eindex = pullEnemyIndex(y);
        let pindex = pullPlayerIndex(x);
        $(`#tag${pindex}`).html(characterlist[pindex].HealthPoints);
        $(`#atag${pindex}`).html(characterlist[pindex].CounterAttackPower);  
        $(`#etag${eindex}`).html(enemylist[eindex].HealthPoints);
        $(`#eatag${eindex}`).html(enemylist[eindex].CounterAttackPower);  
    }

    // Checks for results of battle
    function resultCheck(x, y) {
        let enemy = pullEnemyObj(y);
        let character = pullPlayerObj(x);
        let eindex = pullEnemyIndex(y);
        let pindex = pullPlayerIndex(x);
        if (character.HealthPoints <= 0) {
            $("#BattleMsg").html("You Lose! Choose another character!");
            selectedChar = " ";
            selected--;
            window.location.reload(true);
            // if (totalCharacters === 0) {
            //     window.location.reload(true);
            // }
        } else if (enemy.HealthPoints <= 0) {
            $("#BattleMsg").append("<br> You win! Choose next opponent.");
            $(`#Enem${eindex}`).hide();
            selectedEnemy = " ";
            eselected--;
        }
    }

    $(":button").click(function() {
        dealDamage(selectedChar, selectedEnemy);
        refreshStats(selectedChar, selectedEnemy);
        resultCheck(selectedChar, selectedEnemy);
    })
})