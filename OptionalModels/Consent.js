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
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
var ConsentPolicy = /** @class */ (function (_super) {
    __extends(ConsentPolicy, _super);
    /**
     * Default constructor for ConsentPolicy from an object that MAY NOT contain all required elements.
     */
    function ConsentPolicy(source) {
        var _this = _super.call(this, source) || this;
        if (source["authority"] !== undefined) {
            _this.authority = source.authority;
        }
        if (source["_authority"] !== undefined) {
            _this._authority = new fhirModels.Element(source._authority);
        }
        if (source["uri"] !== undefined) {
            _this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            _this._uri = new fhirModels.Element(source._uri);
        }
        return _this;
    }
    /**
     * Factory function to create a ConsentPolicy from an object that MUST contain all required elements.
     */
    ConsentPolicy.CreateStrict = function (source) {
        var dest = new ConsentPolicy(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ConsentPolicy is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ConsentPolicy contains all required elements.
     */
    ConsentPolicy.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ConsentPolicy;
}(fhirModels.BackboneElement));
export { ConsentPolicy };
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
var ConsentVerification = /** @class */ (function (_super) {
    __extends(ConsentVerification, _super);
    /**
     * Default constructor for ConsentVerification from an object that MAY NOT contain all required elements.
     */
    function ConsentVerification(source) {
        var _this = _super.call(this, source) || this;
        if (source["verificationDate"] !== undefined) {
            _this.verificationDate = source.verificationDate;
        }
        if (source["_verificationDate"] !== undefined) {
            _this._verificationDate = new fhirModels.Element(source._verificationDate);
        }
        if (source["verified"] !== undefined) {
            _this.verified = source.verified;
        }
        if (source["_verified"] !== undefined) {
            _this._verified = new fhirModels.Element(source._verified);
        }
        if (source["verifiedWith"] !== undefined) {
            _this.verifiedWith = new fhirModels.Reference(source.verifiedWith);
        }
        return _this;
    }
    /**
     * Factory function to create a ConsentVerification from an object that MUST contain all required elements.
     */
    ConsentVerification.CreateStrict = function (source) {
        var dest = new ConsentVerification(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ConsentVerification is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ConsentVerification contains all required elements.
     */
    ConsentVerification.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["verified"] === undefined) {
            missingElements.push("verified");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ConsentVerification;
}(fhirModels.BackboneElement));
export { ConsentVerification };
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
var ConsentProvisionActor = /** @class */ (function (_super) {
    __extends(ConsentProvisionActor, _super);
    /**
     * Default constructor for ConsentProvisionActor from an object that MAY NOT contain all required elements.
     */
    function ConsentProvisionActor(source) {
        var _this = _super.call(this, source) || this;
        if (source["reference"] !== undefined) {
            _this.reference = new fhirModels.Reference(source.reference);
        }
        if (source["role"] !== undefined) {
            _this.role = new fhirModels.CodeableConcept(source.role);
        }
        return _this;
    }
    /**
     * Factory function to create a ConsentProvisionActor from an object that MUST contain all required elements.
     */
    ConsentProvisionActor.CreateStrict = function (source) {
        var dest = new ConsentProvisionActor(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ConsentProvisionActor is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ConsentProvisionActor contains all required elements.
     */
    ConsentProvisionActor.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        if (this["role"] === undefined) {
            missingElements.push("role");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ConsentProvisionActor;
}(fhirModels.BackboneElement));
export { ConsentProvisionActor };
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
var ConsentProvisionData = /** @class */ (function (_super) {
    __extends(ConsentProvisionData, _super);
    /**
     * Default constructor for ConsentProvisionData from an object that MAY NOT contain all required elements.
     */
    function ConsentProvisionData(source) {
        var _this = _super.call(this, source) || this;
        if (source["meaning"] !== undefined) {
            _this.meaning = source.meaning;
        }
        if (source["_meaning"] !== undefined) {
            _this._meaning = new fhirModels.Element(source._meaning);
        }
        if (source["reference"] !== undefined) {
            _this.reference = new fhirModels.Reference(source.reference);
        }
        return _this;
    }
    /**
     * Factory function to create a ConsentProvisionData from an object that MUST contain all required elements.
     */
    ConsentProvisionData.CreateStrict = function (source) {
        var dest = new ConsentProvisionData(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ConsentProvisionData is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ConsentProvisionData contains all required elements.
     */
    ConsentProvisionData.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["meaning"] === undefined) {
            missingElements.push("meaning");
        }
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ConsentProvisionData;
}(fhirModels.BackboneElement));
export { ConsentProvisionData };
/**
 * Code Values for the Consent.provision.data.meaning field
 */
export var ConsentProvisionDataMeaningEnum;
(function (ConsentProvisionDataMeaningEnum) {
    ConsentProvisionDataMeaningEnum["INSTANCE"] = "instance";
    ConsentProvisionDataMeaningEnum["RELATED"] = "related";
    ConsentProvisionDataMeaningEnum["DEPENDENTS"] = "dependents";
    ConsentProvisionDataMeaningEnum["AUTHOREDBY"] = "authoredby";
})(ConsentProvisionDataMeaningEnum || (ConsentProvisionDataMeaningEnum = {}));
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
var ConsentProvision = /** @class */ (function (_super) {
    __extends(ConsentProvision, _super);
    /**
     * Default constructor for ConsentProvision from an object that MAY NOT contain all required elements.
     */
    function ConsentProvision(source) {
        var _this = _super.call(this, source) || this;
        if (source["action"] !== undefined) {
            _this.action = source.action.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["actor"] !== undefined) {
            _this.actor = source.actor.map(function (x) { return new fhirModels.ConsentProvisionActor(x); });
        }
        if (source["class"] !== undefined) {
            _this["class"] = source["class"].map(function (x) { return new fhirModels.Coding(x); });
        }
        if (source["code"] !== undefined) {
            _this.code = source.code.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["data"] !== undefined) {
            _this.data = source.data.map(function (x) { return new fhirModels.ConsentProvisionData(x); });
        }
        if (source["dataPeriod"] !== undefined) {
            _this.dataPeriod = new fhirModels.Period(source.dataPeriod);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["provision"] !== undefined) {
            _this.provision = source.provision.map(function (x) { return new fhirModels.ConsentProvision(x); });
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose.map(function (x) { return new fhirModels.Coding(x); });
        }
        if (source["securityLabel"] !== undefined) {
            _this.securityLabel = source.securityLabel.map(function (x) { return new fhirModels.Coding(x); });
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
     * Factory function to create a ConsentProvision from an object that MUST contain all required elements.
     */
    ConsentProvision.CreateStrict = function (source) {
        var dest = new ConsentProvision(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ConsentProvision is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current ConsentProvision contains all required elements.
     */
    ConsentProvision.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return ConsentProvision;
}(fhirModels.BackboneElement));
export { ConsentProvision };
/**
 * Code Values for the Consent.provision.type field
 */
export var ConsentProvisionTypeEnum;
(function (ConsentProvisionTypeEnum) {
    ConsentProvisionTypeEnum["DENY"] = "deny";
    ConsentProvisionTypeEnum["PERMIT"] = "permit";
})(ConsentProvisionTypeEnum || (ConsentProvisionTypeEnum = {}));
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
var Consent = /** @class */ (function (_super) {
    __extends(Consent, _super);
    /**
     * Default constructor for Consent from an object that MAY NOT contain all required elements.
     */
    function Consent(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Consent";
        if ((source['resourceType'] !== "Consent") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Consent';
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["dateTime"] !== undefined) {
            _this.dateTime = source.dateTime;
        }
        if (source["_dateTime"] !== undefined) {
            _this._dateTime = new fhirModels.Element(source._dateTime);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["organization"] !== undefined) {
            _this.organization = source.organization.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["patient"] !== undefined) {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["performer"] !== undefined) {
            _this.performer = source.performer.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["policy"] !== undefined) {
            _this.policy = source.policy.map(function (x) { return new fhirModels.ConsentPolicy(x); });
        }
        if (source["policyRule"] !== undefined) {
            _this.policyRule = new fhirModels.CodeableConcept(source.policyRule);
        }
        if (source["provision"] !== undefined) {
            _this.provision = new fhirModels.ConsentProvision(source.provision);
        }
        if (source["scope"] !== undefined) {
            _this.scope = new fhirModels.CodeableConcept(source.scope);
        }
        if (source["sourceAttachment"] !== undefined) {
            _this.sourceAttachment = new fhirModels.Attachment(source.sourceAttachment);
        }
        if (source["sourceReference"] !== undefined) {
            _this.sourceReference = new fhirModels.Reference(source.sourceReference);
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["verification"] !== undefined) {
            _this.verification = source.verification.map(function (x) { return new fhirModels.ConsentVerification(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a Consent from an object that MUST contain all required elements.
     */
    Consent.CreateStrict = function (source) {
        var dest = new Consent(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Consent is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current Consent contains all required elements.
     */
    Consent.prototype.checkRequiredElements = function () {
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
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return Consent;
}(fhirModels.DomainResource));
export { Consent };
/**
 * Code Values for the Consent.status field
 */
export var ConsentStatusEnum;
(function (ConsentStatusEnum) {
    ConsentStatusEnum["DRAFT"] = "draft";
    ConsentStatusEnum["PROPOSED"] = "proposed";
    ConsentStatusEnum["ACTIVE"] = "active";
    ConsentStatusEnum["REJECTED"] = "rejected";
    ConsentStatusEnum["INACTIVE"] = "inactive";
    ConsentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ConsentStatusEnum || (ConsentStatusEnum = {}));
