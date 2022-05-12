// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/medication-statement-category|4.0.1

/**
 * Medication Status Codes
 */
export enum MedicationStatementCategoryValueSetEnum {
  /**
   * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
   */
  Community = "community",
  /**
   * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
   */
  Inpatient = "inpatient",
  /**
   * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
   */
  Outpatient = "outpatient",
  /**
   * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
   */
  PatientSpecified = "patientspecified",
}
