import * as fhir from '../fhir.js';
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export declare type ISampledData = fhir.IFhirElement & {
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.IQuantity | null;
    /**
     * This is usually a whole number.
     */
    period: number | null;
    /**
     * Extended properties for primitive element: SampledData.period
     */
    _period?: fhir.IFhirElement | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.lowerLimit
     */
    _lowerLimit?: fhir.IFhirElement | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.upperLimit
     */
    _upperLimit?: fhir.IFhirElement | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: number | null;
    /**
     * Extended properties for primitive element: SampledData.dimensions
     */
    _dimensions?: fhir.IFhirElement | undefined;
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: SampledData.data
     */
    _data?: fhir.IFhirElement | undefined;
};
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export declare class SampledData extends fhir.FhirElement implements ISampledData {
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.Quantity | null;
    /**
     * This is usually a whole number.
     */
    period: number | null;
    /**
     * Extended properties for primitive element: SampledData.period
     */
    _period?: fhir.FhirElement | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.lowerLimit
     */
    _lowerLimit?: fhir.FhirElement | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.upperLimit
     */
    _upperLimit?: fhir.FhirElement | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: number | null;
    /**
     * Extended properties for primitive element: SampledData.dimensions
     */
    _dimensions?: fhir.FhirElement | undefined;
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: SampledData.data
     */
    _data?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SampledData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISampledData>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SampledData.d.ts.map