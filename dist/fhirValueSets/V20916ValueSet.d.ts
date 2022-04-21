import { Coding } from '../fhir.js';
/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export declare const V20916ValueSet: {
    /**
     * Code: F
     */
    readonly PatientWasFastingPriorToTheProcedure: Coding;
    /**
     * Code: NF
     */
    readonly ThePatientIndicatedTheyDidNotFastPriorToTheProcedure: Coding;
    /**
     * Code: NG
     */
    readonly NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure: Coding;
};
/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export declare type V20916ValueSetType = typeof V20916ValueSet;
/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export declare enum V20916ValueSetEnum {
    /**
     * Code: F
     */
    PatientWasFastingPriorToTheProcedure = "F",
    /**
     * Code: NF
     */
    ThePatientIndicatedTheyDidNotFastPriorToTheProcedure = "NF",
    /**
     * Code: NG
     */
    NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure = "NG"
}
//# sourceMappingURL=V20916ValueSet.d.ts.map