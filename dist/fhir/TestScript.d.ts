import * as fhir from '../fhir.js';
import { TestscriptProfileOriginTypesValueSetType } from '../fhirValueSets/TestscriptProfileOriginTypesValueSet.js';
import { TestscriptProfileDestinationTypesValueSetType } from '../fhirValueSets/TestscriptProfileDestinationTypesValueSet.js';
import { TestscriptOperationCodesValueSetType } from '../fhirValueSets/TestscriptOperationCodesValueSet.js';
import { DefinedTypesValueSetType } from '../fhirValueSets/DefinedTypesValueSet.js';
import { HttpOperationsValueSetType } from '../fhirValueSets/HttpOperationsValueSet.js';
import { HttpOperationsValueSetEnum } from '../valueSetEnums.js';
import { AssertDirectionCodesValueSetType } from '../fhirValueSets/AssertDirectionCodesValueSet.js';
import { AssertDirectionCodesValueSetEnum } from '../valueSetEnums.js';
import { AssertOperatorCodesValueSetType } from '../fhirValueSets/AssertOperatorCodesValueSet.js';
import { AssertOperatorCodesValueSetEnum } from '../valueSetEnums.js';
import { AssertResponseCodeTypesValueSetType } from '../fhirValueSets/AssertResponseCodeTypesValueSet.js';
import { AssertResponseCodeTypesValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSetType } from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the TestScriptOrigin type.
 */
export interface TestScriptOriginArgs extends fhir.BackboneElementArgs {
    /**
     * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
     * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
     * The origin indices provided elsewhere in the test script must be one of these origin indices.
     */
    index: fhir.FhirInteger | number | undefined;
    /**
     * Must be a "sender"/"client" profile.
     */
    profile: fhir.CodingArgs | null;
}
/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
export declare class TestScriptOrigin extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).
     * Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler).
     * The origin indices provided elsewhere in the test script must be one of these origin indices.
     */
    index: fhir.FhirInteger | null;
    /**
     * Must be a "sender"/"client" profile.
     */
    profile: fhir.Coding | null;
    /**
     * Default constructor for TestScriptOrigin - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptOriginArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for profile
     */
    static profileExtensibleValueSet(): TestscriptProfileOriginTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptDestination type.
 */
export interface TestScriptDestinationArgs extends fhir.BackboneElementArgs {
    /**
     * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
     * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
     * The destination indices provided elsewhere in the test script must be one of these destination indices.
     */
    index: fhir.FhirInteger | number | undefined;
    /**
     * Must be a "receiver"/"server" profile.
     */
    profile: fhir.CodingArgs | null;
}
/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
export declare class TestScriptDestination extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).
     * Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager).
     * The destination indices provided elsewhere in the test script must be one of these destination indices.
     */
    index: fhir.FhirInteger | null;
    /**
     * Must be a "receiver"/"server" profile.
     */
    profile: fhir.Coding | null;
    /**
     * Default constructor for TestScriptDestination - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptDestinationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for profile
     */
    static profileExtensibleValueSet(): TestscriptProfileDestinationTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptMetadataLink type.
 */
export interface TestScriptMetadataLinkArgs extends fhir.BackboneElementArgs {
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Short description of the link.
     */
    description?: fhir.FhirString | string | undefined;
}
/**
 * A link to the FHIR specification that this test is covering.
 */
export declare class TestScriptMetadataLink extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * URL to a particular requirement or feature within the FHIR specification.
     */
    url: fhir.FhirUri | null;
    /**
     * Short description of the link.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestScriptMetadataLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptMetadataCapability type.
 */
