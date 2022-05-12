// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-category|4.0.1
import { Coding } from '../fhir.js';
/**
 * Describes the category of the metric.
 */
export const MetricCategoryValueSet = {
    /**
     * calculation: DeviceObservations generated for this DeviceMetric are calculated.
     */
    Calculation: new Coding({
        display: "Calculation",
        code: "calculation",
        system: "http://hl7.org/fhir/metric-category",
    }),
    /**
     * measurement: DeviceObservations generated for this DeviceMetric are measured.
     */
    Measurement: new Coding({
        display: "Measurement",
        code: "measurement",
        system: "http://hl7.org/fhir/metric-category",
    }),
    /**
     * setting: DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    Setting: new Coding({
        display: "Setting",
        code: "setting",
        system: "http://hl7.org/fhir/metric-category",
    }),
    /**
     * unspecified: The category of this DeviceMetric is unspecified.
     */
    Unspecified: new Coding({
        display: "Unspecified",
        code: "unspecified",
        system: "http://hl7.org/fhir/metric-category",
    }),
};
/**
 * Describes the category of the metric.
 */
//# sourceMappingURL=MetricCategoryValueSet.js.map