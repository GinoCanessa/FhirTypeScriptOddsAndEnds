"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScriptStatusEnum = exports.TestScript = exports.TestScriptTeardown = exports.TestScriptTeardownAction = exports.TestScriptTest = exports.TestScriptTestAction = exports.TestScriptSetup = exports.TestScriptSetupAction = exports.TestScriptSetupActionAssertResponseEnum = exports.TestScriptSetupActionAssertRequestMethodEnum = exports.TestScriptSetupActionAssertOperatorEnum = exports.TestScriptSetupActionAssertDirectionEnum = exports.TestScriptSetupActionAssert = exports.TestScriptSetupActionOperationMethodEnum = exports.TestScriptSetupActionOperation = exports.TestScriptSetupActionOperationRequestHeader = exports.TestScriptVariable = exports.TestScriptFixture = exports.TestScriptMetadata = exports.TestScriptMetadataCapability = exports.TestScriptMetadataLink = exports.TestScriptDestination = exports.TestScriptOrigin = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 */
class TestScriptOrigin extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptOrigin from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.index = source.index;
        }
        if (source["_index"] !== undefined) {
            this._index = new fhirModels.Element(source._index);
        }
        {
            this.profile = new fhirModels.Coding(source.profile);
        }
    }
}
exports.TestScriptOrigin = TestScriptOrigin;
/**
 * The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 */
class TestScriptDestination extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptDestination from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.index = source.index;
        }
        if (source["_index"] !== undefined) {
            this._index = new fhirModels.Element(source._index);
        }
        {
            this.profile = new fhirModels.Coding(source.profile);
        }
    }
}
exports.TestScriptDestination = TestScriptDestination;
/**
 * A link to the FHIR specification that this test is covering.
 */
class TestScriptMetadataLink extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptMetadataLink from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
    }
}
exports.TestScriptMetadataLink = TestScriptMetadataLink;
/**
 * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server's conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 */
class TestScriptMetadataCapability extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptMetadataCapability from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.capabilities = source.capabilities;
        }
        if (source["_capabilities"] !== undefined) {
            this._capabilities = new fhirModels.Element(source._capabilities);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["destination"] !== undefined) {
            this.destination = source.destination;
        }
        if (source["_destination"] !== undefined) {
            this._destination = new fhirModels.Element(source._destination);
        }
        if (source["link"] !== undefined) {
            this.link = source.link.map((x) => (x));
        }
        if (source["_link"] !== undefined) {
            this._link = source._link.map((x) => new fhirModels.Element(x));
        }
        if (source["origin"] !== undefined) {
            this.origin = source.origin.map((x) => (x));
        }
        if (source["_origin"] !== undefined) {
            this._origin = source._origin.map((x) => new fhirModels.Element(x));
        }
        {
            this.required = source.required;
        }
        if (source["_required"] !== undefined) {
            this._required = new fhirModels.Element(source._required);
        }
        {
            this.validated = source.validated;
        }
        if (source["_validated"] !== undefined) {
            this._validated = new fhirModels.Element(source._validated);
        }
    }
}
exports.TestScriptMetadataCapability = TestScriptMetadataCapability;
/**
 * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 */
class TestScriptMetadata extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptMetadata from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.capability = source.capability.map((x) => new fhirModels.TestScriptMetadataCapability(x));
        }
        if (source["link"] !== undefined) {
            this.link = source.link.map((x) => new fhirModels.TestScriptMetadataLink(x));
        }
    }
}
exports.TestScriptMetadata = TestScriptMetadata;
/**
 * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 */
class TestScriptFixture extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptFixture from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.autocreate = source.autocreate;
        }
        if (source["_autocreate"] !== undefined) {
            this._autocreate = new fhirModels.Element(source._autocreate);
        }
        {
            this.autodelete = source.autodelete;
        }
        if (source["_autodelete"] !== undefined) {
            this._autodelete = new fhirModels.Element(source._autodelete);
        }
        if (source["resource"] !== undefined) {
            this.resource = new fhirModels.Reference(source.resource);
        }
    }
}
exports.TestScriptFixture = TestScriptFixture;
/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
class TestScriptVariable extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptVariable from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["defaultValue"] !== undefined) {
            this.defaultValue = source.defaultValue;
        }
        if (source["_defaultValue"] !== undefined) {
            this._defaultValue = new fhirModels.Element(source._defaultValue);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["expression"] !== undefined) {
            this.expression = source.expression;
        }
        if (source["_expression"] !== undefined) {
            this._expression = new fhirModels.Element(source._expression);
        }
        if (source["headerField"] !== undefined) {
            this.headerField = source.headerField;
        }
        if (source["_headerField"] !== undefined) {
            this._headerField = new fhirModels.Element(source._headerField);
        }
        if (source["hint"] !== undefined) {
            this.hint = source.hint;
        }
        if (source["_hint"] !== undefined) {
            this._hint = new fhirModels.Element(source._hint);
        }
        {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["path"] !== undefined) {
            this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            this._path = new fhirModels.Element(source._path);
        }
        if (source["sourceId"] !== undefined) {
            this.sourceId = source.sourceId;
        }
        if (source["_sourceId"] !== undefined) {
            this._sourceId = new fhirModels.Element(source._sourceId);
        }
    }
}
exports.TestScriptVariable = TestScriptVariable;
/**
 * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 */
