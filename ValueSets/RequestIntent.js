/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 */
export var RequestIntent = {
    /**
     * The request represents a legally binding instruction authored by a Patient or RelatedPerson.
     */
    request_intent_Directive: {
        code: "directive",
        display: "Directive",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    request_intent_FillerOrder: {
        code: "filler-order",
        display: "Filler Order",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    request_intent_InstanceOrder: {
        code: "instance-order",
        display: "Instance Order",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request represents an original authorization for action.
     */
    request_intent_OriginalOrder: {
        code: "original-order",
        display: "Original Order",
        system: "http://hl7.org/fhir/request-intent"
    },
    /**
     * The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.
     */
    request_intent_ReflexOrder: {
        code: "reflex-order",
        display: "Reflex Order",
        system: "http://hl7.org/fhir/request-intent"
    }
};
