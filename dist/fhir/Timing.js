var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A set of rules that describe when the event is scheduled.
 */
var TimingRepeat = /** @class */ (function (_super) {
    __extends(TimingRepeat, _super);
    /**
     * Default constructor for TimingRepeat - initializes required elements to null.
     */
    function TimingRepeat() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a TimingRepeat from an object that MAY NOT contain all required elements.
     */
    TimingRepeat.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["boundsDuration"] !== undefined) {
            dest.boundsDuration = fhir.Duration.FactoryCreate(source.boundsDuration);
        }
        if (source["boundsRange"] !== undefined) {
            dest.boundsRange = fhir.Range.FactoryCreate(source.boundsRange);
        }
        if (source["boundsPeriod"] !== undefined) {
            dest.boundsPeriod = fhir.Period.FactoryCreate(source.boundsPeriod);
        }
        if (source["count"] !== undefined) {
            dest.count = source.count;
        }
        if (source["_count"] !== undefined) {
            dest._count = fhir.FhirElement.FactoryCreate(source._count);
        }
        if (source["countMax"] !== undefined) {
            dest.countMax = source.countMax;
        }
        if (source["_countMax"] !== undefined) {
            dest._countMax = fhir.FhirElement.FactoryCreate(source._countMax);
        }
        if (source["dayOfWeek"] !== undefined) {
            dest.dayOfWeek = source.dayOfWeek.map(function (x) { return (x); });
        }
        if (source["_dayOfWeek"] !== undefined) {
            dest._dayOfWeek = source._dayOfWeek.map(function (x) { return fhir.FhirElement.FactoryCreate(x); });
        }
        if (source["duration"] !== undefined) {
            dest.duration = source.duration;
        }
        if (source["_duration"] !== undefined) {
            dest._duration = fhir.FhirElement.FactoryCreate(source._duration);
        }
        if (source["durationMax"] !== undefined) {
            dest.durationMax = source.durationMax;
        }
        if (source["_durationMax"] !== undefined) {
            dest._durationMax = fhir.FhirElement.FactoryCreate(source._durationMax);
        }
        if (source["durationUnit"] !== undefined) {
            dest.durationUnit = source.durationUnit;
        }
        if (source["_durationUnit"] !== undefined) {
            dest._durationUnit = fhir.FhirElement.FactoryCreate(source._durationUnit);
        }
        if (source["frequency"] !== undefined) {
            dest.frequency = source.frequency;
        }
        if (source["_frequency"] !== undefined) {
            dest._frequency = fhir.FhirElement.FactoryCreate(source._frequency);
        }
        if (source["frequencyMax"] !== undefined) {
            dest.frequencyMax = source.frequencyMax;
        }
        if (source["_frequencyMax"] !== undefined) {
            dest._frequencyMax = fhir.FhirElement.FactoryCreate(source._frequencyMax);
        }
        if (source["offset"] !== undefined) {
            dest.offset = source.offset;
        }
        if (source["_offset"] !== undefined) {
            dest._offset = fhir.FhirElement.FactoryCreate(source._offset);
        }
        if (source["period"] !== undefined) {
            dest.period = source.period;
        }
        if (source["_period"] !== undefined) {
            dest._period = fhir.FhirElement.FactoryCreate(source._period);
        }
        if (source["periodMax"] !== undefined) {
            dest.periodMax = source.periodMax;
        }
        if (source["_periodMax"] !== undefined) {
            dest._periodMax = fhir.FhirElement.FactoryCreate(source._periodMax);
        }
        if (source["periodUnit"] !== undefined) {
            dest.periodUnit = source.periodUnit;
        }
        if (source["_periodUnit"] !== undefined) {
            dest._periodUnit = fhir.FhirElement.FactoryCreate(source._periodUnit);
        }
        if (source["timeOfDay"] !== undefined) {
            dest.timeOfDay = source.timeOfDay.map(function (x) { return (x); });
        }
        if (source["_timeOfDay"] !== undefined) {
            dest._timeOfDay = source._timeOfDay.map(function (x) { return fhir.FhirElement.FactoryCreate(x); });
        }
        if (source["when"] !== undefined) {
            dest.when = source.when.map(function (x) { return (x); });
        }
        if (source["_when"] !== undefined) {
            dest._when = source._when.map(function (x) { return fhir.FhirElement.FactoryCreate(x); });
        }
        return dest;
    };
    /**
     * Check if the current TimingRepeat contains all required elements.
     */
    TimingRepeat.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a TimingRepeat from an object that MUST contain all required elements.
     */
    TimingRepeat.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "TimingRepeat is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return TimingRepeat;
}(fhir.FhirElement));
export { TimingRepeat };
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
var Timing = /** @class */ (function (_super) {
    __extends(Timing, _super);
    /**
     * Default constructor for Timing - initializes required elements to null.
     */
    function Timing() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a Timing from an object that MAY NOT contain all required elements.
     */
    Timing.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["code"] !== undefined) {
            dest.code = fhir.CodeableConcept.FactoryCreate(source.code);
        }
        if (source["event"] !== undefined) {
            dest.event = source.event.map(function (x) { return (x); });
        }
        if (source["_event"] !== undefined) {
            dest._event = source._event.map(function (x) { return fhir.FhirElement.FactoryCreate(x); });
        }
        if (source["repeat"] !== undefined) {
            dest.repeat = fhir.TimingRepeat.FactoryCreate(source.repeat);
        }
        return dest;
    };
    /**
     * Check if the current Timing contains all required elements.
     */
    Timing.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a Timing from an object that MUST contain all required elements.
     */
    Timing.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Timing is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return Timing;
}(fhir.BackboneElement));
export { Timing };
/**
 * Code Values for the Timing.repeat.dayOfWeek field
 */
