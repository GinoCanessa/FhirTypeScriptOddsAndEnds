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
exports.SubstanceReferenceInformation = exports.SubstanceReferenceInformationTarget = exports.SubstanceReferenceInformationClassification = exports.SubstanceReferenceInformationGeneElement = exports.SubstanceReferenceInformationGene = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Todo.
 */
class SubstanceReferenceInformationGene extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationGene from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["gene"] !== undefined) {
            this.gene = new fhirModels.CodeableConcept(source.gene);
        }
        if (source["geneSequenceOrigin"] !== undefined) {
            this.geneSequenceOrigin = new fhirModels.CodeableConcept(source.geneSequenceOrigin);
        }
        if (source["source"] !== undefined) {
            this.source = source.source.map((x) => new fhirModels.Reference(x));
        }
    }
}
exports.SubstanceReferenceInformationGene = SubstanceReferenceInformationGene;
/**
 * Todo.
 */
class SubstanceReferenceInformationGeneElement extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationGeneElement from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["element"] !== undefined) {
            this.element = new fhirModels.Identifier(source.element);
        }
        if (source["source"] !== undefined) {
            this.source = source.source.map((x) => new fhirModels.Reference(x));
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
    }
}
exports.SubstanceReferenceInformationGeneElement = SubstanceReferenceInformationGeneElement;
/**
 * Todo.
 */
class SubstanceReferenceInformationClassification extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationClassification from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["classification"] !== undefined) {
            this.classification = new fhirModels.CodeableConcept(source.classification);
        }
        if (source["domain"] !== undefined) {
            this.domain = new fhirModels.CodeableConcept(source.domain);
        }
        if (source["source"] !== undefined) {
            this.source = source.source.map((x) => new fhirModels.Reference(x));
        }
        if (source["subtype"] !== undefined) {
            this.subtype = source.subtype.map((x) => new fhirModels.CodeableConcept(x));
        }
    }
}
exports.SubstanceReferenceInformationClassification = SubstanceReferenceInformationClassification;
/**
 * Todo.
 */
class SubstanceReferenceInformationTarget extends fhirModels.BackboneElement {
    /**
     * Default constructor for SubstanceReferenceInformationTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["amountQuantity"] !== undefined) {
            this.amountQuantity = new fhirModels.Quantity(source.amountQuantity);
        }
        if (source["amountRange"] !== undefined) {
            this.amountRange = new fhirModels.Range(source.amountRange);
        }
        if (source["amountString"] !== undefined) {
            this.amountString = source.amountString;
        }
        if (source["_amountString"] !== undefined) {
            this._amountString = new fhirModels.Element(source._amountString);
        }
        if (source["amountType"] !== undefined) {
            this.amountType = new fhirModels.CodeableConcept(source.amountType);
        }
        if (source["interaction"] !== undefined) {
            this.interaction = new fhirModels.CodeableConcept(source.interaction);
        }
        if (source["organism"] !== undefined) {
            this.organism = new fhirModels.CodeableConcept(source.organism);
        }
        if (source["organismType"] !== undefined) {
            this.organismType = new fhirModels.CodeableConcept(source.organismType);
        }
        if (source["source"] !== undefined) {
            this.source = source.source.map((x) => new fhirModels.Reference(x));
        }
        if (source["target"] !== undefined) {
            this.target = new fhirModels.Identifier(source.target);
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
    }
}
exports.SubstanceReferenceInformationTarget = SubstanceReferenceInformationTarget;
/**
 * Todo.
 */
class SubstanceReferenceInformation extends fhirModels.DomainResource {
    /**
     * Default constructor for SubstanceReferenceInformation from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "SubstanceReferenceInformation";
        if ((source['resourceType'] !== "SubstanceReferenceInformation") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a SubstanceReferenceInformation';
        }
        if (source["classification"] !== undefined) {
            this.classification = source.classification.map((x) => new fhirModels.SubstanceReferenceInformationClassification(x));
        }
        if (source["comment"] !== undefined) {
            this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            this._comment = new fhirModels.Element(source._comment);
        }
        if (source["gene"] !== undefined) {
            this.gene = source.gene.map((x) => new fhirModels.SubstanceReferenceInformationGene(x));
        }
        if (source["geneElement"] !== undefined) {
            this.geneElement = source.geneElement.map((x) => new fhirModels.SubstanceReferenceInformationGeneElement(x));
        }
        if (source["target"] !== undefined) {
            this.target = source.target.map((x) => new fhirModels.SubstanceReferenceInformationTarget(x));
        }
    }
}
exports.SubstanceReferenceInformation = SubstanceReferenceInformation;
//# sourceMappingURL=SubstanceReferenceInformation.js.map