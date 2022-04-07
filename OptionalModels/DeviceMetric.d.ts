import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export declare class DeviceMetricCalibration extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceMetricCalibration {
    /**
     * Describes the state of the calibration.
     */
    state?: DeviceMetricCalibrationStateEnum | undefined;
    _state?: fhirModels.Element | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: string | undefined;
    _time?: fhirModels.Element | undefined;
    /**
     * Describes the type of the calibration method.
     */
    type?: DeviceMetricCalibrationTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for DeviceMetricCalibration from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceMetricCalibration>);
    /**
     * Factory function to create a DeviceMetricCalibration from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceMetricCalibration): DeviceMetricCalibration;
    /**
     * Check if the current DeviceMetricCalibration contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the DeviceMetric.calibration.state field
 */
export declare enum DeviceMetricCalibrationStateEnum {
    NOT_CALIBRATED = "not-calibrated",
    CALIBRATION_REQUIRED = "calibration-required",
    CALIBRATED = "calibrated",
    UNSPECIFIED = "unspecified"
}
/**
 * Code Values for the DeviceMetric.calibration.type field
 */
export declare enum DeviceMetricCalibrationTypeEnum {
    UNSPECIFIED = "unspecified",
    OFFSET = "offset",
    GAIN = "gain",
    TWO_POINT = "two-point"
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export declare class DeviceMetric extends fhirModels.DomainResource implements fhirInterfaces.IDeviceMetric {
    /**
     * Resource Type Name
     */
    readonly resourceType = "DeviceMetric";
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhirModels.DeviceMetricCalibration[] | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category?: DeviceMetricCategoryEnum | undefined;
    _category?: fhirModels.Element | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: DeviceMetricColorEnum | undefined;
    _color?: fhirModels.Element | undefined;
    /**
     * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhirModels.Timing | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: DeviceMetricOperationalStatusEnum | undefined;
    _operationalStatus?: fhirModels.Element | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhirModels.Reference | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhirModels.Reference | undefined;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for DeviceMetric from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IDeviceMetric>);
    /**
     * Factory function to create a DeviceMetric from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IDeviceMetric): DeviceMetric;
    /**
     * Check if the current DeviceMetric contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the DeviceMetric.category field
 */
export declare enum DeviceMetricCategoryEnum {
    MEASUREMENT = "measurement",
    SETTING = "setting",
    CALCULATION = "calculation",
    UNSPECIFIED = "unspecified"
}
/**
 * Code Values for the DeviceMetric.color field
 */
export declare enum DeviceMetricColorEnum {
    BLACK = "black",
    RED = "red",
    GREEN = "green",
    YELLOW = "yellow",
    BLUE = "blue",
    MAGENTA = "magenta",
    CYAN = "cyan",
    WHITE = "white"
}
/**
 * Code Values for the DeviceMetric.operationalStatus field
 */
export declare enum DeviceMetricOperationalStatusEnum {
    ON = "on",
    OFF = "off",
    STANDBY = "standby",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=DeviceMetric.d.ts.map