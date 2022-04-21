import * as fhir from '../fhir.js';
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export declare type ISubstanceSourceMaterialFractionDescription = fhir.IBackboneElement & {
    /**
     * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
     */
    fraction?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.fractionDescription.fraction
     */
    _fraction?: fhir.IFhirElement | undefined;
    /**
     * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
     */
    materialType?: fhir.ICodeableConcept | undefined;
};
/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export declare type ISubstanceSourceMaterialOrganismAuthor = fhir.IBackboneElement & {
    /**
     * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
     */
    authorType?: fhir.ICodeableConcept | undefined;
    /**
     * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
     */
    authorDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.author.authorDescription
     */
    _authorDescription?: fhir.IFhirElement | undefined;
};
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export declare type ISubstanceSourceMaterialOrganismHybrid = fhir.IBackboneElement & {
    /**
     * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismId
     */
    _maternalOrganismId?: fhir.IFhirElement | undefined;
    /**
     * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismName
     */
    _maternalOrganismName?: fhir.IFhirElement | undefined;
    /**
     * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
     */
    paternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismId
     */
    _paternalOrganismId?: fhir.IFhirElement | undefined;
    /**
     * The name of the paternal species constituting the hybrid organism shall be specified.
     */
    paternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismName
     */
    _paternalOrganismName?: fhir.IFhirElement | undefined;
    /**
     * The hybrid type of an organism shall be specified.
     */
    hybridType?: fhir.ICodeableConcept | undefined;
};
/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export declare type ISubstanceSourceMaterialOrganismOrganismGeneral = fhir.IBackboneElement & {
    /**
     * The kingdom of an organism shall be specified.
     */
    kingdom?: fhir.ICodeableConcept | undefined;
    /**
     * The phylum of an organism shall be specified.
     */
    phylum?: fhir.ICodeableConcept | undefined;
    /**
     * The class of an organism shall be specified.
     */
    class?: fhir.ICodeableConcept | undefined;
    /**
     * The order of an organism shall be specified,.
     */
    order?: fhir.ICodeableConcept | undefined;
};
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export declare type ISubstanceSourceMaterialOrganism = fhir.IBackboneElement & {
    /**
     * The family of an organism shall be specified.
     */
    family?: fhir.ICodeableConcept | undefined;
    /**
     * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
     */
    genus?: fhir.ICodeableConcept | undefined;
    /**
     * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
     */
    species?: fhir.ICodeableConcept | undefined;
    /**
     * The Intraspecific type of an organism shall be specified.
     */
    intraspecificType?: fhir.ICodeableConcept | undefined;
    /**
     * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
     */
    intraspecificDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.intraspecificDescription
     */
    _intraspecificDescription?: fhir.IFhirElement | undefined;
    /**
     * 4.9.13.6.1 Author type (Conditional).
     */
    author?: fhir.ISubstanceSourceMaterialOrganismAuthor[] | undefined;
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
     */
    hybrid?: fhir.ISubstanceSourceMaterialOrganismHybrid | undefined;
    /**
     * 4.9.13.7.1 Kingdom (Conditional).
     */
    organismGeneral?: fhir.ISubstanceSourceMaterialOrganismOrganismGeneral | undefined;
};
/**
 * To do.
 */
