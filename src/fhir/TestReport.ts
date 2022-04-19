// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export type ITestReportParticipant = fhir.IBackboneElement & {
  /**
   * The display name of the participant.
   */
  display?: string|undefined;
  _display?: fhir.IFhirElement|undefined;
  /**
   * The type of participant.
   */
  type: TestReportParticipantTypeEnum|null;
  _type?: fhir.IFhirElement|undefined;
  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  uri: string|null;
  _uri?: fhir.IFhirElement|undefined;
}
/**
 * The operation performed.
 */
export type ITestReportSetupActionOperation = fhir.IBackboneElement & {
  /**
   * A link to further details on the result.
   */
  detail?: string|undefined;
  _detail?: fhir.IFhirElement|undefined;
  /**
   * An explanatory message associated with the result.
   */
  message?: string|undefined;
  _message?: fhir.IFhirElement|undefined;
  /**
   * The result of this operation.
   */
  result: TestReportSetupActionOperationResultEnum|null;
  _result?: fhir.IFhirElement|undefined;
}
/**
 * The results of the assertion performed on the previous operations.
 */
export type ITestReportSetupActionAssert = fhir.IBackboneElement & {
  /**
   * A link to further details on the result.
   */
  detail?: string|undefined;
  _detail?: fhir.IFhirElement|undefined;
  /**
   * An explanatory message associated with the result.
   */
  message?: string|undefined;
  _message?: fhir.IFhirElement|undefined;
  /**
   * The result of this assertion.
   */
  result: TestReportSetupActionAssertResultEnum|null;
  _result?: fhir.IFhirElement|undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export type ITestReportSetupAction = fhir.IBackboneElement & {
  /**
   * The results of the assertion performed on the previous operations.
   */
  assert?: fhir.ITestReportSetupActionAssert|undefined;
  /**
   * The operation performed.
   */
  operation?: fhir.ITestReportSetupActionOperation|undefined;
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export type ITestReportSetup = fhir.IBackboneElement & {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.ITestReportSetupAction[]|null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export type ITestReportTestAction = fhir.IBackboneElement & {
  /**
   * The results of the assertion performed on the previous operations.
   */
  assert?: fhir.ITestReportSetupActionAssert|undefined;
  /**
   * An operation would involve a REST request to a server.
   */
  operation?: fhir.ITestReportSetupActionOperation|undefined;
}
/**
 * A test executed from the test script.
 */
export type ITestReportTest = fhir.IBackboneElement & {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.ITestReportTestAction[]|null;
  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export type ITestReportTeardownAction = fhir.IBackboneElement & {
  /**
   * An operation would involve a REST request to a server.
   */
  operation: fhir.ITestReportSetupActionOperation|null;
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export type ITestReportTeardown = fhir.IBackboneElement & {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  action: fhir.ITestReportTeardownAction[]|null;
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export type ITestReport = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "TestReport";
  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * Additional specific dates may be added as extensions.
   */
  issued?: string|undefined;
  _issued?: fhir.IFhirElement|undefined;
  /**
   * Not expected to be globally unique.
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  participant?: fhir.ITestReportParticipant[]|undefined;
  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   */
  result: TestReportResultEnum|null;
  _result?: fhir.IFhirElement|undefined;
  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  score?: number|undefined;
  _score?: fhir.IFhirElement|undefined;
  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  setup?: fhir.ITestReportSetup|undefined;
  /**
   * The status represents where the execution is currently within the test script execution life cycle.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: TestReportStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  teardown?: fhir.ITestReportTeardown|undefined;
  /**
   * A test executed from the test script.
   */
  test?: fhir.ITestReportTest[]|undefined;
  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   */
  tester?: string|undefined;
  _tester?: fhir.IFhirElement|undefined;
  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  testScript: fhir.IReference|null;
}
/**
 * A participant in the test execution, either the execution engine, a client, or a server.
 */
export class TestReportParticipant extends fhir.BackboneElement implements fhir.ITestReportParticipant {
  /**
   * The display name of the participant.
   */
  public display?: string|undefined;
  public _display?: fhir.FhirElement|undefined;
  /**
   * The type of participant.
   */
  public type: TestReportParticipantTypeEnum|null;
  public _type?: fhir.FhirElement|undefined;
  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  public uri: string|null;
  public _uri?: fhir.FhirElement|undefined;
  /**
   * Default constructor for TestReportParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportParticipant> = {}) {
    super(source);
    if (source["display"]) { this.display = source.display; }
    if (source["_display"]) { this._display = new fhir.FhirElement(source._display!); }
    this.type = null;
    if (source["type"]) { this.type = source.type; }
    if (this.type === undefined) { this.type = null }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
    this.uri = null;
    if (source["uri"]) { this.uri = source.uri; }
    if (this.uri === undefined) { this.uri = null }
    if (source["_uri"]) { this._uri = new fhir.FhirElement(source._uri!); }
  }
  /**
   * Check if the current TestReportParticipant contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    if (this["uri"] === undefined) { missingElements.push("uri"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportParticipant from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportParticipant):TestReportParticipant {
    var dest:TestReportParticipant = new TestReportParticipant(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportParticipant is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The operation performed.
 */
export class TestReportSetupActionOperation extends fhir.BackboneElement implements fhir.ITestReportSetupActionOperation {
  /**
   * A link to further details on the result.
   */
  public detail?: string|undefined;
  public _detail?: fhir.FhirElement|undefined;
  /**
   * An explanatory message associated with the result.
   */
  public message?: string|undefined;
  public _message?: fhir.FhirElement|undefined;
  /**
   * The result of this operation.
   */
  public result: TestReportSetupActionOperationResultEnum|null;
  public _result?: fhir.FhirElement|undefined;
  /**
   * Default constructor for TestReportSetupActionOperation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportSetupActionOperation> = {}) {
    super(source);
    if (source["detail"]) { this.detail = source.detail; }
    if (source["_detail"]) { this._detail = new fhir.FhirElement(source._detail!); }
    if (source["message"]) { this.message = source.message; }
    if (source["_message"]) { this._message = new fhir.FhirElement(source._message!); }
    this.result = null;
    if (source["result"]) { this.result = source.result; }
    if (this.result === undefined) { this.result = null }
    if (source["_result"]) { this._result = new fhir.FhirElement(source._result!); }
  }
  /**
   * Check if the current TestReportSetupActionOperation contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["result"] === undefined) { missingElements.push("result"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportSetupActionOperation from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportSetupActionOperation):TestReportSetupActionOperation {
    var dest:TestReportSetupActionOperation = new TestReportSetupActionOperation(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportSetupActionOperation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The results of the assertion performed on the previous operations.
 */
export class TestReportSetupActionAssert extends fhir.BackboneElement implements fhir.ITestReportSetupActionAssert {
  /**
   * A link to further details on the result.
   */
  public detail?: string|undefined;
  public _detail?: fhir.FhirElement|undefined;
  /**
   * An explanatory message associated with the result.
   */
  public message?: string|undefined;
  public _message?: fhir.FhirElement|undefined;
  /**
   * The result of this assertion.
   */
  public result: TestReportSetupActionAssertResultEnum|null;
  public _result?: fhir.FhirElement|undefined;
  /**
   * Default constructor for TestReportSetupActionAssert - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportSetupActionAssert> = {}) {
    super(source);
    if (source["detail"]) { this.detail = source.detail; }
    if (source["_detail"]) { this._detail = new fhir.FhirElement(source._detail!); }
    if (source["message"]) { this.message = source.message; }
    if (source["_message"]) { this._message = new fhir.FhirElement(source._message!); }
    this.result = null;
    if (source["result"]) { this.result = source.result; }
    if (this.result === undefined) { this.result = null }
    if (source["_result"]) { this._result = new fhir.FhirElement(source._result!); }
  }
  /**
   * Check if the current TestReportSetupActionAssert contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["result"] === undefined) { missingElements.push("result"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportSetupActionAssert from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportSetupActionAssert):TestReportSetupActionAssert {
    var dest:TestReportSetupActionAssert = new TestReportSetupActionAssert(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportSetupActionAssert is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportSetupAction extends fhir.BackboneElement implements fhir.ITestReportSetupAction {
  /**
   * The results of the assertion performed on the previous operations.
   */
  public assert?: fhir.TestReportSetupActionAssert|undefined;
  /**
   * The operation performed.
   */
  public operation?: fhir.TestReportSetupActionOperation|undefined;
  /**
   * Default constructor for TestReportSetupAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportSetupAction> = {}) {
    super(source);
    if (source["assert"]) { this.assert = new fhir.TestReportSetupActionAssert(source.assert!); }
    if (source["operation"]) { this.operation = new fhir.TestReportSetupActionOperation(source.operation!); }
  }
  /**
   * Check if the current TestReportSetupAction contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportSetupAction from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportSetupAction):TestReportSetupAction {
    var dest:TestReportSetupAction = new TestReportSetupAction(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportSetupAction is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The results of the series of required setup operations before the tests were executed.
 */
export class TestReportSetup extends fhir.BackboneElement implements fhir.ITestReportSetup {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportSetupAction[]|null;
  /**
   * Default constructor for TestReportSetup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportSetup> = {}) {
    super(source);
    this.action = null;
    if (source["action"]) { this.action = source.action.map((x:Partial<fhir.ITestReportSetupAction>) => new fhir.TestReportSetupAction(x)); }
    if (this.action === undefined) { this.action = null }
  }
  /**
   * Check if the current TestReportSetup contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["action"]) || (this["action"].length === 0)) { missingElements.push("action"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportSetup from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportSetup):TestReportSetup {
    var dest:TestReportSetup = new TestReportSetup(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportSetup is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTestAction extends fhir.BackboneElement implements fhir.ITestReportTestAction {
  /**
   * The results of the assertion performed on the previous operations.
   */
  public assert?: fhir.TestReportSetupActionAssert|undefined;
  /**
   * An operation would involve a REST request to a server.
   */
  public operation?: fhir.TestReportSetupActionOperation|undefined;
  /**
   * Default constructor for TestReportTestAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportTestAction> = {}) {
    super(source);
    if (source["assert"]) { this.assert = new fhir.TestReportSetupActionAssert(source.assert!); }
    if (source["operation"]) { this.operation = new fhir.TestReportSetupActionOperation(source.operation!); }
  }
  /**
   * Check if the current TestReportTestAction contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportTestAction from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportTestAction):TestReportTestAction {
    var dest:TestReportTestAction = new TestReportTestAction(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportTestAction is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A test executed from the test script.
 */
export class TestReportTest extends fhir.BackboneElement implements fhir.ITestReportTest {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportTestAction[]|null;
  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * Default constructor for TestReportTest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportTest> = {}) {
    super(source);
    this.action = null;
    if (source["action"]) { this.action = source.action.map((x:Partial<fhir.ITestReportTestAction>) => new fhir.TestReportTestAction(x)); }
    if (this.action === undefined) { this.action = null }
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
  }
  /**
   * Check if the current TestReportTest contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["action"]) || (this["action"].length === 0)) { missingElements.push("action"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportTest from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportTest):TestReportTest {
    var dest:TestReportTest = new TestReportTest(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportTest is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export class TestReportTeardownAction extends fhir.BackboneElement implements fhir.ITestReportTeardownAction {
  /**
   * An operation would involve a REST request to a server.
   */
  public operation: fhir.TestReportSetupActionOperation|null;
  /**
   * Default constructor for TestReportTeardownAction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportTeardownAction> = {}) {
    super(source);
    this.operation = null;
    if (source["operation"]) { this.operation = new fhir.TestReportSetupActionOperation(source.operation!); }
    if (this.operation === undefined) { this.operation = null }
  }
  /**
   * Check if the current TestReportTeardownAction contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["operation"] === undefined) { missingElements.push("operation"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportTeardownAction from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportTeardownAction):TestReportTeardownAction {
    var dest:TestReportTeardownAction = new TestReportTeardownAction(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportTeardownAction is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
 */
export class TestReportTeardown extends fhir.BackboneElement implements fhir.ITestReportTeardown {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  public action: fhir.TestReportTeardownAction[]|null;
  /**
   * Default constructor for TestReportTeardown - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReportTeardown> = {}) {
    super(source);
    this.action = null;
    if (source["action"]) { this.action = source.action.map((x:Partial<fhir.ITestReportTeardownAction>) => new fhir.TestReportTeardownAction(x)); }
    if (this.action === undefined) { this.action = null }
  }
  /**
   * Check if the current TestReportTeardown contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["action"]) || (this["action"].length === 0)) { missingElements.push("action"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReportTeardown from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReportTeardown):TestReportTeardown {
    var dest:TestReportTeardown = new TestReportTeardown(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReportTeardown is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A summary of information based on the results of executing a TestScript.
 */
export class TestReport extends fhir.DomainResource implements fhir.ITestReport {
  /**
   * Resource Type Name
   */
  public override resourceType: "TestReport";
  /**
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Additional specific dates may be added as extensions.
   */
  public issued?: string|undefined;
  public _issued?: fhir.FhirElement|undefined;
  /**
   * Not expected to be globally unique.
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  public participant?: fhir.TestReportParticipant[]|undefined;
  /**
   * The pass and fail result represents a completed test script execution. The pending result represents a test script execution that has not yet started or is currently in progress.
   */
  public result: TestReportResultEnum|null;
  public _result?: fhir.FhirElement|undefined;
  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  public score?: number|undefined;
  public _score?: fhir.FhirElement|undefined;
  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  public setup?: fhir.TestReportSetup|undefined;
  /**
   * The status represents where the execution is currently within the test script execution life cycle.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: TestReportStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  public teardown?: fhir.TestReportTeardown|undefined;
  /**
   * A test executed from the test script.
   */
  public test?: fhir.TestReportTest[]|undefined;
  /**
   * Usually an organization, but may be an individual. This item SHOULD be populated unless the information is available from context.
   */
  public tester?: string|undefined;
  public _tester?: fhir.FhirElement|undefined;
  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  public testScript: fhir.Reference|null;
  /**
   * Default constructor for TestReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ITestReport> = {}) {
    super(source);
    this.resourceType = 'TestReport';
    if (source["identifier"]) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source["issued"]) { this.issued = source.issued; }
    if (source["_issued"]) { this._issued = new fhir.FhirElement(source._issued!); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    if (source["participant"]) { this.participant = source.participant.map((x:Partial<fhir.ITestReportParticipant>) => new fhir.TestReportParticipant(x)); }
    this.result = null;
    if (source["result"]) { this.result = source.result; }
    if (this.result === undefined) { this.result = null }
    if (source["_result"]) { this._result = new fhir.FhirElement(source._result!); }
    if (source["score"]) { this.score = source.score; }
    if (source["_score"]) { this._score = new fhir.FhirElement(source._score!); }
    if (source["setup"]) { this.setup = new fhir.TestReportSetup(source.setup!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["teardown"]) { this.teardown = new fhir.TestReportTeardown(source.teardown!); }
    if (source["test"]) { this.test = source.test.map((x:Partial<fhir.ITestReportTest>) => new fhir.TestReportTest(x)); }
    if (source["tester"]) { this.tester = source.tester; }
    if (source["_tester"]) { this._tester = new fhir.FhirElement(source._tester!); }
    this.testScript = null;
    if (source["testScript"]) { this.testScript = new fhir.Reference(source.testScript!); }
    if (this.testScript === undefined) { this.testScript = null }
  }
  /**
   * Check if the current TestReport contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["result"] === undefined) { missingElements.push("result"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["testScript"] === undefined) { missingElements.push("testScript"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a TestReport from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ITestReport):TestReport {
    var dest:TestReport = new TestReport(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `TestReport is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the TestReport.participant.type field
 */
export enum TestReportParticipantTypeEnum {
  TEST_ENGINE = "test-engine",
  CLIENT = "client",
  SERVER = "server",
}
/**
 * Code Values for the TestReport.setup.action.operation.result field
 */
export enum TestReportSetupActionOperationResultEnum {
  PASS = "pass",
  SKIP = "skip",
  FAIL = "fail",
  WARNING = "warning",
  ERROR = "error",
}
/**
 * Code Values for the TestReport.setup.action.assert.result field
 */
export enum TestReportSetupActionAssertResultEnum {
  PASS = "pass",
  SKIP = "skip",
  FAIL = "fail",
  WARNING = "warning",
  ERROR = "error",
}
/**
 * Code Values for the TestReport.result field
 */
export enum TestReportResultEnum {
  PASS = "pass",
  FAIL = "fail",
  PENDING = "pending",
}
/**
 * Code Values for the TestReport.status field
 */
export enum TestReportStatusEnum {
  COMPLETED = "completed",
  IN_PROGRESS = "in-progress",
  WAITING = "waiting",
  STOPPED = "stopped",
  ENTERED_IN_ERROR = "entered-in-error",
}