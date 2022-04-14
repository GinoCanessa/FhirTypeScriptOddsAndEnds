"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationrequestCategory = void 0;
/**
 * MedicationRequest Category Codes
 */
exports.MedicationrequestCategory = {
    /**
     * Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    medicationrequest_category_Community: {
        code: "community",
        display: "Community",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category"
    },
    /**
     * Includes requests for medications created when the patient is being released from a facility
     */
    medicationrequest_category_Discharge: {
        code: "discharge",
        display: "Discharge",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category"
    },
    /**
     * Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    medicationrequest_category_Inpatient: {
        code: "inpatient",
        display: "Inpatient",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category"
    },
    /**
     * Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    medicationrequest_category_Outpatient: {
        code: "outpatient",
        display: "Outpatient",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-category"
    },
};
//# sourceMappingURL=MedicationrequestCategory.js.map