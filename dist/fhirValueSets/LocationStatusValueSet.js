// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * Indicates whether the location is still in use.
 */
export const LocationStatusValueSet = {
    /**
     * active: The location is operational.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/location-status",
    }),
    /**
     * inactive: The location is no longer used.
     */
    Inactive: new Coding({
        display: "Inactive",
        code: "inactive",
        system: "http://hl7.org/fhir/location-status",
    }),
    /**
     * suspended: The location is temporarily closed.
     */
    Suspended: new Coding({
        display: "Suspended",
        code: "suspended",
        system: "http://hl7.org/fhir/location-status",
    }),
};
/**
 * Indicates whether the location is still in use.
 */
//# sourceMappingURL=LocationStatusValueSet.js.map