// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The type of contributor.
 */
export const ContributorType = {
  /**
   * An author of the content of the module.
   */
  contributor_type_Author: {
    code: "author",
    display: "Author",
    system: "http://hl7.org/fhir/contributor-type"
  } as Coding,
  /**
   * An editor of the content of the module.
   */
  contributor_type_Editor: {
    code: "editor",
    display: "Editor",
    system: "http://hl7.org/fhir/contributor-type"
  } as Coding,
  /**
   * An endorser of the content of the module.
   */
  contributor_type_Endorser: {
    code: "endorser",
    display: "Endorser",
    system: "http://hl7.org/fhir/contributor-type"
  } as Coding,
  /**
   * A reviewer of the content of the module.
   */
  contributor_type_Reviewer: {
    code: "reviewer",
    display: "Reviewer",
    system: "http://hl7.org/fhir/contributor-type"
  } as Coding,
};
