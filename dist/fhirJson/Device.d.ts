import * as fhir from '../fhirJson.js';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export interface DeviceUdiCarrier extends fhir.BackboneElement {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElement;
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
    _issuer?: fhir.FhirElement;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.jurisdiction
     */
    _jurisdiction?: fhir.FhirElement;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierAIDC
     */
    _carrierAIDC?: fhir.FhirElement;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udiCarrier.carrierHRF
     */
    _carrierHRF?: fhir.FhirElement;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: 'barcode' | 'card' | 'manual' | 'rfid' | 'self-reported' | 'unknown' | undefined;
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export interface DeviceDeviceName extends fhir.BackboneElement {
    /**
     * The name of the device.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Device.deviceName.name
     */
    _name?: fhir.FhirElement;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: 'manufacturer-name' | 'model-name' | 'other' | 'patient-reported-name' | 'udi-label-name' | 'user-friendly-name' | null;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceSpecialization extends fhir.BackboneElement {
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
    _version?: fhir.FhirElement;
}
/**
 * The actual design of the device or software version running on the device.
 */
export interface DeviceVersion extends fhir.BackboneElement {
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
    _value?: fhir.FhirElement;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface DeviceProperty extends fhir.BackboneElement {
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
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export interface Device extends fhir.DomainResource {
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
    status?: 'active' | 'entered-in-error' | 'inactive' | 'unknown' | undefined;
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
    _distinctIdentifier?: fhir.FhirElement;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElement;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufactureDate
     */
    _manufactureDate?: fhir.FhirElement;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.expirationDate
     */
    _expirationDate?: fhir.FhirElement;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.serialNumber
     */
    _serialNumber?: fhir.FhirElement;
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
    _modelNumber?: fhir.FhirElement;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.partNumber
     */
    _partNumber?: fhir.FhirElement;
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
    _url?: fhir.FhirElement;
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
}
//# sourceMappingURL=Device.d.ts.map