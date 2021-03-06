// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Timing
import * as fhir from '../fhir.js';
import { UnitsOfTimeValueSet, } from '../fhirValueSets/UnitsOfTimeValueSet.js';
import { DaysOfWeekValueSet, } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { EventTimingValueSet, } from '../fhirValueSets/EventTimingValueSet.js';
import { TimingAbbreviationValueSet, } from '../fhirValueSets/TimingAbbreviationValueSet.js';
/**
 * A set of rules that describe when the event is scheduled.
 */
export class TimingRepeat extends fhir.FhirElement {
    /**
     * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TimingRepeat';
        this.__boundsIsChoice = true;
        /**
         * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
         */
        this.dayOfWeek = [];
        /**
         * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
         */
        this.timeOfDay = [];
        /**
         * When more than one event is listed, the event is tied to the union of the specified events.
         */
        this.when = [];
        if (source['bounds']) {
            this.bounds = source.bounds;
        }
        else if (source['boundsDuration']) {
            this.bounds = new fhir.Duration(source.boundsDuration);
        }
        else if (source['boundsRange']) {
            this.bounds = new fhir.Range(source.boundsRange);
        }
        else if (source['boundsPeriod']) {
            this.bounds = new fhir.Period(source.boundsPeriod);
        }
        if (source['count']) {
            this.count = new fhir.FhirPositiveInt({ value: source.count });
        }
        if (source['countMax']) {
            this.countMax = new fhir.FhirPositiveInt({ value: source.countMax });
        }
        if (source['duration']) {
            this.duration = new fhir.FhirDecimal({ value: source.duration });
        }
        if (source['durationMax']) {
            this.durationMax = new fhir.FhirDecimal({ value: source.durationMax });
        }
        if (source['durationUnit']) {
            this.durationUnit = source.durationUnit;
        }
        if (source['frequency']) {
            this.frequency = new fhir.FhirPositiveInt({ value: source.frequency });
        }
        if (source['frequencyMax']) {
            this.frequencyMax = new fhir.FhirPositiveInt({ value: source.frequencyMax });
        }
        if (source['period']) {
            this.period = new fhir.FhirDecimal({ value: source.period });
        }
        if (source['periodMax']) {
            this.periodMax = new fhir.FhirDecimal({ value: source.periodMax });
        }
        if (source['periodUnit']) {
            this.periodUnit = source.periodUnit;
        }
        if (source['dayOfWeek']) {
            this.dayOfWeek = source.dayOfWeek.map((x) => x);
        }
        if (source['timeOfDay']) {
            this.timeOfDay = source.timeOfDay.map((x) => new fhir.FhirTime({ value: x }));
        }
        if (source['when']) {
            this.when = source.when.map((x) => new fhir.FhirCode({ value: x }));
        }
        if (source['offset']) {
            this.offset = new fhir.FhirUnsignedInt({ value: source.offset });
        }
    }
    /**
     * Required-bound Value Set for durationUnit
     */
    static durationUnitRequiredValueSet() {
        return UnitsOfTimeValueSet;
    }
    /**
     * Required-bound Value Set for periodUnit
     */
    static periodUnitRequiredValueSet() {
        return UnitsOfTimeValueSet;
    }
    /**
     * Required-bound Value Set for dayOfWeek
     */
    static dayOfWeekRequiredValueSet() {
        return DaysOfWeekValueSet;
    }
    /**
     * Required-bound Value Set for when
     */
    static whenRequiredValueSet() {
        return EventTimingValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["count"]) {
            outcome.issue.push(...this.count.doModelValidation().issue);
        }
        if (this["countMax"]) {
            outcome.issue.push(...this.countMax.doModelValidation().issue);
        }
        if (this["duration"]) {
            outcome.issue.push(...this.duration.doModelValidation().issue);
        }
        if (this["durationMax"]) {
            outcome.issue.push(...this.durationMax.doModelValidation().issue);
        }
        if (this["frequency"]) {
            outcome.issue.push(...this.frequency.doModelValidation().issue);
        }
        if (this["frequencyMax"]) {
            outcome.issue.push(...this.frequencyMax.doModelValidation().issue);
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["periodMax"]) {
            outcome.issue.push(...this.periodMax.doModelValidation().issue);
        }
        if (this["timeOfDay"]) {
            this.timeOfDay.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["when"]) {
            this.when.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["offset"]) {
            outcome.issue.push(...this.offset.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export class Timing extends fhir.BackboneElement {
    /**
     * Default constructor for Timing - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Timing';
        /**
         * Identifies specific times when the event occurs.
         */
        this.event = [];
        if (source['event']) {
            this.event = source.event.map((x) => new fhir.FhirDateTime({ value: x }));
        }
        if (source['repeat']) {
            this.repeat = new fhir.TimingRepeat(source.repeat);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
    }
    /**
     * Preferred-bound Value Set for code
     */
    static codePreferredValueSet() {
        return TimingAbbreviationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["event"]) {
            this.event.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["repeat"]) {
            outcome.issue.push(...this.repeat.doModelValidation().issue);
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=Timing.js.map