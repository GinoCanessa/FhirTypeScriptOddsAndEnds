import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare class DeviceUdiCarrier extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceUdiCarrier {
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    _carrierAIDC?: fhirModels.Element | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    _carrierHRF?: fhirModels.Element | undefined;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhirModels.Element | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: DeviceUdiCarrierEntryTypeEnum | undefined;
    _entryType?: fhirModels.Element | undefined;
    /**
     * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
     * 1) GS1:
     * http://hl7.org/fhir/NamingSystem/gs1-di,
     * 2) HIBCC:
     * http://hl7.org/fhir/NamingSystem/hibcc-dI,
     * 3) ICCBBA for blood containers:
     * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
     * 4) ICCBA for other devices:
     * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
     */
    issuer?: string | undefined;
    _issuer?: fhirModels.Element | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceUdiCarrier from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceUdiCarrier>);
    /**
     * Factory function to create a DeviceUdiCarrier from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceUdiCarrier): DeviceUdiCarrier;
    /**
     * Check if the current DeviceUdiCarrier contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Device.udiCarrier.entryType field
 */
export declare enum DeviceUdiCarrierEntryTypeEnum {
    BARCODE = "barcode",
    RFID = "rfid",
    MANUAL = "manual",
    CARD = "card",
    SELF_REPORTED = "self-reported",
    UNKNOWN = "unknown"
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare class DeviceDeviceName extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDeviceName {
    /**
     * The name of the device.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type?: DeviceDeviceNameTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceDeviceName from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDeviceName>);
    /**
     * Factory function to create a DeviceDeviceName from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDeviceName): DeviceDeviceName;
    /**
     * Check if the current DeviceDeviceName contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Device.deviceName.type field
 */
export declare enum DeviceDeviceNameTypeEnum {
    UDI_LABEL_NAME = "udi-label-name",
    USER_FRIENDLY_NAME = "user-friendly-name",
    PATIENT_REPORTED_NAME = "patient-reported-name",
    MANUFACTURER_NAME = "manufacturer-name",
    MODEL_NAME = "model-name",
    OTHER = "other"
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceSpecialization extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType?: fhirModels.CodeableConcept | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceSpecialization from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceSpecialization>);
    /**
     * Factory function to create a DeviceSpecialization from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceSpecialization): DeviceSpecialization;
    /**
     * Check if the current DeviceSpecialization contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The actual design of the device or software version running on the device.
 */
export declare class DeviceVersion extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceVersion {
    /**
     * A single component of the device version.
     */
    component?: fhirModels.Identifier | undefined;
    /**
     * The type of the device version.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The version text.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceVersion from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceVersion>);
    /**
     * Factory function to create a DeviceVersion from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceVersion): DeviceVersion;
    /**
     * Check if the current DeviceVersion contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceProperty extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceProperty {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhirModels.Quantity[] | undefined;
    /**
     * Default constructor for DeviceProperty from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceProperty>);
    /**
     * Factory function to create a DeviceProperty from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceProperty): DeviceProperty;
    /**
     * Check if the current DeviceProperty contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export declare class Device extends fhirModels.DomainResource implements fhirInterfaces.IDevice {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Device";
    /**
     * used for troubleshooting etc.
     */
    contact?: fhirModels.ContactPoint[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhirModels.Reference | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhirModels.DeviceDeviceName[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    _distinctIdentifier?: fhirModels.Element | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhirModels.Element | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhirModels.Element | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    _manufactureDate?: fhirModels.Element | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    _manufacturer?: fhirModels.Element | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    _modelNumber?: fhirModels.Element | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhirModels.Reference | undefined;
    /**
     * The parent device.
     */
    parent?: fhirModels.Reference | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    _partNumber?: fhirModels.Element | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhirModels.DeviceProperty[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    _serialNumber?: fhirModels.Element | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhirModels.DeviceSpecialization[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhirModels.DeviceUdiCarrier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhirModels.DeviceVersion[] | undefined;
    /**
     * Default constructor for Device from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDevice>);
    /**
     * Factory function to create a Device from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDevice): Device;
    /**
     * Check if the current Device contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Device.status field
 */
export declare enum DeviceStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Device.d.ts.map