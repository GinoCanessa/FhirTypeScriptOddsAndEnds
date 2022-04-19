import * as fhir from '../fhir';
/**
 * Todo.
 */
export declare type ISubstancePolymerMonomerSetStartingMaterial = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    amount?: fhir.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    material?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
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
    amount?: fhir.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    degree?: fhir.ICodeableConcept | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeatRepeatUnitStructuralRepresentation = fhir.IBackboneElement & {
    /**
     * Todo.
     */
    attachment?: fhir.IAttachment | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    _representation?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Todo.
 */
export declare type ISubstancePolymerRepeatRepeatUnit = fhir.IBackboneElement & {
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
    orientationOfPolymerisation?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    _repeatUnit?: fhir.IFhirElement | undefined;
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
    averageMolecularFormula?: string | undefined;
    _averageMolecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    _numberOfUnits?: fhir.IFhirElement | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.ISubstancePolymerRepeatRepeatUnit[] | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.ICodeableConcept | undefined;
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
    copolymerConnectivity?: fhir.ICodeableConcept[] | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
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
export declare class SubstancePolymerMonomerSetStartingMaterial extends fhir.BackboneElement implements fhir.ISubstancePolymerMonomerSetStartingMaterial {
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSetStartingMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstancePolymerMonomerSetStartingMaterial>);
    /**
     * Check if the current SubstancePolymerMonomerSetStartingMaterial contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerMonomerSetStartingMaterial from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerMonomerSetStartingMaterial): SubstancePolymerMonomerSetStartingMaterial;
}
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSet extends fhir.BackboneElement implements fhir.ISubstancePolymerMonomerSet {
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
    constructor(source?: Partial<fhir.ISubstancePolymerMonomerSet>);
    /**
     * Check if the current SubstancePolymerMonomerSet contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerMonomerSet from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerMonomerSet): SubstancePolymerMonomerSet;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhir.BackboneElement implements fhir.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    /**
     * Todo.
     */
    amount?: fhir.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    degree?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>);
    /**
     * Check if the current SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhir.BackboneElement implements fhir.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    /**
     * Todo.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    _representation?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>);
    /**
     * Check if the current SubstancePolymerRepeatRepeatUnitStructuralRepresentation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerRepeatRepeatUnitStructuralRepresentation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation): SubstancePolymerRepeatRepeatUnitStructuralRepresentation;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnit extends fhir.BackboneElement implements fhir.ISubstancePolymerRepeatRepeatUnit {
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
    orientationOfPolymerisation?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    _repeatUnit?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhir.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstancePolymerRepeatRepeatUnit>);
    /**
     * Check if the current SubstancePolymerRepeatRepeatUnit contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerRepeatRepeatUnit from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerRepeatRepeatUnit): SubstancePolymerRepeatRepeatUnit;
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeat extends fhir.BackboneElement implements fhir.ISubstancePolymerRepeat {
    /**
     * Todo.
     */
    averageMolecularFormula?: string | undefined;
    _averageMolecularFormula?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    _numberOfUnits?: fhir.FhirElement | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhir.SubstancePolymerRepeatRepeatUnit[] | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstancePolymerRepeat>);
    /**
     * Check if the current SubstancePolymerRepeat contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymerRepeat from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymerRepeat): SubstancePolymerRepeat;
}
/**
 * Todo.
 */
export declare class SubstancePolymer extends fhir.DomainResource implements fhir.ISubstancePolymer {
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
    copolymerConnectivity?: fhir.CodeableConcept[] | undefined;
    /**
     * Todo.
     */
    geometry?: fhir.CodeableConcept | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
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
    constructor(source?: Partial<fhir.ISubstancePolymer>);
    /**
     * Check if the current SubstancePolymer contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstancePolymer from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstancePolymer): SubstancePolymer;
}
//# sourceMappingURL=SubstancePolymer.d.ts.map