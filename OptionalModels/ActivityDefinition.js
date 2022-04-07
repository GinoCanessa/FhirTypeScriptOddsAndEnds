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
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels';
/**
 * Indicates who should participate in performing the action described.
 */
var ActivityDefinitionParticipant = /** @class */ (function (_super) {
    __extends(ActivityDefinitionParticipant, _super);
    /**
     * Default constructor for ActivityDefinitionParticipant from an object that MAY NOT contain all required elements.
     */
    function ActivityDefinitionParticipant(source) {
        var _this = _super.call(this, source) || this;
        if (source["role"] !== undefined) {
            _this.role = new fhirModels.CodeableConcept(source.role);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    /**
     * Factory function to create a ActivityDefinitionParticipant from an object that MUST contain all required elements.
     */
    ActivityDefinitionParticipant.CreateStrict = function (source) {
        var dest = new ActivityDefinitionParticipant(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ActivityDefinitionParticipant is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ActivityDefinitionParticipant contains all required elements.
     */
    ActivityDefinitionParticipant.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ActivityDefinitionParticipant;
}(fhirModels.BackboneElement));
export { ActivityDefinitionParticipant };
/**
 * Code Values for the ActivityDefinition.participant.type field
 */
export var ActivityDefinitionParticipantTypeEnum;
(function (ActivityDefinitionParticipantTypeEnum) {
    ActivityDefinitionParticipantTypeEnum["PATIENT"] = "patient";
    ActivityDefinitionParticipantTypeEnum["PRACTITIONER"] = "practitioner";
    ActivityDefinitionParticipantTypeEnum["RELATED_PERSON"] = "related-person";
    ActivityDefinitionParticipantTypeEnum["DEVICE"] = "device";
})(ActivityDefinitionParticipantTypeEnum || (ActivityDefinitionParticipantTypeEnum = {}));
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
var ActivityDefinitionDynamicValue = /** @class */ (function (_super) {
    __extends(ActivityDefinitionDynamicValue, _super);
    /**
     * Default constructor for ActivityDefinitionDynamicValue from an object that MAY NOT contain all required elements.
     */
    function ActivityDefinitionDynamicValue(source) {
        var _this = _super.call(this, source) || this;
        if (source["expression"] !== undefined) {
            _this.expression = new fhirModels.Expression(source.expression);
        }
        if (source["path"] !== undefined) {
            _this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            _this._path = new fhirModels.Element(source._path);
        }
        return _this;
    }
    /**
     * Factory function to create a ActivityDefinitionDynamicValue from an object that MUST contain all required elements.
     */
    ActivityDefinitionDynamicValue.CreateStrict = function (source) {
        var dest = new ActivityDefinitionDynamicValue(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ActivityDefinitionDynamicValue is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ActivityDefinitionDynamicValue contains all required elements.
     */
    ActivityDefinitionDynamicValue.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["expression"] === undefined) {
            missingElements.push("expression");
        }
        if (this["path"] === undefined) {
            missingElements.push("path");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ActivityDefinitionDynamicValue;
}(fhirModels.BackboneElement));
export { ActivityDefinitionDynamicValue };
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
var ActivityDefinition = /** @class */ (function (_super) {
    __extends(ActivityDefinition, _super);
    /**
     * Default constructor for ActivityDefinition from an object that MAY NOT contain all required elements.
     */
    function ActivityDefinition(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "ActivityDefinition";
        if ((source['resourceType'] !== "ActivityDefinition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ActivityDefinition';
        }
        if (source["approvalDate"] !== undefined) {
            _this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"] !== undefined) {
            _this._approvalDate = new fhirModels.Element(source._approvalDate);
        }
        if (source["author"] !== undefined) {
            _this.author = source.author.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["bodySite"] !== undefined) {
            _this.bodySite = source.bodySite.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["copyright"] !== undefined) {
            _this.copyright = source.copyright;
        }
        if (source["_copyright"] !== undefined) {
            _this._copyright = new fhirModels.Element(source._copyright);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["doNotPerform"] !== undefined) {
            _this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"] !== undefined) {
            _this._doNotPerform = new fhirModels.Element(source._doNotPerform);
        }
        if (source["dosage"] !== undefined) {
            _this.dosage = source.dosage.map(function (x) { return new fhirModels.Dosage(x); });
        }
        if (source["dynamicValue"] !== undefined) {
            _this.dynamicValue = source.dynamicValue.map(function (x) { return new fhirModels.ActivityDefinitionDynamicValue(x); });
        }
        if (source["editor"] !== undefined) {
            _this.editor = source.editor.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["effectivePeriod"] !== undefined) {
            _this.effectivePeriod = new fhirModels.Period(source.effectivePeriod);
        }
        if (source["endorser"] !== undefined) {
            _this.endorser = source.endorser.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["intent"] !== undefined) {
            _this.intent = source.intent;
        }
        if (source["_intent"] !== undefined) {
            _this._intent = new fhirModels.Element(source._intent);
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["kind"] !== undefined) {
            _this.kind = source.kind;
        }
        if (source["_kind"] !== undefined) {
            _this._kind = new fhirModels.Element(source._kind);
        }
        if (source["lastReviewDate"] !== undefined) {
            _this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"] !== undefined) {
            _this._lastReviewDate = new fhirModels.Element(source._lastReviewDate);
        }
        if (source["library"] !== undefined) {
            _this.library = source.library.map(function (x) { return (x); });
        }
        if (source["_library"] !== undefined) {
            _this._library = source._library.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["location"] !== undefined) {
            _this.location = new fhirModels.Reference(source.location);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["observationRequirement"] !== undefined) {
            _this.observationRequirement = source.observationRequirement.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["observationResultRequirement"] !== undefined) {
            _this.observationResultRequirement = source.observationResultRequirement.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["participant"] !== undefined) {
            _this.participant = source.participant.map(function (x) { return new fhirModels.ActivityDefinitionParticipant(x); });
        }
        if (source["priority"] !== undefined) {
            _this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            _this._priority = new fhirModels.Element(source._priority);
        }
        if (source["productReference"] !== undefined) {
            _this.productReference = new fhirModels.Reference(source.productReference);
        }
        if (source["productCodeableConcept"] !== undefined) {
            _this.productCodeableConcept = new fhirModels.CodeableConcept(source.productCodeableConcept);
        }
        if (source["profile"] !== undefined) {
            _this.profile = source.profile;
        }
        if (source["_profile"] !== undefined) {
            _this._profile = new fhirModels.Element(source._profile);
        }
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            _this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["relatedArtifact"] !== undefined) {
            _this.relatedArtifact = source.relatedArtifact.map(function (x) { return new fhirModels.RelatedArtifact(x); });
        }
        if (source["reviewer"] !== undefined) {
            _this.reviewer = source.reviewer.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["specimenRequirement"] !== undefined) {
            _this.specimenRequirement = source.specimenRequirement.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subjectCodeableConcept"] !== undefined) {
            _this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"] !== undefined) {
            _this.subjectReference = new fhirModels.Reference(source.subjectReference);
        }
        if (source["subtitle"] !== undefined) {
            _this.subtitle = source.subtitle;
        }
        if (source["_subtitle"] !== undefined) {
            _this._subtitle = new fhirModels.Element(source._subtitle);
        }
        if (source["timingTiming"] !== undefined) {
            _this.timingTiming = new fhirModels.Timing(source.timingTiming);
        }
        if (source["timingDateTime"] !== undefined) {
            _this.timingDateTime = source.timingDateTime;
        }
        if (source["_timingDateTime"] !== undefined) {
            _this._timingDateTime = new fhirModels.Element(source._timingDateTime);
        }
        if (source["timingAge"] !== undefined) {
            _this.timingAge = new fhirModels.Age(source.timingAge);
        }
        if (source["timingPeriod"] !== undefined) {
            _this.timingPeriod = new fhirModels.Period(source.timingPeriod);
        }
        if (source["timingRange"] !== undefined) {
            _this.timingRange = new fhirModels.Range(source.timingRange);
        }
        if (source["timingDuration"] !== undefined) {
            _this.timingDuration = new fhirModels.Duration(source.timingDuration);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        if (source["topic"] !== undefined) {
            _this.topic = source.topic.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["transform"] !== undefined) {
            _this.transform = source.transform;
        }
        if (source["_transform"] !== undefined) {
            _this._transform = new fhirModels.Element(source._transform);
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        if (source["usage"] !== undefined) {
            _this.usage = source.usage;
        }
        if (source["_usage"] !== undefined) {
            _this._usage = new fhirModels.Element(source._usage);
        }
        if (source["useContext"] !== undefined) {
            _this.useContext = source.useContext.map(function (x) { return new fhirModels.UsageContext(x); });
        }
        if (source["version"] !== undefined) {
            _this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            _this._version = new fhirModels.Element(source._version);
        }
        return _this;
    }
    /**
     * Factory function to create a ActivityDefinition from an object that MUST contain all required elements.
     */
    ActivityDefinition.CreateStrict = function (source) {
        var dest = new ActivityDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ActivityDefinition is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ActivityDefinition contains all required elements.
     */
    ActivityDefinition.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ActivityDefinition;
}(fhirModels.DomainResource));
export { ActivityDefinition };
/**
 * Code Values for the ActivityDefinition.intent field
 */
export var ActivityDefinitionIntentEnum;
(function (ActivityDefinitionIntentEnum) {
    ActivityDefinitionIntentEnum["PROPOSAL"] = "proposal";
    ActivityDefinitionIntentEnum["PLAN"] = "plan";
    ActivityDefinitionIntentEnum["DIRECTIVE"] = "directive";
    ActivityDefinitionIntentEnum["ORDER"] = "order";
    ActivityDefinitionIntentEnum["ORIGINAL_ORDER"] = "original-order";
    ActivityDefinitionIntentEnum["REFLEX_ORDER"] = "reflex-order";
    ActivityDefinitionIntentEnum["FILLER_ORDER"] = "filler-order";
    ActivityDefinitionIntentEnum["INSTANCE_ORDER"] = "instance-order";
    ActivityDefinitionIntentEnum["OPTION"] = "option";
})(ActivityDefinitionIntentEnum || (ActivityDefinitionIntentEnum = {}));
/**
 * Code Values for the ActivityDefinition.priority field
 */
export var ActivityDefinitionPriorityEnum;
(function (ActivityDefinitionPriorityEnum) {
    ActivityDefinitionPriorityEnum["ROUTINE"] = "routine";
    ActivityDefinitionPriorityEnum["URGENT"] = "urgent";
    ActivityDefinitionPriorityEnum["ASAP"] = "asap";
    ActivityDefinitionPriorityEnum["STAT"] = "stat";
})(ActivityDefinitionPriorityEnum || (ActivityDefinitionPriorityEnum = {}));
/**
 * Code Values for the ActivityDefinition.status field
 */
export var ActivityDefinitionStatusEnum;
(function (ActivityDefinitionStatusEnum) {
    ActivityDefinitionStatusEnum["DRAFT"] = "draft";
    ActivityDefinitionStatusEnum["ACTIVE"] = "active";
    ActivityDefinitionStatusEnum["RETIRED"] = "retired";
    ActivityDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(ActivityDefinitionStatusEnum || (ActivityDefinitionStatusEnum = {}));