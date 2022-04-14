import * as fhirInterfaces from '../strictinterfaces';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export interface IDeviceUdiCarrier extends fhirInterfaces.IBackboneElement {
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    _carrierAIDC?: fhirInterfaces.IElement | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    _carrierHRF?: fhirInterfaces.IElement | undefined;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhirInterfaces.IElement | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: DeviceUdiCarrierEntryTypeEnum | undefined;
    _entryType?: fhirInterfaces.IElement | undefined;
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
    _issuer?: fhirInterfaces.IElement | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhirInterfaces.IElement | undefined;
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
export interface IDeviceDeviceName extends fhirInterfaces.IBackboneElement {
    /**
     * The name of the device.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceDeviceNameTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
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
export interface IDeviceSpecialization extends fhirInterfaces.IBackboneElement {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhirInterfaces.ICodeableConcept;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * The actual design of the device or software version running on the device.
 */
export interface IDeviceVersion extends fhirInterfaces.IBackboneElement {
    /**
     * A single component of the device version.
     */
    component?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The type of the device version.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The version text.
     */
    value: string;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface IDeviceProperty extends fhirInterfaces.IBackboneElement {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhirInterfaces.ICodeableConcept;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhirInterfaces.IQuantity[] | undefined;
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export interface IDevice extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Device";
    /**
     * used for troubleshooting etc.
     */
    contact?: fhirInterfaces.IContactPoint[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhirInterfaces.IReference | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhirInterfaces.IDeviceDeviceName[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    _distinctIdentifier?: fhirInterfaces.IElement | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhirInterfaces.IElement | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhirInterfaces.IReference | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhirInterfaces.IElement | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    _manufactureDate?: fhirInterfaces.IElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    _manufacturer?: fhirInterfaces.IElement | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    _modelNumber?: fhirInterfaces.IElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhirInterfaces.IReference | undefined;
    /**
     * The parent device.
     */
    parent?: fhirInterfaces.IReference | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    _partNumber?: fhirInterfaces.IElement | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhirInterfaces.IDeviceProperty[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    _serialNumber?: fhirInterfaces.IElement | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhirInterfaces.IDeviceSpecialization[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhirInterfaces.IDeviceUdiCarrier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhirInterfaces.IDeviceVersion[] | undefined;
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
//# sourceMappingURL=IDevice.d.ts.map