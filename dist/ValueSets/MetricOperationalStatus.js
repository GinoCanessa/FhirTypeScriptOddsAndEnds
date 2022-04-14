"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricOperationalStatus = void 0;
/**
 * Describes the operational status of the DeviceMetric.
 */
exports.MetricOperationalStatus = {
    /**
     * The DeviceMetric was entered in error.
     */
    metric_operational_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/metric-operational-status"
    },
    /**
     * The DeviceMetric is not operating.
     */
    metric_operational_status_Off: {
        code: "off",
        display: "Off",
        system: "http://hl7.org/fhir/metric-operational-status"
    },
    /**
     * The DeviceMetric is operating and will generate DeviceObservations.
     */
    metric_operational_status_On: {
        code: "on",
        display: "On",
        system: "http://hl7.org/fhir/metric-operational-status"
    },
    /**
     * The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    metric_operational_status_Standby: {
        code: "standby",
        display: "Standby",
        system: "http://hl7.org/fhir/metric-operational-status"
    },
};
//# sourceMappingURL=MetricOperationalStatus.js.map