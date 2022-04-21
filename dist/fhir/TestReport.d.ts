import * as fhir from '../fhir.js';
import { ReportParticipantTypeValueSetType, ReportParticipantTypeValueSetEnum } from '../fhirValueSets/ReportParticipantTypeValueSet.js';
import { ReportActionResultCodesValueSetType, ReportActionResultCodesValueSetEnum } from '../fhirValueSets/ReportActionResultCodesValueSet.js';
import { ReportStatusCodesValueSetType, ReportStatusCodesValueSetEnum } from '../fhirValueSets/ReportStatusCodesValueSet.js';
import { ReportResultCodesValueSetType, ReportResultCodesValueSetEnum } from '../fhirValueSets/ReportResultCodesValueSet.js';
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare type ITestReportParticipant = fhir.IBackboneElement & {
    /**
     * The type of participant.
     */
    type: ReportParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.participant.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: TestReport.participant.uri
     */
    _uri?: fhir.IFhirElement | undefined;
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.display
     */
    _display?: fhir.IFhirElement | undefined;
};
/**
 * The operation performed.
 */
export declare type ITestReportSetupActionOperation = fhir.IBackboneElement & {
    /**
     * The result of this operation.
     */
    result: ReportActionResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.result
     */
    _result?: fhir.IFhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.message
     */
    _message?: fhir.IFhirElement | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.detail
     */
    _detail?: fhir.IFhirElement | undefined;
};
/**
 * The results of the assertion performed on the previous operations.
 */
export declare type ITestReportSetupActionAssert = fhir.IBackboneElement & {
    /**
     * The result of this assertion.
     */
    result: ReportActionResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.result
     */
    _result?: fhir.IFhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.message
     */
    _message?: fhir.IFhirElement | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.detail
     */
    _detail?: fhir.IFhirElement | undefined;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestReportSetupAction = fhir.IBackboneElement & {
    /**
     * The operation performed.
     */
    operation?: fhir.ITestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.ITestReportSetupActionAssert | undefined;
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
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.ITestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.ITestReportSetupActionAssert | undefined;
};
/**
 * A test executed from the test script.
 */
export declare type ITestReportTest = fhir.IBackboneElement & {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestReportTestAction[] | null;
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
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ReportStatusCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.IReference | null;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: ReportResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.result
     */
    _result?: fhir.IFhirElement | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    /**
     * Extended properties for primitive element: TestReport.score
     */
    _score?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.tester
     */
    _tester?: fhir.IFhirElement | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.issued
     */
    _issued?: fhir.IFhirElement | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhir.ITestReportParticipant[] | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.ITestReportSetup | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhir.ITestReportTest[] | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.ITestReportTeardown | undefined;
};
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export declare class TestReportParticipant extends fhir.BackboneElement implements ITestReportParticipant {
    /**
     * The type of participant.
     */
    type: ReportParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.participant.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The uri of the participant. An absolute URL is preferred.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: TestReport.participant.uri
     */
    _uri?: fhir.FhirElement | undefined;
    /**
     * The display name of the participant.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.participant.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportParticipant>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): ReportParticipantTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The operation performed.
 */
export declare class TestReportSetupActionOperation extends fhir.BackboneElement implements ITestReportSetupActionOperation {
    /**
     * The result of this operation.
     */
    result: ReportActionResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.result
     */
    _result?: fhir.FhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.message
     */
    _message?: fhir.FhirElement | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.operation.detail
     */
    _detail?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportSetupActionOperation>);
    /**
     * Required-bound Value Set for result
     */
    resultRequiredValueSet(): ReportActionResultCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The results of the assertion performed on the previous operations.
 */
export declare class TestReportSetupActionAssert extends fhir.BackboneElement implements ITestReportSetupActionAssert {
    /**
     * The result of this assertion.
     */
    result: ReportActionResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.result
     */
    _result?: fhir.FhirElement | undefined;
    /**
     * An explanatory message associated with the result.
     */
    message?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.message
     */
    _message?: fhir.FhirElement | undefined;
    /**
     * A link to further details on the result.
     */
    detail?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.setup.action.assert.detail
     */
    _detail?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportSetupActionAssert>);
    /**
     * Required-bound Value Set for result
     */
    resultRequiredValueSet(): ReportActionResultCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportSetupAction extends fhir.BackboneElement implements ITestReportSetupAction {
    /**
     * The operation performed.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportSetupAction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export declare class TestReportSetup extends fhir.BackboneElement implements ITestReportSetup {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportSetupAction[] | null;
    /**
     * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportSetup>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTestAction extends fhir.BackboneElement implements ITestReportTestAction {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestReportSetupActionOperation | undefined;
    /**
     * The results of the assertion performed on the previous operations.
     */
    assert?: fhir.TestReportSetupActionAssert | undefined;
    /**
     * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportTestAction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A test executed from the test script.
 */
export declare class TestReportTest extends fhir.BackboneElement implements ITestReportTest {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.test.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTestAction[] | null;
    /**
     * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportTest>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestReportTeardownAction extends fhir.BackboneElement implements ITestReportTeardownAction {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestReportSetupActionOperation | null;
    /**
     * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportTeardownAction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export declare class TestReportTeardown extends fhir.BackboneElement implements ITestReportTeardown {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestReportTeardownAction[] | null;
    /**
     * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReportTeardown>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export declare class TestReport extends fhir.DomainResource implements ITestReport {
    /**
     * Resource Type Name
     */
    resourceType: "TestReport";
    /**
     * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Not expected to be globally unique.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The status represents where the execution is currently within the test script execution life cycle.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ReportStatusCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
     */
    testScript: fhir.Reference | null;
    /**
     * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
     */
    result: ReportResultCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: TestReport.result
     */
    _result?: fhir.FhirElement | undefined;
    /**
     * The final score (percentage of tests passed) resulting from the execution of the TestScript.
     */
    score?: number | undefined;
    /**
     * Extended properties for primitive element: TestReport.score
     */
    _score?: fhir.FhirElement | undefined;
    /**
     * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
     */
    tester?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.tester
     */
    _tester?: fhir.FhirElement | undefined;
    /**
     * Additional specific dates may be added as extensions.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: TestReport.issued
     */
    _issued?: fhir.FhirElement | undefined;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: fhir.TestReportParticipant[] | undefined;
    /**
     * The results of the series of required setup operations before the tests were executed.
     */
    setup?: fhir.TestReportSetup | undefined;
    /**
     * A test executed from the test script.
     */
    test?: fhir.TestReportTest[] | undefined;
    /**
     * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
     */
    teardown?: fhir.TestReportTeardown | undefined;
    /**
     * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITestReport>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ReportStatusCodesValueSetType;
    /**
     * Required-bound Value Set for result
     */
    resultRequiredValueSet(): ReportResultCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=TestReport.d.ts.map