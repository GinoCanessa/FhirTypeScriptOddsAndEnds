// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export const LocationModeValueSet = {
  /**
   * The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
   */
  location_mode_Instance: Coding.FromStrict({
    code: "instance",
    display: "Instance",
    system: "http://hl7.org/fhir/location-mode"
  }),
  /**
   * The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
   */
  location_mode_Kind: Coding.FromStrict({
    code: "kind",
    display: "Kind",
    system: "http://hl7.org/fhir/location-mode"
  }),
};
