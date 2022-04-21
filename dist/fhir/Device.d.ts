import * as fhir from '../fhir.js';
import { UdiEntryTypeValueSetType, UdiEntryTypeValueSetEnum } from '../fhirValueSets/UdiEntryTypeValueSet.js';
import { DeviceNametypeValueSetType, DeviceNametypeValueSetEnum } from '../fhirValueSets/DeviceNametypeValueSet.js';
import { DeviceStatusValueSetType, DeviceStatusValueSetEnum } from '../fhirValueSets/DeviceStatusValueSet.js';
import { DeviceStatusReasonValueSetType } from '../fhirValueSets/DeviceStatusReasonValueSet.js';
import { DeviceTypeValueSetType } from '../fhirValueSets/DeviceTypeValueSet.js';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare type IDeviceUdiCarrier = fhir.IBackboneElement & {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.IFhirElement | undefined;
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
    /**
     * Extended properties for primitive element: Device.udiCarrier.issuer
     */
    _issuer?: fhir.IFhirElement | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.jurisdiction
     */
    _jurisdiction?: fhir.IFhirElement | undefined;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierAIDC
     */
    _carrierAIDC?: fhir.IFhirElement | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierHRF
     */
    _carrierHRF?: fhir.IFhirElement | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: UdiEntryTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.entryType
     */
    _entryType?: fhir.IFhirElement | undefined;
};
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare type IDeviceDeviceName = fhir.IBackboneElement & {
    /**
     * The name of the device.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Device.deviceName.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Device.deviceName.type
     */
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
    /**
     * Extended properties for primitive element: Device.specialization.version
     */
    _version?: fhir.IFhirElement | undefined;
};
/**
 * The actual design of the device or software version running on the device.
 */
export declare type IDeviceVersion = fhir.IBackboneElement & {
    /**
     * The type of the device version.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * A single component of the device version.
     */
    component?: fhir.IIdentifier | undefined;
    /**
     * The version text.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Device.version.value
     */
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
     * Property value as a quantity.
     */
    valueQuantity?: fhir.IQuantity[] | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.ICodeableConcept[] | undefined;
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
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhir.IReference | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhir.IDeviceUdiCarrier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.distinctIdentifier
     */
    _distinctIdentifier?: fhir.IFhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.IFhirElement | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufactureDate
     */
    _manufactureDate?: fhir.IFhirElement | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.expirationDate
     */
    _expirationDate?: fhir.IFhirElement | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.IFhirElement | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.serialNumber
     */
    _serialNumber?: fhir.IFhirElement | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.IDeviceDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.modelNumber
     */
    _modelNumber?: fhir.IFhirElement | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.partNumber
     */
    _partNumber?: fhir.IFhirElement | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.IDeviceSpecialization[] | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhir.IDeviceVersion[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.IDeviceProperty[] | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.IReference | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.IReference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.IReference | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.ICodeableConcept[] | undefined;
    /**
     * The parent device.
     */
    parent?: fhir.IReference | undefined;
};
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare class DeviceUdiCarrier extends fhir.BackboneElement implements IDeviceUdiCarrier {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElement | undefined;
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
    /**
     * Extended properties for primitive element: Device.udiCarrier.issuer
     */
    _issuer?: fhir.FhirElement | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.jurisdiction
     */
    _jurisdiction?: fhir.FhirElement | undefined;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierAIDC
     */
    _carrierAIDC?: fhir.FhirElement | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierHRF
     */
    _carrierHRF?: fhir.FhirElement | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: UdiEntryTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.entryType
     */
    _entryType?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceUdiCarrier>);
    /**
     * Required-bound Value Set for entryType
     */
    entryTypeRequiredValueSet(): UdiEntryTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare class DeviceDeviceName extends fhir.BackboneElement implements IDeviceDeviceName {
    /**
     * The name of the device.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Device.deviceName.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Device.deviceName.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDeviceName>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): DeviceNametypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceSpecialization extends fhir.BackboneElement implements IDeviceSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.CodeableConcept | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Device.specialization.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceSpecialization>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The actual design of the device or software version running on the device.
 */
export declare class DeviceVersion extends fhir.BackboneElement implements IDeviceVersion {
    /**
     * The type of the device version.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A single component of the device version.
     */
    component?: fhir.Identifier | undefined;
    /**
     * The version text.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Device.version.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceVersion>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceProperty extends fhir.BackboneElement implements IDeviceProperty {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhir.Quantity[] | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for DeviceProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceProperty>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export declare class Device extends fhir.DomainResource implements IDevice {
    /**
     * Resource Type Name
     */
    resourceType: "Device";
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhir.Reference | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhir.DeviceUdiCarrier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.distinctIdentifier
     */
    _distinctIdentifier?: fhir.FhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElement | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufactureDate
     */
    _manufactureDate?: fhir.FhirElement | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.expirationDate
     */
    _expirationDate?: fhir.FhirElement | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElement | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.serialNumber
     */
    _serialNumber?: fhir.FhirElement | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.DeviceDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.modelNumber
     */
    _modelNumber?: fhir.FhirElement | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.partNumber
     */
    _partNumber?: fhir.FhirElement | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceSpecialization[] | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhir.DeviceVersion[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceProperty[] | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.Reference | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.CodeableConcept[] | undefined;
    /**
     * The parent device.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Default constructor for Device - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDevice>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): DeviceStatusValueSetType;
    /**
     * Extensible-bound Value Set for statusReason
     */
    statusReasonExtensibleValueSet(): DeviceStatusReasonValueSetType;
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): DeviceTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Device.d.ts.map