class TestScriptSetupActionOperationRequestHeader extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptSetupActionOperationRequestHeader from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.field = source.field;
        }
        if (source["_field"] !== undefined) {
            this._field = new fhirModels.Element(source._field);
        }
        {
            this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            this._value = new fhirModels.Element(source._value);
        }
    }
}
exports.TestScriptSetupActionOperationRequestHeader = TestScriptSetupActionOperationRequestHeader;
/**
 * The operation to perform.
 */
class TestScriptSetupActionOperation extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptSetupActionOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["accept"] !== undefined) {
            this.accept = source.accept;
        }
        if (source["_accept"] !== undefined) {
            this._accept = new fhirModels.Element(source._accept);
        }
        if (source["contentType"] !== undefined) {
            this.contentType = source.contentType;
        }
        if (source["_contentType"] !== undefined) {
            this._contentType = new fhirModels.Element(source._contentType);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["destination"] !== undefined) {
            this.destination = source.destination;
        }
        if (source["_destination"] !== undefined) {
            this._destination = new fhirModels.Element(source._destination);
        }
        {
            this.encodeRequestUrl = source.encodeRequestUrl;
        }
        if (source["_encodeRequestUrl"] !== undefined) {
            this._encodeRequestUrl = new fhirModels.Element(source._encodeRequestUrl);
        }
        if (source["label"] !== undefined) {
            this.label = source.label;
        }
        if (source["_label"] !== undefined) {
            this._label = new fhirModels.Element(source._label);
        }
        if (source["method"] !== undefined) {
            this.method = source.method;
        }
        if (source["_method"] !== undefined) {
            this._method = new fhirModels.Element(source._method);
        }
        if (source["origin"] !== undefined) {
            this.origin = source.origin;
        }
        if (source["_origin"] !== undefined) {
            this._origin = new fhirModels.Element(source._origin);
        }
        if (source["params"] !== undefined) {
            this.params = source.params;
        }
        if (source["_params"] !== undefined) {
            this._params = new fhirModels.Element(source._params);
        }
        if (source["requestHeader"] !== undefined) {
            this.requestHeader = source.requestHeader.map((x) => new fhirModels.TestScriptSetupActionOperationRequestHeader(x));
        }
        if (source["requestId"] !== undefined) {
            this.requestId = source.requestId;
        }
        if (source["_requestId"] !== undefined) {
            this._requestId = new fhirModels.Element(source._requestId);
        }
        if (source["resource"] !== undefined) {
            this.resource = source.resource;
        }
        if (source["_resource"] !== undefined) {
            this._resource = new fhirModels.Element(source._resource);
        }
        if (source["responseId"] !== undefined) {
            this.responseId = source.responseId;
        }
        if (source["_responseId"] !== undefined) {
            this._responseId = new fhirModels.Element(source._responseId);
        }
        if (source["sourceId"] !== undefined) {
            this.sourceId = source.sourceId;
        }
        if (source["_sourceId"] !== undefined) {
            this._sourceId = new fhirModels.Element(source._sourceId);
        }
        if (source["targetId"] !== undefined) {
            this.targetId = source.targetId;
        }
        if (source["_targetId"] !== undefined) {
            this._targetId = new fhirModels.Element(source._targetId);
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.Coding(source.type);
        }
        if (source["url"] !== undefined) {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
    }
}
exports.TestScriptSetupActionOperation = TestScriptSetupActionOperation;
/**
 * Code Values for the TestScript.setup.action.operation.method field
 */
