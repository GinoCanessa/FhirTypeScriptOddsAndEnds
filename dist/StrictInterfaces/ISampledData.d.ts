import * as fhirInterfaces from '../strictinterfaces';
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export interface ISampledData extends fhirInterfaces.IElement {
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    _data?: fhirInterfaces.IElement | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: number;
    _dimensions?: fhirInterfaces.IElement | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    _lowerLimit?: fhirInterfaces.IElement | undefined;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhirInterfaces.IQuantity;
    /**
     * This is usually a whole number.
     */
    period: number;
    _period?: fhirInterfaces.IElement | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    _upperLimit?: fhirInterfaces.IElement | undefined;
}
//# sourceMappingURL=ISampledData.d.ts.map