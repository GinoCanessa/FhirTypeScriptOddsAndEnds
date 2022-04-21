import { Coding } from '../fhir.js';
/**
 * This value set includes Claim Type codes.
 */
export declare const ClaimTypeValueSet: {
    /**
     * institutional: Hospital, clinic and typically inpatient claims.
     */
    readonly Institutional: Coding;
    /**
     * oral: Dental, Denture and Hygiene claims.
     */
    readonly Oral: Coding;
    /**
     * pharmacy: Pharmacy claims for goods and services.
     */
    readonly Pharmacy: Coding;
    /**
     * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    readonly Professional: Coding;
    /**
     * vision: Vision claims for professional services and products such as glasses and contact lenses.
     */
    readonly Vision: Coding;
};
/**
 * This value set includes Claim Type codes.
 */
export declare type ClaimTypeValueSetType = typeof ClaimTypeValueSet;
/**
 * This value set includes Claim Type codes.
 */
export declare enum ClaimTypeValueSetEnum {
    /**
     * institutional: Hospital, clinic and typically inpatient claims.
     */
    Institutional = "institutional",
    /**
     * oral: Dental, Denture and Hygiene claims.
     */
    Oral = "oral",
    /**
     * pharmacy: Pharmacy claims for goods and services.
     */
    Pharmacy = "pharmacy",
    /**
     * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    Professional = "professional",
    /**
     * vision: Vision claims for professional services and products such as glasses and contact lenses.
     */
    Vision = "vision"
}
//# sourceMappingURL=ClaimTypeValueSet.d.ts.map