var TestScriptSetupActionOperationMethodEnum;
(function (TestScriptSetupActionOperationMethodEnum) {
    TestScriptSetupActionOperationMethodEnum["DELETE"] = "delete";
    TestScriptSetupActionOperationMethodEnum["GET"] = "get";
    TestScriptSetupActionOperationMethodEnum["OPTIONS"] = "options";
    TestScriptSetupActionOperationMethodEnum["PATCH"] = "patch";
    TestScriptSetupActionOperationMethodEnum["POST"] = "post";
    TestScriptSetupActionOperationMethodEnum["PUT"] = "put";
    TestScriptSetupActionOperationMethodEnum["HEAD"] = "head";
})(TestScriptSetupActionOperationMethodEnum = exports.TestScriptSetupActionOperationMethodEnum || (exports.TestScriptSetupActionOperationMethodEnum = {}));
/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
class TestScriptSetupActionAssert extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptSetupActionAssert from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["compareToSourceExpression"] !== undefined) {
            this.compareToSourceExpression = source.compareToSourceExpression;
        }
        if (source["_compareToSourceExpression"] !== undefined) {
            this._compareToSourceExpression = new fhirModels.Element(source._compareToSourceExpression);
        }
        if (source["compareToSourceId"] !== undefined) {
            this.compareToSourceId = source.compareToSourceId;
        }
        if (source["_compareToSourceId"] !== undefined) {
            this._compareToSourceId = new fhirModels.Element(source._compareToSourceId);
        }
        if (source["compareToSourcePath"] !== undefined) {
            this.compareToSourcePath = source.compareToSourcePath;
        }
        if (source["_compareToSourcePath"] !== undefined) {
            this._compareToSourcePath = new fhirModels.Element(source._compareToSourcePath);
        }
        if (source["contentType"] !== undefined) {
            this.contentType = source.contentType;
        }
        if (source["_contentType"] !== undefined) {
            this._contentType = new fhirModels.Element(source._contentType);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["direction"] !== undefined) {
            this.direction = source.direction;
        }
        if (source["_direction"] !== undefined) {
            this._direction = new fhirModels.Element(source._direction);
        }
        if (source["expression"] !== undefined) {
            this.expression = source.expression;
        }
        if (source["_expression"] !== undefined) {
            this._expression = new fhirModels.Element(source._expression);
        }
        if (source["headerField"] !== undefined) {
            this.headerField = source.headerField;
        }
        if (source["_headerField"] !== undefined) {
            this._headerField = new fhirModels.Element(source._headerField);
        }
        if (source["label"] !== undefined) {
            this.label = source.label;
        }
        if (source["_label"] !== undefined) {
            this._label = new fhirModels.Element(source._label);
        }
        if (source["minimumId"] !== undefined) {
            this.minimumId = source.minimumId;
        }
        if (source["_minimumId"] !== undefined) {
            this._minimumId = new fhirModels.Element(source._minimumId);
        }
        if (source["navigationLinks"] !== undefined) {
            this.navigationLinks = source.navigationLinks;
        }
        if (source["_navigationLinks"] !== undefined) {
            this._navigationLinks = new fhirModels.Element(source._navigationLinks);
        }
        if (source["operator"] !== undefined) {
            this.operator = source.operator;
        }
        if (source["_operator"] !== undefined) {
            this._operator = new fhirModels.Element(source._operator);
        }
        if (source["path"] !== undefined) {
            this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            this._path = new fhirModels.Element(source._path);
        }
        if (source["requestMethod"] !== undefined) {
            this.requestMethod = source.requestMethod;
        }
        if (source["_requestMethod"] !== undefined) {
            this._requestMethod = new fhirModels.Element(source._requestMethod);
        }
        if (source["requestURL"] !== undefined) {
            this.requestURL = source.requestURL;
        }
        if (source["_requestURL"] !== undefined) {
            this._requestURL = new fhirModels.Element(source._requestURL);
        }
        if (source["resource"] !== undefined) {
            this.resource = source.resource;
        }
        if (source["_resource"] !== undefined) {
            this._resource = new fhirModels.Element(source._resource);
        }
        if (source["response"] !== undefined) {
            this.response = source.response;
        }
        if (source["_response"] !== undefined) {
            this._response = new fhirModels.Element(source._response);
        }
        if (source["responseCode"] !== undefined) {
            this.responseCode = source.responseCode;
        }
        if (source["_responseCode"] !== undefined) {
            this._responseCode = new fhirModels.Element(source._responseCode);
        }
        if (source["sourceId"] !== undefined) {
            this.sourceId = source.sourceId;
        }
        if (source["_sourceId"] !== undefined) {
            this._sourceId = new fhirModels.Element(source._sourceId);
        }
        if (source["validateProfileId"] !== undefined) {
            this.validateProfileId = source.validateProfileId;
        }
        if (source["_validateProfileId"] !== undefined) {
            this._validateProfileId = new fhirModels.Element(source._validateProfileId);
        }
        if (source["value"] !== undefined) {
            this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            this._value = new fhirModels.Element(source._value);
        }
        {
            this.warningOnly = source.warningOnly;
        }
        if (source["_warningOnly"] !== undefined) {
            this._warningOnly = new fhirModels.Element(source._warningOnly);
        }
    }
}
exports.TestScriptSetupActionAssert = TestScriptSetupActionAssert;
/**
 * Code Values for the TestScript.setup.action.assert.direction field
 */
