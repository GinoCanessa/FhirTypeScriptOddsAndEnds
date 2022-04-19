import * as fhir from '../fhir';
/**
 * Moiety, for structural modifications.
 */
export declare type ISubstanceSpecificationMoiety = fhir.IBackboneElement & {
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.ICodeableConcept | undefined;
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.ICodeableConcept | undefined;
};
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare type ISubstanceSpecificationProperty = fhir.IBackboneElement & {
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.IQuantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    _amountString?: fhir.IFhirElement | undefined;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.IReference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    _parameters?: fhir.IFhirElement | undefined;
};
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare type ISubstanceSpecificationStructureIsotopeMolecularWeight = fhir.IBackboneElement & {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.IQuantity | undefined;
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare type ISubstanceSpecificationStructureIsotope = fhir.IBackboneElement & {
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.IQuantity | undefined;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.ICodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.ICodeableConcept | undefined;
};
/**
 * Molecular structural representation.
 */
export declare type ISubstanceSpecificationStructureRepresentation = fhir.IBackboneElement & {
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.IAttachment | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    _representation?: fhir.IFhirElement | undefined;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Structural information.
 */
export declare type ISubstanceSpecificationStructure = fhir.IBackboneElement & {
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhir.ISubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhir.IFhirElement | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    _molecularFormulaByMoiety?: fhir.IFhirElement | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.ICodeableConcept | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhir.ISubstanceSpecificationStructureRepresentation[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.ICodeableConcept | undefined;
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
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.IFhirElement | undefined;
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
     * Date of official name change.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.ICodeableConcept | undefined;
};
/**
 * Names applicable to this substance.
 */
export declare type ISubstanceSpecificationName = fhir.IBackboneElement & {
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhir.ICodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Language of the name.
     */
    language?: fhir.ICodeableConcept[] | undefined;
    /**
     * The actual name.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.ISubstanceSpecificationNameOfficial[] | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    _preferred?: fhir.IFhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * Name type.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare type ISubstanceSpecificationRelationship = fhir.IBackboneElement & {
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
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhir.IFhirElement | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.IReference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.ICodeableConcept | undefined;
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
     * Codes associated with the substance.
     */
    code?: fhir.ISubstanceSpecificationCode[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.ICodeableConcept | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.ISubstanceSpecificationMoiety[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.ISubstanceSpecificationName[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.IReference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.IReference | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhir.ISubstanceSpecificationProperty[] | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.IReference | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.IReference | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.ISubstanceSpecificationRelationship[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.IReference[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.IReference | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.ISubstanceSpecificationStructure | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Moiety, for structural modifications.
 */
export declare class SubstanceSpecificationMoiety extends fhir.BackboneElement implements fhir.ISubstanceSpecificationMoiety {
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    _amountString?: fhir.FhirElement | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhir.FhirElement | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationMoiety - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationMoiety>);
    /**
     * Check if the current SubstanceSpecificationMoiety contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationMoiety from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationMoiety): SubstanceSpecificationMoiety;
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export declare class SubstanceSpecificationProperty extends fhir.BackboneElement implements fhir.ISubstanceSpecificationProperty {
    /**
     * Quantitative value for this property.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this property.
     */
    amountString?: string | undefined;
    _amountString?: fhir.FhirElement | undefined;
    /**
     * A category for this property, e.g. Physical, Chemical, Enzymatic.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Property type e.g. viscosity, pH, isoelectric point.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceReference?: fhir.Reference | undefined;
    /**
     * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
     */
    definingSubstanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
     */
    parameters?: string | undefined;
    _parameters?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSpecificationProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationProperty>);
    /**
     * Check if the current SubstanceSpecificationProperty contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationProperty from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationProperty): SubstanceSpecificationProperty;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export declare class SubstanceSpecificationStructureIsotopeMolecularWeight extends fhir.BackboneElement implements fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotopeMolecularWeight - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight>);
    /**
     * Check if the current SubstanceSpecificationStructureIsotopeMolecularWeight contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationStructureIsotopeMolecularWeight from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationStructureIsotopeMolecularWeight): SubstanceSpecificationStructureIsotopeMolecularWeight;
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export declare class SubstanceSpecificationStructureIsotope extends fhir.BackboneElement implements fhir.ISubstanceSpecificationStructureIsotope {
    /**
     * Half life - for a non-natural nuclide.
     */
    halfLife?: fhir.Quantity | undefined;
    /**
     * Substance identifier for each non-natural or radioisotope.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Substance name for each non-natural or radioisotope.
     */
    name?: fhir.CodeableConcept | undefined;
    /**
     * The type of isotopic substitution present in a single substance.
     */
    substitution?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureIsotope - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationStructureIsotope>);
    /**
     * Check if the current SubstanceSpecificationStructureIsotope contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationStructureIsotope from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationStructureIsotope): SubstanceSpecificationStructureIsotope;
}
/**
 * Molecular structural representation.
 */
export declare class SubstanceSpecificationStructureRepresentation extends fhir.BackboneElement implements fhir.ISubstanceSpecificationStructureRepresentation {
    /**
     * An attached file with the structural representation.
     */
    attachment?: fhir.Attachment | undefined;
    /**
     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
     */
    representation?: string | undefined;
    _representation?: fhir.FhirElement | undefined;
    /**
     * The type of structure (e.g. Full, Partial, Representative).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructureRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationStructureRepresentation>);
    /**
     * Check if the current SubstanceSpecificationStructureRepresentation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationStructureRepresentation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationStructureRepresentation): SubstanceSpecificationStructureRepresentation;
}
/**
 * Structural information.
 */
export declare class SubstanceSpecificationStructure extends fhir.BackboneElement implements fhir.ISubstanceSpecificationStructure {
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
     */
    isotope?: fhir.SubstanceSpecificationStructureIsotope[] | undefined;
    /**
     * Molecular formula.
     */
    molecularFormula?: string | undefined;
    _molecularFormula?: fhir.FhirElement | undefined;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    _molecularFormulaByMoiety?: fhir.FhirElement | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular structural representation.
     */
    representation?: fhir.SubstanceSpecificationStructureRepresentation[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationStructure>);
    /**
     * Check if the current SubstanceSpecificationStructure contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationStructure from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationStructure): SubstanceSpecificationStructure;
}
/**
 * Codes associated with the substance.
 */
export declare class SubstanceSpecificationCode extends fhir.BackboneElement implements fhir.ISubstanceSpecificationCode {
    /**
     * The specific code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Status of the code assignment.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the code status is changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSpecificationCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationCode>);
    /**
     * Check if the current SubstanceSpecificationCode contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationCode from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationCode): SubstanceSpecificationCode;
}
/**
 * Details of the official nature of this name.
 */
export declare class SubstanceSpecificationNameOfficial extends fhir.BackboneElement implements fhir.ISubstanceSpecificationNameOfficial {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConcept | undefined;
    /**
     * Date of official name change.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * The status of the official name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationNameOfficial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationNameOfficial>);
    /**
     * Check if the current SubstanceSpecificationNameOfficial contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationNameOfficial from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationNameOfficial): SubstanceSpecificationNameOfficial;
}
/**
 * Names applicable to this substance.
 */
export declare class SubstanceSpecificationName extends fhir.BackboneElement implements fhir.ISubstanceSpecificationName {
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: fhir.CodeableConcept[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Language of the name.
     */
    language?: fhir.CodeableConcept[] | undefined;
    /**
     * The actual name.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: fhir.SubstanceSpecificationNameOfficial[] | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    _preferred?: fhir.FhirElement | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * The status of the name.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * A synonym of this name.
     */
    synonym?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * A translation for this name.
     */
    translation?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * Name type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationName>);
    /**
     * Check if the current SubstanceSpecificationName contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationName from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationName): SubstanceSpecificationName;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export declare class SubstanceSpecificationRelationship extends fhir.BackboneElement implements fhir.ISubstanceSpecificationRelationship {
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
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    _isDefining?: fhir.FhirElement | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material".
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceReference?: fhir.Reference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecificationRelationship - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecificationRelationship>);
    /**
     * Check if the current SubstanceSpecificationRelationship contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecificationRelationship from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecificationRelationship): SubstanceSpecificationRelationship;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export declare class SubstanceSpecification extends fhir.DomainResource implements fhir.ISubstanceSpecification {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSpecification";
    /**
     * Codes associated with the substance.
     */
    code?: fhir.SubstanceSpecificationCode[] | undefined;
    /**
     * Textual comment about this record of a substance.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * If the substance applies to only human or veterinary use.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: fhir.SubstanceSpecificationMoiety[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: fhir.SubstanceSpecificationName[] | undefined;
    /**
     * Data items specific to nucleic acids.
     */
    nucleicAcid?: fhir.Reference | undefined;
    /**
     * Data items specific to polymers.
     */
    polymer?: fhir.Reference | undefined;
    /**
     * General specifications for this substance, including how it is related to other substances.
     */
    property?: fhir.SubstanceSpecificationProperty[] | undefined;
    /**
     * Data items specific to proteins.
     */
    protein?: fhir.Reference | undefined;
    /**
     * General information detailing this substance.
     */
    referenceInformation?: fhir.Reference | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: fhir.SubstanceSpecificationRelationship[] | undefined;
    /**
     * Supporting literature.
     */
    source?: fhir.Reference[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.Reference | undefined;
    /**
     * Status of substance within the catalogue e.g. approved.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceSpecificationStructure | undefined;
    /**
     * High level categorization, e.g. polymer or nucleic acid.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceSpecification>);
    /**
     * Check if the current SubstanceSpecification contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceSpecification from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceSpecification): SubstanceSpecification;
}
//# sourceMappingURL=SubstanceSpecification.d.ts.map