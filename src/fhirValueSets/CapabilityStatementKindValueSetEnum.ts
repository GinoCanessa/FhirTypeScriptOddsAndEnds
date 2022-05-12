// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/capability-statement-kind|4.0.1

/**
 * How a capability statement is intended to be used.
 */
export enum CapabilityStatementKindValueSetEnum {
  /**
   * capability: The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
   */
  Capability = "capability",
  /**
   * instance: The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by /metadata for a FHIR server end-point.
   */
  Instance = "instance",
  /**
   * requirements: The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
   */
  Requirements = "requirements",
}
