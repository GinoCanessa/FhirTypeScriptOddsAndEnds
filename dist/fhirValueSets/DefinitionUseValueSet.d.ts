import { Coding } from '../fhir.js';
/**
 * Structure Definition Use Codes / Keywords
 */
export declare const DefinitionUseValueSet: {
    /**
     * archetype: This structure captures an analysis of a domain
     */
    readonly DomainAnalysisModel: Coding;
    /**
     * custom-resource: This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
     */
    readonly CustomResource: Coding;
    /**
     * dam: This structure captures an analysis of a domain
     */
    readonly DomainAnalysisModelDam: Coding;
    /**
     * fhir-structure: This structure is defined as part of the base FHIR Specification
     */
    readonly FHIRStructure: Coding;
    /**
     * template: This structure is a template (n.b: 'template' has many meanings)
     */
    readonly Template: Coding;
    /**
     * wire-format: This structure represents and existing structure (e.g. CDA, HL7 v2)
     */
    readonly WireFormat: Coding;
};
/**
 * Structure Definition Use Codes / Keywords
 */
export declare type DefinitionUseValueSetType = typeof DefinitionUseValueSet;
/**
 * Structure Definition Use Codes / Keywords
 */
export declare enum DefinitionUseValueSetEnum {
    /**
     * archetype: This structure captures an analysis of a domain
     */
    DomainAnalysisModel = "archetype",
    /**
     * custom-resource: This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
     */
    CustomResource = "custom-resource",
    /**
     * dam: This structure captures an analysis of a domain
     */
    DomainAnalysisModelDam = "dam",
    /**
     * fhir-structure: This structure is defined as part of the base FHIR Specification
     */
    FHIRStructure = "fhir-structure",
    /**
     * template: This structure is a template (n.b: 'template' has many meanings)
     */
    Template = "template",
    /**
     * wire-format: This structure represents and existing structure (e.g. CDA, HL7 v2)
     */
    WireFormat = "wire-format"
}
//# sourceMappingURL=DefinitionUseValueSet.d.ts.map