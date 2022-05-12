import * as fhir from '../fhir.js';
import { MetricCalibrationTypeValueSetType } from '../fhirValueSets/MetricCalibrationTypeValueSet.js';
import { MetricCalibrationTypeValueSetEnum } from '../valueSetEnums.js';
import { MetricCalibrationStateValueSetType } from '../fhirValueSets/MetricCalibrationStateValueSet.js';
import { MetricCalibrationStateValueSetEnum } from '../valueSetEnums.js';
import { MetricOperationalStatusValueSetType } from '../fhirValueSets/MetricOperationalStatusValueSet.js';
import { MetricOperationalStatusValueSetEnum } from '../valueSetEnums.js';
import { MetricColorValueSetType } from '../fhirValueSets/MetricColorValueSet.js';
import { MetricColorValueSetEnum } from '../valueSetEnums.js';
import { MetricCategoryValueSetType } from '../fhirValueSets/MetricCategoryValueSet.js';
import { MetricCategoryValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the DeviceMetricCalibration type.
 */
export interface DeviceMetricCalibrationArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of the calibration method.
     */
    type?: MetricCalibrationTypeValueSetEnum | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: MetricCalibrationStateValueSetEnum | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: fhir.FhirInstant | string | undefined;
}
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export declare class DeviceMetricCalibration extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Describes the type of the calibration method.
     */
    type?: MetricCalibrationTypeValueSetEnum | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: MetricCalibrationStateValueSetEnum | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: fhir.FhirInstant | undefined;
    /**
     * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceMetricCalibrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): MetricCalibrationTypeValueSetType;
    /**
     * Required-bound Value Set for state
     */
    static stateRequiredValueSet(): MetricCalibrationStateValueSetType;
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
 * Valid arguments for the DeviceMetric type.
 */
export interface DeviceMetricArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric" | undefined;
    /**
     * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: MetricOperationalStatusValueSetEnum | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: MetricColorValueSetEnum | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: MetricCategoryValueSetEnum | null;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.TimingArgs | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhir.DeviceMetricCalibrationArgs[] | undefined;
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export declare class DeviceMetric extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: MetricColorValueSetEnum | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: MetricCategoryValueSetEnum | null;
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
    constructor(source?: Partial<DeviceMetricArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for operationalStatus
     */
    static operationalStatusRequiredValueSet(): MetricOperationalStatusValueSetType;
    /**
     * Required-bound Value Set for color
     */
    static colorRequiredValueSet(): MetricColorValueSetType;
    /**
     * Required-bound Value Set for category
     */
    static categoryRequiredValueSet(): MetricCategoryValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=DeviceMetric.d.ts.map