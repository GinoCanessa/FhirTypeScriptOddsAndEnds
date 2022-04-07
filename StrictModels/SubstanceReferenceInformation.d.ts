import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
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
    constructor(source: fhirInterfaces.ISubstanceReferenceInformationGene);
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
    constructor(source: fhirInterfaces.ISubstanceReferenceInformationGeneElement);
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
    constructor(source: fhirInterfaces.ISubstanceReferenceInformationClassification);
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
    constructor(source: fhirInterfaces.ISubstanceReferenceInformationTarget);
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
    constructor(source: fhirInterfaces.ISubstanceReferenceInformation);
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map