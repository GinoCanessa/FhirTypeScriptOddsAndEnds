import * as fhir from '../fhir.js';
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationGene = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    gene?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationGeneElement = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    element?: fhir.IIdentifier | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationClassification = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    domain?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    classification?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    subtype?: fhir.ICodeableConcept[] | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationTarget = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    target?: fhir.IIdentifier | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    interaction?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    organism?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    organismType?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Todo.
     */
    amountRange?: fhir.IRange | undefined;
    /**
     * Todo.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.target.amount[x]
     */
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    amountType?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    gene?: fhir.ISubstanceReferenceInformationGene[] | undefined;
    /**
     * Todo.
     */
    geneElement?: fhir.ISubstanceReferenceInformationGeneElement[] | undefined;
    /**
     * Todo.
     */
    classification?: fhir.ISubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    target?: fhir.ISubstanceReferenceInformationTarget[] | undefined;
};
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGene extends fhir.BackboneElement implements ISubstanceReferenceInformationGene {
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    gene?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGene - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceReferenceInformationGene>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGeneElement extends fhir.BackboneElement implements ISubstanceReferenceInformationGeneElement {
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    element?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGeneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceReferenceInformationGeneElement>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationClassification extends fhir.BackboneElement implements ISubstanceReferenceInformationClassification {
    /**
     * Todo.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    subtype?: fhir.CodeableConcept[] | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceReferenceInformationClassification>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationTarget extends fhir.BackboneElement implements ISubstanceReferenceInformationTarget {
    /**
     * Todo.
     */
    target?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    interaction?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organism?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    organismType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Todo.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * Todo.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.target.amount[x]
     */
    _amountString?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceReferenceInformationTarget>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformation extends fhir.DomainResource implements ISubstanceReferenceInformation {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceReferenceInformation.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    gene?: fhir.SubstanceReferenceInformationGene[] | undefined;
    /**
     * Todo.
     */
    geneElement?: fhir.SubstanceReferenceInformationGeneElement[] | undefined;
    /**
     * Todo.
     */
    classification?: fhir.SubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    target?: fhir.SubstanceReferenceInformationTarget[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceReferenceInformation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map