export declare type ISubstanceSourceMaterialPartDescription = fhir.IBackboneElement & {
    /**
     * Entity of anatomical origin of source material within an organism.
     */
    part?: fhir.ICodeableConcept | undefined;
    /**
     * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
     */
    partLocation?: fhir.ICodeableConcept | undefined;
};
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export declare type ISubstanceSourceMaterial = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSourceMaterial";
    /**
     * General high level classification of the source material specific to the origin of the material.
     */
    sourceMaterialClass?: fhir.ICodeableConcept | undefined;
    /**
     * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
     */
    sourceMaterialType?: fhir.ICodeableConcept | undefined;
    /**
     * The state of the source material when extracted.
     */
    sourceMaterialState?: fhir.ICodeableConcept | undefined;
    /**
     * The unique identifier associated with the source material parent organism shall be specified.
     */
    organismId?: fhir.IIdentifier | undefined;
    /**
     * The organism accepted Scientific name shall be provided based on the organism taxonomy.
     */
    organismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organismName
     */
    _organismName?: fhir.IFhirElement | undefined;
    /**
     * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
     */
    parentSubstanceId?: fhir.IIdentifier[] | undefined;
    /**
     * The parent substance of the Herbal Drug, or Herbal preparation.
     */
    parentSubstanceName?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.parentSubstanceName
     */
    _parentSubstanceName?: fhir.IFhirElement[] | undefined;
    /**
     * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
     */
    countryOfOrigin?: fhir.ICodeableConcept[] | undefined;
    /**
     * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
     */
    geographicalLocation?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.geographicalLocation
     */
    _geographicalLocation?: fhir.IFhirElement[] | undefined;
    /**
     * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
     */
    developmentStage?: fhir.ICodeableConcept | undefined;
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
     */
    fractionDescription?: fhir.ISubstanceSourceMaterialFractionDescription[] | undefined;
    /**
     * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
     */
    organism?: fhir.ISubstanceSourceMaterialOrganism | undefined;
    /**
     * To do.
     */
    partDescription?: fhir.ISubstanceSourceMaterialPartDescription[] | undefined;
};
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export declare class SubstanceSourceMaterialFractionDescription extends fhir.BackboneElement implements ISubstanceSourceMaterialFractionDescription {
    /**
     * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
     */
    fraction?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.fractionDescription.fraction
     */
    _fraction?: fhir.FhirElement | undefined;
    /**
     * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
     */
    materialType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialFractionDescription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialFractionDescription>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export declare class SubstanceSourceMaterialOrganismAuthor extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismAuthor {
    /**
     * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
     */
    authorType?: fhir.CodeableConcept | undefined;
    /**
     * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
     */
    authorDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.author.authorDescription
     */
    _authorDescription?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismAuthor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialOrganismAuthor>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export declare class SubstanceSourceMaterialOrganismHybrid extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismHybrid {
    /**
     * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismId
     */
    _maternalOrganismId?: fhir.FhirElement | undefined;
    /**
     * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
     */
    maternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismName
     */
    _maternalOrganismName?: fhir.FhirElement | undefined;
    /**
     * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
     */
    paternalOrganismId?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismId
     */
    _paternalOrganismId?: fhir.FhirElement | undefined;
    /**
     * The name of the paternal species constituting the hybrid organism shall be specified.
     */
    paternalOrganismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismName
     */
    _paternalOrganismName?: fhir.FhirElement | undefined;
    /**
     * The hybrid type of an organism shall be specified.
     */
    hybridType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismHybrid - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialOrganismHybrid>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export declare class SubstanceSourceMaterialOrganismOrganismGeneral extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismOrganismGeneral {
    /**
     * The kingdom of an organism shall be specified.
     */
    kingdom?: fhir.CodeableConcept | undefined;
    /**
     * The phylum of an organism shall be specified.
     */
    phylum?: fhir.CodeableConcept | undefined;
    /**
     * The class of an organism shall be specified.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * The order of an organism shall be specified,.
     */
    order?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganismOrganismGeneral - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialOrganismOrganismGeneral>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export declare class SubstanceSourceMaterialOrganism extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganism {
    /**
     * The family of an organism shall be specified.
     */
    family?: fhir.CodeableConcept | undefined;
    /**
     * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
     */
    genus?: fhir.CodeableConcept | undefined;
    /**
     * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * The Intraspecific type of an organism shall be specified.
     */
    intraspecificType?: fhir.CodeableConcept | undefined;
    /**
     * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
     */
    intraspecificDescription?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organism.intraspecificDescription
     */
    _intraspecificDescription?: fhir.FhirElement | undefined;
    /**
     * 4.9.13.6.1 Author type (Conditional).
     */
    author?: fhir.SubstanceSourceMaterialOrganismAuthor[] | undefined;
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
     */
    hybrid?: fhir.SubstanceSourceMaterialOrganismHybrid | undefined;
    /**
     * 4.9.13.7.1 Kingdom (Conditional).
     */
    organismGeneral?: fhir.SubstanceSourceMaterialOrganismOrganismGeneral | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialOrganism - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialOrganism>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * To do.
 */
export declare class SubstanceSourceMaterialPartDescription extends fhir.BackboneElement implements ISubstanceSourceMaterialPartDescription {
    /**
     * Entity of anatomical origin of source material within an organism.
     */
    part?: fhir.CodeableConcept | undefined;
    /**
     * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
     */
    partLocation?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceSourceMaterialPartDescription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterialPartDescription>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export declare class SubstanceSourceMaterial extends fhir.DomainResource implements ISubstanceSourceMaterial {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceSourceMaterial";
    /**
     * General high level classification of the source material specific to the origin of the material.
     */
    sourceMaterialClass?: fhir.CodeableConcept | undefined;
    /**
     * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
     */
    sourceMaterialType?: fhir.CodeableConcept | undefined;
    /**
     * The state of the source material when extracted.
     */
    sourceMaterialState?: fhir.CodeableConcept | undefined;
    /**
     * The unique identifier associated with the source material parent organism shall be specified.
     */
    organismId?: fhir.Identifier | undefined;
    /**
     * The organism accepted Scientific name shall be provided based on the organism taxonomy.
     */
    organismName?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.organismName
     */
    _organismName?: fhir.FhirElement | undefined;
    /**
     * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
     */
    parentSubstanceId?: fhir.Identifier[] | undefined;
    /**
     * The parent substance of the Herbal Drug, or Herbal preparation.
     */
    parentSubstanceName?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.parentSubstanceName
     */
    _parentSubstanceName?: fhir.FhirElement[] | undefined;
    /**
     * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
     */
    countryOfOrigin?: fhir.CodeableConcept[] | undefined;
    /**
     * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
     */
    geographicalLocation?: string[] | undefined;
    /**
     * Extended properties for primitive element: SubstanceSourceMaterial.geographicalLocation
     */
    _geographicalLocation?: fhir.FhirElement[] | undefined;
    /**
     * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
     */
    developmentStage?: fhir.CodeableConcept | undefined;
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
     */
    fractionDescription?: fhir.SubstanceSourceMaterialFractionDescription[] | undefined;
    /**
     * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
     */
    organism?: fhir.SubstanceSourceMaterialOrganism | undefined;
    /**
     * To do.
     */
    partDescription?: fhir.SubstanceSourceMaterialPartDescription[] | undefined;
    /**
     * Default constructor for SubstanceSourceMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubstanceSourceMaterial>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SubstanceSourceMaterial.d.ts.map