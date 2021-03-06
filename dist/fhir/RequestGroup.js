// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RequestGroup
import * as fhir from '../fhir.js';
import { ActionConditionKindValueSet, } from '../fhirValueSets/ActionConditionKindValueSet.js';
import { ActionRelationshipTypeValueSet, } from '../fhirValueSets/ActionRelationshipTypeValueSet.js';
import { RequestPriorityValueSet, } from '../fhirValueSets/RequestPriorityValueSet.js';
import { ActionTypeValueSet, } from '../fhirValueSets/ActionTypeValueSet.js';
import { ActionGroupingBehaviorValueSet, } from '../fhirValueSets/ActionGroupingBehaviorValueSet.js';
import { ActionSelectionBehaviorValueSet, } from '../fhirValueSets/ActionSelectionBehaviorValueSet.js';
import { ActionRequiredBehaviorValueSet, } from '../fhirValueSets/ActionRequiredBehaviorValueSet.js';
import { ActionPrecheckBehaviorValueSet, } from '../fhirValueSets/ActionPrecheckBehaviorValueSet.js';
import { ActionCardinalityBehaviorValueSet, } from '../fhirValueSets/ActionCardinalityBehaviorValueSet.js';
import { RequestStatusValueSet, } from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestIntentValueSet, } from '../fhirValueSets/RequestIntentValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export class RequestGroupActionCondition extends fhir.BackboneElement {
    /**
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RequestGroupActionCondition';
        if (source['kind']) {
            this.kind = source.kind;
        }
        else {
            this.kind = null;
        }
        if (source['expression']) {
            this.expression = new fhir.Expression(source.expression);
        }
    }
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet() {
        return ActionConditionKindValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['kind']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property kind:ActionConditionKindValueSetEnum fhir: RequestGroup.action.condition.kind:code", }));
        }
        if (this["expression"]) {
            outcome.issue.push(...this.expression.doModelValidation().issue);
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
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export class RequestGroupActionRelatedAction extends fhir.BackboneElement {
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RequestGroupActionRelatedAction';
        this.__offsetIsChoice = true;
        if (source['actionId']) {
            this.actionId = new fhir.FhirId({ value: source.actionId });
        }
        else {
            this.actionId = null;
        }
        if (source['relationship']) {
            this.relationship = source.relationship;
        }
        else {
            this.relationship = null;
        }
        if (source['offset']) {
            this.offset = source.offset;
        }
        else if (source['offsetDuration']) {
            this.offset = new fhir.Duration(source.offsetDuration);
        }
        else if (source['offsetRange']) {
            this.offset = new fhir.Range(source.offsetRange);
        }
    }
    /**
     * Required-bound Value Set for relationship
     */
    static relationshipRequiredValueSet() {
        return ActionRelationshipTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['actionId']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property actionId:fhir.FhirId fhir: RequestGroup.action.relatedAction.actionId:id", }));
        }
        if (this["actionId"]) {
            outcome.issue.push(...this.actionId.doModelValidation().issue);
        }
        if (!this['relationship']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property relationship:ActionRelationshipTypeValueSetEnum fhir: RequestGroup.action.relatedAction.relationship:code", }));
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
 * The actions, if any, produced by the evaluation of the artifact.
 */
export class RequestGroupAction extends fhir.BackboneElement {
    /**
     * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RequestGroupAction';
        /**
         * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
         */
        this.code = [];
        /**
         * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
         */
        this.documentation = [];
        /**
         * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
         */
        this.condition = [];
        /**
         * A relationship to another action such as "before" or "30-60 minutes after start of".
         */
        this.relatedAction = [];
        this.__timingIsChoice = true;
        /**
         * The participant that should perform or be responsible for this action.
         */
        this.participant = [];
        /**
         * Sub actions.
         */
        this.action = [];
        if (source['prefix']) {
            this.prefix = new fhir.FhirString({ value: source.prefix });
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['textEquivalent']) {
            this.textEquivalent = new fhir.FhirString({ value: source.textEquivalent });
        }
        if (source['priority']) {
            this.priority = source.priority;
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['documentation']) {
            this.documentation = source.documentation.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source['condition']) {
            this.condition = source.condition.map((x) => new fhir.RequestGroupActionCondition(x));
        }
        if (source['relatedAction']) {
            this.relatedAction = source.relatedAction.map((x) => new fhir.RequestGroupActionRelatedAction(x));
        }
        if (source['timing']) {
            this.timing = source.timing;
        }
        else if (source['timingDateTime']) {
            this.timing = new fhir.FhirDateTime({ value: source.timingDateTime });
        }
        else if (source['timingAge']) {
            this.timing = new fhir.Age(source.timingAge);
        }
        else if (source['timingPeriod']) {
            this.timing = new fhir.Period(source.timingPeriod);
        }
        else if (source['timingDuration']) {
            this.timing = new fhir.Duration(source.timingDuration);
        }
        else if (source['timingRange']) {
            this.timing = new fhir.Range(source.timingRange);
        }
        else if (source['timingTiming']) {
            this.timing = new fhir.Timing(source.timingTiming);
        }
        if (source['participant']) {
            this.participant = source.participant.map((x) => new fhir.Reference(x));
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['groupingBehavior']) {
            this.groupingBehavior = source.groupingBehavior;
        }
        if (source['selectionBehavior']) {
            this.selectionBehavior = source.selectionBehavior;
        }
        if (source['requiredBehavior']) {
            this.requiredBehavior = source.requiredBehavior;
        }
        if (source['precheckBehavior']) {
            this.precheckBehavior = source.precheckBehavior;
        }
        if (source['cardinalityBehavior']) {
            this.cardinalityBehavior = source.cardinalityBehavior;
        }
        if (source['resource']) {
            this.resource = new fhir.Reference(source.resource);
        }
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.RequestGroupAction(x));
        }
    }
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet() {
        return RequestPriorityValueSet;
    }
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet() {
        return ActionTypeValueSet;
    }
    /**
     * Required-bound Value Set for groupingBehavior
     */
    static groupingBehaviorRequiredValueSet() {
        return ActionGroupingBehaviorValueSet;
    }
    /**
     * Required-bound Value Set for selectionBehavior
     */
    static selectionBehaviorRequiredValueSet() {
        return ActionSelectionBehaviorValueSet;
    }
    /**
     * Required-bound Value Set for requiredBehavior
     */
    static requiredBehaviorRequiredValueSet() {
        return ActionRequiredBehaviorValueSet;
    }
    /**
     * Required-bound Value Set for precheckBehavior
     */
    static precheckBehaviorRequiredValueSet() {
        return ActionPrecheckBehaviorValueSet;
    }
    /**
     * Required-bound Value Set for cardinalityBehavior
     */
    static cardinalityBehaviorRequiredValueSet() {
        return ActionCardinalityBehaviorValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["prefix"]) {
            outcome.issue.push(...this.prefix.doModelValidation().issue);
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["textEquivalent"]) {
            outcome.issue.push(...this.textEquivalent.doModelValidation().issue);
        }
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["documentation"]) {
            this.documentation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["condition"]) {
            this.condition.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["relatedAction"]) {
            this.relatedAction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["participant"]) {
            this.participant.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["resource"]) {
            outcome.issue.push(...this.resource.doModelValidation().issue);
        }
        if (this["action"]) {
            this.action.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export class RequestGroup extends fhir.DomainResource {
    /**
     * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RequestGroup';
        /**
         * Allows a service to provide a unique, business identifier for the request.
         */
        this.identifier = [];
        /**
         * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
         */
        this.instantiatesCanonical = [];
        /**
         * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
         */
        this.instantiatesUri = [];
        /**
         * A plan, proposal or order that is fulfilled in whole or in part by this request.
         */
        this.basedOn = [];
        /**
         * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
         */
        this.replaces = [];
        /**
         * Describes the reason for the request group in coded or textual form.
         */
        this.reasonCode = [];
        /**
         * Indicates another resource whose existence justifies this request group.
         */
        this.reasonReference = [];
        /**
         * Provides a mechanism to communicate additional information about the response.
         */
        this.note = [];
        /**
         * The actions, if any, produced by the evaluation of the artifact.
         */
        this.action = [];
        this.resourceType = 'RequestGroup';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['instantiatesCanonical']) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['instantiatesUri']) {
            this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({ value: x }));
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source['replaces']) {
            this.replaces = source.replaces.map((x) => new fhir.Reference(x));
        }
        if (source['groupIdentifier']) {
            this.groupIdentifier = new fhir.Identifier(source.groupIdentifier);
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['intent']) {
            this.intent = source.intent;
        }
        else {
            this.intent = null;
        }
        if (source['priority']) {
            this.priority = source.priority;
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['authoredOn']) {
            this.authoredOn = new fhir.FhirDateTime({ value: source.authoredOn });
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.RequestGroupAction(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return RequestStatusValueSet;
    }
    /**
     * Required-bound Value Set for intent
     */
    static intentRequiredValueSet() {
        return RequestIntentValueSet;
    }
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet() {
        return RequestPriorityValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'RequestGroup' fhir: RequestGroup.resourceType:'RequestGroup'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["replaces"]) {
            this.replaces.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["groupIdentifier"]) {
            outcome.issue.push(...this.groupIdentifier.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:RequestStatusValueSetEnum fhir: RequestGroup.status:code", }));
        }
        if (!this['intent']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property intent:RequestIntentValueSetEnum fhir: RequestGroup.intent:code", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["subject"]) {
            outcome.issue.push(...this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            outcome.issue.push(...this.encounter.doModelValidation().issue);
        }
        if (this["authoredOn"]) {
            outcome.issue.push(...this.authoredOn.doModelValidation().issue);
        }
        if (this["author"]) {
            outcome.issue.push(...this.author.doModelValidation().issue);
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["action"]) {
            this.action.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=RequestGroup.js.map