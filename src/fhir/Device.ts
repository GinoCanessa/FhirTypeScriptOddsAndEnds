// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export type IDeviceUdiCarrier = fhir.IBackboneElement & {
  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierAIDC?: string|undefined;
  _carrierAIDC?: fhir.IFhirElement|undefined;
  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierHRF?: string|undefined;
  _carrierHRF?: fhir.IFhirElement|undefined;
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string|undefined;
  _deviceIdentifier?: fhir.IFhirElement|undefined;
  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?: DeviceUdiCarrierEntryTypeEnum|undefined;
  _entryType?: fhir.IFhirElement|undefined;
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
  issuer?: string|undefined;
  _issuer?: fhir.IFhirElement|undefined;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string|undefined;
  _jurisdiction?: fhir.IFhirElement|undefined;
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export type IDeviceDeviceName = fhir.IBackboneElement & {
  /**
   * The name of the device.
   */
  name: string|null;
  _name?: fhir.IFhirElement|undefined;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type: DeviceDeviceNameTypeEnum|null;
  _type?: fhir.IFhirElement|undefined;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export type IDeviceSpecialization = fhir.IBackboneElement & {
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: fhir.ICodeableConcept|null;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string|undefined;
  _version?: fhir.IFhirElement|undefined;
}
/**
 * The actual design of the device or software version running on the device.
 */
export type IDeviceVersion = fhir.IBackboneElement & {
  /**
   * A single component of the device version.
   */
  component?: fhir.IIdentifier|undefined;
  /**
   * The type of the device version.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The version text.
   */
  value: string|null;
  _value?: fhir.IFhirElement|undefined;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export type IDeviceProperty = fhir.IBackboneElement & {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: fhir.ICodeableConcept|null;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Property value as a quantity.
   */
  valueQuantity?: fhir.IQuantity[]|undefined;
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export type IDevice = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "Device";
  /**
   * used for troubleshooting etc.
   */
  contact?: fhir.IContactPoint[]|undefined;
  /**
   * The reference to the definition for the device.
   */
  definition?: fhir.IReference|undefined;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  deviceName?: fhir.IDeviceDeviceName[]|undefined;
  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   */
  distinctIdentifier?: string|undefined;
  _distinctIdentifier?: fhir.IFhirElement|undefined;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expirationDate?: string|undefined;
  _expirationDate?: fhir.IFhirElement|undefined;
  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The place where the device can be found.
   */
  location?: fhir.IReference|undefined;
  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string|undefined;
  _lotNumber?: fhir.IFhirElement|undefined;
  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string|undefined;
  _manufactureDate?: fhir.IFhirElement|undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: string|undefined;
  _manufacturer?: fhir.IFhirElement|undefined;
  /**
   * The model number for the device.
   */
  modelNumber?: string|undefined;
  _modelNumber?: fhir.IFhirElement|undefined;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: fhir.IReference|undefined;
  /**
   * The parent device.
   */
  parent?: fhir.IReference|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  partNumber?: string|undefined;
  _partNumber?: fhir.IFhirElement|undefined;
  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: fhir.IReference|undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: fhir.IDeviceProperty[]|undefined;
  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  safety?: fhir.ICodeableConcept[]|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  serialNumber?: string|undefined;
  _serialNumber?: fhir.IFhirElement|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: fhir.IDeviceSpecialization[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   */
  status?: DeviceStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: fhir.ICodeableConcept[]|undefined;
  /**
   * The kind or type of device.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   */
  udiCarrier?: fhir.IDeviceUdiCarrier[]|undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  url?: string|undefined;
  _url?: fhir.IFhirElement|undefined;
  /**
   * The actual design of the device or software version running on the device.
   */
  version?: fhir.IDeviceVersion[]|undefined;
}
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export class DeviceUdiCarrier extends fhir.BackboneElement implements fhir.IDeviceUdiCarrier {
  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  public carrierAIDC?: string|undefined;
  public _carrierAIDC?: fhir.FhirElement|undefined;
  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  public carrierHRF?: string|undefined;
  public _carrierHRF?: fhir.FhirElement|undefined;
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  public deviceIdentifier?: string|undefined;
  public _deviceIdentifier?: fhir.FhirElement|undefined;
  /**
   * A coded entry to indicate how the data was entered.
   */
  public entryType?: DeviceUdiCarrierEntryTypeEnum|undefined;
  public _entryType?: fhir.FhirElement|undefined;
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
  public issuer?: string|undefined;
  public _issuer?: fhir.FhirElement|undefined;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  public jurisdiction?: string|undefined;
  public _jurisdiction?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceUdiCarrier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceUdiCarrier> = {}) {
    super(source);
    if (source["carrierAIDC"]) { this.carrierAIDC = source.carrierAIDC; }
    if (source["_carrierAIDC"]) { this._carrierAIDC = new fhir.FhirElement(source._carrierAIDC!); }
    if (source["carrierHRF"]) { this.carrierHRF = source.carrierHRF; }
    if (source["_carrierHRF"]) { this._carrierHRF = new fhir.FhirElement(source._carrierHRF!); }
    if (source["deviceIdentifier"]) { this.deviceIdentifier = source.deviceIdentifier; }
    if (source["_deviceIdentifier"]) { this._deviceIdentifier = new fhir.FhirElement(source._deviceIdentifier!); }
    if (source["entryType"]) { this.entryType = source.entryType; }
    if (source["_entryType"]) { this._entryType = new fhir.FhirElement(source._entryType!); }
    if (source["issuer"]) { this.issuer = source.issuer; }
    if (source["_issuer"]) { this._issuer = new fhir.FhirElement(source._issuer!); }
    if (source["jurisdiction"]) { this.jurisdiction = source.jurisdiction; }
    if (source["_jurisdiction"]) { this._jurisdiction = new fhir.FhirElement(source._jurisdiction!); }
  }
  /**
   * Check if the current DeviceUdiCarrier contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceUdiCarrier from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceUdiCarrier):DeviceUdiCarrier {
    var dest:DeviceUdiCarrier = new DeviceUdiCarrier(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceUdiCarrier is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export class DeviceDeviceName extends fhir.BackboneElement implements fhir.IDeviceDeviceName {
  /**
   * The name of the device.
   */
  public name: string|null;
  public _name?: fhir.FhirElement|undefined;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  public type: DeviceDeviceNameTypeEnum|null;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceDeviceName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceDeviceName> = {}) {
    super(source);
    this.name = null;
    if (source["name"]) { this.name = source.name; }
    if (this.name === undefined) { this.name = null }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    this.type = null;
    if (source["type"]) { this.type = source.type; }
    if (this.type === undefined) { this.type = null }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current DeviceDeviceName contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["name"] === undefined) { missingElements.push("name"); }
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceDeviceName from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceDeviceName):DeviceDeviceName {
    var dest:DeviceDeviceName = new DeviceDeviceName(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceDeviceName is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export class DeviceSpecialization extends fhir.BackboneElement implements fhir.IDeviceSpecialization {
  /**
   * The standard that is used to operate and communicate.
   */
  public systemType: fhir.CodeableConcept|null;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  public version?: string|undefined;
  public _version?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceSpecialization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceSpecialization> = {}) {
    super(source);
    this.systemType = null;
    if (source["systemType"]) { this.systemType = new fhir.CodeableConcept(source.systemType!); }
    if (this.systemType === undefined) { this.systemType = null }
    if (source["version"]) { this.version = source.version; }
    if (source["_version"]) { this._version = new fhir.FhirElement(source._version!); }
  }
  /**
   * Check if the current DeviceSpecialization contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["systemType"] === undefined) { missingElements.push("systemType"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceSpecialization from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceSpecialization):DeviceSpecialization {
    var dest:DeviceSpecialization = new DeviceSpecialization(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceSpecialization is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The actual design of the device or software version running on the device.
 */
export class DeviceVersion extends fhir.BackboneElement implements fhir.IDeviceVersion {
  /**
   * A single component of the device version.
   */
  public component?: fhir.Identifier|undefined;
  /**
   * The type of the device version.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The version text.
   */
  public value: string|null;
  public _value?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceVersion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceVersion> = {}) {
    super(source);
    if (source["component"]) { this.component = new fhir.Identifier(source.component!); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    this.value = null;
    if (source["value"]) { this.value = source.value; }
    if (this.value === undefined) { this.value = null }
    if (source["_value"]) { this._value = new fhir.FhirElement(source._value!); }
  }
  /**
   * Check if the current DeviceVersion contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["value"] === undefined) { missingElements.push("value"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceVersion from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceVersion):DeviceVersion {
    var dest:DeviceVersion = new DeviceVersion(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceVersion is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export class DeviceProperty extends fhir.BackboneElement implements fhir.IDeviceProperty {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  public valueCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Property value as a quantity.
   */
  public valueQuantity?: fhir.Quantity[]|undefined;
  /**
   * Default constructor for DeviceProperty - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceProperty> = {}) {
    super(source);
    this.type = null;
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (this.type === undefined) { this.type = null }
    if (source["valueCode"]) { this.valueCode = source.valueCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["valueQuantity"]) { this.valueQuantity = source.valueQuantity.map((x:Partial<fhir.IQuantity>) => new fhir.Quantity(x)); }
  }
  /**
   * Check if the current DeviceProperty contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceProperty from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceProperty):DeviceProperty {
    var dest:DeviceProperty = new DeviceProperty(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceProperty is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export class Device extends fhir.DomainResource implements fhir.IDevice {
  /**
   * Resource Type Name
   */
  public override resourceType: "Device";
  /**
   * used for troubleshooting etc.
   */
  public contact?: fhir.ContactPoint[]|undefined;
  /**
   * The reference to the definition for the device.
   */
  public definition?: fhir.Reference|undefined;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  public deviceName?: fhir.DeviceDeviceName[]|undefined;
  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   */
  public distinctIdentifier?: string|undefined;
  public _distinctIdentifier?: fhir.FhirElement|undefined;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  public expirationDate?: string|undefined;
  public _expirationDate?: fhir.FhirElement|undefined;
  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The place where the device can be found.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Lot number assigned by the manufacturer.
   */
  public lotNumber?: string|undefined;
  public _lotNumber?: fhir.FhirElement|undefined;
  /**
   * The date and time when the device was manufactured.
   */
  public manufactureDate?: string|undefined;
  public _manufactureDate?: fhir.FhirElement|undefined;
  /**
   * A name of the manufacturer.
   */
  public manufacturer?: string|undefined;
  public _manufacturer?: fhir.FhirElement|undefined;
  /**
   * The model number for the device.
   */
  public modelNumber?: string|undefined;
  public _modelNumber?: fhir.FhirElement|undefined;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * The parent device.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  public partNumber?: string|undefined;
  public _partNumber?: fhir.FhirElement|undefined;
  /**
   * Patient information, If the device is affixed to a person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  public property?: fhir.DeviceProperty[]|undefined;
  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  public safety?: fhir.CodeableConcept[]|undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  public serialNumber?: string|undefined;
  public _serialNumber?: fhir.FhirElement|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  public specialization?: fhir.DeviceSpecialization[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   */
  public status?: DeviceStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Reason for the dtatus of the Device availability.
   */
  public statusReason?: fhir.CodeableConcept[]|undefined;
  /**
   * The kind or type of device.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   */
  public udiCarrier?: fhir.DeviceUdiCarrier[]|undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  public url?: string|undefined;
  public _url?: fhir.FhirElement|undefined;
  /**
   * The actual design of the device or software version running on the device.
   */
  public version?: fhir.DeviceVersion[]|undefined;
  /**
   * Default constructor for Device - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDevice> = {}) {
    super(source);
    this.resourceType = 'Device';
    if (source["contact"]) { this.contact = source.contact.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
    if (source["definition"]) { this.definition = new fhir.Reference(source.definition!); }
    if (source["deviceName"]) { this.deviceName = source.deviceName.map((x:Partial<fhir.IDeviceDeviceName>) => new fhir.DeviceDeviceName(x)); }
    if (source["distinctIdentifier"]) { this.distinctIdentifier = source.distinctIdentifier; }
    if (source["_distinctIdentifier"]) { this._distinctIdentifier = new fhir.FhirElement(source._distinctIdentifier!); }
    if (source["expirationDate"]) { this.expirationDate = source.expirationDate; }
    if (source["_expirationDate"]) { this._expirationDate = new fhir.FhirElement(source._expirationDate!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["location"]) { this.location = new fhir.Reference(source.location!); }
    if (source["lotNumber"]) { this.lotNumber = source.lotNumber; }
    if (source["_lotNumber"]) { this._lotNumber = new fhir.FhirElement(source._lotNumber!); }
    if (source["manufactureDate"]) { this.manufactureDate = source.manufactureDate; }
    if (source["_manufactureDate"]) { this._manufactureDate = new fhir.FhirElement(source._manufactureDate!); }
    if (source["manufacturer"]) { this.manufacturer = source.manufacturer; }
    if (source["_manufacturer"]) { this._manufacturer = new fhir.FhirElement(source._manufacturer!); }
    if (source["modelNumber"]) { this.modelNumber = source.modelNumber; }
    if (source["_modelNumber"]) { this._modelNumber = new fhir.FhirElement(source._modelNumber!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["owner"]) { this.owner = new fhir.Reference(source.owner!); }
    if (source["parent"]) { this.parent = new fhir.Reference(source.parent!); }
    if (source["partNumber"]) { this.partNumber = source.partNumber; }
    if (source["_partNumber"]) { this._partNumber = new fhir.FhirElement(source._partNumber!); }
    if (source["patient"]) { this.patient = new fhir.Reference(source.patient!); }
    if (source["property"]) { this.property = source.property.map((x:Partial<fhir.IDeviceProperty>) => new fhir.DeviceProperty(x)); }
    if (source["safety"]) { this.safety = source.safety.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["serialNumber"]) { this.serialNumber = source.serialNumber; }
    if (source["_serialNumber"]) { this._serialNumber = new fhir.FhirElement(source._serialNumber!); }
    if (source["specialization"]) { this.specialization = source.specialization.map((x:Partial<fhir.IDeviceSpecialization>) => new fhir.DeviceSpecialization(x)); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusReason"]) { this.statusReason = source.statusReason.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source["udiCarrier"]) { this.udiCarrier = source.udiCarrier.map((x:Partial<fhir.IDeviceUdiCarrier>) => new fhir.DeviceUdiCarrier(x)); }
    if (source["url"]) { this.url = source.url; }
    if (source["_url"]) { this._url = new fhir.FhirElement(source._url!); }
    if (source["version"]) { this.version = source.version.map((x:Partial<fhir.IDeviceVersion>) => new fhir.DeviceVersion(x)); }
  }
  /**
   * Check if the current Device contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Device from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDevice):Device {
    var dest:Device = new Device(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Device is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the Device.udiCarrier.entryType field
 */
export enum DeviceUdiCarrierEntryTypeEnum {
  BARCODE = "barcode",
  RFID = "rfid",
  MANUAL = "manual",
  CARD = "card",
  SELF_REPORTED = "self-reported",
  UNKNOWN = "unknown",
}
/**
 * Code Values for the Device.deviceName.type field
 */
export enum DeviceDeviceNameTypeEnum {
  UDI_LABEL_NAME = "udi-label-name",
  USER_FRIENDLY_NAME = "user-friendly-name",
  PATIENT_REPORTED_NAME = "patient-reported-name",
  MANUFACTURER_NAME = "manufacturer-name",
  MODEL_NAME = "model-name",
  OTHER = "other",
}
/**
 * Code Values for the Device.status field
 */
export enum DeviceStatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}