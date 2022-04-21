import { Coding } from '../fhir.js';
/**
 * MedicationDispense Performer Function Codes
 */
export declare const MedicationdispensePerformerFunctionValueSet: {
    /**
     * checker: Performed initial quality assurance on the prepared medication
     */
    readonly Checker: Coding;
    /**
     * dataenterer: Recorded the details of the request
     */
    readonly DataEnterer: Coding;
    /**
     * finalchecker: Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    readonly FinalChecker: Coding;
    /**
     * packager: Prepared the medication.
     */
    readonly Packager: Coding;
};
/**
 * MedicationDispense Performer Function Codes
 */
export declare type MedicationdispensePerformerFunctionValueSetType = typeof MedicationdispensePerformerFunctionValueSet;
/**
 * MedicationDispense Performer Function Codes
 */
export declare enum MedicationdispensePerformerFunctionValueSetEnum {
    /**
     * checker: Performed initial quality assurance on the prepared medication
     */
    Checker = "checker",
    /**
     * dataenterer: Recorded the details of the request
     */
    DataEnterer = "dataenterer",
    /**
     * finalchecker: Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    FinalChecker = "finalchecker",
    /**
     * packager: Prepared the medication.
     */
    Packager = "packager"
}
//# sourceMappingURL=MedicationdispensePerformerFunctionValueSet.d.ts.map