/**
 * Status of the supply delivery.
 */
export var SupplydeliveryStatus = {
    /**
     * Delivery was not completed.
     */
    supplydelivery_status_Abandoned: {
        code: "abandoned",
        display: "Abandoned",
        system: "http://hl7.org/fhir/supplydelivery-status"
    },
    /**
     * Supply has been delivered ("completed").
     */
    supplydelivery_status_Delivered: {
        code: "completed",
        display: "Delivered",
        system: "http://hl7.org/fhir/supplydelivery-status"
    },
    /**
     * This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    supplydelivery_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/supplydelivery-status"
    },
    /**
     * Supply has been requested, but not delivered.
     */
    supplydelivery_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/supplydelivery-status"
    }
};