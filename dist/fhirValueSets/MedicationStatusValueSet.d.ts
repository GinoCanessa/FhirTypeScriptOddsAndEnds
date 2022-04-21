import { Coding } from '../fhir.js';
/**
 * Medication Status Codes
 */
export declare const MedicationStatusValueSet: {
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
 * Medication Status Codes
 */
export declare type MedicationStatusValueSetType = typeof MedicationStatusValueSet;
/**
 * Medication Status Codes
 */
export declare enum MedicationStatusValueSetEnum {
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
//# sourceMappingURL=MedicationStatusValueSet.d.ts.map