// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceSourceMaterial

import * as fhir from '../fhir.js'


/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export type ISubstanceSourceMaterialFractionDescription = fhir.IBackboneElement & { 
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   */
  fraction?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.fractionDescription.fraction
   */
  _fraction?: fhir.IFhirElement|undefined;
  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
   */
  materialType?: fhir.ICodeableConcept|undefined;
}

/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export type ISubstanceSourceMaterialOrganismAuthor = fhir.IBackboneElement & { 
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  authorType?: fhir.ICodeableConcept|undefined;
  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  authorDescription?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.author.authorDescription
   */
  _authorDescription?: fhir.IFhirElement|undefined;
}

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export type ISubstanceSourceMaterialOrganismHybrid = fhir.IBackboneElement & { 
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismId?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismId
   */
  _maternalOrganismId?: fhir.IFhirElement|undefined;
  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismName
   */
  _maternalOrganismName?: fhir.IFhirElement|undefined;
  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  paternalOrganismId?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismId
   */
  _paternalOrganismId?: fhir.IFhirElement|undefined;
  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  paternalOrganismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismName
   */
  _paternalOrganismName?: fhir.IFhirElement|undefined;
  /**
   * The hybrid type of an organism shall be specified.
   */
  hybridType?: fhir.ICodeableConcept|undefined;
}

/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export type ISubstanceSourceMaterialOrganismOrganismGeneral = fhir.IBackboneElement & { 
  /**
   * The kingdom of an organism shall be specified.
   */
  kingdom?: fhir.ICodeableConcept|undefined;
  /**
   * The phylum of an organism shall be specified.
   */
  phylum?: fhir.ICodeableConcept|undefined;
  /**
   * The class of an organism shall be specified.
   */
  class?: fhir.ICodeableConcept|undefined;
  /**
   * The order of an organism shall be specified,.
   */
  order?: fhir.ICodeableConcept|undefined;
}

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export type ISubstanceSourceMaterialOrganism = fhir.IBackboneElement & { 
  /**
   * The family of an organism shall be specified.
   */
  family?: fhir.ICodeableConcept|undefined;
  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  genus?: fhir.ICodeableConcept|undefined;
  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  species?: fhir.ICodeableConcept|undefined;
  /**
   * The Intraspecific type of an organism shall be specified.
   */
  intraspecificType?: fhir.ICodeableConcept|undefined;
  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  intraspecificDescription?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.intraspecificDescription
   */
  _intraspecificDescription?: fhir.IFhirElement|undefined;
  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  author?: fhir.ISubstanceSourceMaterialOrganismAuthor[]|undefined;
  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  hybrid?: fhir.ISubstanceSourceMaterialOrganismHybrid|undefined;
  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  organismGeneral?: fhir.ISubstanceSourceMaterialOrganismOrganismGeneral|undefined;
}

/**
 * To do.
 */
export type ISubstanceSourceMaterialPartDescription = fhir.IBackboneElement & { 
  /**
   * Entity of anatomical origin of source material within an organism.
   */
  part?: fhir.ICodeableConcept|undefined;
  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   */
  partLocation?: fhir.ICodeableConcept|undefined;
}

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export type ISubstanceSourceMaterial = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "SubstanceSourceMaterial";
  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  sourceMaterialClass?: fhir.ICodeableConcept|undefined;
  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  sourceMaterialType?: fhir.ICodeableConcept|undefined;
  /**
   * The state of the source material when extracted.
   */
  sourceMaterialState?: fhir.ICodeableConcept|undefined;
  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  organismId?: fhir.IIdentifier|undefined;
  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  organismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organismName
   */
  _organismName?: fhir.IFhirElement|undefined;
  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  parentSubstanceId?: fhir.IIdentifier[]|undefined;
  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  parentSubstanceName?: string[]|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.parentSubstanceName
   */
  _parentSubstanceName?: fhir.IFhirElement[]|undefined;
  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  countryOfOrigin?: fhir.ICodeableConcept[]|undefined;
  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  geographicalLocation?: string[]|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.geographicalLocation
   */
  _geographicalLocation?: fhir.IFhirElement[]|undefined;
  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  developmentStage?: fhir.ICodeableConcept|undefined;
  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  fractionDescription?: fhir.ISubstanceSourceMaterialFractionDescription[]|undefined;
  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  organism?: fhir.ISubstanceSourceMaterialOrganism|undefined;
  /**
   * To do.
   */
  partDescription?: fhir.ISubstanceSourceMaterialPartDescription[]|undefined;
}

