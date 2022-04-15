import * as fhir from '../fhir';
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export interface ISampledData extends fhir.IFhirElement {
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    _data?: fhir.IFhirElement | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: number | null;
    _dimensions?: fhir.IFhirElement | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    _lowerLimit?: fhir.IFhirElement | undefined;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.IQuantity | null;
    /**
     * This is usually a whole number.
     */
    period: number | null;
    _period?: fhir.IFhirElement | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    _upperLimit?: fhir.IFhirElement | undefined;
}
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export declare class SampledData extends fhir.FhirElement implements fhir.ISampledData {
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: string | undefined;
    _data?: fhir.FhirElement | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: number | null;
    _dimensions?: fhir.FhirElement | undefined;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    _lowerLimit?: fhir.FhirElement | undefined;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.Quantity | null;
    /**
     * This is usually a whole number.
     */
    period: number | null;
    _period?: fhir.FhirElement | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    _upperLimit?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SampledData - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a SampledData from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.ISampledData>): SampledData;
    /**
     * Check if the current SampledData contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SampledData from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.ISampledData): SampledData;
}
//# sourceMappingURL=SampledData.d.ts.map