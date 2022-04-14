import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSetStartingMaterial extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial {
    /**
     * Todo.
     */
    amount?: fhirModels.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    material?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSetStartingMaterial from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial);
}
/**
 * Todo.
 */
export declare class SubstancePolymerMonomerSet extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerMonomerSet {
    /**
     * Todo.
     */
    ratioType?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    startingMaterial?: fhirModels.SubstancePolymerMonomerSetStartingMaterial[] | undefined;
    /**
     * Default constructor for SubstancePolymerMonomerSet from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerMonomerSet);
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    /**
     * Todo.
     */
    amount?: fhirModels.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    degree?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation);
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    /**
     * Todo.
     */
    attachment?: fhirModels.Attachment | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    _representation?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation);
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeatRepeatUnit extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnit {
    /**
     * Todo.
     */
    amount?: fhirModels.SubstanceAmount | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: fhirModels.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined;
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    _repeatUnit?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhirModels.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;
    /**
     * Default constructor for SubstancePolymerRepeatRepeatUnit from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerRepeatRepeatUnit);
}
/**
 * Todo.
 */
export declare class SubstancePolymerRepeat extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeat {
    /**
     * Todo.
     */
    averageMolecularFormula?: string | undefined;
    _averageMolecularFormula?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    _numberOfUnits?: fhirModels.Element | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhirModels.SubstancePolymerRepeatRepeatUnit[] | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstancePolymerRepeat from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymerRepeat);
}
/**
 * Todo.
 */
export declare class SubstancePolymer extends fhirModels.DomainResource implements fhirInterfaces.ISubstancePolymer {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SubstancePolymer";
    /**
     * Todo.
     */
    class?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Todo.
     */
    geometry?: fhirModels.CodeableConcept | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
    _modification?: fhirModels.Element[] | undefined;
    /**
     * Todo.
     */
    monomerSet?: fhirModels.SubstancePolymerMonomerSet[] | undefined;
    /**
     * Todo.
     */
    repeat?: fhirModels.SubstancePolymerRepeat[] | undefined;
    /**
     * Default constructor for SubstancePolymer from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstancePolymer);
}
//# sourceMappingURL=SubstancePolymer.d.ts.map