/// Recipe list

const RecipeBook = {

    ingredientName: {
        0: "Air",
        1: "Water",
        2: "Fire",
        3: "Plant",
        4: "Animal",
        5: "Rock"
    },

    getResultFromIngredients: (ingredient1, ingredient2) => {

        const tryCombination = (ingredient1, ingredient2) => {
            const combination = RecipeBook.ingredientName[ingredient1] + " + " +  RecipeBook.ingredientName[ingredient2];
            switch(combination) {
                case "Air + Water": return "potion that makes you exhale bubbles";
                case "Fire + Water": return "potion that makes you sweat";
                case "Fire + Air": return "potion that makes you exhale fire";
                case "Plant + Water": return "potion that makes you grow";
                case "Plant + Air": return "potion that gives you fresh breath";
                case "Plant + Fire": return "potion that makes you green";
                case "Animal + Water": return "potion that gives you fins/flippers";
                case "Animal + Air": return "potion that gives you wings";
                case "Animal + Fire": return "potion that makes you glow";
                case "Animal + Plant": return "potion that gives you camouflauge";
                case "Rock + Water": return "potion that makes you slimy";
                case "Rock + Air": return "potion that surrounds you in a dust cloud";
                case "Rock + Fire": return "potion that makes you melty";
                case "Rock + Plant": return "potion that covers you with moss";
                case "Rock + Animal": return "potion that makes you good at digging";
                default:
                    return null;
            }
        };

        let result = tryCombination(ingredient1, ingredient2);
        if (result === null) result = tryCombination(ingredient2, ingredient1);
        if (result === null) {
            console.error("Recipe not found!");
            return "Whoops, something's gone wrong!";
        }
        return result;
    }

}


export default RecipeBook;