import { Coding } from '../fhir.js';
/**
 * Indicates whether the location is still in use.
 */
export declare const LocationStatusValueSet: {
    /**
     * active: The location is operational.
     */
    readonly Active: Coding;
    /**
     * inactive: The location is no longer used.
     */
    readonly Inactive: Coding;
    /**
     * suspended: The location is temporarily closed.
     */
    readonly Suspended: Coding;
};
/**
 * Indicates whether the location is still in use.
 */
export declare type LocationStatusValueSetType = typeof LocationStatusValueSet;
/**
 * Indicates whether the location is still in use.
 */
export declare enum LocationStatusValueSetEnum {
    /**
     * active: The location is operational.
     */
    Active = "active",
    /**
     * inactive: The location is no longer used.
     */
    Inactive = "inactive",
    /**
     * suspended: The location is temporarily closed.
     */
    Suspended = "suspended"
}
//# sourceMappingURL=LocationStatusValueSet.d.ts.map