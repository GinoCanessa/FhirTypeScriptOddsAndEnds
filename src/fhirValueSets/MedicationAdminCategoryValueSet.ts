// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-category|4.0.1

import { Coding } from '../fhir.js'

/**
 * MedicationAdministration Category Codes
 */
export const MedicationAdminCategoryValueSet = {
  /**
   * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
   */
  Community: new Coding({
    display: "Community",
    code: "community",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-category",
  }),
  /**
   * inpatient: Includes administrations in an inpatient or acute care setting
   */
  Inpatient: new Coding({
    display: "Inpatient",
    code: "inpatient",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-category",
  }),
  /**
   * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
   */
  Outpatient: new Coding({
    display: "Outpatient",
    code: "outpatient",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-category",
  }),
} as const;

/**
 * MedicationAdministration Category Codes
 */
export type MedicationAdminCategoryValueSetType = typeof MedicationAdminCategoryValueSet;

/**
 * MedicationAdministration Category Codes
 */
