import { Coding } from '../fhir.js';
/**
 * Indicates the state of the consent.
 */
export declare const ConsentStateCodesValueSet: {
    /**
     * active: The consent is to be followed and enforced.
     */
    readonly Active: Coding;
    /**
     * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    readonly Pending: Coding;
    /**
     * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The consent is terminated or replaced.
     */
    readonly Inactive: Coding;
    /**
     * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    readonly Proposed: Coding;
    /**
     * rejected: The consent has been rejected by one or more of the parties.
     */
    readonly Rejected: Coding;
};
/**
 * Indicates the state of the consent.
 */
export declare type ConsentStateCodesValueSetType = typeof ConsentStateCodesValueSet;
/**
 * Indicates the state of the consent.
 */
export declare enum ConsentStateCodesValueSetEnum {
    /**
     * active: The consent is to be followed and enforced.
     */
    Active = "active",
    /**
     * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    Pending = "draft",
    /**
     * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    EnteredInError = "entered-in-error",
    /**
     * inactive: The consent is terminated or replaced.
     */
    Inactive = "inactive",
    /**
     * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    Proposed = "proposed",
    /**
     * rejected: The consent has been rejected by one or more of the parties.
     */
    Rejected = "rejected"
}
//# sourceMappingURL=ConsentStateCodesValueSet.d.ts.map