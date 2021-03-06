// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-artifact-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of relationship to the related artifact.
 */
export const RelatedArtifactTypeValueSet = {
  /**
   * citation: Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.
   */
  Citation: new Coding({
    display: "Citation",
    code: "citation",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * composed-of: The knowledge resource is composed of the given related artifact.
   */
  ComposedOf: new Coding({
    display: "Composed Of",
    code: "composed-of",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * depends-on: The knowledge resource depends on the given related artifact.
   */
  DependsOn: new Coding({
    display: "Depends On",
    code: "depends-on",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * derived-from: The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.
   */
  DerivedFrom: new Coding({
    display: "Derived From",
    code: "derived-from",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * documentation: Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.
   */
  Documentation: new Coding({
    display: "Documentation",
    code: "documentation",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * justification: A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.
   */
  Justification: new Coding({
    display: "Justification",
    code: "justification",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * predecessor: The previous version of the knowledge resource.
   */
  Predecessor: new Coding({
    display: "Predecessor",
    code: "predecessor",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
  /**
   * successor: The next version of the knowledge resource.
   */
  Successor: new Coding({
    display: "Successor",
    code: "successor",
    system: "http://hl7.org/fhir/related-artifact-type",
  }),
} as const;

/**
 * The type of relationship to the related artifact.
 */
export type RelatedArtifactTypeValueSetType = typeof RelatedArtifactTypeValueSet;

/**
 * The type of relationship to the related artifact.
 */
