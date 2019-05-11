
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
];

    // Enemy Characters
const enemylist = [

    Golem = {
        Name: "Golem",
        HealthPoints: 200,
        CounterAttackPower: 30,
        CharImage: "assets/images/characters/Enemy1.png"
    },

    Harpy = {
        Name: "Harpy",
        HealthPoints: 100,
        CounterAttackPower: 15,
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

    Dragon = {
        Name: "Dragon",
        HealthPoints: 400,
        CounterAttackPower: 50,
        CharImage: "assets/images/characters/Boss1.png"
    },
]


// Load character select on page ready
$(document).ready(function() {
    // Load all characters in "characterlist" on document load
    for (let i = 0; i < characterlist.length; i++) {
        $(`<div id="Char${i}">`).appendTo('.CharacterSelect');
        $(`<p class="${characterlist[i].Name}Img" id="name${i}">${characterlist[i].Name}</p>`).appendTo(`#Char${i}`);
        $(`<img class="charimg" id="${characterlist[i].Name}Img" src="${characterlist[i].CharImage}">`).appendTo(`#Char${i}`);
        $(`<p id="tag${i}">${characterlist[i].HealthPoints}</p>`).appendTo(`#Char${i}`);
        $(`<p id="atag${i}">${characterlist[i].CounterAttackPower}</p>`).appendTo(`#Char${i}`);
    }
    // Load all enemies in "enemylist" on document load
    for (let i = 0; i < enemylist.length; i++) {
        $(`<div id="Enem${i}">`).appendTo('.EnemySelect');
        $(`<p class="${enemylist[i].Name}Img" id="Ename${i}">${enemylist[i].Name}</p>`).appendTo(`#Enem${i}`);
        $(`<img class="enemimg" id="${enemylist[i].Name}Img" src="${enemylist[i].CharImage}">`).appendTo(`#Enem${i}`);
    }
});