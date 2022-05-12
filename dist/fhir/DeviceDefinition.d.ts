import * as fhir from '../fhir.js';
import { DeviceNametypeValueSetType } from '../fhirValueSets/DeviceNametypeValueSet.js';
import { DeviceNametypeValueSetEnum } from '../valueSetEnums.js';
import { DeviceKindValueSetType } from '../fhirValueSets/DeviceKindValueSet.js';
/**
 * Valid arguments for the DeviceDefinitionUdiDeviceIdentifier type.
 */
export interface DeviceDefinitionUdiDeviceIdentifierArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: fhir.FhirString | string | undefined;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: fhir.FhirUri | string | undefined;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: fhir.FhirUri | string | undefined;
}
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export declare class DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: fhir.FhirString | null;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: fhir.FhirUri | null;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: fhir.FhirUri | null;
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDefinitionUdiDeviceIdentifierArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinitionDeviceName type.
 */
export interface DeviceDefinitionDeviceNameArgs extends fhir.BackboneElementArgs {
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
 * A name given to the device to identify it.
 */
export declare class DeviceDefinitionDeviceName extends fhir.BackboneElement {
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
     * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDefinitionDeviceNameArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinitionSpecialization type.
 */
export interface DeviceDefinitionSpecializationArgs extends fhir.BackboneElementArgs {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.FhirString | string | undefined;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: fhir.FhirString | string | undefined;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export declare class DeviceDefinitionSpecialization extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: fhir.FhirString | null;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDefinitionSpecializationArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinitionCapability type.
 */
export interface DeviceDefinitionCapabilityArgs extends fhir.BackboneElementArgs {
    /**
     * Type of capability.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Description of capability.
     */
    description?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Device capabilities.
 */
export declare class DeviceDefinitionCapability extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<DeviceDefinitionCapabilityArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinitionProperty type.
 */
export interface DeviceDefinitionPropertyArgs extends fhir.BackboneElementArgs {
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
export declare class DeviceDefinitionProperty extends fhir.BackboneElement {
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
     * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDefinitionPropertyArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinitionMaterial type.
 */
export interface DeviceDefinitionMaterialArgs extends fhir.BackboneElementArgs {
    /**
     * The substance.
     */
    substance: fhir.CodeableConceptArgs | null;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export declare class DeviceDefinitionMaterial extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The substance.
     */
    substance: fhir.CodeableConcept | null;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: fhir.FhirBoolean | undefined;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceDefinitionMaterialArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the DeviceDefinition type.
 */
export interface DeviceDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceDefinition" | undefined;
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.DeviceDefinitionUdiDeviceIdentifierArgs[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | fhir.Reference | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: fhir.FhirString | string | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.ReferenceArgs | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.DeviceDefinitionDeviceNameArgs[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: fhir.FhirString | string | undefined;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceDefinitionSpecializationArgs[] | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: fhir.FhirString[] | string[] | undefined;
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLifeArgs[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristicArgs | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Device capabilities.
     */
    capability?: fhir.DeviceDefinitionCapabilityArgs[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceDefinitionPropertyArgs[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: fhir.FhirUri | string | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.ReferenceArgs | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.DeviceDefinitionMaterialArgs[] | undefined;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare class DeviceDefinition extends fhir.DomainResource {
    readonly __dataType: string;
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
    manufacturer?: (fhir.FhirString | fhir.Reference) | undefined;
    readonly __manufacturerIsChoice: true;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.DeviceDefinitionDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: fhir.FhirString | undefined;
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
    version?: fhir.FhirString[] | undefined;
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
    url?: fhir.FhirUri | undefined;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: fhir.FhirUri | undefined;
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
    constructor(source?: Partial<DeviceDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): DeviceKindValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=DeviceDefinition.d.ts.map