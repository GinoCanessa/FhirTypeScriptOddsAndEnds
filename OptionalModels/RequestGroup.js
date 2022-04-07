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
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
var RequestGroupActionCondition = /** @class */ (function (_super) {
    __extends(RequestGroupActionCondition, _super);
    /**
     * Default constructor for RequestGroupActionCondition from an object that MAY NOT contain all required elements.
     */
    function RequestGroupActionCondition(source) {
        var _this = _super.call(this, source) || this;
        if (source["expression"] !== undefined) {
            _this.expression = new fhirModels.Expression(source.expression);
        }
        if (source["kind"] !== undefined) {
            _this.kind = source.kind;
        }
        if (source["_kind"] !== undefined) {
            _this._kind = new fhirModels.Element(source._kind);
        }
        return _this;
    }
    /**
     * Factory function to create a RequestGroupActionCondition from an object that MUST contain all required elements.
     */
    RequestGroupActionCondition.CreateStrict = function (source) {
        var dest = new RequestGroupActionCondition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RequestGroupActionCondition is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RequestGroupActionCondition contains all required elements.
     */
    RequestGroupActionCondition.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["kind"] === undefined) {
            missingElements.push("kind");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RequestGroupActionCondition;
}(fhirModels.BackboneElement));
export { RequestGroupActionCondition };
/**
 * Code Values for the RequestGroup.action.condition.kind field
 */
export var RequestGroupActionConditionKindEnum;
(function (RequestGroupActionConditionKindEnum) {
    RequestGroupActionConditionKindEnum["APPLICABILITY"] = "applicability";
    RequestGroupActionConditionKindEnum["START"] = "start";
    RequestGroupActionConditionKindEnum["STOP"] = "stop";
})(RequestGroupActionConditionKindEnum || (RequestGroupActionConditionKindEnum = {}));
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
var RequestGroupActionRelatedAction = /** @class */ (function (_super) {
    __extends(RequestGroupActionRelatedAction, _super);
    /**
     * Default constructor for RequestGroupActionRelatedAction from an object that MAY NOT contain all required elements.
     */
    function RequestGroupActionRelatedAction(source) {
        var _this = _super.call(this, source) || this;
        if (source["actionId"] !== undefined) {
            _this.actionId = source.actionId;
        }
        if (source["_actionId"] !== undefined) {
            _this._actionId = new fhirModels.Element(source._actionId);
        }
        if (source["offsetDuration"] !== undefined) {
            _this.offsetDuration = new fhirModels.Duration(source.offsetDuration);
        }
        if (source["offsetRange"] !== undefined) {
            _this.offsetRange = new fhirModels.Range(source.offsetRange);
        }
        if (source["relationship"] !== undefined) {
            _this.relationship = source.relationship;
        }
        if (source["_relationship"] !== undefined) {
            _this._relationship = new fhirModels.Element(source._relationship);
        }
        return _this;
    }
    /**
     * Factory function to create a RequestGroupActionRelatedAction from an object that MUST contain all required elements.
     */
    RequestGroupActionRelatedAction.CreateStrict = function (source) {
        var dest = new RequestGroupActionRelatedAction(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RequestGroupActionRelatedAction is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RequestGroupActionRelatedAction contains all required elements.
     */
    RequestGroupActionRelatedAction.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["actionId"] === undefined) {
            missingElements.push("actionId");
        }
        if (this["relationship"] === undefined) {
            missingElements.push("relationship");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RequestGroupActionRelatedAction;
}(fhirModels.BackboneElement));
export { RequestGroupActionRelatedAction };
/**
 * Code Values for the RequestGroup.action.relatedAction.relationship field
 */
export var RequestGroupActionRelatedActionRelationshipEnum;
(function (RequestGroupActionRelatedActionRelationshipEnum) {
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE_START"] = "before-start";
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE"] = "before";
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE_END"] = "before-end";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT_WITH_START"] = "concurrent-with-start";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT"] = "concurrent";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT_WITH_END"] = "concurrent-with-end";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER_START"] = "after-start";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER"] = "after";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER_END"] = "after-end";
})(RequestGroupActionRelatedActionRelationshipEnum || (RequestGroupActionRelatedActionRelationshipEnum = {}));
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
var RequestGroupAction = /** @class */ (function (_super) {
    __extends(RequestGroupAction, _super);
    /**
     * Default constructor for RequestGroupAction from an object that MAY NOT contain all required elements.
     */
    function RequestGroupAction(source) {
        var _this = _super.call(this, source) || this;
        if (source["action"] !== undefined) {
            _this.action = source.action.map(function (x) { return new fhirModels.RequestGroupAction(x); });
        }
        if (source["cardinalityBehavior"] !== undefined) {
            _this.cardinalityBehavior = source.cardinalityBehavior;
        }
        if (source["_cardinalityBehavior"] !== undefined) {
            _this._cardinalityBehavior = new fhirModels.Element(source._cardinalityBehavior);
        }
        if (source["code"] !== undefined) {
            _this.code = source.code.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["condition"] !== undefined) {
            _this.condition = source.condition.map(function (x) { return new fhirModels.RequestGroupActionCondition(x); });
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["documentation"] !== undefined) {
            _this.documentation = source.documentation.map(function (x) { return new fhirModels.RelatedArtifact(x); });
        }
        if (source["groupingBehavior"] !== undefined) {
            _this.groupingBehavior = source.groupingBehavior;
        }
        if (source["_groupingBehavior"] !== undefined) {
            _this._groupingBehavior = new fhirModels.Element(source._groupingBehavior);
        }
        if (source["participant"] !== undefined) {
            _this.participant = source.participant.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["precheckBehavior"] !== undefined) {
            _this.precheckBehavior = source.precheckBehavior;
        }
        if (source["_precheckBehavior"] !== undefined) {
            _this._precheckBehavior = new fhirModels.Element(source._precheckBehavior);
        }
        if (source["prefix"] !== undefined) {
            _this.prefix = source.prefix;
        }
        if (source["_prefix"] !== undefined) {
            _this._prefix = new fhirModels.Element(source._prefix);
        }
        if (source["priority"] !== undefined) {
            _this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            _this._priority = new fhirModels.Element(source._priority);
        }
        if (source["relatedAction"] !== undefined) {
            _this.relatedAction = source.relatedAction.map(function (x) { return new fhirModels.RequestGroupActionRelatedAction(x); });
        }
        if (source["requiredBehavior"] !== undefined) {
            _this.requiredBehavior = source.requiredBehavior;
        }
        if (source["_requiredBehavior"] !== undefined) {
            _this._requiredBehavior = new fhirModels.Element(source._requiredBehavior);
        }
        if (source["resource"] !== undefined) {
            _this.resource = new fhirModels.Reference(source.resource);
        }
        if (source["selectionBehavior"] !== undefined) {
            _this.selectionBehavior = source.selectionBehavior;
        }
        if (source["_selectionBehavior"] !== undefined) {
            _this._selectionBehavior = new fhirModels.Element(source._selectionBehavior);
        }
        if (source["textEquivalent"] !== undefined) {
            _this.textEquivalent = source.textEquivalent;
        }
        if (source["_textEquivalent"] !== undefined) {
            _this._textEquivalent = new fhirModels.Element(source._textEquivalent);
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
        if (source["timingDuration"] !== undefined) {
            _this.timingDuration = new fhirModels.Duration(source.timingDuration);
        }
        if (source["timingRange"] !== undefined) {
            _this.timingRange = new fhirModels.Range(source.timingRange);
        }
        if (source["timingTiming"] !== undefined) {
            _this.timingTiming = new fhirModels.Timing(source.timingTiming);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Factory function to create a RequestGroupAction from an object that MUST contain all required elements.
     */
    RequestGroupAction.CreateStrict = function (source) {
        var dest = new RequestGroupAction(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RequestGroupAction is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RequestGroupAction contains all required elements.
     */
    RequestGroupAction.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RequestGroupAction;
}(fhirModels.BackboneElement));
export { RequestGroupAction };
/**
 * Code Values for the RequestGroup.action.cardinalityBehavior field
 */
export var RequestGroupActionCardinalityBehaviorEnum;
(function (RequestGroupActionCardinalityBehaviorEnum) {
    RequestGroupActionCardinalityBehaviorEnum["SINGLE"] = "single";
    RequestGroupActionCardinalityBehaviorEnum["MULTIPLE"] = "multiple";
})(RequestGroupActionCardinalityBehaviorEnum || (RequestGroupActionCardinalityBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.groupingBehavior field
 */
export var RequestGroupActionGroupingBehaviorEnum;
(function (RequestGroupActionGroupingBehaviorEnum) {
    RequestGroupActionGroupingBehaviorEnum["VISUAL_GROUP"] = "visual-group";
    RequestGroupActionGroupingBehaviorEnum["LOGICAL_GROUP"] = "logical-group";
    RequestGroupActionGroupingBehaviorEnum["SENTENCE_GROUP"] = "sentence-group";
})(RequestGroupActionGroupingBehaviorEnum || (RequestGroupActionGroupingBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.precheckBehavior field
 */
export var RequestGroupActionPrecheckBehaviorEnum;
(function (RequestGroupActionPrecheckBehaviorEnum) {
    RequestGroupActionPrecheckBehaviorEnum["YES"] = "yes";
    RequestGroupActionPrecheckBehaviorEnum["NO"] = "no";
})(RequestGroupActionPrecheckBehaviorEnum || (RequestGroupActionPrecheckBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.priority field
 */
export var RequestGroupActionPriorityEnum;
(function (RequestGroupActionPriorityEnum) {
    RequestGroupActionPriorityEnum["ROUTINE"] = "routine";
    RequestGroupActionPriorityEnum["URGENT"] = "urgent";
    RequestGroupActionPriorityEnum["ASAP"] = "asap";
    RequestGroupActionPriorityEnum["STAT"] = "stat";
})(RequestGroupActionPriorityEnum || (RequestGroupActionPriorityEnum = {}));
/**
 * Code Values for the RequestGroup.action.requiredBehavior field
 */
export var RequestGroupActionRequiredBehaviorEnum;
(function (RequestGroupActionRequiredBehaviorEnum) {
    RequestGroupActionRequiredBehaviorEnum["MUST"] = "must";
    RequestGroupActionRequiredBehaviorEnum["COULD"] = "could";
    RequestGroupActionRequiredBehaviorEnum["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(RequestGroupActionRequiredBehaviorEnum || (RequestGroupActionRequiredBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.selectionBehavior field
 */
export var RequestGroupActionSelectionBehaviorEnum;
(function (RequestGroupActionSelectionBehaviorEnum) {
    RequestGroupActionSelectionBehaviorEnum["ANY"] = "any";
    RequestGroupActionSelectionBehaviorEnum["ALL"] = "all";
    RequestGroupActionSelectionBehaviorEnum["ALL_OR_NONE"] = "all-or-none";
    RequestGroupActionSelectionBehaviorEnum["EXACTLY_ONE"] = "exactly-one";
    RequestGroupActionSelectionBehaviorEnum["AT_MOST_ONE"] = "at-most-one";
    RequestGroupActionSelectionBehaviorEnum["ONE_OR_MORE"] = "one-or-more";
})(RequestGroupActionSelectionBehaviorEnum || (RequestGroupActionSelectionBehaviorEnum = {}));
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
var RequestGroup = /** @class */ (function (_super) {
    __extends(RequestGroup, _super);
    /**
     * Default constructor for RequestGroup from an object that MAY NOT contain all required elements.
     */
    function RequestGroup(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "RequestGroup";
        if ((source['resourceType'] !== "RequestGroup") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a RequestGroup';
        }
        if (source["action"] !== undefined) {
            _this.action = source.action.map(function (x) { return new fhirModels.RequestGroupAction(x); });
        }
        if (source["author"] !== undefined) {
            _this.author = new fhirModels.Reference(source.author);
        }
        if (source["authoredOn"] !== undefined) {
            _this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"] !== undefined) {
            _this._authoredOn = new fhirModels.Element(source._authoredOn);
        }
        if (source["basedOn"] !== undefined) {
            _this.basedOn = source.basedOn.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["groupIdentifier"] !== undefined) {
            _this.groupIdentifier = new fhirModels.Identifier(source.groupIdentifier);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["instantiatesCanonical"] !== undefined) {
            _this.instantiatesCanonical = source.instantiatesCanonical.map(function (x) { return (x); });
        }
        if (source["_instantiatesCanonical"] !== undefined) {
            _this._instantiatesCanonical = source._instantiatesCanonical.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["instantiatesUri"] !== undefined) {
            _this.instantiatesUri = source.instantiatesUri.map(function (x) { return (x); });
        }
        if (source["_instantiatesUri"] !== undefined) {
            _this._instantiatesUri = source._instantiatesUri.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["intent"] !== undefined) {
            _this.intent = source.intent;
        }
        if (source["_intent"] !== undefined) {
            _this._intent = new fhirModels.Element(source._intent);
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["priority"] !== undefined) {
            _this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            _this._priority = new fhirModels.Element(source._priority);
        }
        if (source["reasonCode"] !== undefined) {
            _this.reasonCode = source.reasonCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["reasonReference"] !== undefined) {
            _this.reasonReference = source.reasonReference.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["replaces"] !== undefined) {
            _this.replaces = source.replaces.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        return _this;
    }
    /**
     * Factory function to create a RequestGroup from an object that MUST contain all required elements.
     */
    RequestGroup.CreateStrict = function (source) {
        var dest = new RequestGroup(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RequestGroup is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RequestGroup contains all required elements.
     */
    RequestGroup.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["intent"] === undefined) {
            missingElements.push("intent");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RequestGroup;
}(fhirModels.DomainResource));
export { RequestGroup };
/**
 * Code Values for the RequestGroup.intent field
 */
export var RequestGroupIntentEnum;
(function (RequestGroupIntentEnum) {
    RequestGroupIntentEnum["PROPOSAL"] = "proposal";
    RequestGroupIntentEnum["PLAN"] = "plan";
    RequestGroupIntentEnum["DIRECTIVE"] = "directive";
    RequestGroupIntentEnum["ORDER"] = "order";
    RequestGroupIntentEnum["ORIGINAL_ORDER"] = "original-order";
    RequestGroupIntentEnum["REFLEX_ORDER"] = "reflex-order";
    RequestGroupIntentEnum["FILLER_ORDER"] = "filler-order";
    RequestGroupIntentEnum["INSTANCE_ORDER"] = "instance-order";
    RequestGroupIntentEnum["OPTION"] = "option";
})(RequestGroupIntentEnum || (RequestGroupIntentEnum = {}));
/**
 * Code Values for the RequestGroup.priority field
 */
export var RequestGroupPriorityEnum;
(function (RequestGroupPriorityEnum) {
    RequestGroupPriorityEnum["ROUTINE"] = "routine";
    RequestGroupPriorityEnum["URGENT"] = "urgent";
    RequestGroupPriorityEnum["ASAP"] = "asap";
    RequestGroupPriorityEnum["STAT"] = "stat";
})(RequestGroupPriorityEnum || (RequestGroupPriorityEnum = {}));
/**
 * Code Values for the RequestGroup.status field
 */
export var RequestGroupStatusEnum;
(function (RequestGroupStatusEnum) {
    RequestGroupStatusEnum["DRAFT"] = "draft";
    RequestGroupStatusEnum["ACTIVE"] = "active";
    RequestGroupStatusEnum["ON_HOLD"] = "on-hold";
    RequestGroupStatusEnum["REVOKED"] = "revoked";
    RequestGroupStatusEnum["COMPLETED"] = "completed";
    RequestGroupStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    RequestGroupStatusEnum["UNKNOWN"] = "unknown";
})(RequestGroupStatusEnum || (RequestGroupStatusEnum = {}));
