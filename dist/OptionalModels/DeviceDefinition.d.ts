import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare class DeviceDefinitionUdiDeviceIdentifier extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionUdiDeviceIdentifier {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier?: string | undefined;
    _deviceIdentifier?: fhirModels.Element | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer?: string | undefined;
    _issuer?: fhirModels.Element | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction?: string | undefined;
    _jurisdiction?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionUdiDeviceIdentifier>);
    /**
     * Factory function to create a DeviceDefinitionUdiDeviceIdentifier from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionUdiDeviceIdentifier): DeviceDefinitionUdiDeviceIdentifier;
    /**
     * Check if the current DeviceDefinitionUdiDeviceIdentifier contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A name given to the device to identify it.
 */
export declare class DeviceDefinitionDeviceName extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionDeviceName {
    /**
     * The name of the device.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type?: DeviceDefinitionDeviceNameTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceDefinitionDeviceName from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionDeviceName>);
    /**
     * Factory function to create a DeviceDefinitionDeviceName from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionDeviceName): DeviceDefinitionDeviceName;
    /**
     * Check if the current DeviceDefinitionDeviceName contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class DeviceDefinitionSpecialization extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType?: string | undefined;
    _systemType?: fhirModels.Element | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceDefinitionSpecialization from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionSpecialization>);
    /**
     * Factory function to create a DeviceDefinitionSpecialization from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionSpecialization): DeviceDefinitionSpecialization;
    /**
     * Check if the current DeviceDefinitionSpecialization contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Device capabilities.
 */
export declare class DeviceDefinitionCapability extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionCapability {
    /**
     * Description of capability.
     */
    description?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Type of capability.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for DeviceDefinitionCapability from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionCapability>);
    /**
     * Factory function to create a DeviceDefinitionCapability from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionCapability): DeviceDefinitionCapability;
    /**
     * Check if the current DeviceDefinitionCapability contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceDefinitionProperty extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionProperty {
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
     * Default constructor for DeviceDefinitionProperty from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionProperty>);
    /**
     * Factory function to create a DeviceDefinitionProperty from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionProperty): DeviceDefinitionProperty;
    /**
     * Check if the current DeviceDefinitionProperty contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export declare class DeviceDefinitionMaterial extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceDefinitionMaterial {
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhirModels.Element | undefined;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    _alternate?: fhirModels.Element | undefined;
    /**
     * The substance.
     */
    substance?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for DeviceDefinitionMaterial from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinitionMaterial>);
    /**
     * Factory function to create a DeviceDefinitionMaterial from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinitionMaterial): DeviceDefinitionMaterial;
    /**
     * Check if the current DeviceDefinitionMaterial contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare class DeviceDefinition extends fhirModels.DomainResource implements fhirInterfaces.IDeviceDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "DeviceDefinition";
    /**
     * Device capabilities.
     */
    capability?: fhirModels.DeviceDefinitionCapability[] | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhirModels.ContactPoint[] | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhirModels.DeviceDefinitionDeviceName[] | undefined;
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    _manufacturerString?: fhirModels.Element | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhirModels.Reference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhirModels.DeviceDefinitionMaterial[] | undefined;
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
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    _onlineInformation?: fhirModels.Element | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhirModels.Reference | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhirModels.Reference | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhirModels.ProdCharacteristic | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhirModels.DeviceDefinitionProperty[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhirModels.ProductShelfLife[] | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhirModels.DeviceDefinitionSpecialization[] | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhirModels.DeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    _version?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for DeviceDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceDefinition>);
    /**
     * Factory function to create a DeviceDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceDefinition): DeviceDefinition;
    /**
     * Check if the current DeviceDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=DeviceDefinition.d.ts.map