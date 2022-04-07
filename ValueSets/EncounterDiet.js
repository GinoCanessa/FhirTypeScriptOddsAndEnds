/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export var EncounterDiet = {
    /**
     * Excludes dairy products.
     */
    encounter_diet_DairyFree: {
        code: "dairy-free",
        display: "Dairy Free",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Excludes ingredients containing gluten.
     */
    encounter_diet_GlutenFree: {
        code: "gluten-free",
        display: "Gluten Free",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Foods that conform to Islamic law.
     */
    encounter_diet_Halal: {
        code: "halal",
        display: "Halal",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Foods that conform to Jewish dietary law.
     */
    encounter_diet_Kosher: {
        code: "kosher",
        display: "Kosher",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Excludes ingredients containing nuts.
     */
    encounter_diet_NutFree: {
        code: "nut-free",
        display: "Nut Free",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
     */
    encounter_diet_Vegan: {
        code: "vegan",
        display: "Vegan",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    },
    /**
     * Food without meat, poultry or seafood.
     */
    encounter_diet_Vegetarian: {
        code: "vegetarian",
        display: "Vegetarian",
        system: "http://terminology.hl7.org/CodeSystem/diet"
    }
};
