// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export interface IDeviceMetricCalibration extends fhirInterfaces.IBackboneElement {
  /**
   * Describes the state of the calibration.
   */
  state?: DeviceMetricCalibrationStateEnum|undefined;
  _state?: fhirInterfaces.IElement|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  time?: string|undefined;
  _time?: fhirInterfaces.IElement|undefined;
  /**
   * Describes the type of the calibration method.
   */
  type?: DeviceMetricCalibrationTypeEnum|undefined;
  _type?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the DeviceMetric.calibration.state field
 */
export enum DeviceMetricCalibrationStateEnum {
  NOT_CALIBRATED = "not-calibrated",
  CALIBRATION_REQUIRED = "calibration-required",
  CALIBRATED = "calibrated",
  UNSPECIFIED = "unspecified",
}
/**
 * Code Values for the DeviceMetric.calibration.type field
 */
export enum DeviceMetricCalibrationTypeEnum {
  UNSPECIFIED = "unspecified",
  OFFSET = "offset",
  GAIN = "gain",
  TWO_POINT = "two-point",
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export interface IDeviceMetric extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "DeviceMetric";
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  calibration?: fhirInterfaces.IDeviceMetricCalibration[]|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  category: DeviceMetricCategoryEnum;
  _category?: fhirInterfaces.IElement|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  color?: DeviceMetricColorEnum|undefined;
  _color?: fhirInterfaces.IElement|undefined;
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  measurementPeriod?: fhirInterfaces.ITiming|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  operationalStatus?: DeviceMetricOperationalStatusEnum|undefined;
  _operationalStatus?: fhirInterfaces.IElement|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  parent?: fhirInterfaces.IReference|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  source?: fhirInterfaces.IReference|undefined;
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  type: fhirInterfaces.ICodeableConcept;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  unit?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * Code Values for the DeviceMetric.category field
 */
export enum DeviceMetricCategoryEnum {
  MEASUREMENT = "measurement",
  SETTING = "setting",
  CALCULATION = "calculation",
  UNSPECIFIED = "unspecified",
}
/**
 * Code Values for the DeviceMetric.color field
 */
export enum DeviceMetricColorEnum {
  BLACK = "black",
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
  BLUE = "blue",
  MAGENTA = "magenta",
  CYAN = "cyan",
  WHITE = "white",
}
/**
 * Code Values for the DeviceMetric.operationalStatus field
 */
export enum DeviceMetricOperationalStatusEnum {
  ON = "on",
  OFF = "off",
  STANDBY = "standby",
  ENTERED_IN_ERROR = "entered-in-error",
}
