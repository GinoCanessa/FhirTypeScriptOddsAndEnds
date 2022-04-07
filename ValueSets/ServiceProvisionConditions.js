/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export var ServiceProvisionConditions = {
    /**
     * Fees apply for this service.
     */
    service_provision_conditions_FeesApply: {
        code: "cost",
        display: "Fees apply",
        system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions"
    },
    /**
     * There are discounts available on this service for qualifying patients.
     */
    service_provision_conditions_DiscountsAvailable: {
        code: "disc",
        display: "Discounts Available",
        system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions"
    },
    /**
     * This service is available for no patient cost.
     */
    service_provision_conditions_Free: {
        code: "free",
        display: "Free",
        system: "http://terminology.hl7.org/CodeSystem/service-provision-conditions"
    }
};
