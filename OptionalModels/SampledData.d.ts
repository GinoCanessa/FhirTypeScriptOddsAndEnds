import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export declare class SampledData extends fhirModels.Element implements fhirInterfaces.ISampledData {
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    _data?: fhirModels.Element | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions?: number | undefined;
    _dimensions?: fhirModels.Element | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    _lowerLimit?: fhirModels.Element | undefined;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin?: fhirModels.Quantity | undefined;
    /**
     * This is usually a whole number.
     */
    period?: number | undefined;
    _period?: fhirModels.Element | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    _upperLimit?: fhirModels.Element | undefined;
    /**
     * Default constructor for SampledData from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISampledData>);
    /**
     * Factory function to create a SampledData from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISampledData): SampledData;
    /**
     * Check if the current SampledData contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SampledData.d.ts.map