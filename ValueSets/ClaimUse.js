/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export var ClaimUse = {
    /**
     * The treatment is complete and this represents a Claim for the services.
     */
    claim_use_Claim: {
        code: "claim",
        display: "Claim",
        system: "http://hl7.org/fhir/claim-use"
    },
    /**
     * The treatment is proposed and this represents a Pre-authorization for the services.
     */
    claim_use_Preauthorization: {
        code: "preauthorization",
        display: "Preauthorization",
        system: "http://hl7.org/fhir/claim-use"
    },
    /**
     * The treatment is proposed and this represents a Pre-determination for the services.
     */
    claim_use_Predetermination: {
        code: "predetermination",
        display: "Predetermination",
        system: "http://hl7.org/fhir/claim-use"
    }
};
