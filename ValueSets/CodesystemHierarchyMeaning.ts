// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The meaning of the hierarchy of concepts in a code system.
 */
export const CodesystemHierarchyMeaning = {
  /**
   * Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified.".
   */
  codesystem_hierarchy_meaning_ClassifiedWith: {
    code: "classified-with",
    display: "Classified With",
    system: "http://hl7.org/fhir/codesystem-hierarchy-meaning"
  } as Coding,
  /**
   * No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings).
   */
  codesystem_hierarchy_meaning_GroupedBy: {
    code: "grouped-by",
    display: "Grouped By",
    system: "http://hl7.org/fhir/codesystem-hierarchy-meaning"
  } as Coding,
  /**
   * A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts. Not that is-a is a property of the concepts, so additional subsumption relationships may be defined using properties or the [subsumes](extension-codesystem-subsumes.html) extension.
   */
  codesystem_hierarchy_meaning_IsA: {
    code: "is-a",
    display: "Is-A",
    system: "http://hl7.org/fhir/codesystem-hierarchy-meaning"
  } as Coding,
  /**
   * Child elements list the individual parts of a composite whole (e.g. body site).
   */
  codesystem_hierarchy_meaning_PartOf: {
    code: "part-of",
    display: "Part Of",
    system: "http://hl7.org/fhir/codesystem-hierarchy-meaning"
  } as Coding,
};
