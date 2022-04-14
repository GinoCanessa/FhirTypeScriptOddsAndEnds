"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationStatementCategory = void 0;
/**
 * Medication Status Codes
 */
exports.MedicationStatementCategory = {
    /**
     * Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    medication_statement_category_Community: {
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    },
    /**
     * Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    medication_statement_category_Inpatient: {
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    },
    /**
     * Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medication_statement_category_Outpatient: {
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    },
    /**
     * Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    medication_statement_category_PatientSpecified: {
        code: "patientspecified",
        display: "Patient Specified",
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category"
    },
};
//# sourceMappingURL=MedicationStatementCategory.js.map