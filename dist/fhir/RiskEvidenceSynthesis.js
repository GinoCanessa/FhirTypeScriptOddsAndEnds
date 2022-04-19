// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export class RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["numberOfParticipants"]) {
            this.numberOfParticipants = source.numberOfParticipants;
        }
        if (source["_numberOfParticipants"]) {
            this._numberOfParticipants = new fhir.FhirElement(source._numberOfParticipants);
        }
        if (source["numberOfStudies"]) {
            this.numberOfStudies = source.numberOfStudies;
        }
        if (source["_numberOfStudies"]) {
            this._numberOfStudies = new fhir.FhirElement(source._numberOfStudies);
        }
    }
    /**
     * Check if the current RiskEvidenceSynthesisSampleSize contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisSampleSize from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesisSampleSize(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesisSampleSize is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A description of the precision of the estimate for the effect.
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["from"]) {
            this.from = source.from;
        }
        if (source["_from"]) {
            this._from = new fhir.FhirElement(source._from);
        }
        if (source["level"]) {
            this.level = source.level;
        }
        if (source["_level"]) {
            this._level = new fhir.FhirElement(source._level);
        }
        if (source["to"]) {
            this.to = source.to;
        }
        if (source["_to"]) {
            this._to = new fhir.FhirElement(source._to);
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
    }
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimatePrecisionEstimate contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimatePrecisionEstimate from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesisRiskEstimatePrecisionEstimate is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The estimated risk of the outcome.
 */
export class RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["denominatorCount"]) {
            this.denominatorCount = source.denominatorCount;
        }
        if (source["_denominatorCount"]) {
            this._denominatorCount = new fhir.FhirElement(source._denominatorCount);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["numeratorCount"]) {
            this.numeratorCount = source.numeratorCount;
        }
        if (source["_numeratorCount"]) {
            this._numeratorCount = new fhir.FhirElement(source._numeratorCount);
        }
        if (source["precisionEstimate"]) {
            this.precisionEstimate = source.precisionEstimate.map((x) => new fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source["unitOfMeasure"]) {
            this.unitOfMeasure = new fhir.CodeableConcept(source.unitOfMeasure);
        }
        if (source["value"]) {
            this.value = source.value;
        }
        if (source["_value"]) {
            this._value = new fhir.FhirElement(source._value);
        }
    }
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimate contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimate from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesisRiskEstimate(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesisRiskEstimate is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A description of a component of the overall certainty.
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["rating"]) {
            this.rating = source.rating.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
    }
    /**
     * Check if the current RiskEvidenceSynthesisCertaintyCertaintySubcomponent contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesisCertaintyCertaintySubcomponent(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesisCertaintyCertaintySubcomponent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A description of the certainty of the risk estimate.
 */
export class RiskEvidenceSynthesisCertainty extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["certaintySubcomponent"]) {
            this.certaintySubcomponent = source.certaintySubcomponent.map((x) => new fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponent(x));
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["rating"]) {
            this.rating = source.rating.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current RiskEvidenceSynthesisCertainty contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesisCertainty from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesisCertainty(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesisCertainty is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export class RiskEvidenceSynthesis extends fhir.DomainResource {
    /**
     * Default constructor for RiskEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'RiskEvidenceSynthesis';
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        if (source["certainty"]) {
            this.certainty = source.certainty.map((x) => new fhir.RiskEvidenceSynthesisCertainty(x));
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
        if (source["date"]) {
            this.date = source.date;
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
        if (source["editor"]) {
            this.editor = source.editor.map((x) => new fhir.ContactDetail(x));
        }
        if (source["effectivePeriod"]) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source["endorser"]) {
            this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x));
        }
        if (source["exposure"]) {
            this.exposure = new fhir.Reference(source.exposure);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["lastReviewDate"]) {
            this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"]) {
            this._lastReviewDate = new fhir.FhirElement(source._lastReviewDate);
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        this.outcome = null;
        if (source["outcome"]) {
            this.outcome = new fhir.Reference(source.outcome);
        }
        if (this.outcome === undefined) {
            this.outcome = null;
        }
        this.population = null;
        if (source["population"]) {
            this.population = new fhir.Reference(source.population);
        }
        if (this.population === undefined) {
            this.population = null;
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["relatedArtifact"]) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source["reviewer"]) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
        }
        if (source["riskEstimate"]) {
            this.riskEstimate = new fhir.RiskEvidenceSynthesisRiskEstimate(source.riskEstimate);
        }
        if (source["sampleSize"]) {
            this.sampleSize = new fhir.RiskEvidenceSynthesisSampleSize(source.sampleSize);
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
        if (source["studyType"]) {
            this.studyType = new fhir.CodeableConcept(source.studyType);
        }
        if (source["synthesisType"]) {
            this.synthesisType = new fhir.CodeableConcept(source.synthesisType);
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["topic"]) {
            this.topic = source.topic.map((x) => new fhir.CodeableConcept(x));
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
     * Check if the current RiskEvidenceSynthesis contains all required elements.
     */
    CheckRequiredElements() {
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
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskEvidenceSynthesis from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskEvidenceSynthesis(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskEvidenceSynthesis is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
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
//# sourceMappingURL=RiskEvidenceSynthesis.js.map