/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
export class SubstanceSourceMaterialFractionDescription extends fhir.BackboneElement implements ISubstanceSourceMaterialFractionDescription {
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   */
  public fraction?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.fractionDescription.fraction
   */
  public _fraction?: fhir.FhirElement|undefined;
  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1.
   */
  public materialType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialFractionDescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialFractionDescription> = { }) {
    super(source);
    if (source['fraction']) { this.fraction = source.fraction; }
    if (source['_fraction']) { this._fraction = new fhir.FhirElement(source._fraction!); }
    if (source['materialType']) { this.materialType = new fhir.CodeableConcept(source.materialType!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_fraction"]) { results.push(...this._fraction.doModelValidation()); }
    if (this["materialType"]) { results.push(...this.materialType.doModelValidation()); }
    return results;
  }
}

/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export class SubstanceSourceMaterialOrganismAuthor extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismAuthor {
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  public authorType?: fhir.CodeableConcept|undefined;
  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  public authorDescription?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.author.authorDescription
   */
  public _authorDescription?: fhir.FhirElement|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismAuthor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialOrganismAuthor> = { }) {
    super(source);
    if (source['authorType']) { this.authorType = new fhir.CodeableConcept(source.authorType!); }
    if (source['authorDescription']) { this.authorDescription = source.authorDescription; }
    if (source['_authorDescription']) { this._authorDescription = new fhir.FhirElement(source._authorDescription!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["authorType"]) { results.push(...this.authorType.doModelValidation()); }
    if (this["_authorDescription"]) { results.push(...this._authorDescription.doModelValidation()); }
    return results;
  }
}

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export class SubstanceSourceMaterialOrganismHybrid extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismHybrid {
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  public maternalOrganismId?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismId
   */
  public _maternalOrganismId?: fhir.FhirElement|undefined;
  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  public maternalOrganismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.maternalOrganismName
   */
  public _maternalOrganismName?: fhir.FhirElement|undefined;
  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  public paternalOrganismId?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismId
   */
  public _paternalOrganismId?: fhir.FhirElement|undefined;
  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  public paternalOrganismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.hybrid.paternalOrganismName
   */
  public _paternalOrganismName?: fhir.FhirElement|undefined;
  /**
   * The hybrid type of an organism shall be specified.
   */
  public hybridType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismHybrid - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialOrganismHybrid> = { }) {
    super(source);
    if (source['maternalOrganismId']) { this.maternalOrganismId = source.maternalOrganismId; }
    if (source['_maternalOrganismId']) { this._maternalOrganismId = new fhir.FhirElement(source._maternalOrganismId!); }
    if (source['maternalOrganismName']) { this.maternalOrganismName = source.maternalOrganismName; }
    if (source['_maternalOrganismName']) { this._maternalOrganismName = new fhir.FhirElement(source._maternalOrganismName!); }
    if (source['paternalOrganismId']) { this.paternalOrganismId = source.paternalOrganismId; }
    if (source['_paternalOrganismId']) { this._paternalOrganismId = new fhir.FhirElement(source._paternalOrganismId!); }
    if (source['paternalOrganismName']) { this.paternalOrganismName = source.paternalOrganismName; }
    if (source['_paternalOrganismName']) { this._paternalOrganismName = new fhir.FhirElement(source._paternalOrganismName!); }
    if (source['hybridType']) { this.hybridType = new fhir.CodeableConcept(source.hybridType!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_maternalOrganismId"]) { results.push(...this._maternalOrganismId.doModelValidation()); }
    if (this["_maternalOrganismName"]) { results.push(...this._maternalOrganismName.doModelValidation()); }
    if (this["_paternalOrganismId"]) { results.push(...this._paternalOrganismId.doModelValidation()); }
    if (this["_paternalOrganismName"]) { results.push(...this._paternalOrganismName.doModelValidation()); }
    if (this["hybridType"]) { results.push(...this.hybridType.doModelValidation()); }
    return results;
  }
}

/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganismOrganismGeneral {
  /**
   * The kingdom of an organism shall be specified.
   */
  public kingdom?: fhir.CodeableConcept|undefined;
  /**
   * The phylum of an organism shall be specified.
   */
  public phylum?: fhir.CodeableConcept|undefined;
  /**
   * The class of an organism shall be specified.
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * The order of an organism shall be specified,.
   */
  public order?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganismOrganismGeneral - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialOrganismOrganismGeneral> = { }) {
    super(source);
    if (source['kingdom']) { this.kingdom = new fhir.CodeableConcept(source.kingdom!); }
    if (source['phylum']) { this.phylum = new fhir.CodeableConcept(source.phylum!); }
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class!); }
    if (source['order']) { this.order = new fhir.CodeableConcept(source.order!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["kingdom"]) { results.push(...this.kingdom.doModelValidation()); }
    if (this["phylum"]) { results.push(...this.phylum.doModelValidation()); }
    if (this["class"]) { results.push(...this.class.doModelValidation()); }
    if (this["order"]) { results.push(...this.order.doModelValidation()); }
    return results;
  }
}

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export class SubstanceSourceMaterialOrganism extends fhir.BackboneElement implements ISubstanceSourceMaterialOrganism {
  /**
   * The family of an organism shall be specified.
   */
  public family?: fhir.CodeableConcept|undefined;
  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  public genus?: fhir.CodeableConcept|undefined;
  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  public species?: fhir.CodeableConcept|undefined;
  /**
   * The Intraspecific type of an organism shall be specified.
   */
  public intraspecificType?: fhir.CodeableConcept|undefined;
  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  public intraspecificDescription?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organism.intraspecificDescription
   */
  public _intraspecificDescription?: fhir.FhirElement|undefined;
  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  public author?: fhir.SubstanceSourceMaterialOrganismAuthor[]|undefined;
  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  public hybrid?: fhir.SubstanceSourceMaterialOrganismHybrid|undefined;
  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  public organismGeneral?: fhir.SubstanceSourceMaterialOrganismOrganismGeneral|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialOrganism - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialOrganism> = { }) {
    super(source);
    if (source['family']) { this.family = new fhir.CodeableConcept(source.family!); }
    if (source['genus']) { this.genus = new fhir.CodeableConcept(source.genus!); }
    if (source['species']) { this.species = new fhir.CodeableConcept(source.species!); }
    if (source['intraspecificType']) { this.intraspecificType = new fhir.CodeableConcept(source.intraspecificType!); }
    if (source['intraspecificDescription']) { this.intraspecificDescription = source.intraspecificDescription; }
    if (source['_intraspecificDescription']) { this._intraspecificDescription = new fhir.FhirElement(source._intraspecificDescription!); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.SubstanceSourceMaterialOrganismAuthor(x)); }
    if (source['hybrid']) { this.hybrid = new fhir.SubstanceSourceMaterialOrganismHybrid(source.hybrid!); }
    if (source['organismGeneral']) { this.organismGeneral = new fhir.SubstanceSourceMaterialOrganismOrganismGeneral(source.organismGeneral!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["family"]) { results.push(...this.family.doModelValidation()); }
    if (this["genus"]) { results.push(...this.genus.doModelValidation()); }
    if (this["species"]) { results.push(...this.species.doModelValidation()); }
    if (this["intraspecificType"]) { results.push(...this.intraspecificType.doModelValidation()); }
    if (this["_intraspecificDescription"]) { results.push(...this._intraspecificDescription.doModelValidation()); }
    if (this["author"]) { this.author.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["hybrid"]) { results.push(...this.hybrid.doModelValidation()); }
    if (this["organismGeneral"]) { results.push(...this.organismGeneral.doModelValidation()); }
    return results;
  }
}

