"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstanceSourceMaterial = exports.SubstanceSourceMaterialPartDescription = exports.SubstanceSourceMaterialOrganism = exports.SubstanceSourceMaterialOrganismOrganismGeneral = exports.SubstanceSourceMaterialOrganismHybrid = exports.SubstanceSourceMaterialOrganismAuthor = exports.SubstanceSourceMaterialFractionDescription = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
 */
class SubstanceSourceMaterialFractionDescription extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialFractionDescription from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["fraction"] !== undefined) {
            this.fraction = source.fraction;
        }
        if (source["_fraction"] !== undefined) {
            this._fraction = new fhirModels.Element(source._fraction);
        }
        if (source["materialType"] !== undefined) {
            this.materialType = new fhirModels.CodeableConcept(source.materialType);
        }
    }
}
exports.SubstanceSourceMaterialFractionDescription = SubstanceSourceMaterialFractionDescription;
/**
 * 4.9.13.6.1 Author type (Conditional).
 */
class SubstanceSourceMaterialOrganismAuthor extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialOrganismAuthor from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["authorDescription"] !== undefined) {
            this.authorDescription = source.authorDescription;
        }
        if (source["_authorDescription"] !== undefined) {
            this._authorDescription = new fhirModels.Element(source._authorDescription);
        }
        if (source["authorType"] !== undefined) {
            this.authorType = new fhirModels.CodeableConcept(source.authorType);
        }
    }
}
exports.SubstanceSourceMaterialOrganismAuthor = SubstanceSourceMaterialOrganismAuthor;
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
class SubstanceSourceMaterialOrganismHybrid extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialOrganismHybrid from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["hybridType"] !== undefined) {
            this.hybridType = new fhirModels.CodeableConcept(source.hybridType);
        }
        if (source["maternalOrganismId"] !== undefined) {
            this.maternalOrganismId = source.maternalOrganismId;
        }
        if (source["_maternalOrganismId"] !== undefined) {
            this._maternalOrganismId = new fhirModels.Element(source._maternalOrganismId);
        }
        if (source["maternalOrganismName"] !== undefined) {
            this.maternalOrganismName = source.maternalOrganismName;
        }
        if (source["_maternalOrganismName"] !== undefined) {
            this._maternalOrganismName = new fhirModels.Element(source._maternalOrganismName);
        }
        if (source["paternalOrganismId"] !== undefined) {
            this.paternalOrganismId = source.paternalOrganismId;
        }
        if (source["_paternalOrganismId"] !== undefined) {
            this._paternalOrganismId = new fhirModels.Element(source._paternalOrganismId);
        }
        if (source["paternalOrganismName"] !== undefined) {
            this.paternalOrganismName = source.paternalOrganismName;
        }
        if (source["_paternalOrganismName"] !== undefined) {
            this._paternalOrganismName = new fhirModels.Element(source._paternalOrganismName);
        }
    }
}
exports.SubstanceSourceMaterialOrganismHybrid = SubstanceSourceMaterialOrganismHybrid;
/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
class SubstanceSourceMaterialOrganismOrganismGeneral extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialOrganismOrganismGeneral from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["class"] !== undefined) {
            this.class = new fhirModels.CodeableConcept(source.class);
        }
        if (source["kingdom"] !== undefined) {
            this.kingdom = new fhirModels.CodeableConcept(source.kingdom);
        }
        if (source["order"] !== undefined) {
            this.order = new fhirModels.CodeableConcept(source.order);
        }
        if (source["phylum"] !== undefined) {
            this.phylum = new fhirModels.CodeableConcept(source.phylum);
        }
    }
}
exports.SubstanceSourceMaterialOrganismOrganismGeneral = SubstanceSourceMaterialOrganismOrganismGeneral;
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
class SubstanceSourceMaterialOrganism extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialOrganism from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["author"] !== undefined) {
            this.author = source.author.map((x) => new fhirModels.SubstanceSourceMaterialOrganismAuthor(x));
        }
        if (source["family"] !== undefined) {
            this.family = new fhirModels.CodeableConcept(source.family);
        }
        if (source["genus"] !== undefined) {
            this.genus = new fhirModels.CodeableConcept(source.genus);
        }
        if (source["hybrid"] !== undefined) {
            this.hybrid = new fhirModels.SubstanceSourceMaterialOrganismHybrid(source.hybrid);
        }
        if (source["intraspecificDescription"] !== undefined) {
            this.intraspecificDescription = source.intraspecificDescription;
        }
        if (source["_intraspecificDescription"] !== undefined) {
            this._intraspecificDescription = new fhirModels.Element(source._intraspecificDescription);
        }
        if (source["intraspecificType"] !== undefined) {
            this.intraspecificType = new fhirModels.CodeableConcept(source.intraspecificType);
        }
        if (source["organismGeneral"] !== undefined) {
            this.organismGeneral = new fhirModels.SubstanceSourceMaterialOrganismOrganismGeneral(source.organismGeneral);
        }
        if (source["species"] !== undefined) {
            this.species = new fhirModels.CodeableConcept(source.species);
        }
    }
}
exports.SubstanceSourceMaterialOrganism = SubstanceSourceMaterialOrganism;
/**
 * To do.
 */
