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
exports.MedicinalProductPackaged = exports.MedicinalProductPackagedPackageItem = exports.MedicinalProductPackagedBatchIdentifier = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Batch numbering.
 */
class MedicinalProductPackagedBatchIdentifier extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPackagedBatchIdentifier from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["immediatePackaging"] !== undefined) {
            this.immediatePackaging = new fhirModels.Identifier(source.immediatePackaging);
        }
        {
            this.outerPackaging = new fhirModels.Identifier(source.outerPackaging);
        }
    }
}
exports.MedicinalProductPackagedBatchIdentifier = MedicinalProductPackagedBatchIdentifier;
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
class MedicinalProductPackagedPackageItem extends fhirModels.BackboneElement {
    /**
     * Default constructor for MedicinalProductPackagedPackageItem from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["alternateMaterial"] !== undefined) {
            this.alternateMaterial = source.alternateMaterial.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["device"] !== undefined) {
            this.device = source.device.map((x) => new fhirModels.Reference(x));
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["manufacturedItem"] !== undefined) {
            this.manufacturedItem = source.manufacturedItem.map((x) => new fhirModels.Reference(x));
        }
        if (source["manufacturer"] !== undefined) {
            this.manufacturer = source.manufacturer.map((x) => new fhirModels.Reference(x));
        }
        if (source["material"] !== undefined) {
            this.material = source.material.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["otherCharacteristics"] !== undefined) {
            this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["packageItem"] !== undefined) {
            this.packageItem = source.packageItem.map((x) => new fhirModels.MedicinalProductPackagedPackageItem(x));
        }
        if (source["physicalCharacteristics"] !== undefined) {
            this.physicalCharacteristics = new fhirModels.ProdCharacteristic(source.physicalCharacteristics);
        }
        {
            this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["shelfLifeStorage"] !== undefined) {
            this.shelfLifeStorage = source.shelfLifeStorage.map((x) => new fhirModels.ProductShelfLife(x));
        }
        {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
    }
}
exports.MedicinalProductPackagedPackageItem = MedicinalProductPackagedPackageItem;
/**
 * A medicinal product in a container or package.
 */
class MedicinalProductPackaged extends fhirModels.DomainResource {
    /**
     * Default constructor for MedicinalProductPackaged from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "MedicinalProductPackaged";
        if ((source['resourceType'] !== "MedicinalProductPackaged") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicinalProductPackaged';
        }
        if (source["batchIdentifier"] !== undefined) {
            this.batchIdentifier = source.batchIdentifier.map((x) => new fhirModels.MedicinalProductPackagedBatchIdentifier(x));
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["legalStatusOfSupply"] !== undefined) {
            this.legalStatusOfSupply = new fhirModels.CodeableConcept(source.legalStatusOfSupply);
        }
        if (source["manufacturer"] !== undefined) {
            this.manufacturer = source.manufacturer.map((x) => new fhirModels.Reference(x));
        }
        if (source["marketingAuthorization"] !== undefined) {
            this.marketingAuthorization = new fhirModels.Reference(source.marketingAuthorization);
        }
        if (source["marketingStatus"] !== undefined) {
            this.marketingStatus = source.marketingStatus.map((x) => new fhirModels.MarketingStatus(x));
        }
        {
            this.packageItem = source.packageItem.map((x) => new fhirModels.MedicinalProductPackagedPackageItem(x));
        }
        if (source["subject"] !== undefined) {
            this.subject = source.subject.map((x) => new fhirModels.Reference(x));
        }
    }
}
exports.MedicinalProductPackaged = MedicinalProductPackaged;
//# sourceMappingURL=MedicinalProductPackaged.js.map