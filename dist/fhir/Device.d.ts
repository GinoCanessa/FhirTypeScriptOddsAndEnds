import * as fhir from '../fhir';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare type IDeviceUdiCarrier = fhir.IBackboneElement & {
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    _carrierAIDC?: fhir.IFhirElement | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    _carrierHRF?: fhir.IFhirElement | undefined;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhir.IFhirElement | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: DeviceUdiCarrierEntryTypeEnum | undefined;
    _entryType?: fhir.IFhirElement | undefined;
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
    _issuer?: fhir.IFhirElement | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhir.IFhirElement | undefined;
};
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare type IDeviceDeviceName = fhir.IBackboneElement & {
    /**
     * The name of the device.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceDeviceNameTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare type IDeviceSpecialization = fhir.IBackboneElement & {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.ICodeableConcept | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * The actual design of the device or software version running on the device.
 */
export declare type IDeviceVersion = fhir.IBackboneElement & {
    /**
     * A single component of the device version.
     */
    component?: fhir.IIdentifier | undefined;
    /**
     * The type of the device version.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The version text.
     */
    value: string | null;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare type IDeviceProperty = fhir.IBackboneElement & {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhir.IQuantity[] | undefined;
};
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export declare type IDevice = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Device";
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhir.IReference | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.IDeviceDeviceName[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    _distinctIdentifier?: fhir.IFhirElement | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhir.IFhirElement | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.IReference | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhir.IFhirElement | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    _manufactureDate?: fhir.IFhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    _manufacturer?: fhir.IFhirElement | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    _modelNumber?: fhir.IFhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.IReference | undefined;
    /**
     * The parent device.
     */
    parent?: fhir.IReference | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    _partNumber?: fhir.IFhirElement | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.IReference | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.IDeviceProperty[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.ICodeableConcept[] | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    _serialNumber?: fhir.IFhirElement | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.IDeviceSpecialization[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhir.IDeviceUdiCarrier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhir.IDeviceVersion[] | undefined;
};
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare class DeviceUdiCarrier extends fhir.BackboneElement implements fhir.IDeviceUdiCarrier {
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    _carrierAIDC?: fhir.FhirElement | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    _carrierHRF?: fhir.FhirElement | undefined;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhir.FhirElement | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: DeviceUdiCarrierEntryTypeEnum | undefined;
    _entryType?: fhir.FhirElement | undefined;
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
    _issuer?: fhir.FhirElement | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceUdiCarrier>);
    /**
     * Check if the current DeviceUdiCarrier contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceUdiCarrier from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceUdiCarrier): DeviceUdiCarrier;
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare class DeviceDeviceName extends fhir.BackboneElement implements fhir.IDeviceDeviceName {
    /**
     * The name of the device.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceDeviceNameTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDeviceName>);
    /**
     * Check if the current DeviceDeviceName contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDeviceName from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDeviceName): DeviceDeviceName;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceSpecialization extends fhir.BackboneElement implements fhir.IDeviceSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.CodeableConcept | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceSpecialization>);
    /**
     * Check if the current DeviceSpecialization contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceSpecialization from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceSpecialization): DeviceSpecialization;
}
/**
 * The actual design of the device or software version running on the device.
 */
export declare class DeviceVersion extends fhir.BackboneElement implements fhir.IDeviceVersion {
    /**
     * A single component of the device version.
     */
    component?: fhir.Identifier | undefined;
    /**
     * The type of the device version.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The version text.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceVersion>);
    /**
     * Check if the current DeviceVersion contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceVersion from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceVersion): DeviceVersion;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceProperty extends fhir.BackboneElement implements fhir.IDeviceProperty {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhir.Quantity[] | undefined;
    /**
     * Default constructor for DeviceProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceProperty>);
    /**
     * Check if the current DeviceProperty contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceProperty from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceProperty): DeviceProperty;
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export declare class Device extends fhir.DomainResource implements fhir.IDevice {
    /**
     * Resource Type Name
     */
    resourceType: "Device";
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhir.Reference | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.DeviceDeviceName[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    _distinctIdentifier?: fhir.FhirElement | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhir.FhirElement | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.Reference | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhir.FhirElement | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    _manufactureDate?: fhir.FhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    _manufacturer?: fhir.FhirElement | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    _modelNumber?: fhir.FhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * The parent device.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    _partNumber?: fhir.FhirElement | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceProperty[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.CodeableConcept[] | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    _serialNumber?: fhir.FhirElement | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceSpecialization[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhir.DeviceUdiCarrier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhir.DeviceVersion[] | undefined;
    /**
     * Default constructor for Device - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDevice>);
    /**
     * Check if the current Device contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Device from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDevice): Device;
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
 * Code Values for the Device.status field
 */
export declare enum DeviceStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Device.d.ts.map