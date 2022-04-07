/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export var InsuranceplanApplicability = {
    /**
     * Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    insuranceplan_applicability_InNetwork: {
        code: "in-network",
        display: "In Network",
        system: "http://terminology.hl7.org/CodeSystem/applicability"
    },
    /**
     * Other applicability
     */
    insuranceplan_applicability_Other: {
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/applicability"
    },
    /**
     * Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    insuranceplan_applicability_OutOfNetwork: {
        code: "out-of-network",
        display: "Out of Network",
        system: "http://terminology.hl7.org/CodeSystem/applicability"
    }
};
