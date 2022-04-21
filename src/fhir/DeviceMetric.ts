// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceMetric

import * as fhir from '../fhir.js'

import { MetricCalibrationTypeValueSet, MetricCalibrationTypeValueSetType, MetricCalibrationTypeValueSetEnum } from '../fhirValueSets/MetricCalibrationTypeValueSet.js'
import { MetricCalibrationStateValueSet, MetricCalibrationStateValueSetType, MetricCalibrationStateValueSetEnum } from '../fhirValueSets/MetricCalibrationStateValueSet.js'
import { MetricOperationalStatusValueSet, MetricOperationalStatusValueSetType, MetricOperationalStatusValueSetEnum } from '../fhirValueSets/MetricOperationalStatusValueSet.js'
import { MetricColorValueSet, MetricColorValueSetType, MetricColorValueSetEnum } from '../fhirValueSets/MetricColorValueSet.js'
import { MetricCategoryValueSet, MetricCategoryValueSetType, MetricCategoryValueSetEnum } from '../fhirValueSets/MetricCategoryValueSet.js'

/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export type IDeviceMetricCalibration = fhir.IBackboneElement & { 
  /**
   * Describes the type of the calibration method.
   */
  type?: MetricCalibrationTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * Describes the state of the calibration.
   */
  state?: MetricCalibrationStateValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.state
   */
  _state?: fhir.IFhirElement|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  time?: string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.time
   */
  _time?: fhir.IFhirElement|undefined;
}

/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export type IDeviceMetric = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "DeviceMetric";
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  type: fhir.ICodeableConcept|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  unit?: fhir.ICodeableConcept|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  source?: fhir.IReference|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  parent?: fhir.IReference|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  operationalStatus?: MetricOperationalStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.operationalStatus
   */
  _operationalStatus?: fhir.IFhirElement|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  color?: MetricColorValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.color
   */
  _color?: fhir.IFhirElement|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  category: MetricCategoryValueSetEnum|null;
  /**
   * Extended properties for primitive element: DeviceMetric.category
   */
  _category?: fhir.IFhirElement|undefined;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  measurementPeriod?: fhir.ITiming|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  calibration?: fhir.IDeviceMetricCalibration[]|undefined;
}

/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export class DeviceMetricCalibration extends fhir.BackboneElement implements IDeviceMetricCalibration {
  /**
   * Describes the type of the calibration method.
   */
  public type?: MetricCalibrationTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * Describes the state of the calibration.
   */
  public state?: MetricCalibrationStateValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.state
   */
  public _state?: fhir.FhirElement|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  public time?: string|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.calibration.time
   */
  public _time?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IDeviceMetricCalibration> = { }) {
    super(source);
    if (source['type']) { this.type = source.type; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['state']) { this.state = source.state; }
    if (source['_state']) { this._state = new fhir.FhirElement(source._state!); }
    if (source['time']) { this.time = source.time; }
    if (source['_time']) { this._time = new fhir.FhirElement(source._time!); }
  }
  /**
   * Required-bound Value Set for type
   */
  public typeRequiredValueSet():MetricCalibrationTypeValueSetType {
    return MetricCalibrationTypeValueSet;
  }
  /**
   * Required-bound Value Set for state
   */
  public stateRequiredValueSet():MetricCalibrationStateValueSetType {
    return MetricCalibrationStateValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["_state"]) { results.push(...this._state.doModelValidation()); }
    if (this["_time"]) { results.push(...this._time.doModelValidation()); }
    return results;
  }
}

/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends fhir.DomainResource implements IDeviceMetric {
  /**
   * Resource Type Name
   */
  public resourceType: "DeviceMetric";
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  public operationalStatus?: MetricOperationalStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.operationalStatus
   */
  public _operationalStatus?: fhir.FhirElement|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  public color?: MetricColorValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: DeviceMetric.color
   */
  public _color?: fhir.FhirElement|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  public category: MetricCategoryValueSetEnum|null;
  /**
   * Extended properties for primitive element: DeviceMetric.category
   */
  public _category?: fhir.FhirElement|undefined;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  public measurementPeriod?: fhir.Timing|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  public calibration?: fhir.DeviceMetricCalibration[]|undefined;
  /**
   * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IDeviceMetric> = { }) {
    super(source);
    this.resourceType = 'DeviceMetric';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit!); }
    if (source['source']) { this.source = new fhir.Reference(source.source!); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent!); }
    if (source['operationalStatus']) { this.operationalStatus = source.operationalStatus; }
    if (source['_operationalStatus']) { this._operationalStatus = new fhir.FhirElement(source._operationalStatus!); }
    if (source['color']) { this.color = source.color; }
    if (source['_color']) { this._color = new fhir.FhirElement(source._color!); }
    if (source['category']) { this.category = source.category; }
    else { this.category = null; }
    if (source['_category']) { this._category = new fhir.FhirElement(source._category!); }
    if (source['measurementPeriod']) { this.measurementPeriod = new fhir.Timing(source.measurementPeriod!); }
    if (source['calibration']) { this.calibration = source.calibration.map((x) => new fhir.DeviceMetricCalibration(x)); }
  }
  /**
   * Required-bound Value Set for operationalStatus
   */
  public operationalStatusRequiredValueSet():MetricOperationalStatusValueSetType {
    return MetricOperationalStatusValueSet;
  }
  /**
   * Required-bound Value Set for color
   */
  public colorRequiredValueSet():MetricColorValueSetType {
    return MetricColorValueSet;
  }
  /**
   * Required-bound Value Set for category
   */
  public categoryRequiredValueSet():MetricCategoryValueSetType {
    return MetricCategoryValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: DeviceMetric.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["type"]) { results.push(["type",'Missing required element: DeviceMetric.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["unit"]) { results.push(...this.unit.doModelValidation()); }
    if (this["source"]) { results.push(...this.source.doModelValidation()); }
    if (this["parent"]) { results.push(...this.parent.doModelValidation()); }
    if (this["_operationalStatus"]) { results.push(...this._operationalStatus.doModelValidation()); }
    if (this["_color"]) { results.push(...this._color.doModelValidation()); }
    if (!this["category"]) { results.push(["category",'Missing required element: DeviceMetric.category']); }
    if (this["_category"]) { results.push(...this._category.doModelValidation()); }
    if (this["measurementPeriod"]) { results.push(...this.measurementPeriod.doModelValidation()); }
    if (this["calibration"]) { this.calibration.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
