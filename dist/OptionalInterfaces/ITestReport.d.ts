import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export interface ITestReportParticipant extends fhirInterfaces.IBackboneElement {
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * The type of participant.
     */
    type?: TestReportParticipantTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri?: string | undefined;
    _uri?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the TestReport.participant.type field
 */
export declare enum TestReportParticipantTypeEnum {
    TEST_ENGINE = "test-engine",
    CLIENT = "client",
    SERVER = "server"
}
/**
 * The operation performed.
 */
export interface ITestReportSetupActionOperation extends fhirInterfaces.IBackboneElement {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhirInterfaces.IElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhirInterfaces.IElement | undefined;
    /**
     * The result of this operation.
     */
    result?: TestReportSetupActionOperationResultEnum | undefined;
    _result?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the TestReport.setup.action.operation.result field
 */
export declare enum TestReportSetupActionOperationResultEnum {
    PASS = "pass",
    SKIP = "skip",
    FAIL = "fail",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * The results of the assertion performed on the previous operations.
 */
export interface ITestReportSetupActionAssert extends fhirInterfaces.IBackboneElement {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhirInterfaces.IElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhirInterfaces.IElement | undefined;
    /**
     * The result of this assertion.
     */
    result?: TestReportSetupActionAssertResultEnum | undefined;
    _result?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the TestReport.setup.action.assert.result field
 */
export declare enum TestReportSetupActionAssertResultEnum {
    PASS = "pass",
    SKIP = "skip",
    FAIL = "fail",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface ITestReportSetupAction extends fhirInterfaces.IBackboneElement {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhirInterfaces.ITestReportSetupActionAssert | undefined;
    /**
     * The operation performed.
     */
    operation?: fhirInterfaces.ITestReportSetupActionOperation | undefined;
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export interface ITestReportSetup extends fhirInterfaces.IBackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action?: fhirInterfaces.ITestReportSetupAction[] | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface ITestReportTestAction extends fhirInterfaces.IBackboneElement {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhirInterfaces.ITestReportSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhirInterfaces.ITestReportSetupActionOperation | undefined;
}
/**
 * A test executed from the test script.
 */
export interface ITestReportTest extends fhirInterfaces.IBackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action?: fhirInterfaces.ITestReportTestAction[] | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export interface ITestReportTeardownAction extends fhirInterfaces.IBackboneElement {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhirInterfaces.ITestReportSetupActionOperation | undefined;
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export interface ITestReportTeardown extends fhirInterfaces.IBackboneElement {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action?: fhirInterfaces.ITestReportTeardownAction[] | undefined;
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export interface ITestReport extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    _issued?: fhirInterfaces.IElement | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhirInterfaces.ITestReportParticipant[] | undefined;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result?: TestReportResultEnum | undefined;
    _result?: fhirInterfaces.IElement | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    _score?: fhirInterfaces.IElement | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhirInterfaces.ITestReportSetup | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: TestReportStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhirInterfaces.ITestReportTeardown | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhirInterfaces.ITestReportTest[] | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    _tester?: fhirInterfaces.IElement | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the TestReport.result field
 */
export declare enum TestReportResultEnum {
    PASS = "pass",
    FAIL = "fail",
    PENDING = "pending"
}
/**
 * Code Values for the TestReport.status field
 */
export declare enum TestReportStatusEnum {
    COMPLETED = "completed",
    IN_PROGRESS = "in-progress",
    WAITING = "waiting",
    STOPPED = "stopped",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ITestReport.d.ts.map