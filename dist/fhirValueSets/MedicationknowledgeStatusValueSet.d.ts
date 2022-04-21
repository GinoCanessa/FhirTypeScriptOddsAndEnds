import { Coding } from '../fhir.js';
/**
 * MedicationKnowledge Status Codes
 */
export declare const MedicationknowledgeStatusValueSet: {
    /**
     * active: The medication is available for use.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The medication was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The medication is not available for use.
     */
    readonly Inactive: Coding;
};
/**
 * MedicationKnowledge Status Codes
 */
export declare type MedicationknowledgeStatusValueSetType = typeof MedicationknowledgeStatusValueSet;
/**
 * MedicationKnowledge Status Codes
 */
export declare enum MedicationknowledgeStatusValueSetEnum {
    /**
     * active: The medication is available for use.
     */
    Active = "active",
    /**
     * entered-in-error: The medication was entered in error.
     */
    EnteredInError = "entered-in-error",
    /**
     * inactive: The medication is not available for use.
     */
    Inactive = "inactive"
}
//# sourceMappingURL=MedicationknowledgeStatusValueSet.d.ts.map