import * as fhir from '../fhir.js';
import { MetricCalibrationTypeValueSetType, MetricCalibrationTypeValueSetEnum } from '../fhirValueSets/MetricCalibrationTypeValueSet.js';
import { MetricCalibrationStateValueSetType, MetricCalibrationStateValueSetEnum } from '../fhirValueSets/MetricCalibrationStateValueSet.js';
import { MetricOperationalStatusValueSetType, MetricOperationalStatusValueSetEnum } from '../fhirValueSets/MetricOperationalStatusValueSet.js';
import { MetricColorValueSetType, MetricColorValueSetEnum } from '../fhirValueSets/MetricColorValueSet.js';
import { MetricCategoryValueSetType, MetricCategoryValueSetEnum } from '../fhirValueSets/MetricCategoryValueSet.js';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export declare type IDeviceMetricCalibration = fhir.IBackboneElement & {
    /**
     * Describes the type of the calibration method.
     */
    type?: MetricCalibrationTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: MetricCalibrationStateValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.state
     */
    _state?: fhir.IFhirElement | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.time
     */
    _time?: fhir.IFhirElement | undefined;
};
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export declare type IDeviceMetric = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric";
    /**
     * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhir.ICodeableConcept | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhir.IReference | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.IReference | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: MetricOperationalStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.operationalStatus
     */
    _operationalStatus?: fhir.IFhirElement | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: MetricColorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.color
     */
    _color?: fhir.IFhirElement | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: MetricCategoryValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceMetric.category
     */
    _category?: fhir.IFhirElement | undefined;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.ITiming | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhir.IDeviceMetricCalibration[] | undefined;
};
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export declare class DeviceMetricCalibration extends fhir.BackboneElement implements IDeviceMetricCalibration {
    /**
     * Describes the type of the calibration method.
     */
    type?: MetricCalibrationTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: MetricCalibrationStateValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.state
     */
    _state?: fhir.FhirElement | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.time
     */
    _time?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceMetricCalibration>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): MetricCalibrationTypeValueSetType;
    /**
     * Required-bound Value Set for state
     */
    stateRequiredValueSet(): MetricCalibrationStateValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export declare class DeviceMetric extends fhir.DomainResource implements IDeviceMetric {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric";
    /**
     * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type: fhir.CodeableConcept | null;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhir.Reference | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: MetricOperationalStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.operationalStatus
     */
    _operationalStatus?: fhir.FhirElement | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: MetricColorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.color
     */
    _color?: fhir.FhirElement | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: MetricCategoryValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceMetric.category
     */
    _category?: fhir.FhirElement | undefined;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.Timing | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhir.DeviceMetricCalibration[] | undefined;
    /**
     * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceMetric>);
    /**
     * Required-bound Value Set for operationalStatus
     */
    operationalStatusRequiredValueSet(): MetricOperationalStatusValueSetType;
    /**
     * Required-bound Value Set for color
     */
    colorRequiredValueSet(): MetricColorValueSetType;
    /**
     * Required-bound Value Set for category
     */
    categoryRequiredValueSet(): MetricCategoryValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=DeviceMetric.d.ts.map