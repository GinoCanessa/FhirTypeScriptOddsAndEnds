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
exports.ResearchElementDefinitionVariableTypeEnum = exports.ResearchElementDefinitionTypeEnum = exports.ResearchElementDefinitionStatusEnum = exports.ResearchElementDefinition = exports.ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum = exports.ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum = exports.ResearchElementDefinitionCharacteristic = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
class ResearchElementDefinitionCharacteristic extends fhirModels.BackboneElement {
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["definitionCodeableConcept"] !== undefined) {
            this.definitionCodeableConcept = new fhirModels.CodeableConcept(source.definitionCodeableConcept);
        }
        if (source["definitionCanonical"] !== undefined) {
            this.definitionCanonical = source.definitionCanonical;
        }
        if (source["_definitionCanonical"] !== undefined) {
            this._definitionCanonical = new fhirModels.Element(source._definitionCanonical);
        }
        if (source["definitionExpression"] !== undefined) {
            this.definitionExpression = new fhirModels.Expression(source.definitionExpression);
        }
        if (source["definitionDataRequirement"] !== undefined) {
            this.definitionDataRequirement = new fhirModels.DataRequirement(source.definitionDataRequirement);
        }
        if (source["exclude"] !== undefined) {
            this.exclude = source.exclude;
        }
        if (source["_exclude"] !== undefined) {
            this._exclude = new fhirModels.Element(source._exclude);
        }
        if (source["participantEffectiveDateTime"] !== undefined) {
            this.participantEffectiveDateTime = source.participantEffectiveDateTime;
        }
        if (source["_participantEffectiveDateTime"] !== undefined) {
            this._participantEffectiveDateTime = new fhirModels.Element(source._participantEffectiveDateTime);
        }
        if (source["participantEffectivePeriod"] !== undefined) {
            this.participantEffectivePeriod = new fhirModels.Period(source.participantEffectivePeriod);
        }
        if (source["participantEffectiveDuration"] !== undefined) {
            this.participantEffectiveDuration = new fhirModels.Duration(source.participantEffectiveDuration);
        }
        if (source["participantEffectiveTiming"] !== undefined) {
            this.participantEffectiveTiming = new fhirModels.Timing(source.participantEffectiveTiming);
        }
        if (source["participantEffectiveDescription"] !== undefined) {
            this.participantEffectiveDescription = source.participantEffectiveDescription;
        }
        if (source["_participantEffectiveDescription"] !== undefined) {
            this._participantEffectiveDescription = new fhirModels.Element(source._participantEffectiveDescription);
        }
        if (source["participantEffectiveGroupMeasure"] !== undefined) {
            this.participantEffectiveGroupMeasure = source.participantEffectiveGroupMeasure;
        }
        if (source["_participantEffectiveGroupMeasure"] !== undefined) {
            this._participantEffectiveGroupMeasure = new fhirModels.Element(source._participantEffectiveGroupMeasure);
        }
        if (source["participantEffectiveTimeFromStart"] !== undefined) {
            this.participantEffectiveTimeFromStart = new fhirModels.Duration(source.participantEffectiveTimeFromStart);
        }
        if (source["studyEffectiveDateTime"] !== undefined) {
            this.studyEffectiveDateTime = source.studyEffectiveDateTime;
        }
        if (source["_studyEffectiveDateTime"] !== undefined) {
            this._studyEffectiveDateTime = new fhirModels.Element(source._studyEffectiveDateTime);
        }
        if (source["studyEffectivePeriod"] !== undefined) {
            this.studyEffectivePeriod = new fhirModels.Period(source.studyEffectivePeriod);
        }
        if (source["studyEffectiveDuration"] !== undefined) {
            this.studyEffectiveDuration = new fhirModels.Duration(source.studyEffectiveDuration);
        }
        if (source["studyEffectiveTiming"] !== undefined) {
            this.studyEffectiveTiming = new fhirModels.Timing(source.studyEffectiveTiming);
        }
        if (source["studyEffectiveDescription"] !== undefined) {
            this.studyEffectiveDescription = source.studyEffectiveDescription;
        }
        if (source["_studyEffectiveDescription"] !== undefined) {
            this._studyEffectiveDescription = new fhirModels.Element(source._studyEffectiveDescription);
        }
        if (source["studyEffectiveGroupMeasure"] !== undefined) {
            this.studyEffectiveGroupMeasure = source.studyEffectiveGroupMeasure;
        }
        if (source["_studyEffectiveGroupMeasure"] !== undefined) {
            this._studyEffectiveGroupMeasure = new fhirModels.Element(source._studyEffectiveGroupMeasure);
        }
        if (source["studyEffectiveTimeFromStart"] !== undefined) {
            this.studyEffectiveTimeFromStart = new fhirModels.Duration(source.studyEffectiveTimeFromStart);
        }
        if (source["unitOfMeasure"] !== undefined) {
            this.unitOfMeasure = new fhirModels.CodeableConcept(source.unitOfMeasure);
        }
        if (source["usageContext"] !== undefined) {
            this.usageContext = source.usageContext.map((x) => new fhirModels.UsageContext(x));
        }
    }
    /**
     * Factory function to create a ResearchElementDefinitionCharacteristic from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ResearchElementDefinitionCharacteristic(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ResearchElementDefinitionCharacteristic is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ResearchElementDefinitionCharacteristic = ResearchElementDefinitionCharacteristic;
/**
 * Code Values for the ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure field
 */
var ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum;
(function (ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum) {
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN"] = "mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN"] = "median";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN_OF_MEAN"] = "mean-of-mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEAN_OF_MEDIAN"] = "mean-of-median";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN_OF_MEAN"] = "median-of-mean";
    ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum = exports.ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum || (exports.ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure field
 */
var ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum;
(function (ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum) {
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN"] = "mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN"] = "median";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN_OF_MEAN"] = "mean-of-mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEAN_OF_MEDIAN"] = "mean-of-median";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN_OF_MEAN"] = "median-of-mean";
    ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum = exports.ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum || (exports.ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureEnum = {}));
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
class ResearchElementDefinition extends fhirModels.DomainResource {
    /**
     * Default constructor for ResearchElementDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "ResearchElementDefinition";
        if ((source['resourceType'] !== "ResearchElementDefinition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ResearchElementDefinition';
        }
        if (source["approvalDate"] !== undefined) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"] !== undefined) {
            this._approvalDate = new fhirModels.Element(source._approvalDate);
        }
        if (source["author"] !== undefined) {
            this.author = source.author.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["characteristic"] !== undefined) {
            this.characteristic = source.characteristic.map((x) => new fhirModels.ResearchElementDefinitionCharacteristic(x));
        }
        if (source["comment"] !== undefined) {
            this.comment = source.comment.map((x) => (x));
        }
        if (source["_comment"] !== undefined) {
            this._comment = source._comment.map((x) => new fhirModels.Element(x));
        }
        if (source["contact"] !== undefined) {
            this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["copyright"] !== undefined) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"] !== undefined) {
            this._copyright = new fhirModels.Element(source._copyright);
        }
        if (source["date"] !== undefined) {
            this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            this._date = new fhirModels.Element(source._date);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["editor"] !== undefined) {
            this.editor = source.editor.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["effectivePeriod"] !== undefined) {
            this.effectivePeriod = new fhirModels.Period(source.effectivePeriod);
        }
        if (source["endorser"] !== undefined) {
            this.endorser = source.endorser.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["experimental"] !== undefined) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["jurisdiction"] !== undefined) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["lastReviewDate"] !== undefined) {
            this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"] !== undefined) {
            this._lastReviewDate = new fhirModels.Element(source._lastReviewDate);
        }
        if (source["library"] !== undefined) {
            this.library = source.library.map((x) => (x));
        }
        if (source["_library"] !== undefined) {
            this._library = source._library.map((x) => new fhirModels.Element(x));
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["publisher"] !== undefined) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["relatedArtifact"] !== undefined) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhirModels.RelatedArtifact(x));
        }
        if (source["reviewer"] !== undefined) {
            this.reviewer = source.reviewer.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["shortTitle"] !== undefined) {
            this.shortTitle = source.shortTitle;
        }
        if (source["_shortTitle"] !== undefined) {
            this._shortTitle = new fhirModels.Element(source._shortTitle);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["subjectCodeableConcept"] !== undefined) {
            this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"] !== undefined) {
            this.subjectReference = new fhirModels.Reference(source.subjectReference);
        }
        if (source["subtitle"] !== undefined) {
            this.subtitle = source.subtitle;
        }
        if (source["_subtitle"] !== undefined) {
            this._subtitle = new fhirModels.Element(source._subtitle);
        }
        if (source["title"] !== undefined) {
            this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            this._title = new fhirModels.Element(source._title);
        }
        if (source["topic"] !== undefined) {
            this.topic = source.topic.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["type"] !== undefined) {
            this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            this._type = new fhirModels.Element(source._type);
        }
        if (source["url"] !== undefined) {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
        if (source["usage"] !== undefined) {
            this.usage = source.usage;
        }
        if (source["_usage"] !== undefined) {
            this._usage = new fhirModels.Element(source._usage);
        }
        if (source["useContext"] !== undefined) {
            this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x));
        }
        if (source["variableType"] !== undefined) {
            this.variableType = source.variableType;
        }
        if (source["_variableType"] !== undefined) {
            this._variableType = new fhirModels.Element(source._variableType);
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
    /**
     * Factory function to create a ResearchElementDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ResearchElementDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ResearchElementDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ResearchElementDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((this["characteristic"] === undefined) || (this["characteristic"].length === 0)) {
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
}
exports.ResearchElementDefinition = ResearchElementDefinition;
/**
 * Code Values for the ResearchElementDefinition.status field
 */
var ResearchElementDefinitionStatusEnum;
(function (ResearchElementDefinitionStatusEnum) {
    ResearchElementDefinitionStatusEnum["DRAFT"] = "draft";
    ResearchElementDefinitionStatusEnum["ACTIVE"] = "active";
    ResearchElementDefinitionStatusEnum["RETIRED"] = "retired";
    ResearchElementDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(ResearchElementDefinitionStatusEnum = exports.ResearchElementDefinitionStatusEnum || (exports.ResearchElementDefinitionStatusEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.type field
 */
var ResearchElementDefinitionTypeEnum;
(function (ResearchElementDefinitionTypeEnum) {
    ResearchElementDefinitionTypeEnum["POPULATION"] = "population";
    ResearchElementDefinitionTypeEnum["EXPOSURE"] = "exposure";
    ResearchElementDefinitionTypeEnum["OUTCOME"] = "outcome";
})(ResearchElementDefinitionTypeEnum = exports.ResearchElementDefinitionTypeEnum || (exports.ResearchElementDefinitionTypeEnum = {}));
/**
 * Code Values for the ResearchElementDefinition.variableType field
 */
var ResearchElementDefinitionVariableTypeEnum;
(function (ResearchElementDefinitionVariableTypeEnum) {
    ResearchElementDefinitionVariableTypeEnum["DICHOTOMOUS"] = "dichotomous";
    ResearchElementDefinitionVariableTypeEnum["CONTINUOUS"] = "continuous";
    ResearchElementDefinitionVariableTypeEnum["DESCRIPTIVE"] = "descriptive";
})(ResearchElementDefinitionVariableTypeEnum = exports.ResearchElementDefinitionVariableTypeEnum || (exports.ResearchElementDefinitionVariableTypeEnum = {}));
//# sourceMappingURL=ResearchElementDefinition.js.map