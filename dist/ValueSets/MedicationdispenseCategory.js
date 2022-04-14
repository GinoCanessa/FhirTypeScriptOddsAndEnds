"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationdispenseCategory = void 0;
/**
 * MedicationDispense Category Codes
 */
exports.MedicationdispenseCategory = {
    /**
     * Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    medicationdispense_category_Community: {
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"
    },
    /**
     * Includes dispenses for medications created when the patient is being released from a facility.
     */
    medicationdispense_category_Discharge: {
        code: "discharge",
        display: "Discharge",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"
    },
    /**
     * Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    medicationdispense_category_Inpatient: {
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"
    },
    /**
     * Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    medicationdispense_category_Outpatient: {
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"
    },
};
//# sourceMappingURL=MedicationdispenseCategory.js.map