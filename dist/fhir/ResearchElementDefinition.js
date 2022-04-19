// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export class ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["definitionCodeableConcept"]) {
            this.definitionCodeableConcept = new fhir.CodeableConcept(source.definitionCodeableConcept);
        }
        if (source["definitionCanonical"]) {
            this.definitionCanonical = source.definitionCanonical;
        }
        if (source["_definitionCanonical"]) {
            this._definitionCanonical = new fhir.FhirElement(source._definitionCanonical);
        }
        if (source["definitionExpression"]) {
            this.definitionExpression = new fhir.Expression(source.definitionExpression);
        }
        if (source["definitionDataRequirement"]) {
            this.definitionDataRequirement = new fhir.DataRequirement(source.definitionDataRequirement);
        }
        if (source["exclude"]) {
            this.exclude = source.exclude;
        }
        if (source["_exclude"]) {
            this._exclude = new fhir.FhirElement(source._exclude);
        }
        if (source["participantEffectiveDateTime"]) {
            this.participantEffectiveDateTime = source.participantEffectiveDateTime;
        }
        if (source["_participantEffectiveDateTime"]) {
            this._participantEffectiveDateTime = new fhir.FhirElement(source._participantEffectiveDateTime);
        }
        if (source["participantEffectivePeriod"]) {
            this.participantEffectivePeriod = new fhir.Period(source.participantEffectivePeriod);
        }
        if (source["participantEffectiveDuration"]) {
            this.participantEffectiveDuration = new fhir.Duration(source.participantEffectiveDuration);
        }
        if (source["participantEffectiveTiming"]) {
            this.participantEffectiveTiming = new fhir.Timing(source.participantEffectiveTiming);
        }
        if (source["participantEffectiveDescription"]) {
            this.participantEffectiveDescription = source.participantEffectiveDescription;
        }
        if (source["_participantEffectiveDescription"]) {
            this._participantEffectiveDescription = new fhir.FhirElement(source._participantEffectiveDescription);
        }
        if (source["participantEffectiveGroupMeasure"]) {
            this.participantEffectiveGroupMeasure = source.participantEffectiveGroupMeasure;
        }
        if (source["_participantEffectiveGroupMeasure"]) {
            this._participantEffectiveGroupMeasure = new fhir.FhirElement(source._participantEffectiveGroupMeasure);
        }
        if (source["participantEffectiveTimeFromStart"]) {
            this.participantEffectiveTimeFromStart = new fhir.Duration(source.participantEffectiveTimeFromStart);
        }
        if (source["studyEffectiveDateTime"]) {
            this.studyEffectiveDateTime = source.studyEffectiveDateTime;
        }
        if (source["_studyEffectiveDateTime"]) {
            this._studyEffectiveDateTime = new fhir.FhirElement(source._studyEffectiveDateTime);
        }
        if (source["studyEffectivePeriod"]) {
            this.studyEffectivePeriod = new fhir.Period(source.studyEffectivePeriod);
        }
        if (source["studyEffectiveDuration"]) {
            this.studyEffectiveDuration = new fhir.Duration(source.studyEffectiveDuration);
        }
        if (source["studyEffectiveTiming"]) {
            this.studyEffectiveTiming = new fhir.Timing(source.studyEffectiveTiming);
        }
        if (source["studyEffectiveDescription"]) {
            this.studyEffectiveDescription = source.studyEffectiveDescription;
        }
        if (source["_studyEffectiveDescription"]) {
            this._studyEffectiveDescription = new fhir.FhirElement(source._studyEffectiveDescription);
        }
        if (source["studyEffectiveGroupMeasure"]) {
            this.studyEffectiveGroupMeasure = source.studyEffectiveGroupMeasure;
        }
        if (source["_studyEffectiveGroupMeasure"]) {
            this._studyEffectiveGroupMeasure = new fhir.FhirElement(source._studyEffectiveGroupMeasure);
        }
        if (source["studyEffectiveTimeFromStart"]) {
            this.studyEffectiveTimeFromStart = new fhir.Duration(source.studyEffectiveTimeFromStart);
        }
        if (source["unitOfMeasure"]) {
            this.unitOfMeasure = new fhir.CodeableConcept(source.unitOfMeasure);
        }
        if (source["usageContext"]) {
            this.usageContext = source.usageContext.map((x) => new fhir.UsageContext(x));
        }
    }
    /**
     * Check if the current ResearchElementDefinitionCharacteristic contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ResearchElementDefinitionCharacteristic from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ResearchElementDefinitionCharacteristic(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ResearchElementDefinitionCharacteristic is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ResearchElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ResearchElementDefinition';
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        this.characteristic = null;
        if (source["characteristic"]) {
            this.characteristic = source.characteristic.map((x) => new fhir.ResearchElementDefinitionCharacteristic(x));
        }
        if (this.characteristic === undefined) {
            this.characteristic = null;
        }
        if (source["comment"]) {
            this.comment = source.comment.map((x) => (x));
        }
        if (source["_comment"]) {
            this._comment = source._comment.map((x) => new fhir.FhirElement(x));
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
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
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
        if (source["relatedArtifact"]) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source["reviewer"]) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
        }
        if (source["shortTitle"]) {
            this.shortTitle = source.shortTitle;
        }
        if (source["_shortTitle"]) {
            this._shortTitle = new fhir.FhirElement(source._shortTitle);
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
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["topic"]) {
            this.topic = source.topic.map((x) => new fhir.CodeableConcept(x));
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
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
        if (source["variableType"]) {
            this.variableType = source.variableType;
        }
        if (source["_variableType"]) {
            this._variableType = new fhir.FhirElement(source._variableType);
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current ResearchElementDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["characteristic"]) || (this["characteristic"].length === 0)) {
            missingElements.push("characteristic");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ResearchElementDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ResearchElementDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ResearchElementDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure field
 */
