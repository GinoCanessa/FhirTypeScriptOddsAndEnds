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
 * A description of the size of the sample involved in the synthesis.
 */
var RiskEvidenceSynthesisSampleSize = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesisSampleSize, _super);
    /**
     * Default constructor for RiskEvidenceSynthesisSampleSize from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesisSampleSize(source) {
        var _this = _super.call(this, source) || this;
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["numberOfParticipants"] !== undefined) {
            _this.numberOfParticipants = source.numberOfParticipants;
        }
        if (source["_numberOfParticipants"] !== undefined) {
            _this._numberOfParticipants = new fhirModels.Element(source._numberOfParticipants);
        }
        if (source["numberOfStudies"] !== undefined) {
            _this.numberOfStudies = source.numberOfStudies;
        }
        if (source["_numberOfStudies"] !== undefined) {
            _this._numberOfStudies = new fhirModels.Element(source._numberOfStudies);
        }
        return _this;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisSampleSize from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesisSampleSize.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesisSampleSize(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesisSampleSize is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesisSampleSize contains all required elements.
     */
    RiskEvidenceSynthesisSampleSize.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesisSampleSize;
}(fhirModels.BackboneElement));
export { RiskEvidenceSynthesisSampleSize };
/**
 * A description of the precision of the estimate for the effect.
 */
var RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesisRiskEstimatePrecisionEstimate, _super);
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(source) {
        var _this = _super.call(this, source) || this;
        if (source["from"] !== undefined) {
            _this.from = source.from;
        }
        if (source["_from"] !== undefined) {
            _this._from = new fhirModels.Element(source._from);
        }
        if (source["level"] !== undefined) {
            _this.level = source.level;
        }
        if (source["_level"] !== undefined) {
            _this._level = new fhirModels.Element(source._level);
        }
        if (source["to"] !== undefined) {
            _this.to = source.to;
        }
        if (source["_to"] !== undefined) {
            _this._to = new fhirModels.Element(source._to);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimatePrecisionEstimate from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesisRiskEstimatePrecisionEstimate.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesisRiskEstimatePrecisionEstimate is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimatePrecisionEstimate contains all required elements.
     */
    RiskEvidenceSynthesisRiskEstimatePrecisionEstimate.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
}(fhirModels.BackboneElement));
export { RiskEvidenceSynthesisRiskEstimatePrecisionEstimate };
/**
 * The estimated risk of the outcome.
 */
var RiskEvidenceSynthesisRiskEstimate = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesisRiskEstimate, _super);
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesisRiskEstimate(source) {
        var _this = _super.call(this, source) || this;
        if (source["denominatorCount"] !== undefined) {
            _this.denominatorCount = source.denominatorCount;
        }
        if (source["_denominatorCount"] !== undefined) {
            _this._denominatorCount = new fhirModels.Element(source._denominatorCount);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["numeratorCount"] !== undefined) {
            _this.numeratorCount = source.numeratorCount;
        }
        if (source["_numeratorCount"] !== undefined) {
            _this._numeratorCount = new fhirModels.Element(source._numeratorCount);
        }
        if (source["precisionEstimate"] !== undefined) {
            _this.precisionEstimate = source.precisionEstimate.map(function (x) { return new fhirModels.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["unitOfMeasure"] !== undefined) {
            _this.unitOfMeasure = new fhirModels.CodeableConcept(source.unitOfMeasure);
        }
        if (source["value"] !== undefined) {
            _this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            _this._value = new fhirModels.Element(source._value);
        }
        return _this;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimate from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesisRiskEstimate.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesisRiskEstimate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesisRiskEstimate is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimate contains all required elements.
     */
    RiskEvidenceSynthesisRiskEstimate.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesisRiskEstimate;
}(fhirModels.BackboneElement));
export { RiskEvidenceSynthesisRiskEstimate };
/**
 * A description of a component of the overall certainty.
 */
var RiskEvidenceSynthesisCertaintyCertaintySubcomponent = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesisCertaintyCertaintySubcomponent, _super);
    /**
     * Default constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesisCertaintyCertaintySubcomponent(source) {
        var _this = _super.call(this, source) || this;
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["rating"] !== undefined) {
            _this.rating = source.rating.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesisCertaintyCertaintySubcomponent.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesisCertaintyCertaintySubcomponent(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesisCertaintyCertaintySubcomponent is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesisCertaintyCertaintySubcomponent contains all required elements.
     */
    RiskEvidenceSynthesisCertaintyCertaintySubcomponent.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesisCertaintyCertaintySubcomponent;
}(fhirModels.BackboneElement));
export { RiskEvidenceSynthesisCertaintyCertaintySubcomponent };
/**
 * A description of the certainty of the risk estimate.
 */
