import { Coding } from '../fhir.js';
/**
 * Indicates the status of the care team.
 */
export declare const CareTeamStatusValueSet: {
    /**
     * active: The care team is currently participating in the coordination and delivery of care.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The care team should have never existed.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    readonly Inactive: Coding;
    /**
     * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    readonly Proposed: Coding;
    /**
     * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    readonly Suspended: Coding;
};
/**
 * Indicates the status of the care team.
 */
export declare type CareTeamStatusValueSetType = typeof CareTeamStatusValueSet;
/**
 * Indicates the status of the care team.
 */
export declare enum CareTeamStatusValueSetEnum {
    /**
     * active: The care team is currently participating in the coordination and delivery of care.
     */
    Active = "active",
    /**
     * entered-in-error: The care team should have never existed.
     */
    EnteredInError = "entered-in-error",
    /**
     * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    Inactive = "inactive",
    /**
     * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    Proposed = "proposed",
    /**
     * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    Suspended = "suspended"
}
//# sourceMappingURL=CareTeamStatusValueSet.d.ts.map