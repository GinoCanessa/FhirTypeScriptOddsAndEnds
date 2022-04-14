"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationOutcome = void 0;
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
exports.OperationOutcome = {
    operation_outcome_DELETEMULTIPLEMATCHES: {
        code: "DELETE_MULTIPLE_MATCHES",
        display: "Error: Multiple matches exist for the conditional delete",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGAUTHREQUIRED: {
        code: "MSG_AUTH_REQUIRED",
        display: "You must authenticate before you can use this service",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGBADFORMAT: {
        code: "MSG_BAD_FORMAT",
        display: "Bad Syntax: \"%s\" must be a %s'",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGBADSYNTAX: {
        code: "MSG_BAD_SYNTAX",
        display: "Bad Syntax in %s",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGCANTPARSECONTENT: {
        code: "MSG_CANT_PARSE_CONTENT",
        display: "Unable to parse feed (entry content type = \"%s\")",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGCANTPARSEROOT: {
        code: "MSG_CANT_PARSE_ROOT",
        display: "Unable to parse feed (root element name = \"%s\")",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGCREATED: {
        code: "MSG_CREATED",
        display: "New resource created",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGDATEFORMAT: {
        code: "MSG_DATE_FORMAT",
        display: "The Date value %s is not in the correct format (Xml Date Format required)",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGDELETED: {
        code: "MSG_DELETED",
        display: "This resource has been deleted",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGDELETEDDONE: {
        code: "MSG_DELETED_DONE",
        display: "Resource deleted",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGDELETEDID: {
        code: "MSG_DELETED_ID",
        display: "The resource \"%s\" has been deleted",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGDUPLICATEID: {
        code: "MSG_DUPLICATE_ID",
        display: "Duplicate Id %s for resource type %s",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGERRORPARSING: {
        code: "MSG_ERROR_PARSING",
        display: "Error parsing resource Xml (%s)",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGIDINVALID: {
        code: "MSG_ID_INVALID",
        display: "Id \"%s\" has an invalid character \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGIDTOOLONG: {
        code: "MSG_ID_TOO_LONG",
        display: "Id \"%s\" too long (length limit 36)",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGINVALIDID: {
        code: "MSG_INVALID_ID",
        display: "Id not accepted",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGJSONOBJECT: {
        code: "MSG_JSON_OBJECT",
        display: "Json Source for a resource should start with an object",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGLOCALFAIL: {
        code: "MSG_LOCAL_FAIL",
        display: "Unable to resolve local reference to resource %s",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGNOEXIST: {
        code: "MSG_NO_EXIST",
        display: "Resource Id \"%s\" does not exist",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGNOMATCH: {
        code: "MSG_NO_MATCH",
        display: "No Resource found matching the query \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGNOMODULE: {
        code: "MSG_NO_MODULE",
        display: "No module could be found to handle the request \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGNOSUMMARY: {
        code: "MSG_NO_SUMMARY",
        display: "No Summary for this resource",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGOPNOTALLOWED: {
        code: "MSG_OP_NOT_ALLOWED",
        display: "Operation %s not allowed for resource %s (due to local configuration)",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGPARAMCHAINED: {
        code: "MSG_PARAM_CHAINED",
        display: "Unknown chained parameter name \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGPARAMINVALID: {
        code: "MSG_PARAM_INVALID",
        display: "Parameter \"%s\" content is invalid",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGPARAMMODIFIERINVALID: {
        code: "MSG_PARAM_MODIFIER_INVALID",
        display: "Parameter \"%s\" modifier is invalid",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGPARAMNOREPEAT: {
        code: "MSG_PARAM_NO_REPEAT",
        display: "Parameter \"%s\" is not allowed to repeat",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGPARAMUNKNOWN: {
        code: "MSG_PARAM_UNKNOWN",
        display: "Parameter \"%s\" not understood",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCEEXAMPLEPROTECTED: {
        code: "MSG_RESOURCE_EXAMPLE_PROTECTED",
        display: "Resources with identity \"example\" cannot be deleted (for testing/training purposes)",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCEIDFAIL: {
        code: "MSG_RESOURCE_ID_FAIL",
        display: "unable to allocate resource id",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCEIDMISMATCH: {
        code: "MSG_RESOURCE_ID_MISMATCH",
        display: "Resource Id Mismatch",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCEIDMISSING: {
        code: "MSG_RESOURCE_ID_MISSING",
        display: "Resource Id Missing",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCENOTALLOWED: {
        code: "MSG_RESOURCE_NOT_ALLOWED",
        display: "Not allowed to submit a resource for this operation",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCEREQUIRED: {
        code: "MSG_RESOURCE_REQUIRED",
        display: "A resource is required",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGRESOURCETYPEMISMATCH: {
        code: "MSG_RESOURCE_TYPE_MISMATCH",
        display: "Resource Type Mismatch",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGSORTUNKNOWN: {
        code: "MSG_SORT_UNKNOWN",
        display: "Unknown sort parameter name \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGTRANSACTIONDUPLICATEID: {
        code: "MSG_TRANSACTION_DUPLICATE_ID",
        display: "Duplicate Identifier in transaction: %s",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGTRANSACTIONMISSINGID: {
        code: "MSG_TRANSACTION_MISSING_ID",
        display: "Missing Identifier in transaction - an entry.id must be provided",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGUNHANDLEDNODETYPE: {
        code: "MSG_UNHANDLED_NODE_TYPE",
        display: "Unhandled xml node type \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGUNKNOWNCONTENT: {
        code: "MSG_UNKNOWN_CONTENT",
        display: "Unknown Content (%s) at %s",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGUNKNOWNOPERATION: {
        code: "MSG_UNKNOWN_OPERATION",
        display: "unknown FHIR http operation",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGUNKNOWNTYPE: {
        code: "MSG_UNKNOWN_TYPE",
        display: "Resource Type \"%s\" not recognised",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGUPDATED: {
        code: "MSG_UPDATED",
        display: "existing resource updated",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGVERSIONAWARE: {
        code: "MSG_VERSION_AWARE",
        display: "Version aware updates are required for this resource",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGVERSIONAWARECONFLICT: {
        code: "MSG_VERSION_AWARE_CONFLICT",
        display: "Update Conflict (server current version = \"%s\", client version referenced = \"%s\")",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGVERSIONAWAREURL: {
        code: "MSG_VERSION_AWARE_URL",
        display: "Version specific URL not recognised",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_MSGWRONGNS: {
        code: "MSG_WRONG_NS",
        display: "This does not appear to be a FHIR element or resource (wrong namespace \"%s\")",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_SEARCHMULTIPLE: {
        code: "SEARCH_MULTIPLE",
        display: "Error: Multiple matches exist for %s search parameters \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_SEARCHNONE: {
        code: "SEARCH_NONE",
        display: "Error: no processable search found for %s search parameters \"%s\"",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
    operation_outcome_UPDATEMULTIPLEMATCHES: {
        code: "UPDATE_MULTIPLE_MATCHES",
        display: "Error: Multiple matches exist for the conditional update",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome"
    },
};
//# sourceMappingURL=OperationOutcome.js.map