// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Medication Status Codes
 */
export const MedicationStatementCategoryValueSet = {
    /**
     * Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    medication_statement_category_Community: Coding.FromStrict({
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    }),
    /**
     * Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    medication_statement_category_Inpatient: Coding.FromStrict({
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    }),
    /**
     * Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medication_statement_category_Outpatient: Coding.FromStrict({
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    }),
    /**
     * Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    medication_statement_category_PatientSpecified: Coding.FromStrict({
        code: "patientspecified",
        display: "Patient Specified",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    }),
};
//# sourceMappingURL=MedicationStatementCategoryValueSet.js.map