class SubstanceSourceMaterialPartDescription extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceSourceMaterialPartDescription from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["part"] !== undefined) {
            this.part = new fhirModels.CodeableConcept(source.part);
        }
        if (source["partLocation"] !== undefined) {
            this.partLocation = new fhirModels.CodeableConcept(source.partLocation);
        }
    }
}
exports.SubstanceSourceMaterialPartDescription = SubstanceSourceMaterialPartDescription;
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
class SubstanceSourceMaterial extends fhirModels.DomainResource {
    /**
     * Default constructor for SubstanceSourceMaterial from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "SubstanceSourceMaterial";
        if ((source['resourceType'] !== "SubstanceSourceMaterial") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a SubstanceSourceMaterial';
        }
        if (source["countryOfOrigin"] !== undefined) {
            this.countryOfOrigin = source.countryOfOrigin.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["developmentStage"] !== undefined) {
            this.developmentStage = new fhirModels.CodeableConcept(source.developmentStage);
        }
        if (source["fractionDescription"] !== undefined) {
            this.fractionDescription = source.fractionDescription.map((x) => new fhirModels.SubstanceSourceMaterialFractionDescription(x));
        }
        if (source["geographicalLocation"] !== undefined) {
            this.geographicalLocation = source.geographicalLocation.map((x) => (x));
        }
        if (source["_geographicalLocation"] !== undefined) {
            this._geographicalLocation = source._geographicalLocation.map((x) => new fhirModels.Element(x));
        }
        if (source["organism"] !== undefined) {
            this.organism = new fhirModels.SubstanceSourceMaterialOrganism(source.organism);
        }
        if (source["organismId"] !== undefined) {
            this.organismId = new fhirModels.Identifier(source.organismId);
        }
        if (source["organismName"] !== undefined) {
            this.organismName = source.organismName;
        }
        if (source["_organismName"] !== undefined) {
            this._organismName = new fhirModels.Element(source._organismName);
        }
        if (source["parentSubstanceId"] !== undefined) {
            this.parentSubstanceId = source.parentSubstanceId.map((x) => new fhirModels.Identifier(x));
        }
        if (source["parentSubstanceName"] !== undefined) {
            this.parentSubstanceName = source.parentSubstanceName.map((x) => (x));
        }
        if (source["_parentSubstanceName"] !== undefined) {
            this._parentSubstanceName = source._parentSubstanceName.map((x) => new fhirModels.Element(x));
        }
        if (source["partDescription"] !== undefined) {
            this.partDescription = source.partDescription.map((x) => new fhirModels.SubstanceSourceMaterialPartDescription(x));
        }
        if (source["sourceMaterialClass"] !== undefined) {
            this.sourceMaterialClass = new fhirModels.CodeableConcept(source.sourceMaterialClass);
        }
        if (source["sourceMaterialState"] !== undefined) {
            this.sourceMaterialState = new fhirModels.CodeableConcept(source.sourceMaterialState);
        }
        if (source["sourceMaterialType"] !== undefined) {
            this.sourceMaterialType = new fhirModels.CodeableConcept(source.sourceMaterialType);
        }
    }
}
exports.SubstanceSourceMaterial = SubstanceSourceMaterial;
//# sourceMappingURL=SubstanceSourceMaterial.js.map