// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export class DeviceUdiCarrier extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["carrierAIDC"]) {
            this.carrierAIDC = source.carrierAIDC;
        }
        if (source["_carrierAIDC"]) {
            this._carrierAIDC = new fhir.FhirElement(source._carrierAIDC);
        }
        if (source["carrierHRF"]) {
            this.carrierHRF = source.carrierHRF;
        }
        if (source["_carrierHRF"]) {
            this._carrierHRF = new fhir.FhirElement(source._carrierHRF);
        }
        if (source["deviceIdentifier"]) {
            this.deviceIdentifier = source.deviceIdentifier;
        }
        if (source["_deviceIdentifier"]) {
            this._deviceIdentifier = new fhir.FhirElement(source._deviceIdentifier);
        }
        if (source["entryType"]) {
            this.entryType = source.entryType;
        }
        if (source["_entryType"]) {
            this._entryType = new fhir.FhirElement(source._entryType);
        }
        if (source["issuer"]) {
            this.issuer = source.issuer;
        }
        if (source["_issuer"]) {
            this._issuer = new fhir.FhirElement(source._issuer);
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction;
        }
        if (source["_jurisdiction"]) {
            this._jurisdiction = new fhir.FhirElement(source._jurisdiction);
        }
    }
    /**
     * Check if the current DeviceUdiCarrier contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceUdiCarrier from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceUdiCarrier(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceUdiCarrier is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export class DeviceDeviceName extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
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
     * Check if the current DeviceDeviceName contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceDeviceName from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceDeviceName(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceDeviceName is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export class DeviceSpecialization extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.systemType = null;
        if (source["systemType"]) {
            this.systemType = new fhir.CodeableConcept(source.systemType);
        }
        if (this.systemType === undefined) {
            this.systemType = null;
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current DeviceSpecialization contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["systemType"] === undefined) {
            missingElements.push("systemType");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceSpecialization from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceSpecialization(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceSpecialization is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The actual design of the device or software version running on the device.
 */
export class DeviceVersion extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["component"]) {
            this.component = new fhir.Identifier(source.component);
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        this.value = null;
        if (source["value"]) {
            this.value = source.value;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        if (source["_value"]) {
            this._value = new fhir.FhirElement(source._value);
        }
    }
    /**
     * Check if the current DeviceVersion contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceVersion from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceVersion(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceVersion is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export class DeviceProperty extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceProperty - initializes any required elements to null if a value is not provided.
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
     * Check if the current DeviceProperty contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DeviceProperty from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceProperty(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceProperty is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export class Device extends fhir.DomainResource {
    /**
     * Default constructor for Device - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Device';
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactPoint(x));
        }
        if (source["definition"]) {
            this.definition = new fhir.Reference(source.definition);
        }
        if (source["deviceName"]) {
            this.deviceName = source.deviceName.map((x) => new fhir.DeviceDeviceName(x));
        }
        if (source["distinctIdentifier"]) {
            this.distinctIdentifier = source.distinctIdentifier;
        }
        if (source["_distinctIdentifier"]) {
            this._distinctIdentifier = new fhir.FhirElement(source._distinctIdentifier);
        }
        if (source["expirationDate"]) {
            this.expirationDate = source.expirationDate;
        }
        if (source["_expirationDate"]) {
            this._expirationDate = new fhir.FhirElement(source._expirationDate);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
        }
        if (source["lotNumber"]) {
            this.lotNumber = source.lotNumber;
        }
        if (source["_lotNumber"]) {
            this._lotNumber = new fhir.FhirElement(source._lotNumber);
        }
        if (source["manufactureDate"]) {
            this.manufactureDate = source.manufactureDate;
        }
        if (source["_manufactureDate"]) {
            this._manufactureDate = new fhir.FhirElement(source._manufactureDate);
        }
        if (source["manufacturer"]) {
            this.manufacturer = source.manufacturer;
        }
        if (source["_manufacturer"]) {
            this._manufacturer = new fhir.FhirElement(source._manufacturer);
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
        if (source["owner"]) {
            this.owner = new fhir.Reference(source.owner);
        }
        if (source["parent"]) {
            this.parent = new fhir.Reference(source.parent);
        }
        if (source["partNumber"]) {
            this.partNumber = source.partNumber;
        }
        if (source["_partNumber"]) {
            this._partNumber = new fhir.FhirElement(source._partNumber);
        }
        if (source["patient"]) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source["property"]) {
            this.property = source.property.map((x) => new fhir.DeviceProperty(x));
        }
        if (source["safety"]) {
            this.safety = source.safety.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["serialNumber"]) {
            this.serialNumber = source.serialNumber;
        }
        if (source["_serialNumber"]) {
            this._serialNumber = new fhir.FhirElement(source._serialNumber);
        }
        if (source["specialization"]) {
            this.specialization = source.specialization.map((x) => new fhir.DeviceSpecialization(x));
        }
        if (source["status"]) {
            this.status = source.status;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source["statusReason"]) {
            this.statusReason = source.statusReason.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source["udiCarrier"]) {
            this.udiCarrier = source.udiCarrier.map((x) => new fhir.DeviceUdiCarrier(x));
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["version"]) {
            this.version = source.version.map((x) => new fhir.DeviceVersion(x));
        }
    }
    /**
     * Check if the current Device contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Device from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Device(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Device is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Device.udiCarrier.entryType field
 */
export var DeviceUdiCarrierEntryTypeEnum;
(function (DeviceUdiCarrierEntryTypeEnum) {
    DeviceUdiCarrierEntryTypeEnum["BARCODE"] = "barcode";
    DeviceUdiCarrierEntryTypeEnum["RFID"] = "rfid";
    DeviceUdiCarrierEntryTypeEnum["MANUAL"] = "manual";
    DeviceUdiCarrierEntryTypeEnum["CARD"] = "card";
    DeviceUdiCarrierEntryTypeEnum["SELF_REPORTED"] = "self-reported";
    DeviceUdiCarrierEntryTypeEnum["UNKNOWN"] = "unknown";
})(DeviceUdiCarrierEntryTypeEnum || (DeviceUdiCarrierEntryTypeEnum = {}));
/**
 * Code Values for the Device.deviceName.type field
 */
export var DeviceDeviceNameTypeEnum;
(function (DeviceDeviceNameTypeEnum) {
    DeviceDeviceNameTypeEnum["UDI_LABEL_NAME"] = "udi-label-name";
    DeviceDeviceNameTypeEnum["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceDeviceNameTypeEnum["PATIENT_REPORTED_NAME"] = "patient-reported-name";
    DeviceDeviceNameTypeEnum["MANUFACTURER_NAME"] = "manufacturer-name";
    DeviceDeviceNameTypeEnum["MODEL_NAME"] = "model-name";
    DeviceDeviceNameTypeEnum["OTHER"] = "other";
})(DeviceDeviceNameTypeEnum || (DeviceDeviceNameTypeEnum = {}));
/**
 * Code Values for the Device.status field
 */
export var DeviceStatusEnum;
(function (DeviceStatusEnum) {
    DeviceStatusEnum["ACTIVE"] = "active";
    DeviceStatusEnum["INACTIVE"] = "inactive";
    DeviceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceStatusEnum["UNKNOWN"] = "unknown";
})(DeviceStatusEnum || (DeviceStatusEnum = {}));
//# sourceMappingURL=Device.js.map