"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReportStatusEnum = exports.TestReportResultEnum = exports.TestReportSetupActionAssertResultEnum = exports.TestReportSetupActionOperationResultEnum = exports.TestReportParticipantTypeEnum = void 0;
/**
 * Code Values for the TestReport.participant.type field
 */
var TestReportParticipantTypeEnum;
(function (TestReportParticipantTypeEnum) {
    TestReportParticipantTypeEnum["TEST_ENGINE"] = "test-engine";
    TestReportParticipantTypeEnum["CLIENT"] = "client";
    TestReportParticipantTypeEnum["SERVER"] = "server";
})(TestReportParticipantTypeEnum = exports.TestReportParticipantTypeEnum || (exports.TestReportParticipantTypeEnum = {}));
/**
 * Code Values for the TestReport.setup.action.operation.result field
 */
var TestReportSetupActionOperationResultEnum;
(function (TestReportSetupActionOperationResultEnum) {
    TestReportSetupActionOperationResultEnum["PASS"] = "pass";
    TestReportSetupActionOperationResultEnum["SKIP"] = "skip";
    TestReportSetupActionOperationResultEnum["FAIL"] = "fail";
    TestReportSetupActionOperationResultEnum["WARNING"] = "warning";
    TestReportSetupActionOperationResultEnum["ERROR"] = "error";
})(TestReportSetupActionOperationResultEnum = exports.TestReportSetupActionOperationResultEnum || (exports.TestReportSetupActionOperationResultEnum = {}));
/**
 * Code Values for the TestReport.setup.action.assert.result field
 */
var TestReportSetupActionAssertResultEnum;
(function (TestReportSetupActionAssertResultEnum) {
    TestReportSetupActionAssertResultEnum["PASS"] = "pass";
    TestReportSetupActionAssertResultEnum["SKIP"] = "skip";
    TestReportSetupActionAssertResultEnum["FAIL"] = "fail";
    TestReportSetupActionAssertResultEnum["WARNING"] = "warning";
    TestReportSetupActionAssertResultEnum["ERROR"] = "error";
})(TestReportSetupActionAssertResultEnum = exports.TestReportSetupActionAssertResultEnum || (exports.TestReportSetupActionAssertResultEnum = {}));
/**
 * Code Values for the TestReport.result field
 */
var TestReportResultEnum;
(function (TestReportResultEnum) {
    TestReportResultEnum["PASS"] = "pass";
    TestReportResultEnum["FAIL"] = "fail";
    TestReportResultEnum["PENDING"] = "pending";
})(TestReportResultEnum = exports.TestReportResultEnum || (exports.TestReportResultEnum = {}));
/**
 * Code Values for the TestReport.status field
 */
var TestReportStatusEnum;
(function (TestReportStatusEnum) {
    TestReportStatusEnum["COMPLETED"] = "completed";
    TestReportStatusEnum["IN_PROGRESS"] = "in-progress";
    TestReportStatusEnum["WAITING"] = "waiting";
    TestReportStatusEnum["STOPPED"] = "stopped";
    TestReportStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(TestReportStatusEnum = exports.TestReportStatusEnum || (exports.TestReportStatusEnum = {}));
//# sourceMappingURL=ITestReport.js.map