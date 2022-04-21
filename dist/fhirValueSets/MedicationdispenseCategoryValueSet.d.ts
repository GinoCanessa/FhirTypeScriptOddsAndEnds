import { Coding } from '../fhir.js';
/**
 * MedicationDispense Category Codes
 */
export declare const MedicationdispenseCategoryValueSet: {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    readonly Community: Coding;
    /**
     * discharge: Includes dispenses for medications created when the patient is being released from a facility.
     */
    readonly Discharge: Coding;
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    readonly Outpatient: Coding;
};
/**
 * MedicationDispense Category Codes
 */
export declare type MedicationdispenseCategoryValueSetType = typeof MedicationdispenseCategoryValueSet;
/**
 * MedicationDispense Category Codes
 */
export declare enum MedicationdispenseCategoryValueSetEnum {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    Community = "community",
    /**
     * discharge: Includes dispenses for medications created when the patient is being released from a facility.
     */
    Discharge = "discharge",
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    Inpatient = "inpatient",
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    Outpatient = "outpatient"
}
//# sourceMappingURL=MedicationdispenseCategoryValueSet.d.ts.map