import * as fhir from '../fhir.js';
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare type IPeriod = fhir.IFhirElement & {
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Period.end
     */
    _end?: fhir.IFhirElement | undefined;
};
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare class Period extends fhir.FhirElement implements IPeriod {
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Period.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Period - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPeriod>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Period.d.ts.map