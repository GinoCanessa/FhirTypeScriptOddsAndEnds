import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare class Period extends fhirModels.Element implements fhirInterfaces.IPeriod {
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
     */
    end?: string | undefined;
    _end?: fhirModels.Element | undefined;
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    _start?: fhirModels.Element | undefined;
    /**
     * Default constructor for Period from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IPeriod);
}
//# sourceMappingURL=Period.d.ts.map