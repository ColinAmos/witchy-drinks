/// Recipe list

const RecipeBook = {

    ingredientNameFromIndex: {
        0: "Air",
        1: "Water",
        2: "Fire",
        3: "Plant",
        4: "Animal",
        5: "Ground"
    },

    getResultFromIngredients: (ingredient1, ingredient2) => {

        const tryCombination = (ingredient1, ingredient2) => {
            const combination = RecipeBook.ingredientNameFromIndex[ingredient1] + " + " +  RecipeBook.ingredientNameFromIndex[ingredient2];
            let title, description;
            switch(combination) {
                case "Air + Water":     title = "Bubble Bringer"; description ="Makes you burp bubbles!"; break;
                case "Fire + Water":    title = "Sweat Sauce"; description ="Makes you sweat! A lot!"; break;
                case "Fire + Air":      title = "Dragon Drink"; description ="Let's you breathe fire!"; break;
                case "Plant + Water":   title = "Sip of Growth"; description ="Makes you taller!"; break;
                case "Plant + Air":     title = "Mint Filter"; description ="Gives you fresh breath!"; break;
                case "Plant + Fire":    title = "Chloroplast Blast"; description ="Turns your skin green!"; break;
                case "Animal + Water":  title = "Salty Snorkel"; description ="Gives you gills and fins!"; break;
                case "Animal + Air":    title = "Feather Flurry"; description ="Gives you wings!"; break;
                case "Animal + Fire":   title = "Bio Glow"; description ="Makes your body glow!"; break;
                case "Animal + Plant":  title = "Background Blur"; description ="Gives you camouflauge!"; break;
                case "Ground + Water":  title = "Slime Time"; description ="Makes you slimy!"; break;
                case "Ground + Air":    title = "Smoke Bomb"; description ="Surrounds you in a cloud of dust!"; break;
                case "Ground + Fire":   title = "Magma Meltdown"; description ="Makes food melt in your mouth, literally!"; break;
                case "Ground + Plant":  title = "Moss Maker"; description ="Covers you with moss!"; break;
                case "Ground + Animal": title = "Beast Burrow"; description ="Makes you really want to dig a hole!"; break;
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