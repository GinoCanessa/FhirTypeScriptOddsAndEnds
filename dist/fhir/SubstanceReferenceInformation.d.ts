import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceReferenceInformationGene type.
 */
export interface SubstanceReferenceInformationGeneArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    gene?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGene extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<SubstanceReferenceInformationGeneArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the SubstanceReferenceInformationGeneElement type.
 */
export interface SubstanceReferenceInformationGeneElementArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    element?: fhir.IdentifierArgs | undefined;
    /**
     * Todo.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGeneElement extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<SubstanceReferenceInformationGeneElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the SubstanceReferenceInformationClassification type.
 */
export interface SubstanceReferenceInformationClassificationArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    domain?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    classification?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    subtype?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Todo.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationClassification extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<SubstanceReferenceInformationClassificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the SubstanceReferenceInformationTarget type.
 */
export interface SubstanceReferenceInformationTargetArgs extends fhir.BackboneElementArgs {
    /**
     * Todo.
     */
    target?: fhir.IdentifierArgs | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    interaction?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    organism?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    organismType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    amount?: fhir.Quantity | fhir.Range | fhir.FhirString | undefined;
    /**
     * Todo.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Todo.
     */
    amountRange?: fhir.RangeArgs | undefined;
    /**
     * Todo.
     */
    amountString?: fhir.FhirString | string | undefined;
    /**
     * Todo.
     */
    amountType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Todo.
     */
    source?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationTarget extends fhir.BackboneElement {
    readonly __dataType: string;
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
    amount?: (fhir.Quantity | fhir.Range | fhir.FhirString) | undefined;
    readonly __amountIsChoice: true;
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
    constructor(source?: Partial<SubstanceReferenceInformationTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the SubstanceReferenceInformation type.
 */
export interface SubstanceReferenceInformationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation" | undefined;
    /**
     * Todo.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Todo.
     */
    gene?: fhir.SubstanceReferenceInformationGeneArgs[] | undefined;
    /**
     * Todo.
     */
    geneElement?: fhir.SubstanceReferenceInformationGeneElementArgs[] | undefined;
    /**
     * Todo.
     */
    classification?: fhir.SubstanceReferenceInformationClassificationArgs[] | undefined;
    /**
     * Todo.
     */
    target?: fhir.SubstanceReferenceInformationTargetArgs[] | undefined;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformation extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    comment?: fhir.FhirString | undefined;
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
    constructor(source?: Partial<SubstanceReferenceInformationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map