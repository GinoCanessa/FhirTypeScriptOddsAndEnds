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
import * as fhirModels from '../strictmodels';
/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
var MessageDefinitionFocus = /** @class */ (function (_super) {
    __extends(MessageDefinitionFocus, _super);
    /**
     * Default constructor for MessageDefinitionFocus from an object that MAY NOT contain all required elements.
     */
    function MessageDefinitionFocus(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        if (source["max"] !== undefined) {
            _this.max = source.max;
        }
        if (source["_max"] !== undefined) {
            _this._max = new fhirModels.Element(source._max);
        }
        {
            _this.min = source.min;
        }
        if (source["_min"] !== undefined) {
            _this._min = new fhirModels.Element(source._min);
        }
        if (source["profile"] !== undefined) {
            _this.profile = source.profile;
        }
        if (source["_profile"] !== undefined) {
            _this._profile = new fhirModels.Element(source._profile);
        }
        return _this;
    }
    return MessageDefinitionFocus;
}(fhirModels.BackboneElement));
export { MessageDefinitionFocus };
/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
var MessageDefinitionAllowedResponse = /** @class */ (function (_super) {
    __extends(MessageDefinitionAllowedResponse, _super);
    /**
     * Default constructor for MessageDefinitionAllowedResponse from an object that MAY NOT contain all required elements.
     */
    function MessageDefinitionAllowedResponse(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.message = source.message;
        }
        if (source["_message"] !== undefined) {
            _this._message = new fhirModels.Element(source._message);
        }
        if (source["situation"] !== undefined) {
            _this.situation = source.situation;
        }
        if (source["_situation"] !== undefined) {
            _this._situation = new fhirModels.Element(source._situation);
        }
        return _this;
    }
    return MessageDefinitionAllowedResponse;
}(fhirModels.BackboneElement));
export { MessageDefinitionAllowedResponse };
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
var MessageDefinition = /** @class */ (function (_super) {
    __extends(MessageDefinition, _super);
    /**
     * Default constructor for MessageDefinition from an object that MAY NOT contain all required elements.
     */
    function MessageDefinition(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "MessageDefinition";
        if ((source['resourceType'] !== "MessageDefinition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MessageDefinition';
        }
        if (source["allowedResponse"] !== undefined) {
            _this.allowedResponse = source.allowedResponse.map(function (x) { return new fhirModels.MessageDefinitionAllowedResponse(x); });
        }
        if (source["base"] !== undefined) {
            _this.base = source.base;
        }
        if (source["_base"] !== undefined) {
            _this._base = new fhirModels.Element(source._base);
        }
        if (source["category"] !== undefined) {
            _this.category = source.category;
        }
        if (source["_category"] !== undefined) {
            _this._category = new fhirModels.Element(source._category);
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
        {
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
        if (source["eventCoding"] !== undefined) {
            _this.eventCoding = new fhirModels.Coding(source.eventCoding);
        }
        if (source["eventUri"] !== undefined) {
            _this.eventUri = source.eventUri;
        }
        if (source["_eventUri"] !== undefined) {
            _this._eventUri = new fhirModels.Element(source._eventUri);
        }
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["focus"] !== undefined) {
            _this.focus = source.focus.map(function (x) { return new fhirModels.MessageDefinitionFocus(x); });
        }
        if (source["graph"] !== undefined) {
            _this.graph = source.graph.map(function (x) { return (x); });
        }
        if (source["_graph"] !== undefined) {
            _this._graph = source._graph.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["parent"] !== undefined) {
            _this.parent = source.parent.map(function (x) { return (x); });
        }
        if (source["_parent"] !== undefined) {
            _this._parent = source._parent.map(function (x) { return new fhirModels.Element(x); });
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
        if (source["replaces"] !== undefined) {
            _this.replaces = source.replaces.map(function (x) { return (x); });
        }
        if (source["_replaces"] !== undefined) {
            _this._replaces = source._replaces.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["responseRequired"] !== undefined) {
            _this.responseRequired = source.responseRequired;
        }
        if (source["_responseRequired"] !== undefined) {
            _this._responseRequired = new fhirModels.Element(source._responseRequired);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
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
    return MessageDefinition;
}(fhirModels.DomainResource));
export { MessageDefinition };
/**
 * Code Values for the MessageDefinition.category field
 */
export var MessageDefinitionCategoryEnum;
(function (MessageDefinitionCategoryEnum) {
    MessageDefinitionCategoryEnum["CONSEQUENCE"] = "consequence";
    MessageDefinitionCategoryEnum["CURRENCY"] = "currency";
    MessageDefinitionCategoryEnum["NOTIFICATION"] = "notification";
})(MessageDefinitionCategoryEnum || (MessageDefinitionCategoryEnum = {}));
/**
 * Code Values for the MessageDefinition.responseRequired field
 */
export var MessageDefinitionResponseRequiredEnum;
(function (MessageDefinitionResponseRequiredEnum) {
    MessageDefinitionResponseRequiredEnum["ALWAYS"] = "always";
    MessageDefinitionResponseRequiredEnum["ON_ERROR"] = "on-error";
    MessageDefinitionResponseRequiredEnum["NEVER"] = "never";
    MessageDefinitionResponseRequiredEnum["ON_SUCCESS"] = "on-success";
})(MessageDefinitionResponseRequiredEnum || (MessageDefinitionResponseRequiredEnum = {}));
/**
 * Code Values for the MessageDefinition.status field
 */
export var MessageDefinitionStatusEnum;
(function (MessageDefinitionStatusEnum) {
    MessageDefinitionStatusEnum["DRAFT"] = "draft";
    MessageDefinitionStatusEnum["ACTIVE"] = "active";
    MessageDefinitionStatusEnum["RETIRED"] = "retired";
    MessageDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(MessageDefinitionStatusEnum || (MessageDefinitionStatusEnum = {}));
