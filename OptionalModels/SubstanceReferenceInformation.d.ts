import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGene extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationGene {
    /**
     * Todo.
     */
    gene?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGene from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceReferenceInformationGene>);
    /**
     * Factory function to create a SubstanceReferenceInformationGene from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceReferenceInformationGene): SubstanceReferenceInformationGene;
    /**
     * Check if the current SubstanceReferenceInformationGene contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGeneElement extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationGeneElement {
    /**
     * Todo.
     */
    element?: fhirModels.Identifier | undefined;
    /**
     * Todo.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Todo.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGeneElement from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceReferenceInformationGeneElement>);
    /**
     * Factory function to create a SubstanceReferenceInformationGeneElement from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceReferenceInformationGeneElement): SubstanceReferenceInformationGeneElement;
    /**
     * Check if the current SubstanceReferenceInformationGeneElement contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationClassification extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationClassification {
    /**
     * Todo.
     */
    classification?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    domain?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Todo.
     */
    subtype?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationClassification from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceReferenceInformationClassification>);
    /**
     * Factory function to create a SubstanceReferenceInformationClassification from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceReferenceInformationClassification): SubstanceReferenceInformationClassification;
    /**
     * Check if the current SubstanceReferenceInformationClassification contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationTarget extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationTarget {
    /**
     * Todo.
     */
    amountQuantity?: fhirModels.Quantity | undefined;
    /**
     * Todo.
     */
    amountRange?: fhirModels.Range | undefined;
    /**
     * Todo.
     */
    amountString?: string | undefined;
    _amountString?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    amountType?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    interaction?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organism?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organismType?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Todo.
     */
    target?: fhirModels.Identifier | undefined;
    /**
     * Todo.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceReferenceInformationTarget>);
    /**
     * Factory function to create a SubstanceReferenceInformationTarget from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceReferenceInformationTarget): SubstanceReferenceInformationTarget;
    /**
     * Check if the current SubstanceReferenceInformationTarget contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformation extends fhirModels.DomainResource implements fhirInterfaces.ISubstanceReferenceInformation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    classification?: fhirModels.SubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    gene?: fhirModels.SubstanceReferenceInformationGene[] | undefined;
    /**
     * Todo.
     */
    geneElement?: fhirModels.SubstanceReferenceInformationGeneElement[] | undefined;
    /**
     * Todo.
     */
    target?: fhirModels.SubstanceReferenceInformationTarget[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceReferenceInformation>);
    /**
     * Factory function to create a SubstanceReferenceInformation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceReferenceInformation): SubstanceReferenceInformation;
    /**
     * Check if the current SubstanceReferenceInformation contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map