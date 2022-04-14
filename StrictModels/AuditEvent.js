"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEvent = exports.AuditEventEntity = exports.AuditEventEntityDetail = exports.AuditEventSource = exports.AuditEventAgent = exports.AuditEventAgentNetwork = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Logical network location for application activity, if the activity has a network location.
 */
class AuditEventAgentNetwork extends fhirModels.BackboneElement {
    /**
     * Default constructor for AuditEventAgentNetwork from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["address"] !== undefined) {
            this.address = source.address;
        }
        if (source["_address"] !== undefined) {
            this._address = new fhirModels.Element(source._address);
        }
        if (source["type"] !== undefined) {
            this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            this._type = new fhirModels.Element(source._type);
        }
    }
}
exports.AuditEventAgentNetwork = AuditEventAgentNetwork;
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
class AuditEventAgent extends fhirModels.BackboneElement {
    /**
     * Default constructor for AuditEventAgent from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["altId"] !== undefined) {
            this.altId = source.altId;
        }
        if (source["_altId"] !== undefined) {
            this._altId = new fhirModels.Element(source._altId);
        }
        if (source["location"] !== undefined) {
            this.location = new fhirModels.Reference(source.location);
        }
        if (source["media"] !== undefined) {
            this.media = new fhirModels.Coding(source.media);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["network"] !== undefined) {
            this.network = new fhirModels.AuditEventAgentNetwork(source.network);
        }
        if (source["policy"] !== undefined) {
            this.policy = source.policy.map((x) => (x));
        }
        if (source["_policy"] !== undefined) {
            this._policy = source._policy.map((x) => new fhirModels.Element(x));
        }
        if (source["purposeOfUse"] !== undefined) {
            this.purposeOfUse = source.purposeOfUse.map((x) => new fhirModels.CodeableConcept(x));
        }
        {
            this.requestor = source.requestor;
        }
        if (source["_requestor"] !== undefined) {
            this._requestor = new fhirModels.Element(source._requestor);
        }
        if (source["role"] !== undefined) {
            this.role = source.role.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["who"] !== undefined) {
            this.who = new fhirModels.Reference(source.who);
        }
    }
}
exports.AuditEventAgent = AuditEventAgent;
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
class AuditEventSource extends fhirModels.BackboneElement {
    /**
     * Default constructor for AuditEventSource from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.observer = new fhirModels.Reference(source.observer);
        }
        if (source["site"] !== undefined) {
            this.site = source.site;
        }
        if (source["_site"] !== undefined) {
            this._site = new fhirModels.Element(source._site);
        }
        if (source["type"] !== undefined) {
            this.type = source.type.map((x) => new fhirModels.Coding(x));
        }
    }
}
exports.AuditEventSource = AuditEventSource;
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
class AuditEventEntityDetail extends fhirModels.BackboneElement {
    /**
     * Default constructor for AuditEventEntityDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            this._type = new fhirModels.Element(source._type);
        }
        if (source["valueString"] !== undefined) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            this._valueString = new fhirModels.Element(source._valueString);
        }
        if (source["valueBase64Binary"] !== undefined) {
            this.valueBase64Binary = source.valueBase64Binary;
        }
        if (source["_valueBase64Binary"] !== undefined) {
            this._valueBase64Binary = new fhirModels.Element(source._valueBase64Binary);
        }
    }
}
exports.AuditEventEntityDetail = AuditEventEntityDetail;
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
class AuditEventEntity extends fhirModels.BackboneElement {
    /**
     * Default constructor for AuditEventEntity from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["detail"] !== undefined) {
            this.detail = source.detail.map((x) => new fhirModels.AuditEventEntityDetail(x));
        }
        if (source["lifecycle"] !== undefined) {
            this.lifecycle = new fhirModels.Coding(source.lifecycle);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["query"] !== undefined) {
            this.query = source.query;
        }
        if (source["_query"] !== undefined) {
            this._query = new fhirModels.Element(source._query);
        }
        if (source["role"] !== undefined) {
            this.role = new fhirModels.Coding(source.role);
        }
        if (source["securityLabel"] !== undefined) {
            this.securityLabel = source.securityLabel.map((x) => new fhirModels.Coding(x));
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.Coding(source.type);
        }
        if (source["what"] !== undefined) {
            this.what = new fhirModels.Reference(source.what);
        }
    }
}
exports.AuditEventEntity = AuditEventEntity;
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
class AuditEvent extends fhirModels.DomainResource {
    /**
     * Default constructor for AuditEvent from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "AuditEvent";
        if ((source['resourceType'] !== "AuditEvent") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a AuditEvent';
        }
        if (source["action"] !== undefined) {
            this.action = source.action;
        }
        if (source["_action"] !== undefined) {
            this._action = new fhirModels.Element(source._action);
        }
        {
            this.agent = source.agent.map((x) => new fhirModels.AuditEventAgent(x));
        }
        if (source["entity"] !== undefined) {
            this.entity = source.entity.map((x) => new fhirModels.AuditEventEntity(x));
        }
        if (source["outcome"] !== undefined) {
            this.outcome = source.outcome;
        }
        if (source["_outcome"] !== undefined) {
            this._outcome = new fhirModels.Element(source._outcome);
        }
        if (source["outcomeDesc"] !== undefined) {
            this.outcomeDesc = source.outcomeDesc;
        }
        if (source["_outcomeDesc"] !== undefined) {
            this._outcomeDesc = new fhirModels.Element(source._outcomeDesc);
        }
        if (source["period"] !== undefined) {
            this.period = new fhirModels.Period(source.period);
        }
        if (source["purposeOfEvent"] !== undefined) {
            this.purposeOfEvent = source.purposeOfEvent.map((x) => new fhirModels.CodeableConcept(x));
        }
        {
            this.recorded = source.recorded;
        }
        if (source["_recorded"] !== undefined) {
            this._recorded = new fhirModels.Element(source._recorded);
        }
        {
            this.source = new fhirModels.AuditEventSource(source.source);
        }
        if (source["subtype"] !== undefined) {
            this.subtype = source.subtype.map((x) => new fhirModels.Coding(x));
        }
        {
            this.type = new fhirModels.Coding(source.type);
        }
    }
}
exports.AuditEvent = AuditEvent;
//# sourceMappingURL=AuditEvent.js.map