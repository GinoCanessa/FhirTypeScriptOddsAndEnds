import * as fhir from '../fhir.js';
import { DeviceNametypeValueSetType, DeviceNametypeValueSetEnum } from '../fhirValueSets/DeviceNametypeValueSet.js';
import { DeviceKindValueSetType } from '../fhirValueSets/DeviceKindValueSet.js';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare type IDeviceDefinitionUdiDeviceIdentifier = fhir.IBackboneElement & {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.IFhirElement | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.issuer
     */
    _issuer?: fhir.IFhirElement | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.jurisdiction
     */
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
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.type
     */
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
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.systemType
     */
    _systemType?: fhir.IFhirElement | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.version
     */
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Device capabilities.
 */
export declare type IDeviceDefinitionCapability = fhir.IBackboneElement & {
    /**
     * Type of capability.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Description of capability.
     */
    description?: fhir.ICodeableConcept[] | undefined;
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
     * Property value as a quantity.
     */
    valueQuantity?: fhir.IQuantity[] | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.ICodeableConcept[] | undefined;
};
/**
 * A substance used to create the material(s) of which the device is made.
 */
export declare type IDeviceDefinitionMaterial = fhir.IBackboneElement & {
    /**
     * The substance.
     */
    substance: fhir.ICodeableConcept | null;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.alternate
     */
    _alternate?: fhir.IFhirElement | undefined;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.allergenicIndicator
     */
    _allergenicIndicator?: fhir.IFhirElement | undefined;
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
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.IDeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.manufacturer[x]
     */
    _manufacturerString?: fhir.IFhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.IReference | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.IDeviceDefinitionDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.modelNumber
     */
    _modelNumber?: fhir.IFhirElement | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.IDeviceDefinitionSpecialization[] | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.version
     */
    _version?: fhir.IFhirElement[] | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.ICodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.IProductShelfLife[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.IProdCharacteristic | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Device capabilities.
     */
    capability?: fhir.IDeviceDefinitionCapability[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.IDeviceDefinitionProperty[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.IReference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.onlineInformation
     */
    _onlineInformation?: fhir.IFhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.IReference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.IDeviceDefinitionMaterial[] | undefined;
};
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare class DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement implements IDeviceDefinitionUdiDeviceIdentifier {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElement | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.issuer
     */
    _issuer?: fhir.FhirElement | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.jurisdiction
     */
    _jurisdiction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionUdiDeviceIdentifier>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A name given to the device to identify it.
 */
export declare class DeviceDefinitionDeviceName extends fhir.BackboneElement implements IDeviceDefinitionDeviceName {
    /**
     * The name of the device.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: DeviceNametypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionDeviceName>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): DeviceNametypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceDefinitionSpecialization extends fhir.BackboneElement implements IDeviceDefinitionSpecialization {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.systemType
     */
    _systemType?: fhir.FhirElement | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionSpecialization>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Device capabilities.
 */
export declare class DeviceDefinitionCapability extends fhir.BackboneElement implements IDeviceDefinitionCapability {
    /**
     * Type of capability.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Description of capability.
     */
    description?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for DeviceDefinitionCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionCapability>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export declare class DeviceDefinitionProperty extends fhir.BackboneElement implements IDeviceDefinitionProperty {
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
     * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionProperty>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export declare class DeviceDefinitionMaterial extends fhir.BackboneElement implements IDeviceDefinitionMaterial {
    /**
     * The substance.
     */
    substance: fhir.CodeableConcept | null;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.alternate
     */
    _alternate?: fhir.FhirElement | undefined;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinitionMaterial>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare class DeviceDefinition extends fhir.DomainResource implements IDeviceDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceDefinition";
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.DeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.manufacturer[x]
     */
    _manufacturerString?: fhir.FhirElement | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.Reference | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.DeviceDefinitionDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.modelNumber
     */
    _modelNumber?: fhir.FhirElement | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceDefinitionSpecialization[] | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.version
     */
    _version?: fhir.FhirElement[] | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Device capabilities.
     */
    capability?: fhir.DeviceDefinitionCapability[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceDefinitionProperty[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.onlineInformation
     */
    _onlineInformation?: fhir.FhirElement | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.Reference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.DeviceDefinitionMaterial[] | undefined;
    /**
     * Default constructor for DeviceDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceDefinition>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): DeviceKindValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=DeviceDefinition.d.ts.map