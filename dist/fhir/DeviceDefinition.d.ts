import * as fhir from '../fhir';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare type IDeviceDefinitionUdiDeviceIdentifier = fhir.IBackboneElement & {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: string | null;
    _deviceIdentifier?: fhir.IFhirElement | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: string | null;
    _issuer?: fhir.IFhirElement | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: string | null;
    _jurisdiction?: fhir.IFhirElement | undefined;
};
/**
 * A name given to the device to identify it.
 */
export declare type IDeviceDefinitionDeviceName = fhir.IBackboneElement & {
    /**
     * The name of the device.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceDefinitionDeviceNameTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare type IDeviceDefinitionSpecialization = fhir.IBackboneElement & {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: string | null;
    _systemType?: fhir.IFhirElement | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Device capabilities.
 */
export declare type IDeviceDefinitionCapability = fhir.IBackboneElement & {
    /**
     * Description of capability.
     */
    description?: fhir.ICodeableConcept[] | undefined;
    /**
     * Type of capability.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare type IDeviceDefinitionProperty = fhir.IBackboneElement & {
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
 * A substance used to create the material(s) of which the device is made.
 */
export declare type IDeviceDefinitionMaterial = fhir.IBackboneElement & {
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhir.IFhirElement | undefined;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    _alternate?: fhir.IFhirElement | undefined;
    /**
     * The substance.
     */
    substance: fhir.ICodeableConcept | null;
};
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare type IDeviceDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceDefinition";
    /**
     * Device capabilities.
     */
    capability?: fhir.IDeviceDefinitionCapability[] | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.IDeviceDefinitionDeviceName[] | undefined;
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    _manufacturerString?: fhir.IFhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.IReference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.IDeviceDefinitionMaterial[] | undefined;
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
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    _onlineInformation?: fhir.IFhirElement | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.IReference | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.IReference | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.IDeviceDefinitionProperty[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.ICodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.IProductShelfLife[] | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.IDeviceDefinitionSpecialization[] | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.IDeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    _version?: fhir.IFhirElement[] | undefined;
};
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare class DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement implements fhir.IDeviceDefinitionUdiDeviceIdentifier {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: string | null;
    _deviceIdentifier?: fhir.FhirElement | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: string | null;
    _issuer?: fhir.FhirElement | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: string | null;
    _jurisdiction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionUdiDeviceIdentifier>);
    /**
     * Check if the current DeviceDefinitionUdiDeviceIdentifier contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionUdiDeviceIdentifier from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionUdiDeviceIdentifier): DeviceDefinitionUdiDeviceIdentifier;
}
/**
 * A name given to the device to identify it.
 */
export declare class DeviceDefinitionDeviceName extends fhir.BackboneElement implements fhir.IDeviceDefinitionDeviceName {
    /**
     * The name of the device.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceDefinitionDeviceNameTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionDeviceName>);
    /**
     * Check if the current DeviceDefinitionDeviceName contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionDeviceName from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionDeviceName): DeviceDefinitionDeviceName;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceDefinitionSpecialization extends fhir.BackboneElement implements fhir.IDeviceDefinitionSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: string | null;
    _systemType?: fhir.FhirElement | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionSpecialization>);
    /**
     * Check if the current DeviceDefinitionSpecialization contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionSpecialization from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionSpecialization): DeviceDefinitionSpecialization;
}
/**
 * Device capabilities.
 */
export declare class DeviceDefinitionCapability extends fhir.BackboneElement implements fhir.IDeviceDefinitionCapability {
    /**
     * Description of capability.
     */
    description?: fhir.CodeableConcept[] | undefined;
    /**
     * Type of capability.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for DeviceDefinitionCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionCapability>);
    /**
     * Check if the current DeviceDefinitionCapability contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionCapability from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionCapability): DeviceDefinitionCapability;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceDefinitionProperty extends fhir.BackboneElement implements fhir.IDeviceDefinitionProperty {
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
     * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionProperty>);
    /**
     * Check if the current DeviceDefinitionProperty contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionProperty from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionProperty): DeviceDefinitionProperty;
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export declare class DeviceDefinitionMaterial extends fhir.BackboneElement implements fhir.IDeviceDefinitionMaterial {
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    _allergenicIndicator?: fhir.FhirElement | undefined;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    _alternate?: fhir.FhirElement | undefined;
    /**
     * The substance.
     */
    substance: fhir.CodeableConcept | null;
    /**
     * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinitionMaterial>);
    /**
     * Check if the current DeviceDefinitionMaterial contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinitionMaterial from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinitionMaterial): DeviceDefinitionMaterial;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare class DeviceDefinition extends fhir.DomainResource implements fhir.IDeviceDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceDefinition";
    /**
     * Device capabilities.
     */
    capability?: fhir.DeviceDefinitionCapability[] | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.DeviceDefinitionDeviceName[] | undefined;
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.CodeableConcept[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    _manufacturerString?: fhir.FhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.Reference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.DeviceDefinitionMaterial[] | undefined;
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
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    _onlineInformation?: fhir.FhirElement | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.Reference | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceDefinitionProperty[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceDefinitionSpecialization[] | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.DeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    _version?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for DeviceDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDeviceDefinition>);
    /**
     * Check if the current DeviceDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DeviceDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDeviceDefinition): DeviceDefinition;
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
//# sourceMappingURL=DeviceDefinition.d.ts.map