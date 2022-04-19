import { Coding } from '../fhir';
/**
 * Medication Status Codes
 */
export declare const MedicationStatementCategoryValueSet: {
    /**
     * Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    medication_statement_category_Community: Coding;
    /**
     * Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    medication_statement_category_Inpatient: Coding;
    /**
     * Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medication_statement_category_Outpatient: Coding;
    /**
     * Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    medication_statement_category_PatientSpecified: Coding;
};
//# sourceMappingURL=MedicationStatementCategoryValueSet.d.ts.map