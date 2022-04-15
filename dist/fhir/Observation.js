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
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
var ObservationReferenceRange = /** @class */ (function (_super) {
    __extends(ObservationReferenceRange, _super);
    /**
     * Default constructor for ObservationReferenceRange - initializes required elements to null.
     */
    function ObservationReferenceRange() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a ObservationReferenceRange from an object that MAY NOT contain all required elements.
     */
    ObservationReferenceRange.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["age"] !== undefined) {
            dest.age = fhir.Range.FactoryCreate(source.age);
        }
        if (source["appliesTo"] !== undefined) {
            dest.appliesTo = source.appliesTo.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["high"] !== undefined) {
            dest.high = fhir.Quantity.FactoryCreate(source.high);
        }
        if (source["low"] !== undefined) {
            dest.low = fhir.Quantity.FactoryCreate(source.low);
        }
        if (source["text"] !== undefined) {
            dest.text = source.text;
        }
        if (source["_text"] !== undefined) {
            dest._text = fhir.FhirElement.FactoryCreate(source._text);
        }
        if (source["type"] !== undefined) {
            dest.type = fhir.CodeableConcept.FactoryCreate(source.type);
        }
        return dest;
    };
    /**
     * Check if the current ObservationReferenceRange contains all required elements.
     */
    ObservationReferenceRange.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a ObservationReferenceRange from an object that MUST contain all required elements.
     */
    ObservationReferenceRange.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ObservationReferenceRange is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return ObservationReferenceRange;
}(fhir.BackboneElement));
export { ObservationReferenceRange };
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
var ObservationComponent = /** @class */ (function (_super) {
    __extends(ObservationComponent, _super);
    /**
     * Default constructor for ObservationComponent - initializes required elements to null.
     */
    function ObservationComponent() {
        var _this = _super.call(this) || this;
        _this.code = null;
        return _this;
    }
    /**
     * Factory function to create a ObservationComponent from an object that MAY NOT contain all required elements.
     */
    ObservationComponent.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["code"] !== undefined) {
            dest.code = fhir.CodeableConcept.FactoryCreate(source.code);
        }
        if (source["dataAbsentReason"] !== undefined) {
            dest.dataAbsentReason = fhir.CodeableConcept.FactoryCreate(source.dataAbsentReason);
        }
        if (source["interpretation"] !== undefined) {
            dest.interpretation = source.interpretation.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["referenceRange"] !== undefined) {
            dest.referenceRange = source.referenceRange.map(function (x) { return fhir.ObservationReferenceRange.FactoryCreate(x); });
        }
        if (source["valueQuantity"] !== undefined) {
            dest.valueQuantity = fhir.Quantity.FactoryCreate(source.valueQuantity);
        }
        if (source["valueCodeableConcept"] !== undefined) {
            dest.valueCodeableConcept = fhir.CodeableConcept.FactoryCreate(source.valueCodeableConcept);
        }
        if (source["valueString"] !== undefined) {
            dest.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            dest._valueString = fhir.FhirElement.FactoryCreate(source._valueString);
        }
        if (source["valueBoolean"] !== undefined) {
            dest.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"] !== undefined) {
            dest._valueBoolean = fhir.FhirElement.FactoryCreate(source._valueBoolean);
        }
        if (source["valueInteger"] !== undefined) {
            dest.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"] !== undefined) {
            dest._valueInteger = fhir.FhirElement.FactoryCreate(source._valueInteger);
        }
        if (source["valueRange"] !== undefined) {
            dest.valueRange = fhir.Range.FactoryCreate(source.valueRange);
        }
        if (source["valueRatio"] !== undefined) {
            dest.valueRatio = fhir.Ratio.FactoryCreate(source.valueRatio);
        }
        if (source["valueSampledData"] !== undefined) {
            dest.valueSampledData = fhir.SampledData.FactoryCreate(source.valueSampledData);
        }
        if (source["valueTime"] !== undefined) {
            dest.valueTime = source.valueTime;
        }
        if (source["_valueTime"] !== undefined) {
            dest._valueTime = fhir.FhirElement.FactoryCreate(source._valueTime);
        }
        if (source["valueDateTime"] !== undefined) {
            dest.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"] !== undefined) {
            dest._valueDateTime = fhir.FhirElement.FactoryCreate(source._valueDateTime);
        }
        if (source["valuePeriod"] !== undefined) {
            dest.valuePeriod = fhir.Period.FactoryCreate(source.valuePeriod);
        }
        return dest;
    };
    /**
     * Check if the current ObservationComponent contains all required elements.
     */
    ObservationComponent.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a ObservationComponent from an object that MUST contain all required elements.
     */
    ObservationComponent.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ObservationComponent is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return ObservationComponent;
}(fhir.BackboneElement));
export { ObservationComponent };
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    /**
     * Default constructor for Observation - initializes required elements to null.
     */
    function Observation() {
        var _this = _super.call(this) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Observation";
        _this.code = null;
        _this.status = null;
        return _this;
    }
    /**
     * Factory function to create a Observation from an object that MAY NOT contain all required elements.
     */
    Observation.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if ((source['resourceType'] !== "Observation") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Observation';
        }
        if (source["basedOn"] !== undefined) {
            dest.basedOn = source.basedOn.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["bodySite"] !== undefined) {
            dest.bodySite = fhir.CodeableConcept.FactoryCreate(source.bodySite);
        }
        if (source["category"] !== undefined) {
            dest.category = source.category.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["code"] !== undefined) {
            dest.code = fhir.CodeableConcept.FactoryCreate(source.code);
        }
        if (source["component"] !== undefined) {
            dest.component = source.component.map(function (x) { return fhir.ObservationComponent.FactoryCreate(x); });
        }
        if (source["dataAbsentReason"] !== undefined) {
            dest.dataAbsentReason = fhir.CodeableConcept.FactoryCreate(source.dataAbsentReason);
        }
        if (source["derivedFrom"] !== undefined) {
            dest.derivedFrom = source.derivedFrom.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["device"] !== undefined) {
            dest.device = fhir.Reference.FactoryCreate(source.device);
        }
        if (source["effectiveDateTime"] !== undefined) {
            dest.effectiveDateTime = source.effectiveDateTime;
        }
        if (source["_effectiveDateTime"] !== undefined) {
            dest._effectiveDateTime = fhir.FhirElement.FactoryCreate(source._effectiveDateTime);
        }
        if (source["effectivePeriod"] !== undefined) {
            dest.effectivePeriod = fhir.Period.FactoryCreate(source.effectivePeriod);
        }
        if (source["effectiveTiming"] !== undefined) {
            dest.effectiveTiming = fhir.Timing.FactoryCreate(source.effectiveTiming);
        }
        if (source["effectiveInstant"] !== undefined) {
            dest.effectiveInstant = source.effectiveInstant;
        }
        if (source["_effectiveInstant"] !== undefined) {
            dest._effectiveInstant = fhir.FhirElement.FactoryCreate(source._effectiveInstant);
        }
        if (source["encounter"] !== undefined) {
            dest.encounter = fhir.Reference.FactoryCreate(source.encounter);
        }
        if (source["focus"] !== undefined) {
            dest.focus = source.focus.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["hasMember"] !== undefined) {
            dest.hasMember = source.hasMember.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["identifier"] !== undefined) {
            dest.identifier = source.identifier.map(function (x) { return fhir.Identifier.FactoryCreate(x); });
        }
        if (source["interpretation"] !== undefined) {
            dest.interpretation = source.interpretation.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["issued"] !== undefined) {
            dest.issued = source.issued;
        }
        if (source["_issued"] !== undefined) {
            dest._issued = fhir.FhirElement.FactoryCreate(source._issued);
        }
        if (source["method"] !== undefined) {
            dest.method = fhir.CodeableConcept.FactoryCreate(source.method);
        }
        if (source["note"] !== undefined) {
            dest.note = source.note.map(function (x) { return fhir.Annotation.FactoryCreate(x); });
        }
        if (source["partOf"] !== undefined) {
            dest.partOf = source.partOf.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["performer"] !== undefined) {
            dest.performer = source.performer.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["referenceRange"] !== undefined) {
            dest.referenceRange = source.referenceRange.map(function (x) { return fhir.ObservationReferenceRange.FactoryCreate(x); });
        }
        if (source["specimen"] !== undefined) {
            dest.specimen = fhir.Reference.FactoryCreate(source.specimen);
        }
        if (source["status"] !== undefined) {
            dest.status = source.status;
        }
        if (source["_status"] !== undefined) {
            dest._status = fhir.FhirElement.FactoryCreate(source._status);
        }
        if (source["subject"] !== undefined) {
            dest.subject = fhir.Reference.FactoryCreate(source.subject);
        }
        if (source["valueQuantity"] !== undefined) {
            dest.valueQuantity = fhir.Quantity.FactoryCreate(source.valueQuantity);
        }
        if (source["valueCodeableConcept"] !== undefined) {
            dest.valueCodeableConcept = fhir.CodeableConcept.FactoryCreate(source.valueCodeableConcept);
        }
        if (source["valueString"] !== undefined) {
            dest.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            dest._valueString = fhir.FhirElement.FactoryCreate(source._valueString);
        }
        if (source["valueBoolean"] !== undefined) {
            dest.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"] !== undefined) {
            dest._valueBoolean = fhir.FhirElement.FactoryCreate(source._valueBoolean);
        }
        if (source["valueInteger"] !== undefined) {
            dest.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"] !== undefined) {
            dest._valueInteger = fhir.FhirElement.FactoryCreate(source._valueInteger);
        }
        if (source["valueRange"] !== undefined) {
            dest.valueRange = fhir.Range.FactoryCreate(source.valueRange);
        }
        if (source["valueRatio"] !== undefined) {
            dest.valueRatio = fhir.Ratio.FactoryCreate(source.valueRatio);
        }
        if (source["valueSampledData"] !== undefined) {
            dest.valueSampledData = fhir.SampledData.FactoryCreate(source.valueSampledData);
        }
        if (source["valueTime"] !== undefined) {
            dest.valueTime = source.valueTime;
        }
        if (source["_valueTime"] !== undefined) {
            dest._valueTime = fhir.FhirElement.FactoryCreate(source._valueTime);
        }
        if (source["valueDateTime"] !== undefined) {
            dest.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"] !== undefined) {
            dest._valueDateTime = fhir.FhirElement.FactoryCreate(source._valueDateTime);
        }
        if (source["valuePeriod"] !== undefined) {
            dest.valuePeriod = fhir.Period.FactoryCreate(source.valuePeriod);
        }
        return dest;
    };
    /**
     * Check if the current Observation contains all required elements.
     */
    Observation.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a Observation from an object that MUST contain all required elements.
     */
    Observation.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Observation is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return Observation;
}(fhir.DomainResource));
export { Observation };
/**
 * Code Values for the Observation.status field
 */
export var ObservationStatusEnum;
(function (ObservationStatusEnum) {
    ObservationStatusEnum["REGISTERED"] = "registered";
    ObservationStatusEnum["PRELIMINARY"] = "preliminary";
    ObservationStatusEnum["FINAL"] = "final";
    ObservationStatusEnum["AMENDED"] = "amended";
    ObservationStatusEnum["CORRECTED"] = "corrected";
    ObservationStatusEnum["CANCELLED"] = "cancelled";
    ObservationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ObservationStatusEnum["UNKNOWN"] = "unknown";
})(ObservationStatusEnum || (ObservationStatusEnum = {}));
//# sourceMappingURL=Observation.js.map