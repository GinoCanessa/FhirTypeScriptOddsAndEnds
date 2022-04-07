import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export declare class SubstanceSourceMaterialFractionDescription extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialFractionDescription {
    /**
     * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
     */
    fraction?: string | undefined;
    _fraction?: fhirModels.Element | undefined;
    /**
     * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
     */
    materialType?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialFractionDescription from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialFractionDescription>);
    /**
     * Factory function to create a SubstanceSourceMaterialFractionDescription from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialFractionDescription): SubstanceSourceMaterialFractionDescription;
    /**
     * Check if the current SubstanceSourceMaterialFractionDescription contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export declare class SubstanceSourceMaterialOrganismAuthor extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialOrganismAuthor {
    /**
     * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
     */
    authorDescription?: string | undefined;
    _authorDescription?: fhirModels.Element | undefined;
    /**
     * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
     */
    authorType?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismAuthor from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialOrganismAuthor>);
    /**
     * Factory function to create a SubstanceSourceMaterialOrganismAuthor from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialOrganismAuthor): SubstanceSourceMaterialOrganismAuthor;
    /**
     * Check if the current SubstanceSourceMaterialOrganismAuthor contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export declare class SubstanceSourceMaterialOrganismHybrid extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialOrganismHybrid {
    /**
     * The hybrid type of an organism shall be specified.
     */
    hybridType?: fhirModels.CodeableConcept | undefined;
    /**
     * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismId?: string | undefined;
    _maternalOrganismId?: fhirModels.Element | undefined;
    /**
     * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismName?: string | undefined;
    _maternalOrganismName?: fhirModels.Element | undefined;
    /**
     * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
     */
    paternalOrganismId?: string | undefined;
    _paternalOrganismId?: fhirModels.Element | undefined;
    /**
     * The name of the paternal species constituting the hybrid organism shall be specified.
     */
    paternalOrganismName?: string | undefined;
    _paternalOrganismName?: fhirModels.Element | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismHybrid from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialOrganismHybrid>);
    /**
     * Factory function to create a SubstanceSourceMaterialOrganismHybrid from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialOrganismHybrid): SubstanceSourceMaterialOrganismHybrid;
    /**
     * Check if the current SubstanceSourceMaterialOrganismHybrid contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export declare class SubstanceSourceMaterialOrganismOrganismGeneral extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialOrganismOrganismGeneral {
    /**
     * The class of an organism shall be specified.
     */
    class?: fhirModels.CodeableConcept | undefined;
    /**
     * The kingdom of an organism shall be specified.
     */
    kingdom?: fhirModels.CodeableConcept | undefined;
    /**
     * The order of an organism shall be specified,.
     */
    order?: fhirModels.CodeableConcept | undefined;
    /**
     * The phylum of an organism shall be specified.
     */
    phylum?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismOrganismGeneral from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialOrganismOrganismGeneral>);
    /**
     * Factory function to create a SubstanceSourceMaterialOrganismOrganismGeneral from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialOrganismOrganismGeneral): SubstanceSourceMaterialOrganismOrganismGeneral;
    /**
     * Check if the current SubstanceSourceMaterialOrganismOrganismGeneral contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export declare class SubstanceSourceMaterialOrganism extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialOrganism {
    /**
     * 4.9.13.6.1 Author type (Conditional).
     */
    author?: fhirModels.SubstanceSourceMaterialOrganismAuthor[] | undefined;
    /**
     * The family of an organism shall be specified.
     */
    family?: fhirModels.CodeableConcept | undefined;
    /**
     * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
     */
    genus?: fhirModels.CodeableConcept | undefined;
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
     */
    hybrid?: fhirModels.SubstanceSourceMaterialOrganismHybrid | undefined;
    /**
     * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
     */
    intraspecificDescription?: string | undefined;
    _intraspecificDescription?: fhirModels.Element | undefined;
    /**
     * The Intraspecific type of an organism shall be specified.
     */
    intraspecificType?: fhirModels.CodeableConcept | undefined;
    /**
     * 4.9.13.7.1 Kingdom (Conditional).
     */
    organismGeneral?: fhirModels.SubstanceSourceMaterialOrganismOrganismGeneral | undefined;
    /**
     * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
     */
    species?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganism from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialOrganism>);
    /**
     * Factory function to create a SubstanceSourceMaterialOrganism from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialOrganism): SubstanceSourceMaterialOrganism;
    /**
     * Check if the current SubstanceSourceMaterialOrganism contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * To do.
 */
export declare class SubstanceSourceMaterialPartDescription extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceSourceMaterialPartDescription {
    /**
     * Entity of anatomical origin of source material within an organism.
     */
    part?: fhirModels.CodeableConcept | undefined;
    /**
     * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
     */
    partLocation?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialPartDescription from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterialPartDescription>);
    /**
     * Factory function to create a SubstanceSourceMaterialPartDescription from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterialPartDescription): SubstanceSourceMaterialPartDescription;
    /**
     * Check if the current SubstanceSourceMaterialPartDescription contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export declare class SubstanceSourceMaterial extends fhirModels.DomainResource implements fhirInterfaces.ISubstanceSourceMaterial {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SubstanceSourceMaterial";
    /**
     * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
     */
    countryOfOrigin?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
     */
    developmentStage?: fhirModels.CodeableConcept | undefined;
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
     */
    fractionDescription?: fhirModels.SubstanceSourceMaterialFractionDescription[] | undefined;
    /**
     * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
     */
    geographicalLocation?: string[] | undefined;
    _geographicalLocation?: fhirModels.Element[] | undefined;
    /**
     * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
     */
    organism?: fhirModels.SubstanceSourceMaterialOrganism | undefined;
    /**
     * The unique identifier associated with the source material parent organism shall be specified.
     */
    organismId?: fhirModels.Identifier | undefined;
    /**
     * The organism accepted Scientific name shall be provided based on the organism taxonomy.
     */
    organismName?: string | undefined;
    _organismName?: fhirModels.Element | undefined;
    /**
     * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
     */
    parentSubstanceId?: fhirModels.Identifier[] | undefined;
    /**
     * The parent substance of the Herbal Drug, or Herbal preparation.
     */
    parentSubstanceName?: string[] | undefined;
    _parentSubstanceName?: fhirModels.Element[] | undefined;
    /**
     * To do.
     */
    partDescription?: fhirModels.SubstanceSourceMaterialPartDescription[] | undefined;
    /**
     * General high level classification of the source material specific to the origin of the material.
     */
    sourceMaterialClass?: fhirModels.CodeableConcept | undefined;
    /**
     * The state of the source material when extracted.
     */
    sourceMaterialState?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
     */
    sourceMaterialType?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterial from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceSourceMaterial>);
    /**
     * Factory function to create a SubstanceSourceMaterial from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceSourceMaterial): SubstanceSourceMaterial;
    /**
     * Check if the current SubstanceSourceMaterial contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SubstanceSourceMaterial.d.ts.map