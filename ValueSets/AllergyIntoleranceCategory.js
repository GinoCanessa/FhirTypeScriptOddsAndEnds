/**
 * Category of an identified substance associated with allergies or intolerances.
 */
export var AllergyIntoleranceCategory = {
    /**
     * A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.
     */
    allergy_intolerance_category_Biologic: {
        code: "biologic",
        display: "Biologic",
        system: "http://hl7.org/fhir/allergy-intolerance-category"
    },
    /**
     * Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.
     */
    allergy_intolerance_category_Environment: {
        code: "environment",
        display: "Environment",
        system: "http://hl7.org/fhir/allergy-intolerance-category"
    },
    /**
     * Any substance consumed to provide nutritional support for the body.
     */
    allergy_intolerance_category_Food: {
        code: "food",
        display: "Food",
        system: "http://hl7.org/fhir/allergy-intolerance-category"
    },
    /**
     * Substances administered to achieve a physiological effect.
     */
    allergy_intolerance_category_Medication: {
        code: "medication",
        display: "Medication",
        system: "http://hl7.org/fhir/allergy-intolerance-category"
    }
};
