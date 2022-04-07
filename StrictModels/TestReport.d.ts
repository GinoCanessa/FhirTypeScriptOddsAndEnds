import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare class TestReportParticipant extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportParticipant {
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    _display?: fhirModels.Element | undefined;
    /**
     * The type of participant.
     */
    type: TestReportParticipantTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string;
    _uri?: fhirModels.Element | undefined;
    /**
     * Default constructor for TestReportParticipant from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportParticipant);
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
export declare class TestReportSetupActionOperation extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportSetupActionOperation {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhirModels.Element | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhirModels.Element | undefined;
    /**
     * The result of this operation.
     */
    result: TestReportSetupActionOperationResultEnum;
    _result?: fhirModels.Element | undefined;
    /**
     * Default constructor for TestReportSetupActionOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportSetupActionOperation);
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
export declare class TestReportSetupActionAssert extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportSetupActionAssert {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhirModels.Element | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhirModels.Element | undefined;
    /**
     * The result of this assertion.
     */
    result: TestReportSetupActionAssertResultEnum;
    _result?: fhirModels.Element | undefined;
    /**
     * Default constructor for TestReportSetupActionAssert from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportSetupActionAssert);
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
export declare class TestReportSetupAction extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportSetupAction {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhirModels.TestReportSetupActionAssert | undefined;
    /**
     * The operation performed.
     */
    operation?: fhirModels.TestReportSetupActionOperation | undefined;
    /**
     * Default constructor for TestReportSetupAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportSetupAction);
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export declare class TestReportSetup extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportSetup {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhirModels.TestReportSetupAction[];
    /**
     * Default constructor for TestReportSetup from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportSetup);
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTestAction extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportTestAction {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhirModels.TestReportSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhirModels.TestReportSetupActionOperation | undefined;
    /**
     * Default constructor for TestReportTestAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportTestAction);
}
/**
 * A test executed from the test script.
 */
export declare class TestReportTest extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportTest {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhirModels.TestReportTestAction[];
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Default constructor for TestReportTest from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportTest);
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTeardownAction extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportTeardownAction {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhirModels.TestReportSetupActionOperation;
    /**
     * Default constructor for TestReportTeardownAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportTeardownAction);
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export declare class TestReportTeardown extends fhirModels.BackboneElement implements fhirInterfaces.ITestReportTeardown {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhirModels.TestReportTeardownAction[];
    /**
     * Default constructor for TestReportTeardown from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReportTeardown);
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export declare class TestReport extends fhirModels.DomainResource implements fhirInterfaces.ITestReport {
    /**
     * Resource Type Name
     */
    readonly resourceType = "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    _issued?: fhirModels.Element | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhirModels.TestReportParticipant[] | undefined;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: TestReportResultEnum;
    _result?: fhirModels.Element | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    _score?: fhirModels.Element | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhirModels.TestReportSetup | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: TestReportStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhirModels.TestReportTeardown | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhirModels.TestReportTest[] | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    _tester?: fhirModels.Element | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhirModels.Reference;
    /**
     * Default constructor for TestReport from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITestReport);
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
//# sourceMappingURL=TestReport.d.ts.map