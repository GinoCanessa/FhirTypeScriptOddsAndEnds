// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: TestReport
import * as fhir from '../fhir.js';
import { ReportParticipantTypeValueSet, } from '../fhirValueSets/ReportParticipantTypeValueSet.js';
import { ReportActionResultCodesValueSet, } from '../fhirValueSets/ReportActionResultCodesValueSet.js';
import { ReportStatusCodesValueSet, } from '../fhirValueSets/ReportStatusCodesValueSet.js';
import { ReportResultCodesValueSet, } from '../fhirValueSets/ReportResultCodesValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export class TestReportParticipant extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportParticipant';
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['uri']) {
            this.uri = new fhir.FhirUri({ value: source.uri });
        }
        else {
            this.uri = null;
        }
        if (source['display']) {
            this.display = new fhir.FhirString({ value: source.display });
        }
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return ReportParticipantTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:ReportParticipantTypeValueSetEnum fhir: TestReport.participant.type:code", }));
        }
        if (!this['uri']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property uri:fhir.FhirUri fhir: TestReport.participant.uri:uri", }));
        }
        if (this["uri"]) {
            outcome.issue.push(...this.uri.doModelValidation().issue);
        }
        if (this["display"]) {
            outcome.issue.push(...this.display.doModelValidation().issue);
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
 * The operation performed.
 */
export class TestReportSetupActionOperation extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportSetupActionOperation';
        if (source['result']) {
            this.result = source.result;
        }
        else {
            this.result = null;
        }
        if (source['message']) {
            this.message = new fhir.FhirMarkdown({ value: source.message });
        }
        if (source['detail']) {
            this.detail = new fhir.FhirUri({ value: source.detail });
        }
    }
    /**
     * Required-bound Value Set for result
     */
    static resultRequiredValueSet() {
        return ReportActionResultCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['result']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property result:ReportActionResultCodesValueSetEnum fhir: TestReport.setup.action.operation.result:code", }));
        }
        if (this["message"]) {
            outcome.issue.push(...this.message.doModelValidation().issue);
        }
        if (this["detail"]) {
            outcome.issue.push(...this.detail.doModelValidation().issue);
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
 * The results of the assertion performed on the previous operations.
 */
export class TestReportSetupActionAssert extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportSetupActionAssert';
        if (source['result']) {
            this.result = source.result;
        }
        else {
            this.result = null;
        }
        if (source['message']) {
            this.message = new fhir.FhirMarkdown({ value: source.message });
        }
        if (source['detail']) {
            this.detail = new fhir.FhirString({ value: source.detail });
        }
    }
    /**
     * Required-bound Value Set for result
     */
    static resultRequiredValueSet() {
        return ReportActionResultCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['result']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property result:ReportActionResultCodesValueSetEnum fhir: TestReport.setup.action.assert.result:code", }));
        }
        if (this["message"]) {
            outcome.issue.push(...this.message.doModelValidation().issue);
        }
        if (this["detail"]) {
            outcome.issue.push(...this.detail.doModelValidation().issue);
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
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportSetupAction extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportSetupAction';
        if (source['operation']) {
            this.operation = new fhir.TestReportSetupActionOperation(source.operation);
        }
        if (source['assert']) {
            this.assert = new fhir.TestReportSetupActionAssert(source.assert);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["operation"]) {
            outcome.issue.push(...this.operation.doModelValidation().issue);
        }
        if (this["assert"]) {
            outcome.issue.push(...this.assert.doModelValidation().issue);
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
 * The results of the series of required setup operations before the tests were executed.
 */
export class TestReportSetup extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportSetup';
        /**
         * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
         */
        this.action = [];
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.TestReportSetupAction(x));
        }
        else {
            this.action = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['action']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action", }));
        }
        else if (!Array.isArray(this.action)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action", }));
        }
        else if (this.action.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportSetupAction[] fhir: TestReport.setup.action:action", }));
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
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTestAction extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportTestAction';
        if (source['operation']) {
            this.operation = new fhir.TestReportSetupActionOperation(source.operation);
        }
        if (source['assert']) {
            this.assert = new fhir.TestReportSetupActionAssert(source.assert);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["operation"]) {
            outcome.issue.push(...this.operation.doModelValidation().issue);
        }
        if (this["assert"]) {
            outcome.issue.push(...this.assert.doModelValidation().issue);
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
 * A test executed from the test script.
 */
export class TestReportTest extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportTest';
        /**
         * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
         */
        this.action = [];
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.TestReportTestAction(x));
        }
        else {
            this.action = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (!this['action']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action", }));
        }
        else if (!Array.isArray(this.action)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action", }));
        }
        else if (this.action.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportTestAction[] fhir: TestReport.test.action:action", }));
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
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTeardownAction extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportTeardownAction';
        if (source['operation']) {
            this.operation = new fhir.TestReportSetupActionOperation(source.operation);
        }
        else {
            this.operation = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['operation']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property operation:fhir.TestReportSetupActionOperation fhir: TestReport.teardown.action.operation:TestReport.setup.action.operation", }));
        }
        if (this["operation"]) {
            outcome.issue.push(...this.operation.doModelValidation().issue);
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
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export class TestReportTeardown extends fhir.BackboneElement {
    /**
     * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReportTeardown';
        /**
         * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
         */
        this.action = [];
        if (source['action']) {
            this.action = source.action.map((x) => new fhir.TestReportTeardownAction(x));
        }
        else {
            this.action = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['action']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action", }));
        }
        else if (!Array.isArray(this.action)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action", }));
        }
        else if (this.action.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property action:fhir.TestReportTeardownAction[] fhir: TestReport.teardown.action:action", }));
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
 * A summary of information based on the results of executing a TestScript.
 */
export class TestReport extends fhir.DomainResource {
    /**
     * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TestReport';
        /**
         * A participant in the test execution, either the execution engine, a client, or a server.
         */
        this.participant = [];
        /**
         * A test executed from the test script.
         */
        this.test = [];
        this.resourceType = 'TestReport';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['testScript']) {
            this.testScript = new fhir.Reference(source.testScript);
        }
        else {
            this.testScript = null;
        }
        if (source['result']) {
            this.result = source.result;
        }
        else {
            this.result = null;
        }
        if (source['score']) {
            this.score = new fhir.FhirDecimal({ value: source.score });
        }
        if (source['tester']) {
            this.tester = new fhir.FhirString({ value: source.tester });
        }
        if (source['issued']) {
            this.issued = new fhir.FhirDateTime({ value: source.issued });
        }
        if (source['participant']) {
            this.participant = source.participant.map((x) => new fhir.TestReportParticipant(x));
        }
        if (source['setup']) {
            this.setup = new fhir.TestReportSetup(source.setup);
        }
        if (source['test']) {
            this.test = source.test.map((x) => new fhir.TestReportTest(x));
        }
        if (source['teardown']) {
            this.teardown = new fhir.TestReportTeardown(source.teardown);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return ReportStatusCodesValueSet;
    }
    /**
     * Required-bound Value Set for result
     */
    static resultRequiredValueSet() {
        return ReportResultCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'TestReport' fhir: TestReport.resourceType:'TestReport'", }));
        }
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:ReportStatusCodesValueSetEnum fhir: TestReport.status:code", }));
        }
        if (!this['testScript']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property testScript:fhir.Reference fhir: TestReport.testScript:Reference", }));
        }
        if (this["testScript"]) {
            outcome.issue.push(...this.testScript.doModelValidation().issue);
        }
        if (!this['result']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property result:ReportResultCodesValueSetEnum fhir: TestReport.result:code", }));
        }
        if (this["score"]) {
            outcome.issue.push(...this.score.doModelValidation().issue);
        }
        if (this["tester"]) {
            outcome.issue.push(...this.tester.doModelValidation().issue);
        }
        if (this["issued"]) {
            outcome.issue.push(...this.issued.doModelValidation().issue);
        }
        if (this["participant"]) {
            this.participant.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["setup"]) {
            outcome.issue.push(...this.setup.doModelValidation().issue);
        }
        if (this["test"]) {
            this.test.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["teardown"]) {
            outcome.issue.push(...this.teardown.doModelValidation().issue);
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
//# sourceMappingURL=TestReport.js.map