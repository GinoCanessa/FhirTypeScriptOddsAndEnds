// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: OperationDefinition
import * as fhir from '../fhir.js';
import { BindingStrengthValueSet, } from '../fhirValueSets/BindingStrengthValueSet.js';
import { OperationParameterUseValueSet, } from '../fhirValueSets/OperationParameterUseValueSet.js';
import { AllTypesValueSet, } from '../fhirValueSets/AllTypesValueSet.js';
import { SearchParamTypeValueSet, } from '../fhirValueSets/SearchParamTypeValueSet.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { OperationKindValueSet, } from '../fhirValueSets/OperationKindValueSet.js';
import { ResourceTypesValueSet, } from '../fhirValueSets/ResourceTypesValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export class OperationDefinitionParameterBinding extends fhir.BackboneElement {
    /**
     * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OperationDefinitionParameterBinding';
        if (source['strength']) {
            this.strength = source.strength;
        }
        else {
            this.strength = null;
        }
        if (source['valueSet']) {
            this.valueSet = new fhir.FhirCanonical({ value: source.valueSet });
        }
        else {
            this.valueSet = null;
        }
    }
    /**
     * Required-bound Value Set for strength
     */
    static strengthRequiredValueSet() {
        return BindingStrengthValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['strength']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property strength:BindingStrengthValueSetEnum fhir: OperationDefinition.parameter.binding.strength:code", }));
        }
        if (!this['valueSet']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property valueSet:fhir.FhirCanonical fhir: OperationDefinition.parameter.binding.valueSet:canonical", }));
        }
        if (this["valueSet"]) {
            outcome.issue.push(...this.valueSet.doModelValidation().issue);
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
 * Resolution applies if the referenced parameter exists.
 */
export class OperationDefinitionParameterReferencedFrom extends fhir.BackboneElement {
    /**
     * Default constructor for OperationDefinitionParameterReferencedFrom - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OperationDefinitionParameterReferencedFrom';
        if (source['source']) {
            this.source = new fhir.FhirString({ value: source.source });
        }
        else {
            this.source = null;
        }
        if (source['sourceId']) {
            this.sourceId = new fhir.FhirString({ value: source.sourceId });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['source']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property source:fhir.FhirString fhir: OperationDefinition.parameter.referencedFrom.source:string", }));
        }
        if (this["source"]) {
            outcome.issue.push(...this.source.doModelValidation().issue);
        }
        if (this["sourceId"]) {
            outcome.issue.push(...this.sourceId.doModelValidation().issue);
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
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export class OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OperationDefinitionParameter';
        /**
         * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
         */
        this.targetProfile = [];
        /**
         * Resolution applies if the referenced parameter exists.
         */
        this.referencedFrom = [];
        /**
         * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
         */
        this.part = [];
        if (source['name']) {
            this.name = new fhir.FhirCode({ value: source.name });
        }
        else {
            this.name = null;
        }
        if (source['use']) {
            this.use = source.use;
        }
        else {
            this.use = null;
        }
        if (source['min']) {
            this.min = new fhir.FhirInteger({ value: source.min });
        }
        else {
            this.min = null;
        }
        if (source['max']) {
            this.max = new fhir.FhirString({ value: source.max });
        }
        else {
            this.max = null;
        }
        if (source['documentation']) {
            this.documentation = new fhir.FhirString({ value: source.documentation });
        }
        if (source['type']) {
            this.type = new fhir.FhirCode({ value: source.type });
        }
        if (source['targetProfile']) {
            this.targetProfile = source.targetProfile.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['searchType']) {
            this.searchType = source.searchType;
        }
        if (source['binding']) {
            this.binding = new fhir.OperationDefinitionParameterBinding(source.binding);
        }
        if (source['referencedFrom']) {
            this.referencedFrom = source.referencedFrom.map((x) => new fhir.OperationDefinitionParameterReferencedFrom(x));
        }
        if (source['part']) {
            this.part = source.part.map((x) => new fhir.OperationDefinitionParameter(x));
        }
    }
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet() {
        return OperationParameterUseValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return AllTypesValueSet;
    }
    /**
     * Required-bound Value Set for searchType
     */
    static searchTypeRequiredValueSet() {
        return SearchParamTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['name']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property name:fhir.FhirCode fhir: OperationDefinition.parameter.name:code", }));
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (!this['use']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property use:OperationParameterUseValueSetEnum fhir: OperationDefinition.parameter.use:code", }));
        }
        if (!this['min']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property min:fhir.FhirInteger fhir: OperationDefinition.parameter.min:integer", }));
        }
        if (this["min"]) {
            outcome.issue.push(...this.min.doModelValidation().issue);
        }
        if (!this['max']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property max:fhir.FhirString fhir: OperationDefinition.parameter.max:string", }));
        }
        if (this["max"]) {
            outcome.issue.push(...this.max.doModelValidation().issue);
        }
        if (this["documentation"]) {
            outcome.issue.push(...this.documentation.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["targetProfile"]) {
            this.targetProfile.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["binding"]) {
            outcome.issue.push(...this.binding.doModelValidation().issue);
        }
        if (this["referencedFrom"]) {
            this.referencedFrom.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["part"]) {
            this.part.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export class OperationDefinitionOverload extends fhir.BackboneElement {
    /**
     * Default constructor for OperationDefinitionOverload - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OperationDefinitionOverload';
        /**
         * Name of parameter to include in overload.
         */
        this.parameterName = [];
        if (source['parameterName']) {
            this.parameterName = source.parameterName.map((x) => new fhir.FhirString({ value: x }));
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["parameterName"]) {
            this.parameterName.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
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
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export class OperationDefinition extends fhir.DomainResource {
    /**
     * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OperationDefinition';
        /**
         * May be a web site, an email address, a telephone number, etc.
         */
        this.contact = [];
        /**
         * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
         */
        this.useContext = [];
        /**
         * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
         */
        this.resource = [];
        /**
         * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
         */
        this.parameter = [];
        /**
         * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
         */
        this.overload = [];
        this.resourceType = 'OperationDefinition';
        if (source['url']) {
            this.url = new fhir.FhirUri({ value: source.url });
        }
        if (source['version']) {
            this.version = new fhir.FhirString({ value: source.version });
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        else {
            this.name = null;
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['kind']) {
            this.kind = source.kind;
        }
        else {
            this.kind = null;
        }
        if (source['experimental']) {
            this.experimental = new fhir.FhirBoolean({ value: source.experimental });
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['publisher']) {
            this.publisher = new fhir.FhirString({ value: source.publisher });
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source['description']) {
            this.description = new fhir.FhirMarkdown({ value: source.description });
        }
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['purpose']) {
            this.purpose = new fhir.FhirMarkdown({ value: source.purpose });
        }
        if (source['affectsState']) {
            this.affectsState = new fhir.FhirBoolean({ value: source.affectsState });
        }
        if (source['code']) {
            this.code = new fhir.FhirCode({ value: source.code });
        }
        else {
            this.code = null;
        }
        if (source['comment']) {
            this.comment = new fhir.FhirMarkdown({ value: source.comment });
        }
        if (source['base']) {
            this.base = new fhir.FhirCanonical({ value: source.base });
        }
        if (source['resource']) {
            this.resource = source.resource.map((x) => new fhir.FhirCode({ value: x }));
        }
        if (source['system']) {
            this.system = new fhir.FhirBoolean({ value: source.system });
        }
        else {
            this.system = null;
        }
        if (source['type']) {
            this.type = new fhir.FhirBoolean({ value: source.type });
        }
        else {
            this.type = null;
        }
        if (source['instance']) {
            this.instance = new fhir.FhirBoolean({ value: source.instance });
        }
        else {
            this.instance = null;
        }
        if (source['inputProfile']) {
            this.inputProfile = new fhir.FhirCanonical({ value: source.inputProfile });
        }
        if (source['outputProfile']) {
            this.outputProfile = new fhir.FhirCanonical({ value: source.outputProfile });
        }
        if (source['parameter']) {
            this.parameter = source.parameter.map((x) => new fhir.OperationDefinitionParameter(x));
        }
        if (source['overload']) {
            this.overload = source.overload.map((x) => new fhir.OperationDefinitionOverload(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return PublicationStatusValueSet;
    }
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet() {
        return OperationKindValueSet;
    }
    /**
     * Required-bound Value Set for resource
     */
    static resourceRequiredValueSet() {
        return ResourceTypesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'OperationDefinition' fhir: OperationDefinition.resourceType:'OperationDefinition'", }));
        }
        if (this["url"]) {
            outcome.issue.push(...this.url.doModelValidation().issue);
        }
        if (this["version"]) {
            outcome.issue.push(...this.version.doModelValidation().issue);
        }
        if (!this['name']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property name:fhir.FhirString fhir: OperationDefinition.name:string", }));
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: OperationDefinition.status:code", }));
        }
        if (!this['kind']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property kind:OperationKindValueSetEnum fhir: OperationDefinition.kind:code", }));
        }
        if (this["experimental"]) {
            outcome.issue.push(...this.experimental.doModelValidation().issue);
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["publisher"]) {
            outcome.issue.push(...this.publisher.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["useContext"]) {
            this.useContext.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["purpose"]) {
            outcome.issue.push(...this.purpose.doModelValidation().issue);
        }
        if (this["affectsState"]) {
            outcome.issue.push(...this.affectsState.doModelValidation().issue);
        }
        if (!this['code']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property code:fhir.FhirCode fhir: OperationDefinition.code:code", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
        }
        if (this["base"]) {
            outcome.issue.push(...this.base.doModelValidation().issue);
        }
        if (this["resource"]) {
            this.resource.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['system']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property system:fhir.FhirBoolean fhir: OperationDefinition.system:boolean", }));
        }
        if (this["system"]) {
            outcome.issue.push(...this.system.doModelValidation().issue);
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.FhirBoolean fhir: OperationDefinition.type:boolean", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (!this['instance']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property instance:fhir.FhirBoolean fhir: OperationDefinition.instance:boolean", }));
        }
        if (this["instance"]) {
            outcome.issue.push(...this.instance.doModelValidation().issue);
        }
        if (this["inputProfile"]) {
            outcome.issue.push(...this.inputProfile.doModelValidation().issue);
        }
        if (this["outputProfile"]) {
            outcome.issue.push(...this.outputProfile.doModelValidation().issue);
        }
        if (this["parameter"]) {
            this.parameter.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["overload"]) {
            this.overload.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=OperationDefinition.js.map