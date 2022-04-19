import * as fhir from '../fhir';
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationGene = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    gene?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.ICodeableConcept | undefined;
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
    element?: fhir.IIdentifier | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationClassification = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    classification?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    domain?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Todo.
     */
    subtype?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstanceReferenceInformationTarget = fhir.IBackboneElement & {
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
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    amountType?: fhir.ICodeableConcept | undefined;
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
    source?: fhir.IReference[] | undefined;
    /**
     * Todo.
     */
    target?: fhir.IIdentifier | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
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
    classification?: fhir.ISubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    comment?: string | undefined;
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
    target?: fhir.ISubstanceReferenceInformationTarget[] | undefined;
};
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGene extends fhir.BackboneElement implements fhir.ISubstanceReferenceInformationGene {
    /**
     * Todo.
     */
    gene?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    geneSequenceOrigin?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGene - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceReferenceInformationGene>);
    /**
     * Check if the current SubstanceReferenceInformationGene contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceReferenceInformationGene from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceReferenceInformationGene): SubstanceReferenceInformationGene;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationGeneElement extends fhir.BackboneElement implements fhir.ISubstanceReferenceInformationGeneElement {
    /**
     * Todo.
     */
    element?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationGeneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceReferenceInformationGeneElement>);
    /**
     * Check if the current SubstanceReferenceInformationGeneElement contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceReferenceInformationGeneElement from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceReferenceInformationGeneElement): SubstanceReferenceInformationGeneElement;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationClassification extends fhir.BackboneElement implements fhir.ISubstanceReferenceInformationClassification {
    /**
     * Todo.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Todo.
     */
    subtype?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceReferenceInformationClassification>);
    /**
     * Check if the current SubstanceReferenceInformationClassification contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceReferenceInformationClassification from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceReferenceInformationClassification): SubstanceReferenceInformationClassification;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformationTarget extends fhir.BackboneElement implements fhir.ISubstanceReferenceInformationTarget {
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
    _amountString?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    amountType?: fhir.CodeableConcept | undefined;
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
    source?: fhir.Reference[] | undefined;
    /**
     * Todo.
     */
    target?: fhir.Identifier | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceReferenceInformationTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceReferenceInformationTarget>);
    /**
     * Check if the current SubstanceReferenceInformationTarget contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceReferenceInformationTarget from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceReferenceInformationTarget): SubstanceReferenceInformationTarget;
}
/**
 * Todo.
 */
export declare class SubstanceReferenceInformation extends fhir.DomainResource implements fhir.ISubstanceReferenceInformation {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceReferenceInformation";
    /**
     * Todo.
     */
    classification?: fhir.SubstanceReferenceInformationClassification[] | undefined;
    /**
     * Todo.
     */
    comment?: string | undefined;
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
    target?: fhir.SubstanceReferenceInformationTarget[] | undefined;
    /**
     * Default constructor for SubstanceReferenceInformation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceReferenceInformation>);
    /**
     * Check if the current SubstanceReferenceInformation contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceReferenceInformation from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubstanceReferenceInformation): SubstanceReferenceInformation;
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map