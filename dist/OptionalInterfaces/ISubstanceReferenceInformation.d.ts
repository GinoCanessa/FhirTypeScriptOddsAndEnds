import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Todo.
 */
export interface ISubstanceReferenceInformationGene extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    gene?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Todo.
 */
export interface ISubstanceReferenceInformationGeneElement extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    element?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Todo.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Todo.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstanceReferenceInformationClassification extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    classification?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    domain?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Todo.
     */
    subtype?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Todo.
 */
export interface ISubstanceReferenceInformationTarget extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    amountQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Todo.
     */
    amountRange?: fhirInterfaces.IRange | undefined;
    /**
     * Todo.
     */
    amountString?: string | undefined;
    _amountString?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    amountType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    interaction?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    organism?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    organismType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Todo.
     */
    target?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Todo.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstanceReferenceInformation extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    classification?: fhirInterfaces.ISubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    gene?: fhirInterfaces.ISubstanceReferenceInformationGene[] | undefined;
    /**
     * Todo.
     */
    geneElement?: fhirInterfaces.ISubstanceReferenceInformationGeneElement[] | undefined;
    /**
     * Todo.
     */
    target?: fhirInterfaces.ISubstanceReferenceInformationTarget[] | undefined;
}
//# sourceMappingURL=ISubstanceReferenceInformation.d.ts.map