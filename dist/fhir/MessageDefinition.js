// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export class MessageDefinitionFocus extends fhir.BackboneElement {
    /**
     * Default constructor for MessageDefinitionFocus - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = source.code;
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["_code"]) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source["max"]) {
            this.max = source.max;
        }
        if (source["_max"]) {
            this._max = new fhir.FhirElement(source._max);
        }
        this.min = null;
        if (source["min"]) {
            this.min = source.min;
        }
        if (this.min === undefined) {
            this.min = null;
        }
        if (source["_min"]) {
            this._min = new fhir.FhirElement(source._min);
        }
        if (source["profile"]) {
            this.profile = source.profile;
        }
        if (source["_profile"]) {
            this._profile = new fhir.FhirElement(source._profile);
        }
    }
    /**
     * Check if the current MessageDefinitionFocus contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["min"] === undefined) {
            missingElements.push("min");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MessageDefinitionFocus from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MessageDefinitionFocus(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MessageDefinitionFocus is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export class MessageDefinitionAllowedResponse extends fhir.BackboneElement {
    /**
     * Default constructor for MessageDefinitionAllowedResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.message = null;
        if (source["message"]) {
            this.message = source.message;
        }
        if (this.message === undefined) {
            this.message = null;
        }
        if (source["_message"]) {
            this._message = new fhir.FhirElement(source._message);
        }
        if (source["situation"]) {
            this.situation = source.situation;
        }
        if (source["_situation"]) {
            this._situation = new fhir.FhirElement(source._situation);
        }
    }
    /**
     * Check if the current MessageDefinitionAllowedResponse contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["message"] === undefined) {
            missingElements.push("message");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MessageDefinitionAllowedResponse from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MessageDefinitionAllowedResponse(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MessageDefinitionAllowedResponse is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export class MessageDefinition extends fhir.DomainResource {
    /**
     * Default constructor for MessageDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MessageDefinition';
        if (source["allowedResponse"]) {
            this.allowedResponse = source.allowedResponse.map((x) => new fhir.MessageDefinitionAllowedResponse(x));
        }
        if (source["base"]) {
            this.base = source.base;
        }
        if (source["_base"]) {
            this._base = new fhir.FhirElement(source._base);
        }
        if (source["category"]) {
            this.category = source.category;
        }
        if (source["_category"]) {
            this._category = new fhir.FhirElement(source._category);
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["copyright"]) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"]) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        this.date = null;
        if (source["date"]) {
            this.date = source.date;
        }
        if (this.date === undefined) {
            this.date = null;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["eventCoding"]) {
            this.eventCoding = new fhir.Coding(source.eventCoding);
        }
        if (source["eventUri"]) {
            this.eventUri = source.eventUri;
        }
        if (source["_eventUri"]) {
            this._eventUri = new fhir.FhirElement(source._eventUri);
        }
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source["focus"]) {
            this.focus = source.focus.map((x) => new fhir.MessageDefinitionFocus(x));
        }
        if (source["graph"]) {
            this.graph = source.graph.map((x) => (x));
        }
        if (source["_graph"]) {
            this._graph = source._graph.map((x) => new fhir.FhirElement(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["parent"]) {
            this.parent = source.parent.map((x) => (x));
        }
        if (source["_parent"]) {
            this._parent = source._parent.map((x) => new fhir.FhirElement(x));
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["purpose"]) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"]) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source["replaces"]) {
            this.replaces = source.replaces.map((x) => (x));
        }
        if (source["_replaces"]) {
            this._replaces = source._replaces.map((x) => new fhir.FhirElement(x));
        }
        if (source["responseRequired"]) {
            this.responseRequired = source.responseRequired;
        }
        if (source["_responseRequired"]) {
            this._responseRequired = new fhir.FhirElement(source._responseRequired);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["useContext"]) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current MessageDefinition contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["date"] === undefined) {
            missingElements.push("date");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MessageDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MessageDefinition(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MessageDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
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
//# sourceMappingURL=MessageDefinition.js.map