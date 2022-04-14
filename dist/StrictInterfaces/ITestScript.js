"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScriptStatusEnum = exports.TestScriptSetupActionAssertResponseEnum = exports.TestScriptSetupActionAssertRequestMethodEnum = exports.TestScriptSetupActionAssertOperatorEnum = exports.TestScriptSetupActionAssertDirectionEnum = exports.TestScriptSetupActionOperationMethodEnum = void 0;
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
 * Code Values for the TestScript.status field
 */
var TestScriptStatusEnum;
(function (TestScriptStatusEnum) {
    TestScriptStatusEnum["DRAFT"] = "draft";
    TestScriptStatusEnum["ACTIVE"] = "active";
    TestScriptStatusEnum["RETIRED"] = "retired";
    TestScriptStatusEnum["UNKNOWN"] = "unknown";
})(TestScriptStatusEnum = exports.TestScriptStatusEnum || (exports.TestScriptStatusEnum = {}));
//# sourceMappingURL=ITestScript.js.map