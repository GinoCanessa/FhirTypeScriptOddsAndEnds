// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-location-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The status of the location.
 */
export const EncounterLocationStatusValueSet = {
  /**
   * active: The patient is currently at this location, or was between the period specified.
   * A system may update these records when the patient leaves the location to either reserved, or completed.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/encounter-location-status",
  }),
  /**
   * completed: The patient was at this location during the period specified.
   * Not to be used when the patient is currently at the location.
   */
  Completed: new Coding({
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/encounter-location-status",
  }),
  /**
   * planned: The patient is planned to be moved to this location at some point in the future.
   */
  Planned: new Coding({
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/encounter-location-status",
  }),
  /**
   * reserved: This location is held empty for this patient.
   */
  Reserved: new Coding({
    display: "Reserved",
    code: "reserved",
    system: "http://hl7.org/fhir/encounter-location-status",
  }),
} as const;

/**
 * The status of the location.
 */
export type EncounterLocationStatusValueSetType = typeof EncounterLocationStatusValueSet;

/**
 * The status of the location.
 */
