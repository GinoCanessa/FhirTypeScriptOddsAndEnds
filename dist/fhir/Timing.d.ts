import * as fhir from '../fhir';
/**
 * A set of rules that describe when the event is scheduled.
 */
export declare type ITimingRepeat = fhir.IFhirElement & {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: fhir.IDuration | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.IRange | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.IPeriod | undefined;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: number | undefined;
    _count?: fhir.IFhirElement | undefined;
    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: number | undefined;
    _countMax?: fhir.IFhirElement | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek?: TimingRepeatDayOfWeekEnum[] | undefined;
    _dayOfWeek?: fhir.IFhirElement[] | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: number | undefined;
    _duration?: fhir.IFhirElement | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: number | undefined;
    _durationMax?: fhir.IFhirElement | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: TimingRepeatDurationUnitEnum | undefined;
    _durationUnit?: fhir.IFhirElement | undefined;
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number | undefined;
    _frequency?: fhir.IFhirElement | undefined;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number | undefined;
    _frequencyMax?: fhir.IFhirElement | undefined;
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number | undefined;
    _offset?: fhir.IFhirElement | undefined;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: number | undefined;
    _period?: fhir.IFhirElement | undefined;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number | undefined;
    _periodMax?: fhir.IFhirElement | undefined;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: TimingRepeatPeriodUnitEnum | undefined;
    _periodUnit?: fhir.IFhirElement | undefined;
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay?: string[] | undefined;
    _timeOfDay?: fhir.IFhirElement[] | undefined;
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when?: string[] | undefined;
    _when?: fhir.IFhirElement[] | undefined;
};
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export declare type ITiming = fhir.IBackboneElement & {
    /**
     * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Identifies specific times when the event occurs.
     */
    event?: string[] | undefined;
    _event?: fhir.IFhirElement[] | undefined;
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.ITimingRepeat | undefined;
};
/**
 * A set of rules that describe when the event is scheduled.
 */
export declare class TimingRepeat extends fhir.FhirElement implements fhir.ITimingRepeat {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: fhir.Duration | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.Range | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.Period | undefined;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: number | undefined;
    _count?: fhir.FhirElement | undefined;
    /**
     * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
     */
    countMax?: number | undefined;
    _countMax?: fhir.FhirElement | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek?: TimingRepeatDayOfWeekEnum[] | undefined;
    _dayOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: number | undefined;
    _duration?: fhir.FhirElement | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: number | undefined;
    _durationMax?: fhir.FhirElement | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: TimingRepeatDurationUnitEnum | undefined;
    _durationUnit?: fhir.FhirElement | undefined;
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number | undefined;
    _frequency?: fhir.FhirElement | undefined;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number | undefined;
    _frequencyMax?: fhir.FhirElement | undefined;
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number | undefined;
    _offset?: fhir.FhirElement | undefined;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: number | undefined;
    _period?: fhir.FhirElement | undefined;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number | undefined;
    _periodMax?: fhir.FhirElement | undefined;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: TimingRepeatPeriodUnitEnum | undefined;
    _periodUnit?: fhir.FhirElement | undefined;
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay?: string[] | undefined;
    _timeOfDay?: fhir.FhirElement[] | undefined;
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when?: string[] | undefined;
    _when?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITimingRepeat>);
    /**
     * Check if the current TimingRepeat contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a TimingRepeat from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ITimingRepeat): TimingRepeat;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export declare class Timing extends fhir.BackboneElement implements fhir.ITiming {
    /**
     * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Identifies specific times when the event occurs.
     */
    event?: string[] | undefined;
    _event?: fhir.FhirElement[] | undefined;
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * Default constructor for Timing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITiming>);
    /**
     * Check if the current Timing contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Timing from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ITiming): Timing;
}
/**
 * Code Values for the Timing.repeat.dayOfWeek field
 */
export declare enum TimingRepeatDayOfWeekEnum {
    MON = "mon",
    TUE = "tue",
    WED = "wed",
    THU = "thu",
    FRI = "fri",
    SAT = "sat",
    SUN = "sun"
}
/**
 * Code Values for the Timing.repeat.durationUnit field
 */
export declare enum TimingRepeatDurationUnitEnum {
    S = "s",
    MIN = "min",
    H = "h",
    D = "d",
    WK = "wk",
    MO = "mo",
    A = "a"
}
/**
 * Code Values for the Timing.repeat.periodUnit field
 */
export declare enum TimingRepeatPeriodUnitEnum {
    S = "s",
    MIN = "min",
    H = "h",
    D = "d",
    WK = "wk",
    MO = "mo",
    A = "a"
}
//# sourceMappingURL=Timing.d.ts.map