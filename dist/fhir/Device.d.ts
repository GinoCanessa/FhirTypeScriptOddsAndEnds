import * as fhir from '../fhir.js';
import { UdiEntryTypeValueSetType } from '../fhirValueSets/UdiEntryTypeValueSet.js';
import { UdiEntryTypeValueSetEnum } from '../valueSetEnums.js';
import { DeviceNametypeValueSetType } from '../fhirValueSets/DeviceNametypeValueSet.js';
import { DeviceNametypeValueSetEnum } from '../valueSetEnums.js';
import { DeviceStatusValueSetType } from '../fhirValueSets/DeviceStatusValueSet.js';
import { DeviceStatusValueSetEnum } from '../valueSetEnums.js';
import { DeviceStatusReasonValueSetType } from '../fhirValueSets/DeviceStatusReasonValueSet.js';
import { DeviceTypeValueSetType } from '../fhirValueSets/DeviceTypeValueSet.js';
/**
 * Valid arguments for the DeviceUdiCarrier type.
 */
export interface DeviceUdiCarrierArgs extends fhir.BackboneElementArgs {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: fhir.FhirString | string | undefined;
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
    issuer?: fhir.FhirUri | string | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: fhir.FhirUri | string | undefined;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: fhir.FhirBase64Binary | string | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: fhir.FhirString | string | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: UdiEntryTypeValueSetEnum | undefined;
}
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare class DeviceUdiCarrier extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: fhir.FhirString | undefined;
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
    issuer?: fhir.FhirUri | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: fhir.FhirUri | undefined;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: fhir.FhirBase64Binary | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: fhir.FhirString | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: UdiEntryTypeValueSetEnum | undefined;
    /**
     * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceUdiCarrierArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for entryType
     */
    static entryTypeRequiredValueSet(): UdiEntryTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the DeviceDeviceName type.
 */
export interface DeviceDeviceNameArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the device.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export declare class DeviceDeviceName extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The name of the device.
     */
    name: fhir.FhirString | null;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
    /**
     * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDeviceNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): DeviceNametypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the DeviceSpecialization type.
 */
export interface DeviceSpecializationArgs extends fhir.BackboneElementArgs {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.CodeableConceptArgs | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: fhir.FhirString | string | undefined;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceSpecialization extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.CodeableConcept | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceSpecializationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the DeviceVersion type.
 */
export interface DeviceVersionArgs extends fhir.BackboneElementArgs {
    /**
     * The type of the device version.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A single component of the device version.
     */
    component?: fhir.IdentifierArgs | undefined;
    /**
     * The version text.
     */
    value: fhir.FhirString | string | undefined;
}
/**
 * The actual design of the device or software version running on the device.
 */
export declare class DeviceVersion extends fhir.BackboneElement {
    readonly __dataType: string;
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
    value: fhir.FhirString | null;
    /**
     * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceVersionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the DeviceProperty type.
 */
export interface DevicePropertyArgs extends fhir.BackboneElementArgs {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhir.QuantityArgs[] | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceProperty extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<DevicePropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Device type.
 */
export interface DeviceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Device" | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The reference to the definition for the device.
     */
    definition?: fhir.ReferenceArgs | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udiCarrier?: fhir.DeviceUdiCarrierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: DeviceStatusValueSetEnum | undefined;
    /**
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: fhir.FhirString | string | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | string | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: fhir.FhirDateTime | string | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: fhir.FhirString | string | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.DeviceDeviceNameArgs[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: fhir.FhirString | string | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: fhir.FhirString | string | undefined;
    /**
     * The kind or type of device.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceSpecializationArgs[] | undefined;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: fhir.DeviceVersionArgs[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DevicePropertyArgs[] | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The parent device.
     */
    parent?: fhir.ReferenceArgs | undefined;
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export declare class Device extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Reason for the dtatus of the Device availability.
     */
    statusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
     */
    distinctIdentifier?: fhir.FhirString | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: fhir.FhirDateTime | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: fhir.FhirDateTime | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    serialNumber?: fhir.FhirString | undefined;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    deviceName?: fhir.DeviceDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: fhir.FhirString | undefined;
    /**
     * Alphanumeric Maximum 20.
     */
    partNumber?: fhir.FhirString | undefined;
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
    url?: fhir.FhirUri | undefined;
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
    constructor(source?: Partial<DeviceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): DeviceStatusValueSetType;
    /**
     * Extensible-bound Value Set for statusReason
     */
    static statusReasonExtensibleValueSet(): DeviceStatusReasonValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): DeviceTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Device.d.ts.map