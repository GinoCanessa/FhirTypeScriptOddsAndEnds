import { Coding } from '../strictmodels';
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare const MetricOperationalStatus: {
    /**
     * The DeviceMetric was entered in error.
     */
    metric_operational_status_EnteredInError: Coding;
    /**
     * The DeviceMetric is not operating.
     */
    metric_operational_status_Off: Coding;
    /**
     * The DeviceMetric is operating and will generate DeviceObservations.
     */
    metric_operational_status_On: Coding;
    /**
     * The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    metric_operational_status_Standby: Coding;
};
//# sourceMappingURL=MetricOperationalStatus.d.ts.map