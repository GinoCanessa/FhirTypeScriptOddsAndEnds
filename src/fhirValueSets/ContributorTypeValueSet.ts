// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of contributor.
 */
export const ContributorTypeValueSet = {
  /**
   * An author of the content of the module.
   */
  contributor_type_Author: Coding.FromStrict({
    code: "author",
    display: "Author",
    system: "http://hl7.org/fhir/contributor-type"
  }),
  /**
   * An editor of the content of the module.
   */
  contributor_type_Editor: Coding.FromStrict({
    code: "editor",
    display: "Editor",
    system: "http://hl7.org/fhir/contributor-type"
  }),
  /**
   * An endorser of the content of the module.
   */
  contributor_type_Endorser: Coding.FromStrict({
    code: "endorser",
    display: "Endorser",
    system: "http://hl7.org/fhir/contributor-type"
  }),
  /**
   * A reviewer of the content of the module.
   */
  contributor_type_Reviewer: Coding.FromStrict({
    code: "reviewer",
    display: "Reviewer",
    system: "http://hl7.org/fhir/contributor-type"
  }),
};