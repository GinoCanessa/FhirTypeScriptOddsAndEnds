import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Moiety, for structural modifications.
 */
export interface ISubstanceSpecificationMoiety extends fhirInterfaces.IBackboneElement {
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    _amountString?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhirInterfaces.IElement | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Role that the moiety is playing.
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export interface ISubstanceSpecificationProperty extends fhirInterfaces.IBackboneElement {
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    _amountString?: fhirInterfaces.IElement | undefined;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhirInterfaces.IReference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    _parameters?: fhirInterfaces.IElement | undefined;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export interface ISubstanceSpecificationStructureIsotopeMolecularWeight extends fhirInterfaces.IBackboneElement {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhirInterfaces.IQuantity | undefined;
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export interface ISubstanceSpecificationStructureIsotope extends fhirInterfaces.IBackboneElement {
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhirInterfaces.IQuantity | undefined;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirInterfaces.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Molecular structural representation.
 */
export interface ISubstanceSpecificationStructureRepresentation extends fhirInterfaces.IBackboneElement {
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    _representation?: fhirInterfaces.IElement | undefined;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Structural information.
 */
export interface ISubstanceSpecificationStructure extends fhirInterfaces.IBackboneElement {
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhirInterfaces.ISubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhirInterfaces.IElement | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    _molecularFormulaByMoiety?: fhirInterfaces.IElement | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirInterfaces.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhirInterfaces.ISubstanceSpecificationStructureRepresentation[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Codes associated with the substance.
 */
export interface ISubstanceSpecificationCode extends fhirInterfaces.IBackboneElement {
    /**
     * The specific code.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirInterfaces.IElement | undefined;
}
/**
 * Details of the official nature of this name.
 */
export interface ISubstanceSpecificationNameOfficial extends fhirInterfaces.IBackboneElement {
    /**
     * Which authority uses this official name.
     */
    authority?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * The status of the official name.
     */
    status?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Names applicable to this substance.
 */
export interface ISubstanceSpecificationName extends fhirInterfaces.IBackboneElement {
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Language of the name.
     */
    language?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The actual name.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhirInterfaces.ISubstanceSpecificationNameOfficial[] | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirInterfaces.IElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * The status of the name.
     */
    status?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhirInterfaces.ISubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhirInterfaces.ISubstanceSpecificationName[] | undefined;
    /**
     * Name type.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export interface ISubstanceSpecificationRelationship extends fhirInterfaces.IBackboneElement {
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRange?: fhirInterfaces.IRange | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    _amountString?: fhirInterfaces.IElement | undefined;
    /**
     * For use when the numeric.
     */
    amountRatioLowLimit?: fhirInterfaces.IRatio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    amountType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhirInterfaces.IElement | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhirInterfaces.IReference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface ISubstanceSpecification extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SubstanceSpecification";
    /**
     * Codes associated with the substance.
     */
    code?: fhirInterfaces.ISubstanceSpecificationCode[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhirInterfaces.ISubstanceSpecificationMoiety[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhirInterfaces.ISubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhirInterfaces.ISubstanceSpecificationName[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhirInterfaces.IReference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhirInterfaces.IReference | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhirInterfaces.ISubstanceSpecificationProperty[] | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhirInterfaces.IReference | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhirInterfaces.IReference | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhirInterfaces.ISubstanceSpecificationRelationship[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhirInterfaces.IReference[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhirInterfaces.IReference | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Structural information.
     */
    structure?: fhirInterfaces.ISubstanceSpecificationStructure | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=ISubstanceSpecification.d.ts.map