// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A population criteria for the measure.
 */
export class MeasureGroupPopulation extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        this.criteria = null;
        if (source["criteria"]) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        if (this.criteria === undefined) {
            this.criteria = null;
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
    }
    /**
     * Check if the current MeasureGroupPopulation contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["criteria"] === undefined) {
            missingElements.push("criteria");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MeasureGroupPopulation from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MeasureGroupPopulation(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MeasureGroupPopulation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Stratifiers are defined either as a single criteria, or as a set of component criteria.
 */
export class MeasureGroupStratifierComponent extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupStratifierComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        this.criteria = null;
        if (source["criteria"]) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        if (this.criteria === undefined) {
            this.criteria = null;
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
    }
    /**
     * Check if the current MeasureGroupStratifierComponent contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["criteria"] === undefined) {
            missingElements.push("criteria");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MeasureGroupStratifierComponent from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MeasureGroupStratifierComponent(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MeasureGroupStratifierComponent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
 */
export class MeasureGroupStratifier extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupStratifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["component"]) {
            this.component = source.component.map((x) => new fhir.MeasureGroupStratifierComponent(x));
        }
        if (source["criteria"]) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
    }
    /**
     * Check if the current MeasureGroupStratifier contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MeasureGroupStratifier from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MeasureGroupStratifier(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MeasureGroupStratifier is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A group of population criteria for the measure.
 */
export class MeasureGroup extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["population"]) {
            this.population = source.population.map((x) => new fhir.MeasureGroupPopulation(x));
        }
        if (source["stratifier"]) {
            this.stratifier = source.stratifier.map((x) => new fhir.MeasureGroupStratifier(x));
        }
    }
    /**
     * Check if the current MeasureGroup contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MeasureGroup from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MeasureGroup(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MeasureGroup is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
 */
export class MeasureSupplementalData extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureSupplementalData - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        this.criteria = null;
        if (source["criteria"]) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        if (this.criteria === undefined) {
            this.criteria = null;
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["usage"]) {
            this.usage = source.usage.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current MeasureSupplementalData contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["criteria"] === undefined) {
            missingElements.push("criteria");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MeasureSupplementalData from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new MeasureSupplementalData(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `MeasureSupplementalData is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The Measure resource provides the definition of a quality measure.
 */
export class Measure extends fhir.DomainResource {
    /**
     * Default constructor for Measure - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Measure';
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        if (source["clinicalRecommendationStatement"]) {
            this.clinicalRecommendationStatement = source.clinicalRecommendationStatement;
        }
        if (source["_clinicalRecommendationStatement"]) {
            this._clinicalRecommendationStatement = new fhir.FhirElement(source._clinicalRecommendationStatement);
        }
        if (source["compositeScoring"]) {
            this.compositeScoring = new fhir.CodeableConcept(source.compositeScoring);
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
        if (source["definition"]) {
            this.definition = source.definition.map((x) => (x));
        }
        if (source["_definition"]) {
            this._definition = source._definition.map((x) => new fhir.FhirElement(x));
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["disclaimer"]) {
            this.disclaimer = source.disclaimer;
        }
        if (source["_disclaimer"]) {
            this._disclaimer = new fhir.FhirElement(source._disclaimer);
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
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source["group"]) {
            this.group = source.group.map((x) => new fhir.MeasureGroup(x));
        }
        if (source["guidance"]) {
            this.guidance = source.guidance;
        }
        if (source["_guidance"]) {
            this._guidance = new fhir.FhirElement(source._guidance);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["improvementNotation"]) {
            this.improvementNotation = new fhir.CodeableConcept(source.improvementNotation);
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
        if (source["library"]) {
            this.library = source.library.map((x) => (x));
        }
        if (source["_library"]) {
            this._library = source._library.map((x) => new fhir.FhirElement(x));
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
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
        if (source["rateAggregation"]) {
            this.rateAggregation = source.rateAggregation;
        }
        if (source["_rateAggregation"]) {
            this._rateAggregation = new fhir.FhirElement(source._rateAggregation);
        }
        if (source["rationale"]) {
            this.rationale = source.rationale;
        }
        if (source["_rationale"]) {
            this._rationale = new fhir.FhirElement(source._rationale);
        }
        if (source["relatedArtifact"]) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source["reviewer"]) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
        }
        if (source["riskAdjustment"]) {
            this.riskAdjustment = source.riskAdjustment;
        }
        if (source["_riskAdjustment"]) {
            this._riskAdjustment = new fhir.FhirElement(source._riskAdjustment);
        }
        if (source["scoring"]) {
            this.scoring = new fhir.CodeableConcept(source.scoring);
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
        if (source["subjectCodeableConcept"]) {
            this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"]) {
            this.subjectReference = new fhir.Reference(source.subjectReference);
        }
        if (source["subtitle"]) {
            this.subtitle = source.subtitle;
        }
        if (source["_subtitle"]) {
            this._subtitle = new fhir.FhirElement(source._subtitle);
        }
        if (source["supplementalData"]) {
            this.supplementalData = source.supplementalData.map((x) => new fhir.MeasureSupplementalData(x));
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
        if (source["type"]) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["usage"]) {
            this.usage = source.usage;
        }
        if (source["_usage"]) {
            this._usage = new fhir.FhirElement(source._usage);
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
     * Check if the current Measure contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Measure from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Measure(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Measure is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Measure.status field
 */
export var MeasureStatusEnum;
(function (MeasureStatusEnum) {
    MeasureStatusEnum["DRAFT"] = "draft";
    MeasureStatusEnum["ACTIVE"] = "active";
    MeasureStatusEnum["RETIRED"] = "retired";
    MeasureStatusEnum["UNKNOWN"] = "unknown";
})(MeasureStatusEnum || (MeasureStatusEnum = {}));
//# sourceMappingURL=Measure.js.map