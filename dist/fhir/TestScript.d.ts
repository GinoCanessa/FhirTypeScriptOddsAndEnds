import * as fhir from '../fhir';
/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
export declare type ITestScriptOrigin = fhir.IBackboneElement & {
    /**
     * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
     * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
     * The origin indices provided elsewhere in the test script must be one of these origin indices.
     */
    index: number | null;
    _index?: fhir.IFhirElement | undefined;
    /**
     * Must be a "sender"/"client" profile.
     */
    profile: fhir.ICoding | null;
};
/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
export declare type ITestScriptDestination = fhir.IBackboneElement & {
    /**
     * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
     * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
     * The destination indices provided elsewhere in the test script must be one of these destination indices.
     */
    index: number | null;
    _index?: fhir.IFhirElement | undefined;
    /**
     * Must be a "receiver"/"server" profile.
     */
    profile: fhir.ICoding | null;
};
/**
 * A link to the FHIR specification that this test is covering.
 */
export declare type ITestScriptMetadataLink = fhir.IBackboneElement & {
    /**
     * Short description of the link.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
};
/**
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
export declare type ITestScriptMetadataCapability = fhir.IBackboneElement & {
    /**
     * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
     */
    capabilities: string | null;
    _capabilities?: fhir.IFhirElement | undefined;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Which server these requirements apply to.
     */
    destination?: number | undefined;
    _destination?: fhir.IFhirElement | undefined;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: string[] | undefined;
    _link?: fhir.IFhirElement[] | undefined;
    /**
     * Which origin server these requirements apply to.
     */
    origin?: number[] | undefined;
    _origin?: fhir.IFhirElement[] | undefined;
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required: boolean | null;
    _required?: fhir.IFhirElement | undefined;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated: boolean | null;
    _validated?: fhir.IFhirElement | undefined;
};
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export declare type ITestScriptMetadata = fhir.IBackboneElement & {
    /**
     * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
     */
    capability: fhir.ITestScriptMetadataCapability[] | null;
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.ITestScriptMetadataLink[] | undefined;
};
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export declare type ITestScriptFixture = fhir.IBackboneElement & {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate: boolean | null;
    _autocreate?: fhir.IFhirElement | undefined;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete: boolean | null;
    _autodelete?: fhir.IFhirElement | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    resource?: fhir.IReference | undefined;
};
/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export declare type ITestScriptVariable = fhir.IBackboneElement & {
    /**
     * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
     */
    defaultValue?: string | undefined;
    _defaultValue?: fhir.IFhirElement | undefined;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    expression?: string | undefined;
    _expression?: fhir.IFhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
     */
    headerField?: string | undefined;
    _headerField?: fhir.IFhirElement | undefined;
    /**
     * Displayable text string with hint help information to the user when entering a default value.
     */
    hint?: string | undefined;
    _hint?: fhir.IFhirElement | undefined;
    /**
     * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    path?: string | undefined;
    _path?: fhir.IFhirElement | undefined;
    /**
     * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.IFhirElement | undefined;
};
/**
 * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 */
export declare type ITestScriptSetupActionOperationRequestHeader = fhir.IBackboneElement & {
    /**
     * If header element is specified, then field is required.
     */
    field: string | null;
    _field?: fhir.IFhirElement | undefined;
    /**
     * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    value: string | null;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * The operation to perform.
 */
export declare type ITestScriptSetupActionOperation = fhir.IBackboneElement & {
    /**
     * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
     */
    accept?: string | undefined;
    _accept?: fhir.IFhirElement | undefined;
    /**
     * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
     */
    contentType?: string | undefined;
    _contentType?: fhir.IFhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
     */
    destination?: number | undefined;
    _destination?: fhir.IFhirElement | undefined;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl: boolean | null;
    _encodeRequestUrl?: fhir.IFhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    _label?: fhir.IFhirElement | undefined;
    /**
     * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
     */
    method?: TestScriptSetupActionOperationMethodEnum | undefined;
    _method?: fhir.IFhirElement | undefined;
    /**
     * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
     */
    origin?: number | undefined;
    _origin?: fhir.IFhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    params?: string | undefined;
    _params?: fhir.IFhirElement | undefined;
    /**
     * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
     */
    requestHeader?: fhir.ITestScriptSetupActionOperationRequestHeader[] | undefined;
    /**
     * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
     */
    requestId?: string | undefined;
    _requestId?: fhir.IFhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
     */
    resource?: string | undefined;
    _resource?: fhir.IFhirElement | undefined;
    /**
     * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
     */
    responseId?: string | undefined;
    _responseId?: fhir.IFhirElement | undefined;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.IFhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
     */
    targetId?: string | undefined;
    _targetId?: fhir.IFhirElement | undefined;
    /**
     * See http://build.fhir.org/http.html for list of server interactions.
     */
    type?: fhir.ICoding | undefined;
    /**
     * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
};
/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
export declare type ITestScriptSetupActionAssert = fhir.IBackboneElement & {
    /**
     * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourceExpression?: string | undefined;
    _compareToSourceExpression?: fhir.IFhirElement | undefined;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: string | undefined;
    _compareToSourceId?: fhir.IFhirElement | undefined;
    /**
     * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourcePath?: string | undefined;
    _compareToSourcePath?: fhir.IFhirElement | undefined;
    /**
     * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
     */
    contentType?: string | undefined;
    _contentType?: fhir.IFhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
     */
    direction?: TestScriptSetupActionAssertDirectionEnum | undefined;
    _direction?: fhir.IFhirElement | undefined;
    /**
     * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    expression?: string | undefined;
    _expression?: fhir.IFhirElement | undefined;
    /**
     * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
     */
    headerField?: string | undefined;
    _headerField?: fhir.IFhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    _label?: fhir.IFhirElement | undefined;
    /**
     * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
     */
    minimumId?: string | undefined;
    _minimumId?: fhir.IFhirElement | undefined;
    /**
     * Asserts that the Bundle contains first, last, and next links.
     */
    navigationLinks?: boolean | undefined;
    _navigationLinks?: fhir.IFhirElement | undefined;
    /**
     * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```&lt;code&gt;   &lt;assert&gt;  &lt;operator value="in" /&gt;  &lt;responseCode value="200,201,204" /&gt;    &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="notEquals" /&gt;  &lt;response value="okay"/&gt;   &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="greaterThan" /&gt;    &lt;responseHeader&gt;     &lt;field value="Content-Length" /&gt;     &lt;value value="0" /&gt;    &lt;/responseHeader/&gt;   &lt;/assert&gt; &lt;/code&gt; ```.
     */
    operator?: TestScriptSetupActionAssertOperatorEnum | undefined;
    _operator?: fhir.IFhirElement | undefined;
    /**
     * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    path?: string | undefined;
    _path?: fhir.IFhirElement | undefined;
    /**
     * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
     */
    requestMethod?: TestScriptSetupActionAssertRequestMethodEnum | undefined;
    _requestMethod?: fhir.IFhirElement | undefined;
    /**
     * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
     */
    requestURL?: string | undefined;
    _requestURL?: fhir.IFhirElement | undefined;
    /**
     * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. &lt;assert &gt; &lt;resourceType value="Patient" &lt;/assert&gt;.
     */
    resource?: string | undefined;
    _resource?: fhir.IFhirElement | undefined;
    /**
     * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. &lt;assert&gt;  &lt;contentType value="json" /&gt;  &lt;response value="okay"/&gt; &lt;/assert&gt;.
     */
    response?: TestScriptSetupActionAssertResponseEnum | undefined;
    _response?: fhir.IFhirElement | undefined;
    /**
     * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
     */
    responseCode?: string | undefined;
    _responseCode?: fhir.IFhirElement | undefined;
    /**
     * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.IFhirElement | undefined;
    /**
     * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
     */
    validateProfileId?: string | undefined;
    _validateProfileId?: fhir.IFhirElement | undefined;
    /**
     * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
     */
    value?: string | undefined;
    _value?: fhir.IFhirElement | undefined;
    /**
     * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
     */
    warningOnly: boolean | null;
    _warningOnly?: fhir.IFhirElement | undefined;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestScriptSetupAction = fhir.IBackboneElement & {
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.ITestScriptSetupActionAssert | undefined;
    /**
     * The operation to perform.
     */
    operation?: fhir.ITestScriptSetupActionOperation | undefined;
};
/**
 * A series of required setup operations before tests are executed.
 */
export declare type ITestScriptSetup = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestScriptSetupAction[] | null;
};
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare type ITestScriptTestAction = fhir.IBackboneElement & {
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.ITestScriptSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.ITestScriptSetupActionOperation | undefined;
};
/**
 * A test in this script.
 */
export declare type ITestScriptTest = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestScriptTestAction[] | null;
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
export declare type ITestScriptTeardownAction = fhir.IBackboneElement & {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.ITestScriptSetupActionOperation | null;
};
/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
export declare type ITestScriptTeardown = fhir.IBackboneElement & {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.ITestScriptTeardownAction[] | null;
};
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export declare type ITestScript = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
     */
    destination?: fhir.ITestScriptDestination[] | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.ITestScriptFixture[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.ITestScriptMetadata | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
     */
    origin?: fhir.ITestScriptOrigin[] | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    profile?: fhir.IReference[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.ITestScriptSetup | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    status: TestScriptStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.ITestScriptTeardown | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.ITestScriptTest[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
     */
    variable?: fhir.ITestScriptVariable[] | undefined;
    /**
     * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
export declare class TestScriptOrigin extends fhir.BackboneElement implements fhir.ITestScriptOrigin {
    /**
     * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
     * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
     * The origin indices provided elsewhere in the test script must be one of these origin indices.
     */
    index: number | null;
    _index?: fhir.FhirElement | undefined;
    /**
     * Must be a "sender"/"client" profile.
     */
    profile: fhir.Coding | null;
    /**
     * Default constructor for TestScriptOrigin - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptOrigin>);
    /**
     * Check if the current TestScriptOrigin contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptOrigin from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptOrigin): TestScriptOrigin;
}
/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
export declare class TestScriptDestination extends fhir.BackboneElement implements fhir.ITestScriptDestination {
    /**
     * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
     * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
     * The destination indices provided elsewhere in the test script must be one of these destination indices.
     */
    index: number | null;
    _index?: fhir.FhirElement | undefined;
    /**
     * Must be a "receiver"/"server" profile.
     */
    profile: fhir.Coding | null;
    /**
     * Default constructor for TestScriptDestination - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptDestination>);
    /**
     * Check if the current TestScriptDestination contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptDestination from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptDestination): TestScriptDestination;
}
/**
 * A link to the FHIR specification that this test is covering.
 */
export declare class TestScriptMetadataLink extends fhir.BackboneElement implements fhir.ITestScriptMetadataLink {
    /**
     * Short description of the link.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptMetadataLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptMetadataLink>);
    /**
     * Check if the current TestScriptMetadataLink contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptMetadataLink from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptMetadataLink): TestScriptMetadataLink;
}
/**
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
export declare class TestScriptMetadataCapability extends fhir.BackboneElement implements fhir.ITestScriptMetadataCapability {
    /**
     * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
     */
    capabilities: string | null;
    _capabilities?: fhir.FhirElement | undefined;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Which server these requirements apply to.
     */
    destination?: number | undefined;
    _destination?: fhir.FhirElement | undefined;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: string[] | undefined;
    _link?: fhir.FhirElement[] | undefined;
    /**
     * Which origin server these requirements apply to.
     */
    origin?: number[] | undefined;
    _origin?: fhir.FhirElement[] | undefined;
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required: boolean | null;
    _required?: fhir.FhirElement | undefined;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated: boolean | null;
    _validated?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptMetadataCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptMetadataCapability>);
    /**
     * Check if the current TestScriptMetadataCapability contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptMetadataCapability from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptMetadataCapability): TestScriptMetadataCapability;
}
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export declare class TestScriptMetadata extends fhir.BackboneElement implements fhir.ITestScriptMetadata {
    /**
     * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
     */
    capability: fhir.TestScriptMetadataCapability[] | null;
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.TestScriptMetadataLink[] | undefined;
    /**
     * Default constructor for TestScriptMetadata - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptMetadata>);
    /**
     * Check if the current TestScriptMetadata contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptMetadata from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptMetadata): TestScriptMetadata;
}
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export declare class TestScriptFixture extends fhir.BackboneElement implements fhir.ITestScriptFixture {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate: boolean | null;
    _autocreate?: fhir.FhirElement | undefined;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete: boolean | null;
    _autodelete?: fhir.FhirElement | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    resource?: fhir.Reference | undefined;
    /**
     * Default constructor for TestScriptFixture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptFixture>);
    /**
     * Check if the current TestScriptFixture contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptFixture from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptFixture): TestScriptFixture;
}
/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export declare class TestScriptVariable extends fhir.BackboneElement implements fhir.ITestScriptVariable {
    /**
     * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
     */
    defaultValue?: string | undefined;
    _defaultValue?: fhir.FhirElement | undefined;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    expression?: string | undefined;
    _expression?: fhir.FhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
     */
    headerField?: string | undefined;
    _headerField?: fhir.FhirElement | undefined;
    /**
     * Displayable text string with hint help information to the user when entering a default value.
     */
    hint?: string | undefined;
    _hint?: fhir.FhirElement | undefined;
    /**
     * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    path?: string | undefined;
    _path?: fhir.FhirElement | undefined;
    /**
     * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptVariable>);
    /**
     * Check if the current TestScriptVariable contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptVariable from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptVariable): TestScriptVariable;
}
/**
 * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 */
export declare class TestScriptSetupActionOperationRequestHeader extends fhir.BackboneElement implements fhir.ITestScriptSetupActionOperationRequestHeader {
    /**
     * If header element is specified, then field is required.
     */
    field: string | null;
    _field?: fhir.FhirElement | undefined;
    /**
     * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptSetupActionOperationRequestHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptSetupActionOperationRequestHeader>);
    /**
     * Check if the current TestScriptSetupActionOperationRequestHeader contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptSetupActionOperationRequestHeader from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptSetupActionOperationRequestHeader): TestScriptSetupActionOperationRequestHeader;
}
/**
 * The operation to perform.
 */
export declare class TestScriptSetupActionOperation extends fhir.BackboneElement implements fhir.ITestScriptSetupActionOperation {
    /**
     * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
     */
    accept?: string | undefined;
    _accept?: fhir.FhirElement | undefined;
    /**
     * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
     */
    contentType?: string | undefined;
    _contentType?: fhir.FhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
     */
    destination?: number | undefined;
    _destination?: fhir.FhirElement | undefined;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl: boolean | null;
    _encodeRequestUrl?: fhir.FhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    _label?: fhir.FhirElement | undefined;
    /**
     * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
     */
    method?: TestScriptSetupActionOperationMethodEnum | undefined;
    _method?: fhir.FhirElement | undefined;
    /**
     * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
     */
    origin?: number | undefined;
    _origin?: fhir.FhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    params?: string | undefined;
    _params?: fhir.FhirElement | undefined;
    /**
     * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
     */
    requestHeader?: fhir.TestScriptSetupActionOperationRequestHeader[] | undefined;
    /**
     * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
     */
    requestId?: string | undefined;
    _requestId?: fhir.FhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
     */
    resource?: string | undefined;
    _resource?: fhir.FhirElement | undefined;
    /**
     * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
     */
    responseId?: string | undefined;
    _responseId?: fhir.FhirElement | undefined;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.FhirElement | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
     */
    targetId?: string | undefined;
    _targetId?: fhir.FhirElement | undefined;
    /**
     * See http://build.fhir.org/http.html for list of server interactions.
     */
    type?: fhir.Coding | undefined;
    /**
     * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptSetupActionOperation>);
    /**
     * Check if the current TestScriptSetupActionOperation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptSetupActionOperation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptSetupActionOperation): TestScriptSetupActionOperation;
}
/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
export declare class TestScriptSetupActionAssert extends fhir.BackboneElement implements fhir.ITestScriptSetupActionAssert {
    /**
     * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourceExpression?: string | undefined;
    _compareToSourceExpression?: fhir.FhirElement | undefined;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: string | undefined;
    _compareToSourceId?: fhir.FhirElement | undefined;
    /**
     * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourcePath?: string | undefined;
    _compareToSourcePath?: fhir.FhirElement | undefined;
    /**
     * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
     */
    contentType?: string | undefined;
    _contentType?: fhir.FhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
     */
    direction?: TestScriptSetupActionAssertDirectionEnum | undefined;
    _direction?: fhir.FhirElement | undefined;
    /**
     * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    expression?: string | undefined;
    _expression?: fhir.FhirElement | undefined;
    /**
     * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
     */
    headerField?: string | undefined;
    _headerField?: fhir.FhirElement | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: string | undefined;
    _label?: fhir.FhirElement | undefined;
    /**
     * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
     */
    minimumId?: string | undefined;
    _minimumId?: fhir.FhirElement | undefined;
    /**
     * Asserts that the Bundle contains first, last, and next links.
     */
    navigationLinks?: boolean | undefined;
    _navigationLinks?: fhir.FhirElement | undefined;
    /**
     * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```&lt;code&gt;   &lt;assert&gt;  &lt;operator value="in" /&gt;  &lt;responseCode value="200,201,204" /&gt;    &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="notEquals" /&gt;  &lt;response value="okay"/&gt;   &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="greaterThan" /&gt;    &lt;responseHeader&gt;     &lt;field value="Content-Length" /&gt;     &lt;value value="0" /&gt;    &lt;/responseHeader/&gt;   &lt;/assert&gt; &lt;/code&gt; ```.
     */
    operator?: TestScriptSetupActionAssertOperatorEnum | undefined;
    _operator?: fhir.FhirElement | undefined;
    /**
     * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    path?: string | undefined;
    _path?: fhir.FhirElement | undefined;
    /**
     * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
     */
    requestMethod?: TestScriptSetupActionAssertRequestMethodEnum | undefined;
    _requestMethod?: fhir.FhirElement | undefined;
    /**
     * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
     */
    requestURL?: string | undefined;
    _requestURL?: fhir.FhirElement | undefined;
    /**
     * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. &lt;assert &gt; &lt;resourceType value="Patient" &lt;/assert&gt;.
     */
    resource?: string | undefined;
    _resource?: fhir.FhirElement | undefined;
    /**
     * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. &lt;assert&gt;  &lt;contentType value="json" /&gt;  &lt;response value="okay"/&gt; &lt;/assert&gt;.
     */
    response?: TestScriptSetupActionAssertResponseEnum | undefined;
    _response?: fhir.FhirElement | undefined;
    /**
     * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
     */
    responseCode?: string | undefined;
    _responseCode?: fhir.FhirElement | undefined;
    /**
     * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
     */
    sourceId?: string | undefined;
    _sourceId?: fhir.FhirElement | undefined;
    /**
     * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
     */
    validateProfileId?: string | undefined;
    _validateProfileId?: fhir.FhirElement | undefined;
    /**
     * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
     */
    value?: string | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
     */
    warningOnly: boolean | null;
    _warningOnly?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScriptSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptSetupActionAssert>);
    /**
     * Check if the current TestScriptSetupActionAssert contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptSetupActionAssert from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptSetupActionAssert): TestScriptSetupActionAssert;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptSetupAction extends fhir.BackboneElement implements fhir.ITestScriptSetupAction {
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Default constructor for TestScriptSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptSetupAction>);
    /**
     * Check if the current TestScriptSetupAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptSetupAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptSetupAction): TestScriptSetupAction;
}
/**
 * A series of required setup operations before tests are executed.
 */
export declare class TestScriptSetup extends fhir.BackboneElement implements fhir.ITestScriptSetup {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptSetupAction[] | null;
    /**
     * Default constructor for TestScriptSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptSetup>);
    /**
     * Check if the current TestScriptSetup contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptSetup from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptSetup): TestScriptSetup;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptTestAction extends fhir.BackboneElement implements fhir.ITestScriptTestAction {
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * Default constructor for TestScriptTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptTestAction>);
    /**
     * Check if the current TestScriptTestAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptTestAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptTestAction): TestScriptTestAction;
}
/**
 * A test in this script.
 */
export declare class TestScriptTest extends fhir.BackboneElement implements fhir.ITestScriptTest {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTestAction[] | null;
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
     * Default constructor for TestScriptTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptTest>);
    /**
     * Check if the current TestScriptTest contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptTest from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptTest): TestScriptTest;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptTeardownAction extends fhir.BackboneElement implements fhir.ITestScriptTeardownAction {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestScriptSetupActionOperation | null;
    /**
     * Default constructor for TestScriptTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptTeardownAction>);
    /**
     * Check if the current TestScriptTeardownAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptTeardownAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptTeardownAction): TestScriptTeardownAction;
}
/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
export declare class TestScriptTeardown extends fhir.BackboneElement implements fhir.ITestScriptTeardown {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTeardownAction[] | null;
    /**
     * Default constructor for TestScriptTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScriptTeardown>);
    /**
     * Check if the current TestScriptTeardown contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScriptTeardown from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScriptTeardown): TestScriptTeardown;
}
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export declare class TestScript extends fhir.DomainResource implements fhir.ITestScript {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
     */
    destination?: fhir.TestScriptDestination[] | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.TestScriptFixture[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
     */
    origin?: fhir.TestScriptOrigin[] | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    profile?: fhir.Reference[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetup | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    status: TestScriptStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardown | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.TestScriptTest[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
     */
    variable?: fhir.TestScriptVariable[] | undefined;
    /**
     * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TestScript - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITestScript>);
    /**
     * Check if the current TestScript contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TestScript from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITestScript): TestScript;
}
/**
 * Code Values for the TestScript.setup.action.operation.method field
 */
export declare enum TestScriptSetupActionOperationMethodEnum {
    DELETE = "delete",
    GET = "get",
    OPTIONS = "options",
    PATCH = "patch",
    POST = "post",
    PUT = "put",
    HEAD = "head"
}
/**
 * Code Values for the TestScript.setup.action.assert.direction field
 */
export declare enum TestScriptSetupActionAssertDirectionEnum {
    RESPONSE = "response",
    REQUEST = "request"
}
/**
 * Code Values for the TestScript.setup.action.assert.operator field
 */
export declare enum TestScriptSetupActionAssertOperatorEnum {
    EQUALS = "equals",
    NOTEQUALS = "notEquals",
    IN = "in",
    NOTIN = "notIn",
    GREATERTHAN = "greaterThan",
    LESSTHAN = "lessThan",
    EMPTY = "empty",
    NOTEMPTY = "notEmpty",
    CONTAINS = "contains",
    NOTCONTAINS = "notContains",
    EVAL = "eval"
}
/**
 * Code Values for the TestScript.setup.action.assert.requestMethod field
 */
export declare enum TestScriptSetupActionAssertRequestMethodEnum {
    DELETE = "delete",
    GET = "get",
    OPTIONS = "options",
    PATCH = "patch",
    POST = "post",
    PUT = "put",
    HEAD = "head"
}
/**
 * Code Values for the TestScript.setup.action.assert.response field
 */
export declare enum TestScriptSetupActionAssertResponseEnum {
    OKAY = "okay",
    CREATED = "created",
    NOCONTENT = "noContent",
    NOTMODIFIED = "notModified",
    BAD = "bad",
    FORBIDDEN = "forbidden",
    NOTFOUND = "notFound",
    METHODNOTALLOWED = "methodNotAllowed",
    CONFLICT = "conflict",
    GONE = "gone",
    PRECONDITIONFAILED = "preconditionFailed",
    UNPROCESSABLE = "unprocessable"
}
/**
 * Code Values for the TestScript.status field
 */
export declare enum TestScriptStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=TestScript.d.ts.map