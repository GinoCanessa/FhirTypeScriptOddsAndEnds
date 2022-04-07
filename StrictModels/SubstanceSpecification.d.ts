import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Moiety, for structural modifications.
 */
export declare class SubstanceSpecificationMoiety extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationMoiety {
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhirModels.Quantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    _amountString?: fhirModels.Element | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhirModels.Element | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhirModels.CodeableConcept | undefined;
    /**
     * Role that the moiety is playing.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationMoiety from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationMoiety);
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare class SubstanceSpecificationProperty extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationProperty {
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhirModels.Quantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    _amountString?: fhirModels.Element | undefined;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhirModels.Reference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    _parameters?: fhirModels.Element | undefined;
    /**
     * Default constructor for SubstanceSpecificationProperty from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationProperty);
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare class SubstanceSpecificationStructureIsotopeMolecularWeight extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationStructureIsotopeMolecularWeight {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhirModels.Quantity | undefined;
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhirModels.CodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotopeMolecularWeight from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationStructureIsotopeMolecularWeight);
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare class SubstanceSpecificationStructureIsotope extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationStructureIsotope {
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhirModels.Quantity | undefined;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirModels.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotope from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationStructureIsotope);
}
/**
 * Molecular structural representation.
 */
export declare class SubstanceSpecificationStructureRepresentation extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationStructureRepresentation {
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhirModels.Attachment | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    _representation?: fhirModels.Element | undefined;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureRepresentation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationStructureRepresentation);
}
/**
 * Structural information.
 */
export declare class SubstanceSpecificationStructure extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationStructure {
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhirModels.SubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhirModels.Element | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    _molecularFormulaByMoiety?: fhirModels.Element | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirModels.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhirModels.CodeableConcept | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhirModels.SubstanceSpecificationStructureRepresentation[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructure from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationStructure);
}
/**
 * Codes associated with the substance.
 */
export declare class SubstanceSpecificationCode extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationCode {
    /**
     * The specific code.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirModels.Element | undefined;
    /**
     * Default constructor for SubstanceSpecificationCode from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationCode);
}
/**
 * Details of the official nature of this name.
 */
export declare class SubstanceSpecificationNameOfficial extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationNameOfficial {
    /**
     * Which authority uses this official name.
     */
    authority?: fhirModels.CodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * The status of the official name.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationNameOfficial from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationNameOfficial);
}
/**
 * Names applicable to this substance.
 */
export declare class SubstanceSpecificationName extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationName {
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Language of the name.
     */
    language?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The actual name.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhirModels.SubstanceSpecificationNameOfficial[] | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirModels.Element | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * The status of the name.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhirModels.SubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhirModels.SubstanceSpecificationName[] | undefined;
    /**
     * Name type.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationName from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationName);
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare class SubstanceSpecificationRelationship extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSpecificationRelationship {
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhirModels.Quantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhirModels.Range | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhirModels.Ratio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    _amountString?: fhirModels.Element | undefined;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhirModels.Ratio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhirModels.CodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhirModels.Element | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhirModels.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhirModels.Reference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationRelationship from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecificationRelationship);
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare class SubstanceSpecification extends fhirModels.DomainResource implements fhirInterfaces.ISubstanceSpecification {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SubstanceSpecification";
    /**
     * Codes associated with the substance.
     */
    code?: fhirModels.SubstanceSpecificationCode[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhirModels.CodeableConcept | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhirModels.SubstanceSpecificationMoiety[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirModels.SubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhirModels.SubstanceSpecificationName[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhirModels.Reference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhirModels.Reference | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhirModels.SubstanceSpecificationProperty[] | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhirModels.Reference | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhirModels.Reference | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhirModels.SubstanceSpecificationRelationship[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirModels.Reference[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhirModels.Reference | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * Structural information.
     */
    structure?: fhirModels.SubstanceSpecificationStructure | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecification from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISubstanceSpecification);
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map