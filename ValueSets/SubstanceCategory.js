/**
 * Substance category codes
 */
export var SubstanceCategory = {
    /**
     * A substance that causes an allergic reaction.
     */
    substance_category_Allergen: {
        code: "allergen",
        display: "Allergen",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * A substance that is produced by or extracted from a biological source.
     */
    substance_category_BiologicalSubstance: {
        code: "biological",
        display: "Biological Substance",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * A substance that comes directly from a human or an animal (e.g. blood, urine, feces, tears, etc.).
     */
    substance_category_BodySubstance: {
        code: "body",
        display: "Body Substance",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * Any organic or inorganic substance of a particular molecular identity, including -- (i) any combination of such substances occurring in whole or in part as a result of a chemical reaction or occurring in nature and (ii) any element or uncombined radical (http://www.epa.gov/opptintr/import-export/pubs/importguide.pdf).
     */
    substance_category_Chemical: {
        code: "chemical",
        display: "Chemical",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * A substance intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease in man or other animals (Federal Food Drug and Cosmetic Act).
     */
    substance_category_DrugOrMedicament: {
        code: "drug",
        display: "Drug or Medicament",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * A food, dietary ingredient, or dietary supplement for human or animal.
     */
    substance_category_DietarySubstance: {
        code: "food",
        display: "Dietary Substance",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    },
    /**
     * A finished product which is not normally ingested, absorbed or injected (e.g. steel, iron, wood, plastic and paper).
     */
    substance_category_Material: {
        code: "material",
        display: "Material",
        system: "http://terminology.hl7.org/CodeSystem/substance-category"
    }
};
