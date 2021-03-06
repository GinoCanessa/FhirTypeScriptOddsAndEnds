// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ObservationDefinition
import * as fhir from '../fhir.js';
import { UcumUnitsValueSet, } from '../fhirValueSets/UcumUnitsValueSet.js';
import { ObservationRangeCategoryValueSet, } from '../fhirValueSets/ObservationRangeCategoryValueSet.js';
import { ReferencerangeMeaningValueSet, } from '../fhirValueSets/ReferencerangeMeaningValueSet.js';
import { ReferencerangeAppliestoValueSet, } from '../fhirValueSets/ReferencerangeAppliestoValueSet.js';
import { AdministrativeGenderValueSet, } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { ObservationCategoryValueSet, } from '../fhirValueSets/ObservationCategoryValueSet.js';
import { ObservationCodesValueSet, } from '../fhirValueSets/ObservationCodesValueSet.js';
import { PermittedDataTypeValueSet, } from '../fhirValueSets/PermittedDataTypeValueSet.js';
import { ObservationMethodsValueSet, } from '../fhirValueSets/ObservationMethodsValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Characteristics for quantitative results of this observation.
 */
export class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement {
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ObservationDefinitionQuantitativeDetails';
        if (source['customaryUnit']) {
            this.customaryUnit = new fhir.CodeableConcept(source.customaryUnit);
        }
        if (source['unit']) {
            this.unit = new fhir.CodeableConcept(source.unit);
        }
        if (source['conversionFactor']) {
            this.conversionFactor = new fhir.FhirDecimal({ value: source.conversionFactor });
        }
        if (source['decimalPrecision']) {
            this.decimalPrecision = new fhir.FhirInteger({ value: source.decimalPrecision });
        }
    }
    /**
     * Extensible-bound Value Set for customaryUnit
     */
    static customaryUnitExtensibleValueSet() {
        return UcumUnitsValueSet;
    }
    /**
     * Extensible-bound Value Set for unit
     */
    static unitExtensibleValueSet() {
        return UcumUnitsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["customaryUnit"]) {
            outcome.issue.push(...this.customaryUnit.doModelValidation().issue);
        }
        if (this["unit"]) {
            outcome.issue.push(...this.unit.doModelValidation().issue);
        }
        if (this["conversionFactor"]) {
            outcome.issue.push(...this.conversionFactor.doModelValidation().issue);
        }
        if (this["decimalPrecision"]) {
            outcome.issue.push(...this.decimalPrecision.doModelValidation().issue);
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
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement {
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ObservationDefinitionQualifiedInterval';
        /**
         * If this element is not present then the global population is assumed.
         */
        this.appliesTo = [];
        if (source['category']) {
            this.category = source.category;
        }
        if (source['range']) {
            this.range = new fhir.Range(source.range);
        }
        if (source['context']) {
            this.context = new fhir.CodeableConcept(source.context);
        }
        if (source['appliesTo']) {
            this.appliesTo = source.appliesTo.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['gender']) {
            this.gender = source.gender;
        }
        if (source['age']) {
            this.age = new fhir.Range(source.age);
        }
        if (source['gestationalAge']) {
            this.gestationalAge = new fhir.Range(source.gestationalAge);
        }
        if (source['condition']) {
            this.condition = new fhir.FhirString({ value: source.condition });
        }
    }
    /**
     * Required-bound Value Set for category
     */
    static categoryRequiredValueSet() {
        return ObservationRangeCategoryValueSet;
    }
    /**
     * Extensible-bound Value Set for context
     */
    static contextExtensibleValueSet() {
        return ReferencerangeMeaningValueSet;
    }
    /**
     * Example-bound Value Set for appliesTo
     */
    static appliesToExampleValueSet() {
        return ReferencerangeAppliestoValueSet;
    }
    /**
     * Required-bound Value Set for gender
     */
    static genderRequiredValueSet() {
        return AdministrativeGenderValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["range"]) {
            outcome.issue.push(...this.range.doModelValidation().issue);
        }
        if (this["context"]) {
            outcome.issue.push(...this.context.doModelValidation().issue);
        }
        if (this["appliesTo"]) {
            this.appliesTo.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["age"]) {
            outcome.issue.push(...this.age.doModelValidation().issue);
        }
        if (this["gestationalAge"]) {
            outcome.issue.push(...this.gestationalAge.doModelValidation().issue);
        }
        if (this["condition"]) {
            outcome.issue.push(...this.condition.doModelValidation().issue);
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
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ObservationDefinition';
        /**
         * This element allows various categorization schemes based on the owner???s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
         */
        this.category = [];
        /**
         * A unique identifier assigned to this ObservationDefinition artifact.
         */
        this.identifier = [];
        /**
         * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
         */
        this.permittedDataType = [];
        /**
         * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
         */
        this.qualifiedInterval = [];
        this.resourceType = 'ObservationDefinition';
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['permittedDataType']) {
            this.permittedDataType = source.permittedDataType.map((x) => x);
        }
        if (source['multipleResultsAllowed']) {
            this.multipleResultsAllowed = new fhir.FhirBoolean({ value: source.multipleResultsAllowed });
        }
        if (source['method']) {
            this.method = new fhir.CodeableConcept(source.method);
        }
        if (source['preferredReportName']) {
            this.preferredReportName = new fhir.FhirString({ value: source.preferredReportName });
        }
        if (source['quantitativeDetails']) {
            this.quantitativeDetails = new fhir.ObservationDefinitionQuantitativeDetails(source.quantitativeDetails);
        }
        if (source['qualifiedInterval']) {
            this.qualifiedInterval = source.qualifiedInterval.map((x) => new fhir.ObservationDefinitionQualifiedInterval(x));
        }
        if (source['validCodedValueSet']) {
            this.validCodedValueSet = new fhir.Reference(source.validCodedValueSet);
        }
        if (source['normalCodedValueSet']) {
            this.normalCodedValueSet = new fhir.Reference(source.normalCodedValueSet);
        }
        if (source['abnormalCodedValueSet']) {
            this.abnormalCodedValueSet = new fhir.Reference(source.abnormalCodedValueSet);
        }
        if (source['criticalCodedValueSet']) {
            this.criticalCodedValueSet = new fhir.Reference(source.criticalCodedValueSet);
        }
    }
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet() {
        return ObservationCategoryValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return ObservationCodesValueSet;
    }
    /**
     * Required-bound Value Set for permittedDataType
     */
    static permittedDataTypeRequiredValueSet() {
        return PermittedDataTypeValueSet;
    }
    /**
     * Example-bound Value Set for method
     */
    static methodExampleValueSet() {
        return ObservationMethodsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'ObservationDefinition' fhir: ObservationDefinition.resourceType:'ObservationDefinition'", }));
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['code']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property code:fhir.CodeableConcept fhir: ObservationDefinition.code:CodeableConcept", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["multipleResultsAllowed"]) {
            outcome.issue.push(...this.multipleResultsAllowed.doModelValidation().issue);
        }
        if (this["method"]) {
            outcome.issue.push(...this.method.doModelValidation().issue);
        }
        if (this["preferredReportName"]) {
            outcome.issue.push(...this.preferredReportName.doModelValidation().issue);
        }
        if (this["quantitativeDetails"]) {
            outcome.issue.push(...this.quantitativeDetails.doModelValidation().issue);
        }
        if (this["qualifiedInterval"]) {
            this.qualifiedInterval.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["validCodedValueSet"]) {
            outcome.issue.push(...this.validCodedValueSet.doModelValidation().issue);
        }
        if (this["normalCodedValueSet"]) {
            outcome.issue.push(...this.normalCodedValueSet.doModelValidation().issue);
        }
        if (this["abnormalCodedValueSet"]) {
            outcome.issue.push(...this.abnormalCodedValueSet.doModelValidation().issue);
        }
        if (this["criticalCodedValueSet"]) {
            outcome.issue.push(...this.criticalCodedValueSet.doModelValidation().issue);
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
//# sourceMappingURL=ObservationDefinition.js.map