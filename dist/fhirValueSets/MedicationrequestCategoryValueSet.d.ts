import { Coding } from '../fhir.js';
/**
 * MedicationRequest Category Codes
 */
export declare const MedicationrequestCategoryValueSet: {
    /**
     * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    readonly Community: Coding;
    /**
     * discharge: Includes requests for medications created when the patient is being released from a facility
     */
    readonly Discharge: Coding;
    /**
     * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: Coding;
};
/**
 * MedicationRequest Category Codes
 */
export declare type MedicationrequestCategoryValueSetType = typeof MedicationrequestCategoryValueSet;
/**
 * MedicationRequest Category Codes
 */
export declare enum MedicationrequestCategoryValueSetEnum {
    /**
     * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    Community = "community",
    /**
     * discharge: Includes requests for medications created when the patient is being released from a facility
     */
    Discharge = "discharge",
    /**
     * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    Inpatient = "inpatient",
    /**
     * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient = "outpatient"
}
//# sourceMappingURL=MedicationrequestCategoryValueSet.d.ts.map