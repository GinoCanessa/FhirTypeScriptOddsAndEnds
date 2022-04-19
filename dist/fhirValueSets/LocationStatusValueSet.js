// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Indicates whether the location is still in use.
 */
export const LocationStatusValueSet = {
    /**
     * The location is operational.
     */
    location_status_Active: Coding.FromStrict({
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/location-status"
    }),
    /**
     * The location is no longer used.
     */
    location_status_Inactive: Coding.FromStrict({
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/location-status"
    }),
    /**
     * The location is temporarily closed.
     */
    location_status_Suspended: Coding.FromStrict({
        code: "suspended",
        display: "Suspended",
        system: "http://hl7.org/fhir/location-status"
    }),
};
//# sourceMappingURL=LocationStatusValueSet.js.map