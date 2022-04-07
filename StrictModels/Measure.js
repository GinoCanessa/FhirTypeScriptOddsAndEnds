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
 * A population criteria for the measure.
 */
var MeasureGroupPopulation = /** @class */ (function (_super) {
    __extends(MeasureGroupPopulation, _super);
    /**
     * Default constructor for MeasureGroupPopulation from an object that MAY NOT contain all required elements.
     */
    function MeasureGroupPopulation(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        {
            _this.criteria = new fhirModels.Expression(source.criteria);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        return _this;
    }
    return MeasureGroupPopulation;
}(fhirModels.BackboneElement));
export { MeasureGroupPopulation };
/**
 * Stratifiers are defined either as a single criteria, or as a set of component criteria.
 */
var MeasureGroupStratifierComponent = /** @class */ (function (_super) {
    __extends(MeasureGroupStratifierComponent, _super);
    /**
     * Default constructor for MeasureGroupStratifierComponent from an object that MAY NOT contain all required elements.
     */
    function MeasureGroupStratifierComponent(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        {
            _this.criteria = new fhirModels.Expression(source.criteria);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        return _this;
    }
    return MeasureGroupStratifierComponent;
}(fhirModels.BackboneElement));
export { MeasureGroupStratifierComponent };
/**
 * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
 */
var MeasureGroupStratifier = /** @class */ (function (_super) {
    __extends(MeasureGroupStratifier, _super);
    /**
     * Default constructor for MeasureGroupStratifier from an object that MAY NOT contain all required elements.
     */
    function MeasureGroupStratifier(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["component"] !== undefined) {
            _this.component = source.component.map(function (x) { return new fhirModels.MeasureGroupStratifierComponent(x); });
        }
        if (source["criteria"] !== undefined) {
            _this.criteria = new fhirModels.Expression(source.criteria);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        return _this;
    }
    return MeasureGroupStratifier;
}(fhirModels.BackboneElement));
export { MeasureGroupStratifier };
/**
 * A group of population criteria for the measure.
 */
var MeasureGroup = /** @class */ (function (_super) {
    __extends(MeasureGroup, _super);
    /**
     * Default constructor for MeasureGroup from an object that MAY NOT contain all required elements.
     */
    function MeasureGroup(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["population"] !== undefined) {
            _this.population = source.population.map(function (x) { return new fhirModels.MeasureGroupPopulation(x); });
        }
        if (source["stratifier"] !== undefined) {
            _this.stratifier = source.stratifier.map(function (x) { return new fhirModels.MeasureGroupStratifier(x); });
        }
        return _this;
    }
    return MeasureGroup;
}(fhirModels.BackboneElement));
export { MeasureGroup };
/**
 * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
 */
var MeasureSupplementalData = /** @class */ (function (_super) {
    __extends(MeasureSupplementalData, _super);
    /**
     * Default constructor for MeasureSupplementalData from an object that MAY NOT contain all required elements.
     */
    function MeasureSupplementalData(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        {
            _this.criteria = new fhirModels.Expression(source.criteria);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["usage"] !== undefined) {
            _this.usage = source.usage.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    return MeasureSupplementalData;
}(fhirModels.BackboneElement));
export { MeasureSupplementalData };
/**
 * The Measure resource provides the definition of a quality measure.
 */
var Measure = /** @class */ (function (_super) {
    __extends(Measure, _super);
    /**
     * Default constructor for Measure from an object that MAY NOT contain all required elements.
     */
    function Measure(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Measure";
        if ((source['resourceType'] !== "Measure") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Measure';
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
        if (source["clinicalRecommendationStatement"] !== undefined) {
            _this.clinicalRecommendationStatement = source.clinicalRecommendationStatement;
        }
        if (source["_clinicalRecommendationStatement"] !== undefined) {
            _this._clinicalRecommendationStatement = new fhirModels.Element(source._clinicalRecommendationStatement);
        }
        if (source["compositeScoring"] !== undefined) {
            _this.compositeScoring = new fhirModels.CodeableConcept(source.compositeScoring);
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
        if (source["definition"] !== undefined) {
            _this.definition = source.definition.map(function (x) { return (x); });
        }
        if (source["_definition"] !== undefined) {
            _this._definition = source._definition.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["disclaimer"] !== undefined) {
            _this.disclaimer = source.disclaimer;
        }
        if (source["_disclaimer"] !== undefined) {
            _this._disclaimer = new fhirModels.Element(source._disclaimer);
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
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["group"] !== undefined) {
            _this.group = source.group.map(function (x) { return new fhirModels.MeasureGroup(x); });
        }
        if (source["guidance"] !== undefined) {
            _this.guidance = source.guidance;
        }
        if (source["_guidance"] !== undefined) {
            _this._guidance = new fhirModels.Element(source._guidance);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["improvementNotation"] !== undefined) {
            _this.improvementNotation = new fhirModels.CodeableConcept(source.improvementNotation);
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
        if (source["library"] !== undefined) {
            _this.library = source.library.map(function (x) { return (x); });
        }
        if (source["_library"] !== undefined) {
            _this._library = source._library.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            _this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["rateAggregation"] !== undefined) {
            _this.rateAggregation = source.rateAggregation;
        }
        if (source["_rateAggregation"] !== undefined) {
            _this._rateAggregation = new fhirModels.Element(source._rateAggregation);
        }
        if (source["rationale"] !== undefined) {
            _this.rationale = source.rationale;
        }
        if (source["_rationale"] !== undefined) {
            _this._rationale = new fhirModels.Element(source._rationale);
        }
        if (source["relatedArtifact"] !== undefined) {
            _this.relatedArtifact = source.relatedArtifact.map(function (x) { return new fhirModels.RelatedArtifact(x); });
        }
        if (source["reviewer"] !== undefined) {
            _this.reviewer = source.reviewer.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["riskAdjustment"] !== undefined) {
            _this.riskAdjustment = source.riskAdjustment;
        }
        if (source["_riskAdjustment"] !== undefined) {
            _this._riskAdjustment = new fhirModels.Element(source._riskAdjustment);
        }
        if (source["scoring"] !== undefined) {
            _this.scoring = new fhirModels.CodeableConcept(source.scoring);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subjectCodeableConcept"] !== undefined) {
            _this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"] !== undefined) {
            _this.subjectReference = new fhirModels.Reference(source.subjectReference);
        }
        if (source["subtitle"] !== undefined) {
            _this.subtitle = source.subtitle;
        }
        if (source["_subtitle"] !== undefined) {
            _this._subtitle = new fhirModels.Element(source._subtitle);
        }
        if (source["supplementalData"] !== undefined) {
            _this.supplementalData = source.supplementalData.map(function (x) { return new fhirModels.MeasureSupplementalData(x); });
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
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        if (source["usage"] !== undefined) {
            _this.usage = source.usage;
        }
        if (source["_usage"] !== undefined) {
            _this._usage = new fhirModels.Element(source._usage);
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
    return Measure;
}(fhirModels.DomainResource));
export { Measure };
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
