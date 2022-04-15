// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
  // Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The status of the location.
 */
export const EncounterLocationStatusValueSet = {
  /**
   * The patient is currently at this location, or was between the period specified.
   * A system may update these records when the patient leaves the location to either reserved, or completed.
   */
  encounter_location_status_Active: Coding.FactoryCreateStrict({
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/encounter-location-status"
  }),
  /**
   * The patient was at this location during the period specified.
   * Not to be used when the patient is currently at the location.
   */
  encounter_location_status_Completed: Coding.FactoryCreateStrict({
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/encounter-location-status"
  }),
  /**
   * The patient is planned to be moved to this location at some point in the future.
   */
  encounter_location_status_Planned: Coding.FactoryCreateStrict({
    code: "planned",
    display: "Planned",
    system: "http://hl7.org/fhir/encounter-location-status"
  }),
  /**
   * This location is held empty for this patient.
   */
  encounter_location_status_Reserved: Coding.FactoryCreateStrict({
    code: "reserved",
    display: "Reserved",
    system: "http://hl7.org/fhir/encounter-location-status"
  }),
};
