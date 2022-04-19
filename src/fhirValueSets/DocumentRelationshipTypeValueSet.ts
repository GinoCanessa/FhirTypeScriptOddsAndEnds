// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of relationship between documents.
 */
export const DocumentRelationshipTypeValueSet = {
  /**
   * This document adds additional information to the target document.
   */
  document_relationship_type_Appends: Coding.FromStrict({
    code: "appends",
    display: "Appends",
    system: "http://hl7.org/fhir/document-relationship-type"
  }),
  /**
   * This document logically replaces or supersedes the target document.
   */
  document_relationship_type_Replaces: Coding.FromStrict({
    code: "replaces",
    display: "Replaces",
    system: "http://hl7.org/fhir/document-relationship-type"
  }),
  /**
   * This document is a signature of the target document.
   */
  document_relationship_type_Signs: Coding.FromStrict({
    code: "signs",
    display: "Signs",
    system: "http://hl7.org/fhir/document-relationship-type"
  }),
  /**
   * This document was generated by transforming the target document (e.g. format or language conversion).
   */
  document_relationship_type_Transforms: Coding.FromStrict({
    code: "transforms",
    display: "Transforms",
    system: "http://hl7.org/fhir/document-relationship-type"
  }),
};