var TestScriptSetupActionAssertDirectionEnum;
(function (TestScriptSetupActionAssertDirectionEnum) {
    TestScriptSetupActionAssertDirectionEnum["RESPONSE"] = "response";
    TestScriptSetupActionAssertDirectionEnum["REQUEST"] = "request";
})(TestScriptSetupActionAssertDirectionEnum = exports.TestScriptSetupActionAssertDirectionEnum || (exports.TestScriptSetupActionAssertDirectionEnum = {}));
/**
 * Code Values for the TestScript.setup.action.assert.operator field
 */
var TestScriptSetupActionAssertOperatorEnum;
(function (TestScriptSetupActionAssertOperatorEnum) {
    TestScriptSetupActionAssertOperatorEnum["EQUALS"] = "equals";
    TestScriptSetupActionAssertOperatorEnum["NOTEQUALS"] = "notEquals";
    TestScriptSetupActionAssertOperatorEnum["IN"] = "in";
    TestScriptSetupActionAssertOperatorEnum["NOTIN"] = "notIn";
    TestScriptSetupActionAssertOperatorEnum["GREATERTHAN"] = "greaterThan";
    TestScriptSetupActionAssertOperatorEnum["LESSTHAN"] = "lessThan";
    TestScriptSetupActionAssertOperatorEnum["EMPTY"] = "empty";
    TestScriptSetupActionAssertOperatorEnum["NOTEMPTY"] = "notEmpty";
    TestScriptSetupActionAssertOperatorEnum["CONTAINS"] = "contains";
    TestScriptSetupActionAssertOperatorEnum["NOTCONTAINS"] = "notContains";
    TestScriptSetupActionAssertOperatorEnum["EVAL"] = "eval";
})(TestScriptSetupActionAssertOperatorEnum = exports.TestScriptSetupActionAssertOperatorEnum || (exports.TestScriptSetupActionAssertOperatorEnum = {}));
/**
 * Code Values for the TestScript.setup.action.assert.requestMethod field
 */
var TestScriptSetupActionAssertRequestMethodEnum;
(function (TestScriptSetupActionAssertRequestMethodEnum) {
    TestScriptSetupActionAssertRequestMethodEnum["DELETE"] = "delete";
    TestScriptSetupActionAssertRequestMethodEnum["GET"] = "get";
    TestScriptSetupActionAssertRequestMethodEnum["OPTIONS"] = "options";
    TestScriptSetupActionAssertRequestMethodEnum["PATCH"] = "patch";
    TestScriptSetupActionAssertRequestMethodEnum["POST"] = "post";
    TestScriptSetupActionAssertRequestMethodEnum["PUT"] = "put";
    TestScriptSetupActionAssertRequestMethodEnum["HEAD"] = "head";
})(TestScriptSetupActionAssertRequestMethodEnum = exports.TestScriptSetupActionAssertRequestMethodEnum || (exports.TestScriptSetupActionAssertRequestMethodEnum = {}));
/**
 * Code Values for the TestScript.setup.action.assert.response field
 */
var TestScriptSetupActionAssertResponseEnum;
(function (TestScriptSetupActionAssertResponseEnum) {
    TestScriptSetupActionAssertResponseEnum["OKAY"] = "okay";
    TestScriptSetupActionAssertResponseEnum["CREATED"] = "created";
    TestScriptSetupActionAssertResponseEnum["NOCONTENT"] = "noContent";
    TestScriptSetupActionAssertResponseEnum["NOTMODIFIED"] = "notModified";
    TestScriptSetupActionAssertResponseEnum["BAD"] = "bad";
    TestScriptSetupActionAssertResponseEnum["FORBIDDEN"] = "forbidden";
    TestScriptSetupActionAssertResponseEnum["NOTFOUND"] = "notFound";
    TestScriptSetupActionAssertResponseEnum["METHODNOTALLOWED"] = "methodNotAllowed";
    TestScriptSetupActionAssertResponseEnum["CONFLICT"] = "conflict";
    TestScriptSetupActionAssertResponseEnum["GONE"] = "gone";
    TestScriptSetupActionAssertResponseEnum["PRECONDITIONFAILED"] = "preconditionFailed";
    TestScriptSetupActionAssertResponseEnum["UNPROCESSABLE"] = "unprocessable";
})(TestScriptSetupActionAssertResponseEnum = exports.TestScriptSetupActionAssertResponseEnum || (exports.TestScriptSetupActionAssertResponseEnum = {}));
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
class TestScriptSetupAction extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptSetupAction from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["assert"] !== undefined) {
            this.assert = new fhirModels.TestScriptSetupActionAssert(source.assert);
        }
        if (source["operation"] !== undefined) {
            this.operation = new fhirModels.TestScriptSetupActionOperation(source.operation);
        }
    }
}
exports.TestScriptSetupAction = TestScriptSetupAction;
/**
 * A series of required setup operations before tests are executed.
 */