var RiskEvidenceSynthesisCertainty = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesisCertainty, _super);
    /**
     * Default constructor for RiskEvidenceSynthesisCertainty from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesisCertainty(source) {
        var _this = _super.call(this, source) || this;
        if (source["certaintySubcomponent"] !== undefined) {
            _this.certaintySubcomponent = source.certaintySubcomponent.map(function (x) { return new fhirModels.RiskEvidenceSynthesisCertaintyCertaintySubcomponent(x); });
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["rating"] !== undefined) {
            _this.rating = source.rating.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisCertainty from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesisCertainty.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesisCertainty(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesisCertainty is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesisCertainty contains all required elements.
     */
    RiskEvidenceSynthesisCertainty.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesisCertainty;
}(fhirModels.BackboneElement));
export { RiskEvidenceSynthesisCertainty };
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
var RiskEvidenceSynthesis = /** @class */ (function (_super) {
    __extends(RiskEvidenceSynthesis, _super);
    /**
     * Default constructor for RiskEvidenceSynthesis from an object that MAY NOT contain all required elements.
     */
    function RiskEvidenceSynthesis(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "RiskEvidenceSynthesis";
        if ((source['resourceType'] !== "RiskEvidenceSynthesis") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a RiskEvidenceSynthesis';
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
        if (source["certainty"] !== undefined) {
            _this.certainty = source.certainty.map(function (x) { return new fhirModels.RiskEvidenceSynthesisCertainty(x); });
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
        if (source["editor"] !== undefined) {
            _this.editor = source.editor.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["effectivePeriod"] !== undefined) {
            _this.effectivePeriod = new fhirModels.Period(source.effectivePeriod);
        }
        if (source["endorser"] !== undefined) {
            _this.endorser = source.endorser.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["exposure"] !== undefined) {
            _this.exposure = new fhirModels.Reference(source.exposure);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["lastReviewDate"] !== undefined) {
            _this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"] !== undefined) {
            _this._lastReviewDate = new fhirModels.Element(source._lastReviewDate);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["outcome"] !== undefined) {
            _this.outcome = new fhirModels.Reference(source.outcome);
        }
        if (source["population"] !== undefined) {
            _this.population = new fhirModels.Reference(source.population);
        }
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["relatedArtifact"] !== undefined) {
            _this.relatedArtifact = source.relatedArtifact.map(function (x) { return new fhirModels.RelatedArtifact(x); });
        }
        if (source["reviewer"] !== undefined) {
            _this.reviewer = source.reviewer.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["riskEstimate"] !== undefined) {
            _this.riskEstimate = new fhirModels.RiskEvidenceSynthesisRiskEstimate(source.riskEstimate);
        }
        if (source["sampleSize"] !== undefined) {
            _this.sampleSize = new fhirModels.RiskEvidenceSynthesisSampleSize(source.sampleSize);
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["studyType"] !== undefined) {
            _this.studyType = new fhirModels.CodeableConcept(source.studyType);
        }
        if (source["synthesisType"] !== undefined) {
            _this.synthesisType = new fhirModels.CodeableConcept(source.synthesisType);
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
    /**
     * Factory function to create a RiskEvidenceSynthesis from an object that MUST contain all required elements.
     */
    RiskEvidenceSynthesis.CreateStrict = function (source) {
        var dest = new RiskEvidenceSynthesis(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "RiskEvidenceSynthesis is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current RiskEvidenceSynthesis contains all required elements.
     */
    RiskEvidenceSynthesis.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["outcome"] === undefined) {
            missingElements.push("outcome");
        }
        if (this["population"] === undefined) {
            missingElements.push("population");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return RiskEvidenceSynthesis;
}(fhirModels.DomainResource));
export { RiskEvidenceSynthesis };
/**
 * Code Values for the RiskEvidenceSynthesis.status field
 */
export var RiskEvidenceSynthesisStatusEnum;
(function (RiskEvidenceSynthesisStatusEnum) {
    RiskEvidenceSynthesisStatusEnum["DRAFT"] = "draft";
    RiskEvidenceSynthesisStatusEnum["ACTIVE"] = "active";
    RiskEvidenceSynthesisStatusEnum["RETIRED"] = "retired";
    RiskEvidenceSynthesisStatusEnum["UNKNOWN"] = "unknown";
})(RiskEvidenceSynthesisStatusEnum || (RiskEvidenceSynthesisStatusEnum = {}));