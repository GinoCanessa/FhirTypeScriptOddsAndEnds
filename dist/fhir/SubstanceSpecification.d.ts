import * as fhir from '../fhir.js';
/**
 * Moiety, for structural modifications.
 */
export declare type ISubstanceSpecificationMoiety = fhir.IBackboneElement & {
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.ICodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.ICodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.molecularFormula
     */
    _molecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.amount[x]
     */
    _amountString?: fhir.IFhirElement | undefined;
};
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare type ISubstanceSpecificationProperty = fhir.IBackboneElement & {
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.parameters
     */
    _parameters?: fhir.IFhirElement | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.IReference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.amount[x]
     */
    _amountString?: fhir.IFhirElement | undefined;
};
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare type ISubstanceSpecificationStructureIsotopeMolecularWeight = fhir.IBackboneElement & {
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.IQuantity | undefined;
};
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare type ISubstanceSpecificationStructureIsotope = fhir.IBackboneElement & {
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.ICodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.ICodeableConcept | undefined;
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.IQuantity | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
};
/**
 * Molecular structural representation.
 */
export declare type ISubstanceSpecificationStructureRepresentation = fhir.IBackboneElement & {
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.representation.representation
     */
    _representation?: fhir.IFhirElement | undefined;
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.IAttachment | undefined;
};
/**
 * Structural information.
 */
export declare type ISubstanceSpecificationStructure = fhir.IBackboneElement & {
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.ICodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.ICodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormula
     */
    _molecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.IFhirElement | undefined;
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhir.ISubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhir.ISubstanceSpecificationStructureRepresentation[] | undefined;
};
/**
 * Codes associated with the substance.
 */
export declare type ISubstanceSpecificationCode = fhir.IBackboneElement & {
    /**
     * The specific code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.statusDate
     */
    _statusDate?: fhir.IFhirElement | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * Details of the official nature of this name.
 */
export declare type ISubstanceSpecificationNameOfficial = fhir.IBackboneElement & {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.ICodeableConcept | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.official.date
     */
    _date?: fhir.IFhirElement | undefined;
};
/**
 * Names applicable to this substance.
 */
export declare type ISubstanceSpecificationName = fhir.IBackboneElement & {
    /**
     * The actual name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Name type.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.preferred
     */
    _preferred?: fhir.IFhirElement | undefined;
    /**
     * Language of the name.
     */
    language?: fhir.ICodeableConcept[] | undefined;
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhir.ICodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.ISubstanceSpecificationNameOfficial[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare type ISubstanceSpecificationRelationship = fhir.IBackboneElement & {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.IReference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.isDefining
     */
    _isDefining?: fhir.IFhirElement | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhir.IRange | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.IRatio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.amount[x]
     */
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhir.IRatio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhir.ICodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
};
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare type ISubstanceSpecification = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification";
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.ICodeableConcept | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.ISubstanceSpecificationMoiety[] | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhir.ISubstanceSpecificationProperty[] | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.IReference | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.ISubstanceSpecificationStructure | undefined;
    /**
     * Codes associated with the substance.
     */
    code?: fhir.ISubstanceSpecificationCode[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.ISubstanceSpecificationRelationship[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.IReference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.IReference | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.IReference | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.IReference | undefined;
};
/**
 * Moiety, for structural modifications.
 */
export declare class SubstanceSpecificationMoiety extends fhir.BackboneElement implements ISubstanceSpecificationMoiety {
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.moiety.amount[x]
     */
    _amountString?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSpecificationMoiety - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationMoiety>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare class SubstanceSpecificationProperty extends fhir.BackboneElement implements ISubstanceSpecificationProperty {
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.parameters
     */
    _parameters?: fhir.FhirElement | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.Reference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.property.amount[x]
     */
    _amountString?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSpecificationProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationProperty>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare class SubstanceSpecificationStructureIsotopeMolecularWeight extends fhir.BackboneElement implements ISubstanceSpecificationStructureIsotopeMolecularWeight {
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotopeMolecularWeight - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationStructureIsotopeMolecularWeight>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare class SubstanceSpecificationStructureIsotope extends fhir.BackboneElement implements ISubstanceSpecificationStructureIsotope {
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.CodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.CodeableConcept | undefined;
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.Quantity | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotope - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationStructureIsotope>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Molecular structural representation.
 */
export declare class SubstanceSpecificationStructureRepresentation extends fhir.BackboneElement implements ISubstanceSpecificationStructureRepresentation {
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.representation.representation
     */
    _representation?: fhir.FhirElement | undefined;
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationStructureRepresentation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Structural information.
 */
export declare class SubstanceSpecificationStructure extends fhir.BackboneElement implements ISubstanceSpecificationStructure {
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.FhirElement | undefined;
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhir.SubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhir.SubstanceSpecificationStructureRepresentation[] | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationStructure>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Codes associated with the substance.
 */
export declare class SubstanceSpecificationCode extends fhir.BackboneElement implements ISubstanceSpecificationCode {
    /**
     * The specific code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.statusDate
     */
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.code.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceSpecificationCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationCode>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details of the official nature of this name.
 */
export declare class SubstanceSpecificationNameOfficial extends fhir.BackboneElement implements ISubstanceSpecificationNameOfficial {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConcept | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.official.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSpecificationNameOfficial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationNameOfficial>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Names applicable to this substance.
 */
export declare class SubstanceSpecificationName extends fhir.BackboneElement implements ISubstanceSpecificationName {
    /**
     * The actual name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Name type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.name.preferred
     */
    _preferred?: fhir.FhirElement | undefined;
    /**
     * Language of the name.
     */
    language?: fhir.CodeableConcept[] | undefined;
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhir.CodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.SubstanceSpecificationNameOfficial[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceSpecificationName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationName>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare class SubstanceSpecificationRelationship extends fhir.BackboneElement implements ISubstanceSpecificationRelationship {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.Reference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.isDefining
     */
    _isDefining?: fhir.FhirElement | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.Ratio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.relationship.amount[x]
     */
    _amountString?: fhir.FhirElement | undefined;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhir.Ratio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SubstanceSpecificationRelationship - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecificationRelationship>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare class SubstanceSpecification extends fhir.DomainResource implements ISubstanceSpecification {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification";
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSpecification.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.SubstanceSpecificationMoiety[] | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhir.SubstanceSpecificationProperty[] | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.Reference | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceSpecificationStructure | undefined;
    /**
     * Codes associated with the substance.
     */
    code?: fhir.SubstanceSpecificationCode[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.SubstanceSpecificationRelationship[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.Reference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.Reference | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.Reference | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.Reference | undefined;
    /**
     * Default constructor for SubstanceSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSpecification>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map