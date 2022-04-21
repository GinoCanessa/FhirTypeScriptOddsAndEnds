import { Coding } from '../fhir.js';
/**
 * MedicationAdministration Category Codes
 */
export declare const MedicationAdminCategoryValueSet: {
    /**
     * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    readonly Community: Coding;
    /**
     * inpatient: Includes administrations in an inpatient or acute care setting
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: Coding;
};
/**
 * MedicationAdministration Category Codes
 */
export declare type MedicationAdminCategoryValueSetType = typeof MedicationAdminCategoryValueSet;
/**
 * MedicationAdministration Category Codes
 */
export declare enum MedicationAdminCategoryValueSetEnum {
    /**
     * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    Community = "community",
    /**
     * inpatient: Includes administrations in an inpatient or acute care setting
     */
    Inpatient = "inpatient",
    /**
     * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient = "outpatient"
}
//# sourceMappingURL=MedicationAdminCategoryValueSet.d.ts.map