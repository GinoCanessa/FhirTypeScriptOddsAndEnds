/**
 * The reason why the supply item was requested.
 */
export var SupplyrequestReason = {
    /**
     * The supply has been requested for use in direct patient care.
     */
    supplyrequest_reason_PatientCare: {
        code: "patient-care",
        display: "Patient Care",
        system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason"
    },
    /**
     * The supply has been requested for creating or replenishing ward stock.
     */
    supplyrequest_reason_WardStock: {
        code: "ward-stock",
        display: "Ward Stock",
        system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason"
    }
};
