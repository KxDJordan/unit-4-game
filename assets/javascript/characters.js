
    // Player characters
const characterlist = [

    Mercenary = {
        Name: "Mercenary",
        HealthPoints: 100,
        AttackPower: 10,
        CounterAttackPower: 10,
        CharImage: "assets/images/characters/Hero1.png"
    },

    Priest = {
        Name: "Priest",
        HealthPoints: 125,
        AttackPower: 15,
        CounterAttackPower: 15,
        CharImage: "assets/images/characters/Hero2.png"
    },

    Samurai = {
        Name: "Samurai",
        HealthPoints: 150,
        AttackPower: 5,
        CounterAttackPower: 5,
        CharImage: "assets/images/characters/Hero3.png"
    },

    Archer = {
        Name: "Archer",
        HealthPoints: 125,
        AttackPower: 20,
        CounterAttackPower: 20,
        CharImage: "assets/images/characters/Hero4.png"
    },

    Gladiator = {
        Name: "Gladiator",
        HealthPoints: 200,
        AttackPower: 50,
        CounterAttackPower: 50,
        CharImage: "assets/images/characters/Hero5.png"
    },

    Knight = {
        Name: "Knight",
        HealthPoints: 150,
        AttackPower: 15,
        CounterAttackPower: 15,
        CharImage: "assets/images/characters/Hero6.png"
    },
];

    // Enemy Characters
const enemylist = [

    Golem = {
        Name: "Golem",
        HealthPoints: 200,
        CounterAttackPower: 30,
        CharImage: "assets/images/characters/Enemy1.png"
    },

    Valkyrie = {
        Name: "Valkyrie",
        HealthPoints: 125,
        CounterAttackPower: 25,
        CharImage: "assets/images/characters/Enemy2.png"
    },

    Minotaur = {
        Name: "Minotaur",
        HealthPoints: 175,
        CounterAttackPower: 20,
        CharImage: "assets/images/characters/Enemy3.png"
    },

    Witch = {
        Name: "Witch",
        HealthPoints: 110,
        CounterAttackPower: 10,
        CharImage: "assets/images/characters/Enemy4.png"
    },

    Kobold = {
        Name: "Kobold",
        HealthPoints: 130,
        CounterAttackPower: 30,
        CharImage: "assets/images/characters/Enemy5.png"
    }, 

    Centaur = {
        Name: "Centaur",
        HealthPoints: 150,
        CounterAttackPower: 25,
        CharImage: "assets/images/characters/Enemy7.png"
    },

    Harpy = {
        Name: "Harpy",
        HealthPoints: 100,
        CounterAttackPower: 15,
        CharImage: "assets/images/characters/Enemy9.png",
    },

    Vampire = {
        Name: "Vampire",
        HealthPoints: 130,
        AttackPower: 20,
        CounterAttackPower: 20,
        CharImage: "assets/images/characters/Enemy10.png",
    },

    Dragon = {
        Name: "Dragon",
        HealthPoints: 400,
        CounterAttackPower: 50,
        CharImage: "assets/images/characters/Boss1.png",
        Type: "Boss",
    },

    Magmastone = {
        Name: "Magmastone",
        HealthPoints: 650,
        CounterAttackPower: 35,
        CharImage: "assets/images/characters/Boss2.png",
        Type: "Boss",
    },


]


// Load character select on page ready
$(document).ready(function() {
    // Load all characters in "characterlist" on document load
    for (let i = 0; i < characterlist.length; i++) {
        $(`<div id="Char${i}">`).appendTo('.CharacterSelect');
        $(`<p class="${characterlist[i].Name}" id="name${i}">${characterlist[i].Name}</p>`).appendTo(`#Char${i}`);
        $(`<img class="charimg" id="${characterlist[i].Name}" src="${characterlist[i].CharImage}">`).appendTo(`#Char${i}`);
        $(`<p id="tag${i}">${characterlist[i].HealthPoints}</p>`).appendTo(`#Char${i}`);
        $(`<p id="atag${i}">${characterlist[i].CounterAttackPower}</p>`).appendTo(`#Char${i}`);
    }
    // Load all enemies in "enemylist" on document load
    for (let i = 0; i < enemylist.length; i++) {
        $(`<div id="Enem${i}">`).appendTo('.EnemySelect');
        $(`<p class="${enemylist[i].Name}" id="Ename${i}">${enemylist[i].Name}</p>`).appendTo(`#Enem${i}`);
        $(`<img class="enemimg" id="${enemylist[i].Name}" src="${enemylist[i].CharImage}">`).appendTo(`#Enem${i}`);
        $(`<p id="etag${i}">${enemylist[i].HealthPoints}</p>`).appendTo(`#Enem${i}`);
        $(`<p id="eatag${i}">${enemylist[i].CounterAttackPower}</p>`).appendTo(`#Enem${i}`);
    }
});