import * as fhir from '../fhir';
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare type IPeriod = fhir.IFhirElement & {
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    _start?: fhir.IFhirElement | undefined;
};
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare class Period extends fhir.FhirElement implements fhir.IPeriod {
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    _start?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Period - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPeriod>);
    /**
     * Check if the current Period contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Period from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPeriod): Period;
}
//# sourceMappingURL=Period.d.ts.map