export var TimingRepeatDayOfWeekEnum;
(function (TimingRepeatDayOfWeekEnum) {
    TimingRepeatDayOfWeekEnum["MON"] = "mon";
    TimingRepeatDayOfWeekEnum["TUE"] = "tue";
    TimingRepeatDayOfWeekEnum["WED"] = "wed";
    TimingRepeatDayOfWeekEnum["THU"] = "thu";
    TimingRepeatDayOfWeekEnum["FRI"] = "fri";
    TimingRepeatDayOfWeekEnum["SAT"] = "sat";
    TimingRepeatDayOfWeekEnum["SUN"] = "sun";
})(TimingRepeatDayOfWeekEnum || (TimingRepeatDayOfWeekEnum = {}));
/**
 * Code Values for the Timing.repeat.durationUnit field
 */
export var TimingRepeatDurationUnitEnum;
(function (TimingRepeatDurationUnitEnum) {
    TimingRepeatDurationUnitEnum["S"] = "s";
    TimingRepeatDurationUnitEnum["MIN"] = "min";
    TimingRepeatDurationUnitEnum["H"] = "h";
    TimingRepeatDurationUnitEnum["D"] = "d";
    TimingRepeatDurationUnitEnum["WK"] = "wk";
    TimingRepeatDurationUnitEnum["MO"] = "mo";
    TimingRepeatDurationUnitEnum["A"] = "a";
})(TimingRepeatDurationUnitEnum || (TimingRepeatDurationUnitEnum = {}));
/**
 * Code Values for the Timing.repeat.periodUnit field
 */
export var TimingRepeatPeriodUnitEnum;
(function (TimingRepeatPeriodUnitEnum) {
    TimingRepeatPeriodUnitEnum["S"] = "s";
    TimingRepeatPeriodUnitEnum["MIN"] = "min";
    TimingRepeatPeriodUnitEnum["H"] = "h";
    TimingRepeatPeriodUnitEnum["D"] = "d";
    TimingRepeatPeriodUnitEnum["WK"] = "wk";
    TimingRepeatPeriodUnitEnum["MO"] = "mo";
    TimingRepeatPeriodUnitEnum["A"] = "a";
})(TimingRepeatPeriodUnitEnum || (TimingRepeatPeriodUnitEnum = {}));
//# sourceMappingURL=Timing.js.map