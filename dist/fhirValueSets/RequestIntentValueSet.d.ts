import { Coding } from '../fhir';
/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 */
export declare const RequestIntentValueSet: {
    /**
     * The request represents a legally binding instruction authored by a Patient or RelatedPerson.
     */
    request_intent_Directive: Coding;
    /**
     * The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    request_intent_FillerOrder: Coding;
    /**
     * An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    request_intent_InstanceOrder: Coding;
    /**
     * The request represents an original authorization for action.
     */
    request_intent_OriginalOrder: Coding;
    /**
     * The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.
     */
    request_intent_ReflexOrder: Coding;
};
//# sourceMappingURL=RequestIntentValueSet.d.ts.map