import { Coding } from '../fhir.js';
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export declare const LocationModeValueSet: {
    /**
     * instance: The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
     */
    readonly Instance: Coding;
    /**
     * kind: The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
     */
    readonly Kind: Coding;
};
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export declare type LocationModeValueSetType = typeof LocationModeValueSet;
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export declare enum LocationModeValueSetEnum {
    /**
     * instance: The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
     */
    Instance = "instance",
    /**
     * kind: The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
     */
    Kind = "kind"
}
//# sourceMappingURL=LocationModeValueSet.d.ts.map