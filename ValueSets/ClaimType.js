"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimType = void 0;
/**
 * This value set includes Claim Type codes.
 */
exports.ClaimType = {
    /**
     * Hospital, clinic and typically inpatient claims.
     */
    claim_type_Institutional: {
        code: "institutional",
        display: "Institutional",
        system: "http://terminology.hl7.org/CodeSystem/claim-type"
    },
    /**
     * Dental, Denture and Hygiene claims.
     */
    claim_type_Oral: {
        code: "oral",
        display: "Oral",
        system: "http://terminology.hl7.org/CodeSystem/claim-type"
    },
    /**
     * Pharmacy claims for goods and services.
     */
    claim_type_Pharmacy: {
        code: "pharmacy",
        display: "Pharmacy",
        system: "http://terminology.hl7.org/CodeSystem/claim-type"
    },
    /**
     * Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    claim_type_Professional: {
        code: "professional",
        display: "Professional",
        system: "http://terminology.hl7.org/CodeSystem/claim-type"
    },
    /**
     * Vision claims for professional services and products such as glasses and contact lenses.
     */
    claim_type_Vision: {
        code: "vision",
        display: "Vision",
        system: "http://terminology.hl7.org/CodeSystem/claim-type"
    },
};
//# sourceMappingURL=ClaimType.js.map