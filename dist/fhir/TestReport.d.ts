import * as fhir from '../fhir';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare type ITestReportParticipant = fhir.IBackboneElement & {
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * The type of participant.
     */
    type: TestReportParticipantTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string | null;
    _uri?: fhir.IFhirElement | undefined;
};
/**
 * The operation performed.
 */
export declare type ITestReportSetupActionOperation = fhir.IBackboneElement & {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhir.IFhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhir.IFhirElement | undefined;
    /**
     * The result of this operation.
     */
    result: TestReportSetupActionOperationResultEnum | null;
    _result?: fhir.IFhirElement | undefined;
};
/**
 * The results of the assertion performed on the previous operations.
 */
export declare type ITestReportSetupActionAssert = fhir.IBackboneElement & {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhir.IFhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhir.IFhirElement | undefined;
    /**
     * The result of this assertion.
     */
    result: TestReportSetupActionAssertResultEnum | null;
    _result?: fhir.IFhirElement | undefined;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestReportSetupAction = fhir.IBackboneElement & {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.ITestReportSetupActionAssert | undefined;
    /**
     * The operation performed.
     */
    operation?: fhir.ITestReportSetupActionOperation | undefined;
};
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export declare type ITestReportSetup = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestReportSetupAction[] | null;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestReportTestAction = fhir.IBackboneElement & {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.ITestReportSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.ITestReportSetupActionOperation | undefined;
};
/**
 * A test executed from the test script.
 */
export declare type ITestReportTest = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestReportTestAction[] | null;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestReportTeardownAction = fhir.IBackboneElement & {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.ITestReportSetupActionOperation | null;
};
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export declare type ITestReportTeardown = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestReportTeardownAction[] | null;
};
/**
 * A summary of information based on the results of executing a TestScript.
 */
export declare type ITestReport = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    _issued?: fhir.IFhirElement | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhir.ITestReportParticipant[] | undefined;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: TestReportResultEnum | null;
    _result?: fhir.IFhirElement | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    _score?: fhir.IFhirElement | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.ITestReportSetup | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: TestReportStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.ITestReportTeardown | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhir.ITestReportTest[] | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    _tester?: fhir.IFhirElement | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.IReference | null;
};
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare class TestReportParticipant extends fhir.BackboneElement implements fhir.ITestReportParticipant {
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * The type of participant.
     */
    type: TestReportParticipantTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string | null;
    _uri?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportParticipant>);
    /**
     * Check if the current TestReportParticipant contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportParticipant from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportParticipant): TestReportParticipant;
}
/**
 * The operation performed.
 */
export declare class TestReportSetupActionOperation extends fhir.BackboneElement implements fhir.ITestReportSetupActionOperation {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhir.FhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhir.FhirElement | undefined;
    /**
     * The result of this operation.
     */
    result: TestReportSetupActionOperationResultEnum | null;
    _result?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportSetupActionOperation>);
    /**
     * Check if the current TestReportSetupActionOperation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportSetupActionOperation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportSetupActionOperation): TestReportSetupActionOperation;
}
/**
 * The results of the assertion performed on the previous operations.
 */
export declare class TestReportSetupActionAssert extends fhir.BackboneElement implements fhir.ITestReportSetupActionAssert {
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    _detail?: fhir.FhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    _message?: fhir.FhirElement | undefined;
    /**
     * The result of this assertion.
     */
    result: TestReportSetupActionAssertResultEnum | null;
    _result?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportSetupActionAssert>);
    /**
     * Check if the current TestReportSetupActionAssert contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportSetupActionAssert from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportSetupActionAssert): TestReportSetupActionAssert;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportSetupAction extends fhir.BackboneElement implements fhir.ITestReportSetupAction {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * The operation performed.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportSetupAction>);
    /**
     * Check if the current TestReportSetupAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportSetupAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportSetupAction): TestReportSetupAction;
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export declare class TestReportSetup extends fhir.BackboneElement implements fhir.ITestReportSetup {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportSetupAction[] | null;
    /**
     * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportSetup>);
    /**
     * Check if the current TestReportSetup contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportSetup from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportSetup): TestReportSetup;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTestAction extends fhir.BackboneElement implements fhir.ITestReportTestAction {
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportTestAction>);
    /**
     * Check if the current TestReportTestAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportTestAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportTestAction): TestReportTestAction;
}
/**
 * A test executed from the test script.
 */
export declare class TestReportTest extends fhir.BackboneElement implements fhir.ITestReportTest {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTestAction[] | null;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportTest>);
    /**
     * Check if the current TestReportTest contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportTest from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportTest): TestReportTest;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTeardownAction extends fhir.BackboneElement implements fhir.ITestReportTeardownAction {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestReportSetupActionOperation | null;
    /**
     * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportTeardownAction>);
    /**
     * Check if the current TestReportTeardownAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportTeardownAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportTeardownAction): TestReportTeardownAction;
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export declare class TestReportTeardown extends fhir.BackboneElement implements fhir.ITestReportTeardown {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTeardownAction[] | null;
    /**
     * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReportTeardown>);
    /**
     * Check if the current TestReportTeardown contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReportTeardown from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReportTeardown): TestReportTeardown;
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export declare class TestReport extends fhir.DomainResource implements fhir.ITestReport {
    /**
     * Resource Type Name
     */
    resourceType: "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    _issued?: fhir.FhirElement | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhir.TestReportParticipant[] | undefined;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: TestReportResultEnum | null;
    _result?: fhir.FhirElement | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    _score?: fhir.FhirElement | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.TestReportSetup | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: TestReportStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.TestReportTeardown | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhir.TestReportTest[] | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    _tester?: fhir.FhirElement | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.Reference | null;
    /**
     * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestReport>);
    /**
     * Check if the current TestReport contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestReport from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestReport): TestReport;
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