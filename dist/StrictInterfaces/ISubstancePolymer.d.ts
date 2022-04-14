import * as fhirInterfaces from '../strictinterfaces';
/**
 * Todo.
 */
export interface ISubstancePolymerMonomerSetStartingMaterial extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    amount?: fhirInterfaces.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    material?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymerMonomerSet extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    ratioType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    startingMaterial?: fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial[] | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    amount?: fhirInterfaces.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    degree?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    attachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Todo.
     */
    representation?: string | undefined;
    _representation?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymerRepeatRepeatUnit extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    amount?: fhirInterfaces.ISubstanceAmount | undefined;
    /**
     * Todo.
     */
    degreeOfPolymerisation?: fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined;
    /**
     * Todo.
     */
    orientationOfPolymerisation?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    repeatUnit?: string | undefined;
    _repeatUnit?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    structuralRepresentation?: fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymerRepeat extends fhirInterfaces.IBackboneElement {
    /**
     * Todo.
     */
    averageMolecularFormula?: string | undefined;
    _averageMolecularFormula?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    numberOfUnits?: number | undefined;
    _numberOfUnits?: fhirInterfaces.IElement | undefined;
    /**
     * Todo.
     */
    repeatUnit?: fhirInterfaces.ISubstancePolymerRepeatRepeatUnit[] | undefined;
    /**
     * Todo.
     */
    repeatUnitAmountType?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Todo.
 */
export interface ISubstancePolymer extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SubstancePolymer";
    /**
     * Todo.
     */
    class?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    copolymerConnectivity?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Todo.
     */
    geometry?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Todo.
     */
    modification?: string[] | undefined;
    _modification?: fhirInterfaces.IElement[] | undefined;
    /**
     * Todo.
     */
    monomerSet?: fhirInterfaces.ISubstancePolymerMonomerSet[] | undefined;
    /**
     * Todo.
     */
    repeat?: fhirInterfaces.ISubstancePolymerRepeat[] | undefined;
}
//# sourceMappingURL=ISubstancePolymer.d.ts.map