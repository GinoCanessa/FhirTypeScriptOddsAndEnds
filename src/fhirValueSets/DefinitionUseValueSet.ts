// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Structure Definition Use Codes / Keywords
 */
export const DefinitionUseValueSet = {
  /**
   * This structure captures an analysis of a domain
   */
  definition_use_DomainAnalysisModel: Coding.FromStrict({
    code: "archetype",
    display: "Domain Analysis Model",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
  /**
   * This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
   */
  definition_use_CustomResource: Coding.FromStrict({
    code: "custom-resource",
    display: "Custom Resource",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
  /**
   * This structure captures an analysis of a domain
   */
  definition_use_DomainAnalysisModel_2: Coding.FromStrict({
    code: "dam",
    display: "Domain Analysis Model",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
  /**
   * This structure is defined as part of the base FHIR Specification
   */
  definition_use_FHIRStructure: Coding.FromStrict({
    code: "fhir-structure",
    display: "FHIR Structure",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
  /**
   * This structure is a template (n.b: 'template' has many meanings)
   */
  definition_use_Template: Coding.FromStrict({
    code: "template",
    display: "Template",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
  /**
   * This structure represents and existing structure (e.g. CDA, HL7 v2)
   */
  definition_use_WireFormat: Coding.FromStrict({
    code: "wire-format",
    display: "Wire Format",
    system: "http://terminology.hl7.org/CodeSystem/definition-use"
  }),
};
