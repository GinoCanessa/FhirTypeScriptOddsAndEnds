/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export var CarePlanIntent = {
    /**
     * The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    request_intent_Option: {
        code: "option",
        display: "Option",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request represents a request/demand and authorization for action by a Practitioner.
     */
    request_intent_Order: {
        code: "order",
        display: "Order",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    request_intent_Plan: {
        code: "plan",
        display: "Plan",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    request_intent_Proposal: {
        code: "proposal",
        display: "Proposal",
        system: "http://hl7.org/fhir/request-intent"
    }
};
