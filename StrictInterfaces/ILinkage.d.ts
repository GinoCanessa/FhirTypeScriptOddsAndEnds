// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export interface ILinkageItem extends fhirInterfaces.IBackboneElement {
  /**
   * The resource instance being linked as part of the group.
   */
  resource: fhirInterfaces.IReference;
  /**
   * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
   */
  type: LinkageItemTypeEnum;
  _type?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the Linkage.item.type field
 */
export enum LinkageItemTypeEnum {
  SOURCE = "source",
  ALTERNATE = "alternate",
  HISTORICAL = "historical",
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export interface ILinkage extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "Linkage";
  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  active?: boolean|undefined;
  _active?: fhirInterfaces.IElement|undefined;
  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated.
   */
  author?: fhirInterfaces.IReference|undefined;
  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
   */
  item: fhirInterfaces.ILinkageItem[];
}