class TestScriptSetup extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptSetup from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.action = source.action.map((x) => new fhirModels.TestScriptSetupAction(x));
        }
    }
}
exports.TestScriptSetup = TestScriptSetup;
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
class TestScriptTestAction extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptTestAction from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["assert"] !== undefined) {
            this.assert = new fhirModels.TestScriptSetupActionAssert(source.assert);
        }
        if (source["operation"] !== undefined) {
            this.operation = new fhirModels.TestScriptSetupActionOperation(source.operation);
        }
    }
}
exports.TestScriptTestAction = TestScriptTestAction;
/**
 * A test in this script.
 */
class TestScriptTest extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptTest from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.action = source.action.map((x) => new fhirModels.TestScriptTestAction(x));
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
    }
}
exports.TestScriptTest = TestScriptTest;
/**
 * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 */
class TestScriptTeardownAction extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptTeardownAction from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.operation = new fhirModels.TestScriptSetupActionOperation(source.operation);
        }
    }
}
exports.TestScriptTeardownAction = TestScriptTeardownAction;
/**
 * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 */
class TestScriptTeardown extends fhirModels.BackboneElement {
    /**
     * Default constructor for TestScriptTeardown from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        {
            this.action = source.action.map((x) => new fhirModels.TestScriptTeardownAction(x));
        }
    }
}
exports.TestScriptTeardown = TestScriptTeardown;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScript extends fhirModels.DomainResource {
    /**
     * Default constructor for TestScript from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "TestScript";
        if ((source['resourceType'] !== "TestScript") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a TestScript';
        }
        if (source["contact"] !== undefined) {
            this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["copyright"] !== undefined) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"] !== undefined) {
            this._copyright = new fhirModels.Element(source._copyright);
        }
        if (source["date"] !== undefined) {
            this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            this._date = new fhirModels.Element(source._date);
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["destination"] !== undefined) {
            this.destination = source.destination.map((x) => new fhirModels.TestScriptDestination(x));
        }
        if (source["experimental"] !== undefined) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["fixture"] !== undefined) {
            this.fixture = source.fixture.map((x) => new fhirModels.TestScriptFixture(x));
        }
        if (source["identifier"] !== undefined) {
            this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["jurisdiction"] !== undefined) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["metadata"] !== undefined) {
            this.metadata = new fhirModels.TestScriptMetadata(source.metadata);
        }
        {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["origin"] !== undefined) {
            this.origin = source.origin.map((x) => new fhirModels.TestScriptOrigin(x));
        }
        if (source["profile"] !== undefined) {
            this.profile = source.profile.map((x) => new fhirModels.Reference(x));
        }
        if (source["publisher"] !== undefined) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["setup"] !== undefined) {
            this.setup = new fhirModels.TestScriptSetup(source.setup);
        }
        {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["teardown"] !== undefined) {
            this.teardown = new fhirModels.TestScriptTeardown(source.teardown);
        }
        if (source["test"] !== undefined) {
            this.test = source.test.map((x) => new fhirModels.TestScriptTest(x));
        }
        if (source["title"] !== undefined) {
            this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            this._title = new fhirModels.Element(source._title);
        }
        {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
        if (source["useContext"] !== undefined) {
            this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x));
        }
        if (source["variable"] !== undefined) {
            this.variable = source.variable.map((x) => new fhirModels.TestScriptVariable(x));
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
}
exports.TestScript = TestScript;
/**
 * Code Values for the TestScript.status field
 */
var TestScriptStatusEnum;
(function (TestScriptStatusEnum) {
    TestScriptStatusEnum["DRAFT"] = "draft";
    TestScriptStatusEnum["ACTIVE"] = "active";
    TestScriptStatusEnum["RETIRED"] = "retired";
    TestScriptStatusEnum["UNKNOWN"] = "unknown";
})(TestScriptStatusEnum = exports.TestScriptStatusEnum || (exports.TestScriptStatusEnum = {}));
//# sourceMappingURL=TestScript.js.map