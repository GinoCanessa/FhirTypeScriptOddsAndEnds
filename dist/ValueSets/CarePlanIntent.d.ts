import { Coding } from '../strictmodels';
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export declare const CarePlanIntent: {
    /**
     * The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    request_intent_Option: Coding;
    /**
     * The request represents a request/demand and authorization for action by a Practitioner.
     */
    request_intent_Order: Coding;
    /**
     * The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    request_intent_Plan: Coding;
    /**
     * The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    request_intent_Proposal: Coding;
};
//# sourceMappingURL=CarePlanIntent.d.ts.map