export interface TestScriptMetadataCapabilityArgs extends fhir.BackboneElementArgs {
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required: fhir.FhirBoolean | boolean | undefined;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated: fhir.FhirBoolean | boolean | undefined;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Which origin server these requirements apply to.
     */
    origin?: fhir.FhirInteger[] | number[] | undefined;
    /**
     * Which server these requirements apply to.
     */
    destination?: fhir.FhirInteger | number | undefined;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: fhir.FhirUri[] | string[] | undefined;
    /**
     * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
     */
    capabilities: fhir.FhirCanonical | string | undefined;
}
/**
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
export declare class TestScriptMetadataCapability extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */
    required: fhir.FhirBoolean | null;
    /**
     * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */
    validated: fhir.FhirBoolean | null;
    /**
     * Description of the capabilities that this test script is requiring the server to support.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Which origin server these requirements apply to.
     */
    origin?: fhir.FhirInteger[] | undefined;
    /**
     * Which server these requirements apply to.
     */
    destination?: fhir.FhirInteger | undefined;
    /**
     * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */
    link?: fhir.FhirUri[] | undefined;
    /**
     * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
     */
    capabilities: fhir.FhirCanonical | null;
    /**
     * Default constructor for TestScriptMetadataCapability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataCapabilityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptMetadata type.
 */
export interface TestScriptMetadataArgs extends fhir.BackboneElementArgs {
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.TestScriptMetadataLinkArgs[] | undefined;
    /**
     * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
     */
    capability: fhir.TestScriptMetadataCapabilityArgs[] | null;
}
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
export declare class TestScriptMetadata extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A link to the FHIR specification that this test is covering.
     */
    link?: fhir.TestScriptMetadataLink[] | undefined;
    /**
     * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
     */
    capability: fhir.TestScriptMetadataCapability[] | null;
    /**
     * Default constructor for TestScriptMetadata - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptMetadataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptFixture type.
 */
export interface TestScriptFixtureArgs extends fhir.BackboneElementArgs {
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate: fhir.FhirBoolean | boolean | undefined;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete: fhir.FhirBoolean | boolean | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    resource?: fhir.ReferenceArgs | undefined;
}
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
export declare class TestScriptFixture extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */
    autocreate: fhir.FhirBoolean | null;
    /**
     * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */
    autodelete: fhir.FhirBoolean | null;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    resource?: fhir.Reference | undefined;
    /**
     * Default constructor for TestScriptFixture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptFixtureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptVariable type.
 */
export interface TestScriptVariableArgs extends fhir.BackboneElementArgs {
    /**
     * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
     */
    defaultValue?: fhir.FhirString | string | undefined;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
     */
    headerField?: fhir.FhirString | string | undefined;
    /**
     * Displayable text string with hint help information to the user when entering a default value.
     */
    hint?: fhir.FhirString | string | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
     */
    sourceId?: fhir.FhirId | string | undefined;
}
/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export declare class TestScriptVariable extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
     */
    name: fhir.FhirString | null;
    /**
     * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
     */
    defaultValue?: fhir.FhirString | undefined;
    /**
     * A free text natural language description of the variable and its purpose.
     */
    description?: fhir.FhirString | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
     */
    headerField?: fhir.FhirString | undefined;
    /**
     * Displayable text string with hint help information to the user when entering a default value.
     */
    hint?: fhir.FhirString | undefined;
    /**
     * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
     */
    path?: fhir.FhirString | undefined;
    /**
     * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * Default constructor for TestScriptVariable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptVariableArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptSetupActionOperationRequestHeader type.
 */
