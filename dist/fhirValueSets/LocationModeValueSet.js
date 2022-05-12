// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-mode|4.0.1
import { Coding } from '../fhir.js';
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export const LocationModeValueSet = {
    /**
     * instance: The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
     */
    Instance: new Coding({
        display: "Instance",
        code: "instance",
        system: "http://hl7.org/fhir/location-mode",
    }),
    /**
     * kind: The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
     */
    Kind: new Coding({
        display: "Kind",
        code: "kind",
        system: "http://hl7.org/fhir/location-mode",
    }),
};
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
//# sourceMappingURL=LocationModeValueSet.js.map