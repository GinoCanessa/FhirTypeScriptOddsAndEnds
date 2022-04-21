import * as fhir from '../fhir.js';
/**
 * Todo.
 */
export declare type ISubstancePolymerMonomerSetStartingMaterial = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    material?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.monomerSet.startingMaterial.isDefining
     */
    _isDefining?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    amount?: fhir.ISubstanceAmount | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerMonomerSet = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    ratioType?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    startingMaterial?: fhir.ISubstancePolymerMonomerSetStartingMaterial[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    degree?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    amount?: fhir.ISubstanceAmount | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeatRepeatUnitStructuralRepresentation = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation
     */
    _representation?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    attachment?: fhir.IAttachment | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeatRepeatUnit = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.repeatUnit
     */
    _repeatUnit?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    amount?: fhir.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: fhir.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhir.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeat = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.numberOfUnits
     */
    _numberOfUnits?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    averageMolecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.averageMolecularFormula
     */
    _averageMolecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.ISubstancePolymerRepeatRepeatUnit[] | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymer = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SubstancePolymer";
    /**
     * Todo.
     */
    class?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity?: fhir.ICodeableConcept[] | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.modification
     */
    _modification?: fhir.IFhirElement[] | undefined;
    /**
     * Todo.
     */
    monomerSet?: fhir.ISubstancePolymerMonomerSet[] | undefined;
    /**
     * Todo.
     */
    repeat?: fhir.ISubstancePolymerRepeat[] | undefined;
};
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSetStartingMaterial extends fhir.BackboneElement implements ISubstancePolymerMonomerSetStartingMaterial {
    /**
     * Todo.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.monomerSet.startingMaterial.isDefining
     */
    _isDefining?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSetStartingMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerMonomerSetStartingMaterial>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSet extends fhir.BackboneElement implements ISubstancePolymerMonomerSet {
    /**
     * Todo.
     */
    ratioType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    startingMaterial?: fhir.SubstancePolymerMonomerSetStartingMaterial[] | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerMonomerSet>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhir.BackboneElement implements ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    /**
     * Todo.
     */
    degree?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhir.BackboneElement implements ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.structuralRepresentation.representation
     */
    _representation?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnit extends fhir.BackboneElement implements ISubstancePolymerRepeatRepeatUnit {
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.repeatUnit.repeatUnit
     */
    _repeatUnit?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerRepeatRepeatUnit>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeat extends fhir.BackboneElement implements ISubstancePolymerRepeat {
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.numberOfUnits
     */
    _numberOfUnits?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    averageMolecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.repeat.averageMolecularFormula
     */
    _averageMolecularFormula?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.SubstancePolymerRepeatRepeatUnit[] | undefined;
    /**
     * Default constructor for SubstancePolymerRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymerRepeat>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Todo.
 */
export declare class SubstancePolymer extends fhir.DomainResource implements ISubstancePolymer {
    /**
     * Resource Type Name
     */
    resourceType: "SubstancePolymer";
    /**
     * Todo.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity?: fhir.CodeableConcept[] | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstancePolymer.modification
     */
    _modification?: fhir.FhirElement[] | undefined;
    /**
     * Todo.
     */
    monomerSet?: fhir.SubstancePolymerMonomerSet[] | undefined;
    /**
     * Todo.
     */
    repeat?: fhir.SubstancePolymerRepeat[] | undefined;
    /**
     * Default constructor for SubstancePolymer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstancePolymer>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SubstancePolymer.d.ts.map