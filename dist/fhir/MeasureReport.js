// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MeasureReport
import * as fhir from '../fhir.js';
import { MeasurePopulationValueSet, } from '../fhirValueSets/MeasurePopulationValueSet.js';
import { MeasureReportStatusValueSet, } from '../fhirValueSets/MeasureReportStatusValueSet.js';
import { MeasureReportTypeValueSet, } from '../fhirValueSets/MeasureReportTypeValueSet.js';
import { MeasureImprovementNotationValueSet, } from '../fhirValueSets/MeasureImprovementNotationValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export class MeasureReportGroupPopulation extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroupPopulation';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['count']) {
            this.count = new fhir.FhirInteger({ value: source.count });
        }
        if (source['subjectResults']) {
            this.subjectResults = new fhir.Reference(source.subjectResults);
        }
    }
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet() {
        return MeasurePopulationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["count"]) {
            outcome.issue.push(...this.count.doModelValidation().issue);
        }
        if (this["subjectResults"]) {
            outcome.issue.push(...this.subjectResults.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A stratifier component value.
 */
export class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroupStratifierStratumComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroupStratifierStratumComponent';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['value']) {
            this.value = new fhir.CodeableConcept(source.value);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['code']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property code:fhir.CodeableConcept fhir: MeasureReport.group.stratifier.stratum.component.code:CodeableConcept", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value:fhir.CodeableConcept fhir: MeasureReport.group.stratifier.stratum.component.value:CodeableConcept", }));
        }
        if (this["value"]) {
            outcome.issue.push(...this.value.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroupStratifierStratumPopulation';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['count']) {
            this.count = new fhir.FhirInteger({ value: source.count });
        }
        if (source['subjectResults']) {
            this.subjectResults = new fhir.Reference(source.subjectResults);
        }
    }
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet() {
        return MeasurePopulationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["count"]) {
            outcome.issue.push(...this.count.doModelValidation().issue);
        }
        if (this["subjectResults"]) {
            outcome.issue.push(...this.subjectResults.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export class MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroupStratifierStratum';
        /**
         * A stratifier component value.
         */
        this.component = [];
        /**
         * The populations that make up the stratum, one for each type of population appropriate to the measure.
         */
        this.population = [];
        if (source['value']) {
            this.value = new fhir.CodeableConcept(source.value);
        }
        if (source['component']) {
            this.component = source.component.map((x) => new fhir.MeasureReportGroupStratifierStratumComponent(x));
        }
        if (source['population']) {
            this.population = source.population.map((x) => new fhir.MeasureReportGroupStratifierStratumPopulation(x));
        }
        if (source['measureScore']) {
            this.measureScore = new fhir.Quantity(source.measureScore);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["value"]) {
            outcome.issue.push(...this.value.doModelValidation().issue);
        }
        if (this["component"]) {
            this.component.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["population"]) {
            this.population.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["measureScore"]) {
            outcome.issue.push(...this.measureScore.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export class MeasureReportGroupStratifier extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroupStratifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroupStratifier';
        /**
         * The meaning of this stratifier, as defined in the measure definition.
         */
        this.code = [];
        /**
         * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
         */
        this.stratum = [];
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['stratum']) {
            this.stratum = source.stratum.map((x) => new fhir.MeasureReportGroupStratifierStratum(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["stratum"]) {
            this.stratum.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export class MeasureReportGroup extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReportGroup';
        /**
         * The populations that make up the population group, one for each type of population appropriate for the measure.
         */
        this.population = [];
        /**
         * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
         */
        this.stratifier = [];
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['population']) {
            this.population = source.population.map((x) => new fhir.MeasureReportGroupPopulation(x));
        }
        if (source['measureScore']) {
            this.measureScore = new fhir.Quantity(source.measureScore);
        }
        if (source['stratifier']) {
            this.stratifier = source.stratifier.map((x) => new fhir.MeasureReportGroupStratifier(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["population"]) {
            this.population.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["measureScore"]) {
            outcome.issue.push(...this.measureScore.doModelValidation().issue);
        }
        if (this["stratifier"]) {
            this.stratifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export class MeasureReport extends fhir.DomainResource {
    /**
     * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureReport';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
         */
        this.identifier = [];
        /**
         * The results of the calculation, one for each population group in the measure.
         */
        this.group = [];
        /**
         * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
         */
        this.evaluatedResource = [];
        this.resourceType = 'MeasureReport';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['measure']) {
            this.measure = new fhir.FhirCanonical({ value: source.measure });
        }
        else {
            this.measure = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['reporter']) {
            this.reporter = new fhir.Reference(source.reporter);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        else {
            this.period = null;
        }
        if (source['improvementNotation']) {
            this.improvementNotation = new fhir.CodeableConcept(source.improvementNotation);
        }
        if (source['group']) {
            this.group = source.group.map((x) => new fhir.MeasureReportGroup(x));
        }
        if (source['evaluatedResource']) {
            this.evaluatedResource = source.evaluatedResource.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return MeasureReportStatusValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return MeasureReportTypeValueSet;
    }
    /**
     * Required-bound Value Set for improvementNotation
     */
    static improvementNotationRequiredValueSet() {
        return MeasureImprovementNotationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'MeasureReport' fhir: MeasureReport.resourceType:'MeasureReport'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:MeasureReportStatusValueSetEnum fhir: MeasureReport.status:code", }));
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:MeasureReportTypeValueSetEnum fhir: MeasureReport.type:code", }));
        }
        if (!this['measure']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property measure:fhir.FhirCanonical fhir: MeasureReport.measure:canonical", }));
        }
        if (this["measure"]) {
            outcome.issue.push(...this.measure.doModelValidation().issue);
        }
        if (this["subject"]) {
            outcome.issue.push(...this.subject.doModelValidation().issue);
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["reporter"]) {
            outcome.issue.push(...this.reporter.doModelValidation().issue);
        }
        if (!this['period']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property period:fhir.Period fhir: MeasureReport.period:Period", }));
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["improvementNotation"]) {
            outcome.issue.push(...this.improvementNotation.doModelValidation().issue);
        }
        if (this["group"]) {
            this.group.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["evaluatedResource"]) {
            this.evaluatedResource.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=MeasureReport.js.map