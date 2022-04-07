/**
 * MedicationRequest Intent Codes
 */
export var MedicationrequestIntent = {
    /**
     * The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    medicationrequest_intent_FillerOrder: {
        code: "filler-order",
        display: "Filler Order",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents an instance for the particular order, for example a medication administration record.
     */
    medicationrequest_intent_InstanceOrder: {
        code: "instance-order",
        display: "Instance Order",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
     */
    medicationrequest_intent_Option: {
        code: "option",
        display: "Option",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents a request/demand and authorization for action
     */
    medicationrequest_intent_Order: {
        code: "order",
        display: "Order",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents the original authorization for the medication request.
     */
    medicationrequest_intent_OriginalOrder: {
        code: "original-order",
        display: "Original Order",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    medicationrequest_intent_Plan: {
        code: "plan",
        display: "Plan",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    medicationrequest_intent_Proposal: {
        code: "proposal",
        display: "Proposal",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    },
    /**
     * The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
     */
    medicationrequest_intent_ReflexOrder: {
        code: "reflex-order",
        display: "Reflex Order",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent"
    }
};
