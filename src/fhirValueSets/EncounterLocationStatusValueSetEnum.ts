// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/encounter-location-status|4.0.1

/**
 * The status of the location.
 */
export enum EncounterLocationStatusValueSetEnum {
  /**
   * active: The patient is currently at this location, or was between the period specified.
   * A system may update these records when the patient leaves the location to either reserved, or completed.
   */
  Active = "active",
  /**
   * completed: The patient was at this location during the period specified.
   * Not to be used when the patient is currently at the location.
   */
  Completed = "completed",
  /**
   * planned: The patient is planned to be moved to this location at some point in the future.
   */
  Planned = "planned",
  /**
   * reserved: This location is held empty for this patient.
   */
  Reserved = "reserved",
}