export var ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum;
(function (ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum) {
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN"] = "mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN"] = "median";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN_OF_MEAN"] = "mean-of-mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN_OF_MEDIAN"] = "mean-of-median";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN_OF_MEAN"] = "median-of-mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum || (ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure field
 */
export var ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum;
(function (ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum) {
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN"] = "mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN"] = "median";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN_OF_MEAN"] = "mean-of-mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN_OF_MEDIAN"] = "mean-of-median";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN_OF_MEAN"] = "median-of-mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum || (ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.status field
 */
export var ResearchElementDefinitionStatusEnum;
(function (ResearchElementDefinitionStatusEnum) {
    ResearchElementDefinitionStatusEnum["DRAFT"] = "draft";
    ResearchElementDefinitionStatusEnum["ACTIVE"] = "active";
    ResearchElementDefinitionStatusEnum["RETIRED"] = "retired";
    ResearchElementDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(ResearchElementDefinitionStatusEnum || (ResearchElementDefinitionStatusEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.type field
 */
export var ResearchElementDefinitionTypeEnum;
(function (ResearchElementDefinitionTypeEnum) {
    ResearchElementDefinitionTypeEnum["POPULATION"] = "population";
    ResearchElementDefinitionTypeEnum["EXPOSURE"] = "exposure";
    ResearchElementDefinitionTypeEnum["OUTCOME"] = "outcome";
})(ResearchElementDefinitionTypeEnum || (ResearchElementDefinitionTypeEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.variableType field
 */
export var ResearchElementDefinitionVariableTypeEnum;
(function (ResearchElementDefinitionVariableTypeEnum) {
    ResearchElementDefinitionVariableTypeEnum["DICHOTOMOUS"] = "dichotomous";
    ResearchElementDefinitionVariableTypeEnum["CONTINUOUS"] = "continuous";
    ResearchElementDefinitionVariableTypeEnum["DESCRIPTIVE"] = "descriptive";
})(ResearchElementDefinitionVariableTypeEnum || (ResearchElementDefinitionVariableTypeEnum = {}));
//# sourceMappingURL=ResearchElementDefinition.js.map