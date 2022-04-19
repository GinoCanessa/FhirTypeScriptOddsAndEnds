// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * MedicationAdministration Category Codes
 */
export const MedicationAdminCategoryValueSet = {
    /**
     * Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    medication_admin_category_Community: Coding.FromStrict({
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    }),
    /**
     * Includes administrations in an inpatient or acute care setting
     */
    medication_admin_category_Inpatient: Coding.FromStrict({
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    }),
    /**
     * Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medication_admin_category_Outpatient: Coding.FromStrict({
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    }),
};
//# sourceMappingURL=MedicationAdminCategoryValueSet.js.map