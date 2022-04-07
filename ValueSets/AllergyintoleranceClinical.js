/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export var AllergyintoleranceClinical = {
    /**
     * The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
     */
    allergyintolerance_clinical_Active: {
        code: "active",
        display: "Active",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    },
    /**
     * The subject is no longer at risk of a reaction to the identified substance.
     */
    allergyintolerance_clinical_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    },
    /**
     * A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
     */
    allergyintolerance_clinical_Resolved: {
        code: "resolved",
        display: "Resolved",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    }
};
