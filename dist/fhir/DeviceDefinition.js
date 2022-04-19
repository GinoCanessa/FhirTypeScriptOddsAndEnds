// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export class DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.deviceIdentifier = null;
        if (source["deviceIdentifier"]) {
            this.deviceIdentifier = source.deviceIdentifier;
        }
        if (this.deviceIdentifier === undefined) {
            this.deviceIdentifier = null;
        }
        if (source["_deviceIdentifier"]) {
            this._deviceIdentifier = new fhir.FhirElement(source._deviceIdentifier);
        }
        this.issuer = null;
        if (source["issuer"]) {
            this.issuer = source.issuer;
        }
        if (this.issuer === undefined) {
            this.issuer = null;
        }
        if (source["_issuer"]) {
            this._issuer = new fhir.FhirElement(source._issuer);
        }
        this.jurisdiction = null;
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction;
        }
        if (this.jurisdiction === undefined) {
            this.jurisdiction = null;
        }
        if (source["_jurisdiction"]) {
            this._jurisdiction = new fhir.FhirElement(source._jurisdiction);
        }
    }
    /**
     * Check if the current DeviceDefinitionUdiDeviceIdentifier contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["deviceIdentifier"] === undefined) {
            missingElements.push("deviceIdentifier");
        }
        if (this["issuer"] === undefined) {
            missingElements.push("issuer");
        }
        if (this["jurisdiction"] === undefined) {
            missingElements.push("jurisdiction");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionUdiDeviceIdentifier from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionUdiDeviceIdentifier(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionUdiDeviceIdentifier is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A name given to the device to identify it.
 */
export class DeviceDefinitionDeviceName extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.name = null;
        if (source["name"]) {
            this.name = source.name;
        }
        if (this.name === undefined) {
            this.name = null;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current DeviceDefinitionDeviceName contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionDeviceName from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionDeviceName(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionDeviceName is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export class DeviceDefinitionSpecialization extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.systemType = null;
        if (source["systemType"]) {
            this.systemType = source.systemType;
        }
        if (this.systemType === undefined) {
            this.systemType = null;
        }
        if (source["_systemType"]) {
            this._systemType = new fhir.FhirElement(source._systemType);
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current DeviceDefinitionSpecialization contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["systemType"] === undefined) {
            missingElements.push("systemType");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionSpecialization from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionSpecialization(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionSpecialization is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Device capabilities.
 */
export class DeviceDefinitionCapability extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["description"]) {
            this.description = source.description.map((x) => new fhir.CodeableConcept(x));
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
     * Check if the current DeviceDefinitionCapability contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionCapability from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionCapability(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionCapability is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export class DeviceDefinitionProperty extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["valueCode"]) {
            this.valueCode = source.valueCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = source.valueQuantity.map((x) => new fhir.Quantity(x));
        }
    }
    /**
     * Check if the current DeviceDefinitionProperty contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionProperty from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionProperty(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionProperty is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export class DeviceDefinitionMaterial extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["allergenicIndicator"]) {
            this.allergenicIndicator = source.allergenicIndicator;
        }
        if (source["_allergenicIndicator"]) {
            this._allergenicIndicator = new fhir.FhirElement(source._allergenicIndicator);
        }
        if (source["alternate"]) {
            this.alternate = source.alternate;
        }
        if (source["_alternate"]) {
            this._alternate = new fhir.FhirElement(source._alternate);
        }
        this.substance = null;
        if (source["substance"]) {
            this.substance = new fhir.CodeableConcept(source.substance);
        }
        if (this.substance === undefined) {
            this.substance = null;
        }
    }
    /**
     * Check if the current DeviceDefinitionMaterial contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["substance"] === undefined) {
            missingElements.push("substance");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinitionMaterial from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinitionMaterial(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinitionMaterial is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export class DeviceDefinition extends fhir.DomainResource {
    /**
     * Default constructor for DeviceDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'DeviceDefinition';
        if (source["capability"]) {
            this.capability = source.capability.map((x) => new fhir.DeviceDefinitionCapability(x));
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactPoint(x));
        }
        if (source["deviceName"]) {
            this.deviceName = source.deviceName.map((x) => new fhir.DeviceDefinitionDeviceName(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["languageCode"]) {
            this.languageCode = source.languageCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["manufacturerString"]) {
            this.manufacturerString = source.manufacturerString;
        }
        if (source["_manufacturerString"]) {
            this._manufacturerString = new fhir.FhirElement(source._manufacturerString);
        }
        if (source["manufacturerReference"]) {
            this.manufacturerReference = new fhir.Reference(source.manufacturerReference);
        }
        if (source["material"]) {
            this.material = source.material.map((x) => new fhir.DeviceDefinitionMaterial(x));
        }
        if (source["modelNumber"]) {
            this.modelNumber = source.modelNumber;
        }
        if (source["_modelNumber"]) {
            this._modelNumber = new fhir.FhirElement(source._modelNumber);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["onlineInformation"]) {
            this.onlineInformation = source.onlineInformation;
        }
        if (source["_onlineInformation"]) {
            this._onlineInformation = new fhir.FhirElement(source._onlineInformation);
        }
        if (source["owner"]) {
            this.owner = new fhir.Reference(source.owner);
        }
        if (source["parentDevice"]) {
            this.parentDevice = new fhir.Reference(source.parentDevice);
        }
        if (source["physicalCharacteristics"]) {
            this.physicalCharacteristics = new fhir.ProdCharacteristic(source.physicalCharacteristics);
        }
        if (source["property"]) {
            this.property = source.property.map((x) => new fhir.DeviceDefinitionProperty(x));
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source["safety"]) {
            this.safety = source.safety.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["shelfLifeStorage"]) {
            this.shelfLifeStorage = source.shelfLifeStorage.map((x) => new fhir.ProductShelfLife(x));
        }
        if (source["specialization"]) {
            this.specialization = source.specialization.map((x) => new fhir.DeviceDefinitionSpecialization(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source["udiDeviceIdentifier"]) {
            this.udiDeviceIdentifier = source.udiDeviceIdentifier.map((x) => new fhir.DeviceDefinitionUdiDeviceIdentifier(x));
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["version"]) {
            this.version = source.version.map((x) => (x));
        }
        if (source["_version"]) {
            this._version = source._version.map((x) => new fhir.FhirElement(x));
        }
    }
    /**
     * Check if the current DeviceDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new DeviceDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the DeviceDefinition.deviceName.type field
 */
export var DeviceDefinitionDeviceNameTypeEnum;
(function (DeviceDefinitionDeviceNameTypeEnum) {
    DeviceDefinitionDeviceNameTypeEnum["UDI_LABEL_NAME"] = "udi-label-name";
    DeviceDefinitionDeviceNameTypeEnum["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceDefinitionDeviceNameTypeEnum["PATIENT_REPORTED_NAME"] = "patient-reported-name";
    DeviceDefinitionDeviceNameTypeEnum["MANUFACTURER_NAME"] = "manufacturer-name";
    DeviceDefinitionDeviceNameTypeEnum["MODEL_NAME"] = "model-name";
    DeviceDefinitionDeviceNameTypeEnum["OTHER"] = "other";
})(DeviceDefinitionDeviceNameTypeEnum || (DeviceDefinitionDeviceNameTypeEnum = {}));
//# sourceMappingURL=DeviceDefinition.js.map