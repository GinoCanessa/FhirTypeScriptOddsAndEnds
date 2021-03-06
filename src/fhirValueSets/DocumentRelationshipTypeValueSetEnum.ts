// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/document-relationship-type|4.0.1

/**
 * The type of relationship between documents.
 */
export enum DocumentRelationshipTypeValueSetEnum {
  /**
   * appends: This document adds additional information to the target document.
   */
  Appends = "appends",
  /**
   * replaces: This document logically replaces or supersedes the target document.
   */
  Replaces = "replaces",
  /**
   * signs: This document is a signature of the target document.
   */
  Signs = "signs",
  /**
   * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
   */
  Transforms = "transforms",
}
