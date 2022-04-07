/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export var IdentityAssuranceLevel = {
    /**
     * Little or no confidence in the asserted identity's accuracy.
     */
    identity_assuranceLevel_Level1: {
        code: "level1",
        display: "Level 1",
        system: "http://hl7.org/fhir/identity-assuranceLevel"
    },
    /**
     * Some confidence in the asserted identity's accuracy.
     */
    identity_assuranceLevel_Level2: {
        code: "level2",
        display: "Level 2",
        system: "http://hl7.org/fhir/identity-assuranceLevel"
    },
    /**
     * High confidence in the asserted identity's accuracy.
     */
    identity_assuranceLevel_Level3: {
        code: "level3",
        display: "Level 3",
        system: "http://hl7.org/fhir/identity-assuranceLevel"
    },
    /**
     * Very high confidence in the asserted identity's accuracy.
     */
    identity_assuranceLevel_Level4: {
        code: "level4",
        display: "Level 4",
        system: "http://hl7.org/fhir/identity-assuranceLevel"
    }
};
