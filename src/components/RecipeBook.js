/// Recipe list

import image_air from "../images/potion__cyan.png";
import image_water from "../images/potion__blue.png";
import image_fire from "../images/potion__orange.png";
import image_plant from "../images/potion__green.png";
import image_animal from "../images/potion__brown.png";
import image_ground from "../images/potion__gray.png";

const RecipeBook = {

    ingredientNames: {
        0: "Air",
        1: "Water",
        2: "Fire",
        3: "Plant",
        4: "Animal",
        5: "Ground"
    },

    ingredientImages: {
        0: image_air,
        1: image_water,
        2: image_fire,
        3: image_plant,
        4: image_animal,
        5: image_ground
    },

    getResultFromIngredients: (ingredient1, ingredient2) => {

        const tryCombination = (ingredient1, ingredient2) => {
            const combination = RecipeBook.ingredientNames[ingredient1] + " + " +  RecipeBook.ingredientNames[ingredient2];
            let title, description;
            switch(combination) {
                case "Air + Water":     title = "Bubble Bringer"; description ="Makes you burp bubbles!"; break;
                case "Fire + Water":    title = "Sweat Sauce"; description ="Makes you sweat!"; break;
                case "Fire + Air":      title = "Dragon Drink"; description ="Let's you breathe fire!"; break;
                case "Plant + Water":   title = "Gulp of Growth"; description ="Makes you taller!"; break;
                case "Plant + Air":     title = "Mist of Mint"; description ="Gives you fresh breath!"; break;
                case "Plant + Fire":    title = "Chloroplast Blast"; description ="Turns your skin green!"; break;
                case "Animal + Water":  title = "Shot of Snorkel"; description ="Gives you gills and fins!"; break;
                case "Animal + Air":    title = "Feather Flurry"; description ="Gives you wings!"; break;
                case "Animal + Fire":   title = "Luminous Lighter"; description ="Makes your body glow!"; break;
                case "Animal + Plant":  title = "Background Blur"; description ="Gives you camouflauge!"; break;
                case "Ground + Water":  title = "Slime Slurry"; description ="Makes you slimy!"; break;
                case "Ground + Air":    title = "Smoke Shake"; description ="Surrounds you in a cloud of dust!"; break;
                case "Ground + Fire":   title = "Magma Meltdown"; description ="Makes food melt in your mouth, literally!"; break;
                case "Ground + Plant":  title = "Moss Maker"; description ="Covers you with moss!"; break;
                case "Ground + Animal": title = "Burrowing Beast"; description ="Makes you really want to dig a hole!"; break;
                default:
                    return null;
            }
            return {title: title, description: description, ingredients: combination};
        };

        let result = tryCombination(ingredient1, ingredient2);
        if (result === null) result = tryCombination(ingredient2, ingredient1);
        if (result === null) {
            console.error("Recipe not found!");
            return {title: "???", description: "Something weird happened!", ingredients: "??? + ???"};
        }
        return result;
    }

}


export default RecipeBook;