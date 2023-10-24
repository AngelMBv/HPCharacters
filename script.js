const characterSelect = document.getElementById("character-select");
const characterName = document.getElementById("character-name");
const characterImage = document.getElementById("character-image");
const characterHouse = document.getElementById("character-house");
const characterDescription = document.getElementById("character-description");
const characterSpell = document.getElementById("character-spell");
const characterInfo = document.getElementById("character-info");
const characters = {
    harry: {
        name: "Harry Potter",
        house: "Gryffindor",
        description: "The famous wizard who survived Lord Voldemort's attack when he was a baby. Protagonist of the series.",
        spell: "Expecto Patronum"
    },
    hermione: {
        name: "Hermione Granger",
        house: "Gryffindor",
        description: "One of Harry and Ron's best friends, known for her intelligence and exceptional magical abilities.",
        spell: "Alohomora"
    },
    ron: {
        name: "Ron Weasley",
        house: "Gryffindor",
        description: "Best friend of Harry and Hermione, known for his loyalty and sense of humor.",
        spell: "Lumos"
    },
    dumbledore: {
        name: "Albus Dumbledore",
        house: "Gryffindor",
        description: "The headmaster of Hogwarts and one of the most powerful wizards of all time.",
        spell: "Patronus Charm"
    },
    snape: {
        name: "Severus Snape",
        house: "Slytherin",
        description: "Potions Professor at Hogwarts, with a mysterious and complicated past.",
        spell: "Sectumsempra"
    },
    luna: {
        name: "Luna Lovegood",
        house: "Ravenclaw",
        description: "An eccentric student and friend of Harry, known for her belief in magical creatures and outlandish theories.",
        spell: "Expecto Patronum"
    },
    cedric: {
        name: "Cedric Diggory",
        house: "Hufflepuff",
        description: "Hogwarts student and captain of the Hufflepuff Quidditch team, known for his bravery.",
        spell: "Accio"
    },
    voldemort: {
        name: "Lord Voldemort",
        house: "Slytherin",
        description: "The most powerful dark wizard in history, known for his desire for domination and his obsession with Harry Potter.",
        spell: "Avada Kedavra"
    },
    draco: {
        name: "Draco Malfoy",
        house: "Slytherin",
        description: "Slytherin student, known for her arrogant attitude and conflict with  Harry Potter.",
        spell: "Expelliarmus"
    },
    sirius: {
        name: "Sirius Black",
        house: "Gryffindor",
        description: " Harrys godfather and member of the Black family, known for his fight against the dark arts",
        spell: "Stupefy"
    },
};

characterSelect.addEventListener("change", () => {
    const selectedCharacter = characterSelect.value;
    if (selectedCharacter !== "") {
        const character = characters[selectedCharacter];

        characterName.textContent = character.name;
        characterImage.src = `img/${selectedCharacter}.png`;
        characterHouse.textContent = ` ${character.house}`;
        characterDescription.textContent = ` ${character.description}`;
        characterSpell.textContent = ` ${character.spell}`;

        characterInfo.style.display = "block";
    } else {
        characterInfo.style.display = "none";
    }
});
