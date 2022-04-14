import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export interface IDeviceDefinitionUdiDeviceIdentifier extends fhirInterfaces.IBackboneElement {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhirInterfaces.IElement | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer?: string | undefined;
    _issuer?: fhirInterfaces.IElement | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhirInterfaces.IElement | undefined;
}
/**
 * A name given to the device to identify it.
 */
export interface IDeviceDefinitionDeviceName extends fhirInterfaces.IBackboneElement {
    /**
     * The name of the device.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type?: DeviceDefinitionDeviceNameTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the DeviceDefinition.deviceName.type field
 */
export declare enum DeviceDefinitionDeviceNameTypeEnum {
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
export interface IDeviceDefinitionSpecialization extends fhirInterfaces.IBackboneElement {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType?: string | undefined;
    _systemType?: fhirInterfaces.IElement | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Device capabilities.
 */
export interface IDeviceDefinitionCapability extends fhirInterfaces.IBackboneElement {
    /**
     * Description of capability.
     */
    description?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Type of capability.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface IDeviceDefinitionProperty extends fhirInterfaces.IBackboneElement {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
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
 * A substance used to create the material(s) of which the device is made.
 */
export interface IDeviceDefinitionMaterial extends fhirInterfaces.IBackboneElement {
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    _alternate?: fhirInterfaces.IElement | undefined;
    /**
     * The substance.
     */
    substance?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export interface IDeviceDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "DeviceDefinition";
    /**
     * Device capabilities.
     */
    capability?: fhirInterfaces.IDeviceDefinitionCapability[] | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhirInterfaces.IContactPoint[] | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhirInterfaces.IDeviceDefinitionDeviceName[] | undefined;
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    _manufacturerString?: fhirInterfaces.IElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhirInterfaces.IReference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhirInterfaces.IDeviceDefinitionMaterial[] | undefined;
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
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    _onlineInformation?: fhirInterfaces.IElement | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhirInterfaces.IReference | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhirInterfaces.IReference | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhirInterfaces.IProdCharacteristic | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhirInterfaces.IDeviceDefinitionProperty[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhirInterfaces.IProductShelfLife[] | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhirInterfaces.IDeviceDefinitionSpecialization[] | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhirInterfaces.IDeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    _version?: fhirInterfaces.IElement[] | undefined;
}
//# sourceMappingURL=IDeviceDefinition.d.ts.map