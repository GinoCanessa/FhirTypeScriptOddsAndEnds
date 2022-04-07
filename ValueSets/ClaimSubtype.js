/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export var ClaimSubtype = {
    /**
     * A claim for emergency services.
     */
    claim_subtype_EmergencyClaim: {
        code: "emergency",
        display: "Emergency Claim",
        system: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype"
    },
    /**
     * A claim for Orthodontic Services.
     */
    claim_subtype_OrthodonticClaim: {
        code: "ortho",
        display: "Orthodontic Claim",
        system: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype"
    }
};
