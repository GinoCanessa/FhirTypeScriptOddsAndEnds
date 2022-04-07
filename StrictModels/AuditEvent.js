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
 * Logical network location for application activity, if the activity has a network location.
 */
var AuditEventAgentNetwork = /** @class */ (function (_super) {
    __extends(AuditEventAgentNetwork, _super);
    /**
     * Default constructor for AuditEventAgentNetwork from an object that MAY NOT contain all required elements.
     */
    function AuditEventAgentNetwork(source) {
        var _this = _super.call(this, source) || this;
        if (source["address"] !== undefined) {
            _this.address = source.address;
        }
        if (source["_address"] !== undefined) {
            _this._address = new fhirModels.Element(source._address);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    return AuditEventAgentNetwork;
}(fhirModels.BackboneElement));
export { AuditEventAgentNetwork };
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
var AuditEventAgent = /** @class */ (function (_super) {
    __extends(AuditEventAgent, _super);
    /**
     * Default constructor for AuditEventAgent from an object that MAY NOT contain all required elements.
     */
    function AuditEventAgent(source) {
        var _this = _super.call(this, source) || this;
        if (source["altId"] !== undefined) {
            _this.altId = source.altId;
        }
        if (source["_altId"] !== undefined) {
            _this._altId = new fhirModels.Element(source._altId);
        }
        if (source["location"] !== undefined) {
            _this.location = new fhirModels.Reference(source.location);
        }
        if (source["media"] !== undefined) {
            _this.media = new fhirModels.Coding(source.media);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["network"] !== undefined) {
            _this.network = new fhirModels.AuditEventAgentNetwork(source.network);
        }
        if (source["policy"] !== undefined) {
            _this.policy = source.policy.map(function (x) { return (x); });
        }
        if (source["_policy"] !== undefined) {
            _this._policy = source._policy.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["purposeOfUse"] !== undefined) {
            _this.purposeOfUse = source.purposeOfUse.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.requestor = source.requestor;
        }
        if (source["_requestor"] !== undefined) {
            _this._requestor = new fhirModels.Element(source._requestor);
        }
        if (source["role"] !== undefined) {
            _this.role = source.role.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["who"] !== undefined) {
            _this.who = new fhirModels.Reference(source.who);
        }
        return _this;
    }
    return AuditEventAgent;
}(fhirModels.BackboneElement));
export { AuditEventAgent };
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
var AuditEventSource = /** @class */ (function (_super) {
    __extends(AuditEventSource, _super);
    /**
     * Default constructor for AuditEventSource from an object that MAY NOT contain all required elements.
     */
    function AuditEventSource(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.observer = new fhirModels.Reference(source.observer);
        }
        if (source["site"] !== undefined) {
            _this.site = source.site;
        }
        if (source["_site"] !== undefined) {
            _this._site = new fhirModels.Element(source._site);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.Coding(x); });
        }
        return _this;
    }
    return AuditEventSource;
}(fhirModels.BackboneElement));
export { AuditEventSource };
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
var AuditEventEntityDetail = /** @class */ (function (_super) {
    __extends(AuditEventEntityDetail, _super);
    /**
     * Default constructor for AuditEventEntityDetail from an object that MAY NOT contain all required elements.
     */
    function AuditEventEntityDetail(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        if (source["valueString"] !== undefined) {
            _this.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            _this._valueString = new fhirModels.Element(source._valueString);
        }
        if (source["valueBase64Binary"] !== undefined) {
            _this.valueBase64Binary = source.valueBase64Binary;
        }
        if (source["_valueBase64Binary"] !== undefined) {
            _this._valueBase64Binary = new fhirModels.Element(source._valueBase64Binary);
        }
        return _this;
    }
    return AuditEventEntityDetail;
}(fhirModels.BackboneElement));
export { AuditEventEntityDetail };
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
var AuditEventEntity = /** @class */ (function (_super) {
    __extends(AuditEventEntity, _super);
    /**
     * Default constructor for AuditEventEntity from an object that MAY NOT contain all required elements.
     */
    function AuditEventEntity(source) {
        var _this = _super.call(this, source) || this;
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["detail"] !== undefined) {
            _this.detail = source.detail.map(function (x) { return new fhirModels.AuditEventEntityDetail(x); });
        }
        if (source["lifecycle"] !== undefined) {
            _this.lifecycle = new fhirModels.Coding(source.lifecycle);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["query"] !== undefined) {
            _this.query = source.query;
        }
        if (source["_query"] !== undefined) {
            _this._query = new fhirModels.Element(source._query);
        }
        if (source["role"] !== undefined) {
            _this.role = new fhirModels.Coding(source.role);
        }
        if (source["securityLabel"] !== undefined) {
            _this.securityLabel = source.securityLabel.map(function (x) { return new fhirModels.Coding(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.Coding(source.type);
        }
        if (source["what"] !== undefined) {
            _this.what = new fhirModels.Reference(source.what);
        }
        return _this;
    }
    return AuditEventEntity;
}(fhirModels.BackboneElement));
export { AuditEventEntity };
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
var AuditEvent = /** @class */ (function (_super) {
    __extends(AuditEvent, _super);
    /**
     * Default constructor for AuditEvent from an object that MAY NOT contain all required elements.
     */
    function AuditEvent(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "AuditEvent";
        if ((source['resourceType'] !== "AuditEvent") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a AuditEvent';
        }
        if (source["action"] !== undefined) {
            _this.action = source.action;
        }
        if (source["_action"] !== undefined) {
            _this._action = new fhirModels.Element(source._action);
        }
        {
            _this.agent = source.agent.map(function (x) { return new fhirModels.AuditEventAgent(x); });
        }
        if (source["entity"] !== undefined) {
            _this.entity = source.entity.map(function (x) { return new fhirModels.AuditEventEntity(x); });
        }
        if (source["outcome"] !== undefined) {
            _this.outcome = source.outcome;
        }
        if (source["_outcome"] !== undefined) {
            _this._outcome = new fhirModels.Element(source._outcome);
        }
        if (source["outcomeDesc"] !== undefined) {
            _this.outcomeDesc = source.outcomeDesc;
        }
        if (source["_outcomeDesc"] !== undefined) {
            _this._outcomeDesc = new fhirModels.Element(source._outcomeDesc);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["purposeOfEvent"] !== undefined) {
            _this.purposeOfEvent = source.purposeOfEvent.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.recorded = source.recorded;
        }
        if (source["_recorded"] !== undefined) {
            _this._recorded = new fhirModels.Element(source._recorded);
        }
        {
            _this.source = new fhirModels.AuditEventSource(source.source);
        }
        if (source["subtype"] !== undefined) {
            _this.subtype = source.subtype.map(function (x) { return new fhirModels.Coding(x); });
        }
        {
            _this.type = new fhirModels.Coding(source.type);
        }
        return _this;
    }
    return AuditEvent;
}(fhirModels.DomainResource));
export { AuditEvent };