import * as fhirInterfaces from '../strictinterfaces';
/**
 * A time period defined by a start and end date and optionally time.
 */
export interface IPeriod extends fhirInterfaces.IElement {
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    _start?: fhirInterfaces.IElement | undefined;
}
//# sourceMappingURL=IPeriod.d.ts.map