/**
 * To do.
 */
export class SubstanceSourceMaterialPartDescription extends fhir.BackboneElement implements ISubstanceSourceMaterialPartDescription {
  /**
   * Entity of anatomical origin of source material within an organism.
   */
  public part?: fhir.CodeableConcept|undefined;
  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply.
   */
  public partLocation?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceSourceMaterialPartDescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterialPartDescription> = { }) {
    super(source);
    if (source['part']) { this.part = new fhir.CodeableConcept(source.part!); }
    if (source['partLocation']) { this.partLocation = new fhir.CodeableConcept(source.partLocation!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["part"]) { results.push(...this.part.doModelValidation()); }
    if (this["partLocation"]) { results.push(...this.partLocation.doModelValidation()); }
    return results;
  }
}

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export class SubstanceSourceMaterial extends fhir.DomainResource implements ISubstanceSourceMaterial {
  /**
   * Resource Type Name
   */
  public resourceType: "SubstanceSourceMaterial";
  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  public sourceMaterialClass?: fhir.CodeableConcept|undefined;
  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  public sourceMaterialType?: fhir.CodeableConcept|undefined;
  /**
   * The state of the source material when extracted.
   */
  public sourceMaterialState?: fhir.CodeableConcept|undefined;
  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  public organismId?: fhir.Identifier|undefined;
  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  public organismName?: string|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.organismName
   */
  public _organismName?: fhir.FhirElement|undefined;
  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  public parentSubstanceId?: fhir.Identifier[]|undefined;
  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  public parentSubstanceName?: string[]|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.parentSubstanceName
   */
  public _parentSubstanceName?: fhir.FhirElement[]|undefined;
  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  public countryOfOrigin?: fhir.CodeableConcept[]|undefined;
  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  public geographicalLocation?: string[]|undefined;
  /**
   * Extended properties for primitive element: SubstanceSourceMaterial.geographicalLocation
   */
  public _geographicalLocation?: fhir.FhirElement[]|undefined;
  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  public developmentStage?: fhir.CodeableConcept|undefined;
  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  public fractionDescription?: fhir.SubstanceSourceMaterialFractionDescription[]|undefined;
  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  public organism?: fhir.SubstanceSourceMaterialOrganism|undefined;
  /**
   * To do.
   */
  public partDescription?: fhir.SubstanceSourceMaterialPartDescription[]|undefined;
  /**
   * Default constructor for SubstanceSourceMaterial - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISubstanceSourceMaterial> = { }) {
    super(source);
    this.resourceType = 'SubstanceSourceMaterial';
    if (source['sourceMaterialClass']) { this.sourceMaterialClass = new fhir.CodeableConcept(source.sourceMaterialClass!); }
    if (source['sourceMaterialType']) { this.sourceMaterialType = new fhir.CodeableConcept(source.sourceMaterialType!); }
    if (source['sourceMaterialState']) { this.sourceMaterialState = new fhir.CodeableConcept(source.sourceMaterialState!); }
    if (source['organismId']) { this.organismId = new fhir.Identifier(source.organismId!); }
    if (source['organismName']) { this.organismName = source.organismName; }
    if (source['_organismName']) { this._organismName = new fhir.FhirElement(source._organismName!); }
    if (source['parentSubstanceId']) { this.parentSubstanceId = source.parentSubstanceId.map((x) => new fhir.Identifier(x)); }
    if (source['parentSubstanceName']) { this.parentSubstanceName = source.parentSubstanceName.map((x) => (x)); }
    if (source['_parentSubstanceName']) { this._parentSubstanceName = source._parentSubstanceName.map((x) => new fhir.FhirElement(x)); }
    if (source['countryOfOrigin']) { this.countryOfOrigin = source.countryOfOrigin.map((x) => new fhir.CodeableConcept(x)); }
    if (source['geographicalLocation']) { this.geographicalLocation = source.geographicalLocation.map((x) => (x)); }
    if (source['_geographicalLocation']) { this._geographicalLocation = source._geographicalLocation.map((x) => new fhir.FhirElement(x)); }
    if (source['developmentStage']) { this.developmentStage = new fhir.CodeableConcept(source.developmentStage!); }
    if (source['fractionDescription']) { this.fractionDescription = source.fractionDescription.map((x) => new fhir.SubstanceSourceMaterialFractionDescription(x)); }
    if (source['organism']) { this.organism = new fhir.SubstanceSourceMaterialOrganism(source.organism!); }
    if (source['partDescription']) { this.partDescription = source.partDescription.map((x) => new fhir.SubstanceSourceMaterialPartDescription(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: SubstanceSourceMaterial.resourceType']); }
    if (this["sourceMaterialClass"]) { results.push(...this.sourceMaterialClass.doModelValidation()); }
    if (this["sourceMaterialType"]) { results.push(...this.sourceMaterialType.doModelValidation()); }
    if (this["sourceMaterialState"]) { results.push(...this.sourceMaterialState.doModelValidation()); }
    if (this["organismId"]) { results.push(...this.organismId.doModelValidation()); }
    if (this["_organismName"]) { results.push(...this._organismName.doModelValidation()); }
    if (this["parentSubstanceId"]) { this.parentSubstanceId.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_parentSubstanceName"]) { this._parentSubstanceName.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["countryOfOrigin"]) { this.countryOfOrigin.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_geographicalLocation"]) { this._geographicalLocation.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["developmentStage"]) { results.push(...this.developmentStage.doModelValidation()); }
    if (this["fractionDescription"]) { this.fractionDescription.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["organism"]) { results.push(...this.organism.doModelValidation()); }
    if (this["partDescription"]) { this.partDescription.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
