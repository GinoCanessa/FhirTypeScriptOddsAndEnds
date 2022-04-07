/**
 * MedicationAdministration Category Codes
 */
export var MedicationAdminCategory = {
    /**
     * Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    medication_admin_category_Community: {
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    },
    /**
     * Includes administrations in an inpatient or acute care setting
     */
    medication_admin_category_Inpatient: {
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    },
    /**
     * Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medication_admin_category_Outpatient: {
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-category"
    }
};
