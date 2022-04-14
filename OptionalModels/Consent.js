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
exports.ConsentStatusEnum = exports.Consent = exports.ConsentProvisionTypeEnum = exports.ConsentProvision = exports.ConsentProvisionDataMeaningEnum = exports.ConsentProvisionData = exports.ConsentProvisionActor = exports.ConsentVerification = exports.ConsentPolicy = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
class ConsentPolicy extends fhirModels.BackboneElement {
    /**
     * Default constructor for ConsentPolicy from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["authority"] !== undefined) {
            this.authority = source.authority;
        }
        if (source["_authority"] !== undefined) {
            this._authority = new fhirModels.Element(source._authority);
        }
        if (source["uri"] !== undefined) {
            this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            this._uri = new fhirModels.Element(source._uri);
        }
    }
    /**
     * Factory function to create a ConsentPolicy from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ConsentPolicy(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ConsentPolicy is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ConsentPolicy contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ConsentPolicy = ConsentPolicy;
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
class ConsentVerification extends fhirModels.BackboneElement {
    /**
     * Default constructor for ConsentVerification from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["verificationDate"] !== undefined) {
            this.verificationDate = source.verificationDate;
        }
        if (source["_verificationDate"] !== undefined) {
            this._verificationDate = new fhirModels.Element(source._verificationDate);
        }
        if (source["verified"] !== undefined) {
            this.verified = source.verified;
        }
        if (source["_verified"] !== undefined) {
            this._verified = new fhirModels.Element(source._verified);
        }
        if (source["verifiedWith"] !== undefined) {
            this.verifiedWith = new fhirModels.Reference(source.verifiedWith);
        }
    }
    /**
     * Factory function to create a ConsentVerification from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ConsentVerification(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ConsentVerification is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ConsentVerification contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["verified"] === undefined) {
            missingElements.push("verified");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ConsentVerification = ConsentVerification;
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
class ConsentProvisionActor extends fhirModels.BackboneElement {
    /**
     * Default constructor for ConsentProvisionActor from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["reference"] !== undefined) {
            this.reference = new fhirModels.Reference(source.reference);
        }
        if (source["role"] !== undefined) {
            this.role = new fhirModels.CodeableConcept(source.role);
        }
    }
    /**
     * Factory function to create a ConsentProvisionActor from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ConsentProvisionActor(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ConsentProvisionActor is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ConsentProvisionActor contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        if (this["role"] === undefined) {
            missingElements.push("role");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ConsentProvisionActor = ConsentProvisionActor;
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
class ConsentProvisionData extends fhirModels.BackboneElement {
    /**
     * Default constructor for ConsentProvisionData from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["meaning"] !== undefined) {
            this.meaning = source.meaning;
        }
        if (source["_meaning"] !== undefined) {
            this._meaning = new fhirModels.Element(source._meaning);
        }
        if (source["reference"] !== undefined) {
            this.reference = new fhirModels.Reference(source.reference);
        }
    }
    /**
     * Factory function to create a ConsentProvisionData from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ConsentProvisionData(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ConsentProvisionData is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ConsentProvisionData contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["meaning"] === undefined) {
            missingElements.push("meaning");
        }
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ConsentProvisionData = ConsentProvisionData;
/**
 * Code Values for the Consent.provision.data.meaning field
 */
var ConsentProvisionDataMeaningEnum;
(function (ConsentProvisionDataMeaningEnum) {
    ConsentProvisionDataMeaningEnum["INSTANCE"] = "instance";
    ConsentProvisionDataMeaningEnum["RELATED"] = "related";
    ConsentProvisionDataMeaningEnum["DEPENDENTS"] = "dependents";
    ConsentProvisionDataMeaningEnum["AUTHOREDBY"] = "authoredby";
})(ConsentProvisionDataMeaningEnum = exports.ConsentProvisionDataMeaningEnum || (exports.ConsentProvisionDataMeaningEnum = {}));
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
class ConsentProvision extends fhirModels.BackboneElement {
    /**
     * Default constructor for ConsentProvision from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["action"] !== undefined) {
            this.action = source.action.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["actor"] !== undefined) {
            this.actor = source.actor.map((x) => new fhirModels.ConsentProvisionActor(x));
        }
        if (source["class"] !== undefined) {
            this.class = source.class.map((x) => new fhirModels.Coding(x));
        }
        if (source["code"] !== undefined) {
            this.code = source.code.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["data"] !== undefined) {
            this.data = source.data.map((x) => new fhirModels.ConsentProvisionData(x));
        }
        if (source["dataPeriod"] !== undefined) {
            this.dataPeriod = new fhirModels.Period(source.dataPeriod);
        }
        if (source["period"] !== undefined) {
            this.period = new fhirModels.Period(source.period);
        }
        if (source["provision"] !== undefined) {
            this.provision = source.provision.map((x) => new fhirModels.ConsentProvision(x));
        }
        if (source["purpose"] !== undefined) {
            this.purpose = source.purpose.map((x) => new fhirModels.Coding(x));
        }
        if (source["securityLabel"] !== undefined) {
            this.securityLabel = source.securityLabel.map((x) => new fhirModels.Coding(x));
        }
        if (source["type"] !== undefined) {
            this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            this._type = new fhirModels.Element(source._type);
        }
    }
    /**
     * Factory function to create a ConsentProvision from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ConsentProvision(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ConsentProvision is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ConsentProvision contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ConsentProvision = ConsentProvision;
/**
 * Code Values for the Consent.provision.type field
 */
var ConsentProvisionTypeEnum;
(function (ConsentProvisionTypeEnum) {
    ConsentProvisionTypeEnum["DENY"] = "deny";
    ConsentProvisionTypeEnum["PERMIT"] = "permit";
})(ConsentProvisionTypeEnum = exports.ConsentProvisionTypeEnum || (exports.ConsentProvisionTypeEnum = {}));
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class Consent extends fhirModels.DomainResource {
    /**
     * Default constructor for Consent from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Consent";
        if ((source['resourceType'] !== "Consent") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Consent';
        }
        if (source["category"] !== undefined) {
            this.category = source.category.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["dateTime"] !== undefined) {
            this.dateTime = source.dateTime;
        }
        if (source["_dateTime"] !== undefined) {
            this._dateTime = new fhirModels.Element(source._dateTime);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["organization"] !== undefined) {
            this.organization = source.organization.map((x) => new fhirModels.Reference(x));
        }
        if (source["patient"] !== undefined) {
            this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["performer"] !== undefined) {
            this.performer = source.performer.map((x) => new fhirModels.Reference(x));
        }
        if (source["policy"] !== undefined) {
            this.policy = source.policy.map((x) => new fhirModels.ConsentPolicy(x));
        }
        if (source["policyRule"] !== undefined) {
            this.policyRule = new fhirModels.CodeableConcept(source.policyRule);
        }
        if (source["provision"] !== undefined) {
            this.provision = new fhirModels.ConsentProvision(source.provision);
        }
        if (source["scope"] !== undefined) {
            this.scope = new fhirModels.CodeableConcept(source.scope);
        }
        if (source["sourceAttachment"] !== undefined) {
            this.sourceAttachment = new fhirModels.Attachment(source.sourceAttachment);
        }
        if (source["sourceReference"] !== undefined) {
            this.sourceReference = new fhirModels.Reference(source.sourceReference);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["verification"] !== undefined) {
            this.verification = source.verification.map((x) => new fhirModels.ConsentVerification(x));
        }
    }
    /**
     * Factory function to create a Consent from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new Consent(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Consent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current Consent contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((this["category"] === undefined) || (this["category"].length === 0)) {
            missingElements.push("category");
        }
        if (this["scope"] === undefined) {
            missingElements.push("scope");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.Consent = Consent;
/**
 * Code Values for the Consent.status field
 */
var ConsentStatusEnum;
(function (ConsentStatusEnum) {
    ConsentStatusEnum["DRAFT"] = "draft";
    ConsentStatusEnum["PROPOSED"] = "proposed";
    ConsentStatusEnum["ACTIVE"] = "active";
    ConsentStatusEnum["REJECTED"] = "rejected";
    ConsentStatusEnum["INACTIVE"] = "inactive";
    ConsentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ConsentStatusEnum = exports.ConsentStatusEnum || (exports.ConsentStatusEnum = {}));
//# sourceMappingURL=Consent.js.map