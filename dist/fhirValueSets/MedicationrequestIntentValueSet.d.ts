import { Coding } from '../fhir';
/**
 * MedicationRequest Intent Codes
 */
export declare const MedicationrequestIntentValueSet: {
    /**
     * The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    medicationrequest_intent_FillerOrder: Coding;
    /**
     * The request represents an instance for the particular order, for example a medication administration record.
     */
    medicationrequest_intent_InstanceOrder: Coding;
    /**
     * The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
     */
    medicationrequest_intent_Option: Coding;
    /**
     * The request represents a request/demand and authorization for action
     */
    medicationrequest_intent_Order: Coding;
    /**
     * The request represents the original authorization for the medication request.
     */
    medicationrequest_intent_OriginalOrder: Coding;
    /**
     * The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    medicationrequest_intent_Plan: Coding;
    /**
     * The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    medicationrequest_intent_Proposal: Coding;
    /**
     * The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
     */
    medicationrequest_intent_ReflexOrder: Coding;
};
//# sourceMappingURL=MedicationrequestIntentValueSet.d.ts.map