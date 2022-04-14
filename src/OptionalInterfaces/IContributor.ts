// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export interface IContributor extends fhirInterfaces.IElement {
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name?: string|undefined;
  _name?: fhirInterfaces.IElement|undefined;
  /**
   * The type of contributor.
   */
  type?: ContributorTypeEnum|undefined;
  _type?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the Contributor.type field
 */
export enum ContributorTypeEnum {
  AUTHOR = "author",
  EDITOR = "editor",
  REVIEWER = "reviewer",
  ENDORSER = "endorser",
}
