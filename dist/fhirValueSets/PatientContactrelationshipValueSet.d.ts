import { Coding } from '../fhir.js';
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare const PatientContactrelationshipValueSet: {
    /**
     * Code: C
     */
    readonly EmergencyContact: Coding;
    /**
     * Code: E
     */
    readonly Employer: Coding;
    /**
     * Code: F
     */
    readonly FederalAgency: Coding;
    /**
     * Code: I
     */
    readonly InsuranceCompany: Coding;
    /**
     * Code: N
     */
    readonly NextOfKin: Coding;
    /**
     * Code: S
     */
    readonly StateAgency: Coding;
    /**
     * Code: U
     */
    readonly Unknown: Coding;
};
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare type PatientContactrelationshipValueSetType = typeof PatientContactrelationshipValueSet;
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare enum PatientContactrelationshipValueSetEnum {
    /**
     * Code: C
     */
    EmergencyContact = "C",
    /**
     * Code: E
     */
    Employer = "E",
    /**
     * Code: F
     */
    FederalAgency = "F",
    /**
     * Code: I
     */
    InsuranceCompany = "I",
    /**
     * Code: N
     */
    NextOfKin = "N",
    /**
     * Code: S
     */
    StateAgency = "S",
    /**
     * Code: U
     */
    Unknown = "U"
}
//# sourceMappingURL=PatientContactrelationshipValueSet.d.ts.map