// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Batch numbering.
 */
export class MedicinalProductPackagedBatchIdentifier extends fhir.BackboneElement {
    /**
     * Default constructor for MedicinalProductPackagedBatchIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["immediatePackaging"]) {
            this.immediatePackaging = new fhir.Identifier(source.immediatePackaging);
        }
        this.outerPackaging = null;
        if (source["outerPackaging"]) {
            this.outerPackaging = new fhir.Identifier(source.outerPackaging);
        }
        if (this.outerPackaging === undefined) {
            this.outerPackaging = null;
        }
    }
    /**
     * Check if the current MedicinalProductPackagedBatchIdentifier contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["outerPackaging"] === undefined) {
            missingElements.push("outerPackaging");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductPackagedBatchIdentifier from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MedicinalProductPackagedBatchIdentifier(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPackagedBatchIdentifier is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export class MedicinalProductPackagedPackageItem extends fhir.BackboneElement {
    /**
     * Default constructor for MedicinalProductPackagedPackageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["alternateMaterial"]) {
            this.alternateMaterial = source.alternateMaterial.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["device"]) {
            this.device = source.device.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["manufacturedItem"]) {
            this.manufacturedItem = source.manufacturedItem.map((x) => new fhir.Reference(x));
        }
        if (source["manufacturer"]) {
            this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x));
        }
        if (source["material"]) {
            this.material = source.material.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["otherCharacteristics"]) {
            this.otherCharacteristics = source.otherCharacteristics.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["packageItem"]) {
            this.packageItem = source.packageItem.map((x) => new fhir.MedicinalProductPackagedPackageItem(x));
        }
        if (source["physicalCharacteristics"]) {
            this.physicalCharacteristics = new fhir.ProdCharacteristic(source.physicalCharacteristics);
        }
        this.quantity = null;
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (this.quantity === undefined) {
            this.quantity = null;
        }
        if (source["shelfLifeStorage"]) {
            this.shelfLifeStorage = source.shelfLifeStorage.map((x) => new fhir.ProductShelfLife(x));
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
    }
    /**
     * Check if the current MedicinalProductPackagedPackageItem contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["quantity"] === undefined) {
            missingElements.push("quantity");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductPackagedPackageItem from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MedicinalProductPackagedPackageItem(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPackagedPackageItem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A medicinal product in a container or package.
 */
export class MedicinalProductPackaged extends fhir.DomainResource {
    /**
     * Default constructor for MedicinalProductPackaged - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MedicinalProductPackaged';
        if (source["batchIdentifier"]) {
            this.batchIdentifier = source.batchIdentifier.map((x) => new fhir.MedicinalProductPackagedBatchIdentifier(x));
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["legalStatusOfSupply"]) {
            this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply);
        }
        if (source["manufacturer"]) {
            this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x));
        }
        if (source["marketingAuthorization"]) {
            this.marketingAuthorization = new fhir.Reference(source.marketingAuthorization);
        }
        if (source["marketingStatus"]) {
            this.marketingStatus = source.marketingStatus.map((x) => new fhir.MarketingStatus(x));
        }
        this.packageItem = null;
        if (source["packageItem"]) {
            this.packageItem = source.packageItem.map((x) => new fhir.MedicinalProductPackagedPackageItem(x));
        }
        if (this.packageItem === undefined) {
            this.packageItem = null;
        }
        if (source["subject"]) {
            this.subject = source.subject.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Check if the current MedicinalProductPackaged contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if ((!this["packageItem"]) || (this["packageItem"].length === 0)) {
            missingElements.push("packageItem");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicinalProductPackaged from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MedicinalProductPackaged(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicinalProductPackaged is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=MedicinalProductPackaged.js.map