export interface TestScriptSetupActionOperationRequestHeaderArgs extends fhir.BackboneElementArgs {
    /**
     * If header element is specified, then field is required.
     */
    field: fhir.FhirString | string | undefined;
    /**
     * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    value: fhir.FhirString | string | undefined;
}
/**
 * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 */
export declare class TestScriptSetupActionOperationRequestHeader extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * If header element is specified, then field is required.
     */
    field: fhir.FhirString | null;
    /**
     * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for TestScriptSetupActionOperationRequestHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionOperationRequestHeaderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptSetupActionOperation type.
 */
export interface TestScriptSetupActionOperationArgs extends fhir.BackboneElementArgs {
    /**
     * See http://build.fhir.org/http.html for list of server interactions.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
     */
    resource?: fhir.FhirCode | string | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
     */
    accept?: fhir.FhirCode | string | undefined;
    /**
     * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
     */
    destination?: fhir.FhirInteger | number | undefined;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl: fhir.FhirBoolean | boolean | undefined;
    /**
     * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
     */
    method?: HttpOperationsValueSetEnum | undefined;
    /**
     * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
     */
    origin?: fhir.FhirInteger | number | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    params?: fhir.FhirString | string | undefined;
    /**
     * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
     */
    requestHeader?: fhir.TestScriptSetupActionOperationRequestHeaderArgs[] | undefined;
    /**
     * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
     */
    requestId?: fhir.FhirId | string | undefined;
    /**
     * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
     */
    responseId?: fhir.FhirId | string | undefined;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: fhir.FhirId | string | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
     */
    targetId?: fhir.FhirId | string | undefined;
    /**
     * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    url?: fhir.FhirString | string | undefined;
}
/**
 * The operation to perform.
 */
export declare class TestScriptSetupActionOperation extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * See http://build.fhir.org/http.html for list of server interactions.
     */
    type?: fhir.Coding | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
     */
    resource?: fhir.FhirCode | undefined;
    /**
     * This has no impact on the verification itself.
     */
    label?: fhir.FhirString | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: fhir.FhirString | undefined;
    /**
     * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
     */
    accept?: fhir.FhirCode | undefined;
    /**
     * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
     */
    contentType?: fhir.FhirCode | undefined;
    /**
     * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
     */
    destination?: fhir.FhirInteger | undefined;
    /**
     * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */
    encodeRequestUrl: fhir.FhirBoolean | null;
    /**
     * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
     */
    method?: HttpOperationsValueSetEnum | undefined;
    /**
     * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
     */
    origin?: fhir.FhirInteger | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    params?: fhir.FhirString | undefined;
    /**
     * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
     */
    requestHeader?: fhir.TestScriptSetupActionOperationRequestHeader[] | undefined;
    /**
     * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
     */
    requestId?: fhir.FhirId | undefined;
    /**
     * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
     */
    responseId?: fhir.FhirId | undefined;
    /**
     * The id of the fixture used as the body of a PUT or POST request.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
     */
    targetId?: fhir.FhirId | undefined;
    /**
     * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
     */
    url?: fhir.FhirString | undefined;
    /**
     * Default constructor for TestScriptSetupActionOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): TestscriptOperationCodesValueSetType;
    /**
     * Required-bound Value Set for resource
     */
    static resourceRequiredValueSet(): DefinedTypesValueSetType;
    /**
     * Required-bound Value Set for method
     */
    static methodRequiredValueSet(): HttpOperationsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptSetupActionAssert type.
 */
export interface TestScriptSetupActionAssertArgs extends fhir.BackboneElementArgs {
    /**
     * This has no impact on the verification itself.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
     */
    direction?: AssertDirectionCodesValueSetEnum | undefined;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: fhir.FhirString | string | undefined;
    /**
     * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourceExpression?: fhir.FhirString | string | undefined;
    /**
     * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourcePath?: fhir.FhirString | string | undefined;
    /**
     * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
     */
    headerField?: fhir.FhirString | string | undefined;
    /**
     * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
     */
    minimumId?: fhir.FhirString | string | undefined;
    /**
     * Asserts that the Bundle contains first, last, and next links.
     */
    navigationLinks?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```&lt;code&gt;   &lt;assert&gt;  &lt;operator value="in" /&gt;  &lt;responseCode value="200,201,204" /&gt;    &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="notEquals" /&gt;  &lt;response value="okay"/&gt;   &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="greaterThan" /&gt;    &lt;responseHeader&gt;     &lt;field value="Content-Length" /&gt;     &lt;value value="0" /&gt;    &lt;/responseHeader/&gt;   &lt;/assert&gt; &lt;/code&gt; ```.
     */
    operator?: AssertOperatorCodesValueSetEnum | undefined;
    /**
     * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
     */
    requestMethod?: HttpOperationsValueSetEnum | undefined;
    /**
     * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
     */
    requestURL?: fhir.FhirString | string | undefined;
    /**
     * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. &lt;assert &gt; &lt;resourceType value="Patient" &lt;/assert&gt;.
     */
    resource?: fhir.FhirCode | string | undefined;
    /**
     * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. &lt;assert&gt;  &lt;contentType value="json" /&gt;  &lt;response value="okay"/&gt; &lt;/assert&gt;.
     */
    response?: AssertResponseCodeTypesValueSetEnum | undefined;
    /**
     * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
     */
    responseCode?: fhir.FhirString | string | undefined;
    /**
     * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
     */
    sourceId?: fhir.FhirId | string | undefined;
    /**
     * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
     */
    validateProfileId?: fhir.FhirId | string | undefined;
    /**
     * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
     */
    warningOnly: fhir.FhirBoolean | boolean | undefined;
}
/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
export declare class TestScriptSetupActionAssert extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * This has no impact on the verification itself.
     */
    label?: fhir.FhirString | undefined;
    /**
     * This has no impact on the verification itself.
     */
    description?: fhir.FhirString | undefined;
    /**
     * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
     */
    direction?: AssertDirectionCodesValueSetEnum | undefined;
    /**
     * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
     */
    compareToSourceId?: fhir.FhirString | undefined;
    /**
     * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourceExpression?: fhir.FhirString | undefined;
    /**
     * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
     */
    compareToSourcePath?: fhir.FhirString | undefined;
    /**
     * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
     */
    contentType?: fhir.FhirCode | undefined;
    /**
     * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
     */
    headerField?: fhir.FhirString | undefined;
    /**
     * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
     */
    minimumId?: fhir.FhirString | undefined;
    /**
     * Asserts that the Bundle contains first, last, and next links.
     */
    navigationLinks?: fhir.FhirBoolean | undefined;
    /**
     * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```&lt;code&gt;   &lt;assert&gt;  &lt;operator value="in" /&gt;  &lt;responseCode value="200,201,204" /&gt;    &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="notEquals" /&gt;  &lt;response value="okay"/&gt;   &lt;/assert&gt;    &lt;assert&gt;  &lt;operator value="greaterThan" /&gt;    &lt;responseHeader&gt;     &lt;field value="Content-Length" /&gt;     &lt;value value="0" /&gt;    &lt;/responseHeader/&gt;   &lt;/assert&gt; &lt;/code&gt; ```.
     */
    operator?: AssertOperatorCodesValueSetEnum | undefined;
    /**
     * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
     */
    path?: fhir.FhirString | undefined;
    /**
     * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
     */
    requestMethod?: HttpOperationsValueSetEnum | undefined;
    /**
     * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
     */
    requestURL?: fhir.FhirString | undefined;
    /**
     * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. &lt;assert &gt; &lt;resourceType value="Patient" &lt;/assert&gt;.
     */
    resource?: fhir.FhirCode | undefined;
    /**
     * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. &lt;assert&gt;  &lt;contentType value="json" /&gt;  &lt;response value="okay"/&gt; &lt;/assert&gt;.
     */
    response?: AssertResponseCodeTypesValueSetEnum | undefined;
    /**
     * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
     */
    responseCode?: fhir.FhirString | undefined;
    /**
     * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
     */
    sourceId?: fhir.FhirId | undefined;
    /**
     * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
     */
    validateProfileId?: fhir.FhirId | undefined;
    /**
     * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
     */
    value?: fhir.FhirString | undefined;
    /**
     * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
     */
    warningOnly: fhir.FhirBoolean | null;
    /**
     * Default constructor for TestScriptSetupActionAssert - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionAssertArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for direction
     */
    static directionRequiredValueSet(): AssertDirectionCodesValueSetType;
    /**
     * Required-bound Value Set for operator
     */
    static operatorRequiredValueSet(): AssertOperatorCodesValueSetType;
    /**
     * Required-bound Value Set for requestMethod
     */
    static requestMethodRequiredValueSet(): HttpOperationsValueSetType;
    /**
     * Required-bound Value Set for resource
     */
    static resourceRequiredValueSet(): DefinedTypesValueSetType;
    /**
     * Required-bound Value Set for response
     */
    static responseRequiredValueSet(): AssertResponseCodeTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptSetupAction type.
 */
export interface TestScriptSetupActionArgs extends fhir.BackboneElementArgs {
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperationArgs | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssertArgs | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptSetupAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The operation to perform.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * Default constructor for TestScriptSetupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptSetup type.
 */
export interface TestScriptSetupArgs extends fhir.BackboneElementArgs {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptSetupActionArgs[] | null;
}
/**
 * A series of required setup operations before tests are executed.
 */
export declare class TestScriptSetup extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptSetupAction[] | null;
    /**
     * Default constructor for TestScriptSetup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptSetupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptTestAction type.
 */
export interface TestScriptTestActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperationArgs | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssertArgs | undefined;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptTestAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation?: fhir.TestScriptSetupActionOperation | undefined;
    /**
     * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
     */
    assert?: fhir.TestScriptSetupActionAssert | undefined;
    /**
     * Default constructor for TestScriptTestAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTestActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptTest type.
 */
export interface TestScriptTestArgs extends fhir.BackboneElementArgs {
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTestActionArgs[] | null;
}
/**
 * A test in this script.
 */
export declare class TestScriptTest extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The name of this test used for tracking/logging purposes by test engines.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A short description of the test used by test engines for tracking and reporting purposes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTestAction[] | null;
    /**
     * Default constructor for TestScriptTest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptTeardownAction type.
 */
export interface TestScriptTeardownActionArgs extends fhir.BackboneElementArgs {
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestScriptSetupActionOperationArgs | null;
}
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
export declare class TestScriptTeardownAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * An operation would involve a REST request to a server.
     */
    operation: fhir.TestScriptSetupActionOperation | null;
    /**
     * Default constructor for TestScriptTeardownAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTeardownActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScriptTeardown type.
 */
export interface TestScriptTeardownArgs extends fhir.BackboneElementArgs {
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTeardownActionArgs[] | null;
}
/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
export declare class TestScriptTeardown extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
     */
    action: fhir.TestScriptTeardownAction[] | null;
    /**
     * Default constructor for TestScriptTeardown - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptTeardownArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the TestScript type.
 */
export interface TestScriptArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "TestScript" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
     */
    origin?: fhir.TestScriptOriginArgs[] | undefined;
    /**
     * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
     */
    destination?: fhir.TestScriptDestinationArgs[] | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadataArgs | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.TestScriptFixtureArgs[] | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    profile?: fhir.ReferenceArgs[] | undefined;
    /**
     * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
     */
    variable?: fhir.TestScriptVariableArgs[] | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetupArgs | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.TestScriptTestArgs[] | undefined;
    /**
     * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardownArgs | undefined;
}
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export declare class TestScript extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "TestScript";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Allows filtering of test scripts that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the test script. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
     */
    origin?: fhir.TestScriptOrigin[] | undefined;
    /**
     * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
     */
    destination?: fhir.TestScriptDestination[] | undefined;
    /**
     * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
     */
    metadata?: fhir.TestScriptMetadata | undefined;
    /**
     * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */
    fixture?: fhir.TestScriptFixture[] | undefined;
    /**
     * See http://build.fhir.org/resourcelist.html for complete list of resource types.
     */
    profile?: fhir.Reference[] | undefined;
    /**
     * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
     */
    variable?: fhir.TestScriptVariable[] | undefined;
    /**
     * A series of required setup operations before tests are executed.
     */
    setup?: fhir.TestScriptSetup | undefined;
    /**
     * A test in this script.
     */
    test?: fhir.TestScriptTest[] | undefined;
    /**
     * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
     */
    teardown?: fhir.TestScriptTeardown | undefined;
    /**
     * Default constructor for TestScript - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TestScriptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=TestScript.d.ts.map