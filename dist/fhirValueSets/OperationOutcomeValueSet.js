// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operation-outcome|4.0.1
import { Coding } from '../fhir.js';
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export const OperationOutcomeValueSet = {
    /**
     * Code: DELETE_MULTIPLE_MATCHES
     */
    DELETEMULTIPLEMATCHES: new Coding({
        display: "Error: Multiple matches exist for the conditional delete",
        code: "DELETE_MULTIPLE_MATCHES",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_AUTH_REQUIRED
     */
    MSGAUTHREQUIRED: new Coding({
        display: "You must authenticate before you can use this service",
        code: "MSG_AUTH_REQUIRED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_BAD_FORMAT
     */
    MSGBADFORMAT: new Coding({
        display: "Bad Syntax: \"%s\" must be a %s'",
        code: "MSG_BAD_FORMAT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_BAD_SYNTAX
     */
    MSGBADSYNTAX: new Coding({
        display: "Bad Syntax in %s",
        code: "MSG_BAD_SYNTAX",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_CANT_PARSE_CONTENT
     */
    MSGCANTPARSECONTENT: new Coding({
        display: "Unable to parse feed (entry content type = \"%s\")",
        code: "MSG_CANT_PARSE_CONTENT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_CANT_PARSE_ROOT
     */
    MSGCANTPARSEROOT: new Coding({
        display: "Unable to parse feed (root element name = \"%s\")",
        code: "MSG_CANT_PARSE_ROOT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_CREATED
     */
    MSGCREATED: new Coding({
        display: "New resource created",
        code: "MSG_CREATED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_DATE_FORMAT
     */
    MSGDATEFORMAT: new Coding({
        display: "The Date value %s is not in the correct format (Xml Date Format required)",
        code: "MSG_DATE_FORMAT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_DELETED
     */
    MSGDELETED: new Coding({
        display: "This resource has been deleted",
        code: "MSG_DELETED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_DELETED_DONE
     */
    MSGDELETEDDONE: new Coding({
        display: "Resource deleted",
        code: "MSG_DELETED_DONE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_DELETED_ID
     */
    MSGDELETEDID: new Coding({
        display: "The resource \"%s\" has been deleted",
        code: "MSG_DELETED_ID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_DUPLICATE_ID
     */
    MSGDUPLICATEID: new Coding({
        display: "Duplicate Id %s for resource type %s",
        code: "MSG_DUPLICATE_ID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_ERROR_PARSING
     */
    MSGERRORPARSING: new Coding({
        display: "Error parsing resource Xml (%s)",
        code: "MSG_ERROR_PARSING",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_ID_INVALID
     */
    MSGIDINVALID: new Coding({
        display: "Id \"%s\" has an invalid character \"%s\"",
        code: "MSG_ID_INVALID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_ID_TOO_LONG
     */
    MSGIDTOOLONG: new Coding({
        display: "Id \"%s\" too long (length limit 36)",
        code: "MSG_ID_TOO_LONG",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_INVALID_ID
     */
    MSGINVALIDID: new Coding({
        display: "Id not accepted",
        code: "MSG_INVALID_ID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_JSON_OBJECT
     */
    MSGJSONOBJECT: new Coding({
        display: "Json Source for a resource should start with an object",
        code: "MSG_JSON_OBJECT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_LOCAL_FAIL
     */
    MSGLOCALFAIL: new Coding({
        display: "Unable to resolve local reference to resource %s",
        code: "MSG_LOCAL_FAIL",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_NO_EXIST
     */
    MSGNOEXIST: new Coding({
        display: "Resource Id \"%s\" does not exist",
        code: "MSG_NO_EXIST",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_NO_MATCH
     */
    MSGNOMATCH: new Coding({
        display: "No Resource found matching the query \"%s\"",
        code: "MSG_NO_MATCH",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_NO_MODULE
     */
    MSGNOMODULE: new Coding({
        display: "No module could be found to handle the request \"%s\"",
        code: "MSG_NO_MODULE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_NO_SUMMARY
     */
    MSGNOSUMMARY: new Coding({
        display: "No Summary for this resource",
        code: "MSG_NO_SUMMARY",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_OP_NOT_ALLOWED
     */
    MSGOPNOTALLOWED: new Coding({
        display: "Operation %s not allowed for resource %s (due to local configuration)",
        code: "MSG_OP_NOT_ALLOWED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_PARAM_CHAINED
     */
    MSGPARAMCHAINED: new Coding({
        display: "Unknown chained parameter name \"%s\"",
        code: "MSG_PARAM_CHAINED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_PARAM_INVALID
     */
    MSGPARAMINVALID: new Coding({
        display: "Parameter \"%s\" content is invalid",
        code: "MSG_PARAM_INVALID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_PARAM_MODIFIER_INVALID
     */
    MSGPARAMMODIFIERINVALID: new Coding({
        display: "Parameter \"%s\" modifier is invalid",
        code: "MSG_PARAM_MODIFIER_INVALID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_PARAM_NO_REPEAT
     */
    MSGPARAMNOREPEAT: new Coding({
        display: "Parameter \"%s\" is not allowed to repeat",
        code: "MSG_PARAM_NO_REPEAT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_PARAM_UNKNOWN
     */
    MSGPARAMUNKNOWN: new Coding({
        display: "Parameter \"%s\" not understood",
        code: "MSG_PARAM_UNKNOWN",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_EXAMPLE_PROTECTED
     */
    MSGRESOURCEEXAMPLEPROTECTED: new Coding({
        display: "Resources with identity \"example\" cannot be deleted (for testing/training purposes)",
        code: "MSG_RESOURCE_EXAMPLE_PROTECTED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_ID_FAIL
     */
    MSGRESOURCEIDFAIL: new Coding({
        display: "unable to allocate resource id",
        code: "MSG_RESOURCE_ID_FAIL",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_ID_MISMATCH
     */
    MSGRESOURCEIDMISMATCH: new Coding({
        display: "Resource Id Mismatch",
        code: "MSG_RESOURCE_ID_MISMATCH",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_ID_MISSING
     */
    MSGRESOURCEIDMISSING: new Coding({
        display: "Resource Id Missing",
        code: "MSG_RESOURCE_ID_MISSING",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_NOT_ALLOWED
     */
    MSGRESOURCENOTALLOWED: new Coding({
        display: "Not allowed to submit a resource for this operation",
        code: "MSG_RESOURCE_NOT_ALLOWED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_REQUIRED
     */
    MSGRESOURCEREQUIRED: new Coding({
        display: "A resource is required",
        code: "MSG_RESOURCE_REQUIRED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_RESOURCE_TYPE_MISMATCH
     */
    MSGRESOURCETYPEMISMATCH: new Coding({
        display: "Resource Type Mismatch",
        code: "MSG_RESOURCE_TYPE_MISMATCH",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_SORT_UNKNOWN
     */
    MSGSORTUNKNOWN: new Coding({
        display: "Unknown sort parameter name \"%s\"",
        code: "MSG_SORT_UNKNOWN",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_TRANSACTION_DUPLICATE_ID
     */
    MSGTRANSACTIONDUPLICATEID: new Coding({
        display: "Duplicate Identifier in transaction: %s",
        code: "MSG_TRANSACTION_DUPLICATE_ID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_TRANSACTION_MISSING_ID
     */
    MSGTRANSACTIONMISSINGID: new Coding({
        display: "Missing Identifier in transaction - an entry.id must be provided",
        code: "MSG_TRANSACTION_MISSING_ID",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_UNHANDLED_NODE_TYPE
     */
    MSGUNHANDLEDNODETYPE: new Coding({
        display: "Unhandled xml node type \"%s\"",
        code: "MSG_UNHANDLED_NODE_TYPE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_UNKNOWN_CONTENT
     */
    MSGUNKNOWNCONTENT: new Coding({
        display: "Unknown Content (%s) at %s",
        code: "MSG_UNKNOWN_CONTENT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_UNKNOWN_OPERATION
     */
    MSGUNKNOWNOPERATION: new Coding({
        display: "unknown FHIR http operation",
        code: "MSG_UNKNOWN_OPERATION",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_UNKNOWN_TYPE
     */
    MSGUNKNOWNTYPE: new Coding({
        display: "Resource Type \"%s\" not recognised",
        code: "MSG_UNKNOWN_TYPE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_UPDATED
     */
    MSGUPDATED: new Coding({
        display: "existing resource updated",
        code: "MSG_UPDATED",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_VERSION_AWARE
     */
    MSGVERSIONAWARE: new Coding({
        display: "Version aware updates are required for this resource",
        code: "MSG_VERSION_AWARE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_VERSION_AWARE_CONFLICT
     */
    MSGVERSIONAWARECONFLICT: new Coding({
        display: "Update Conflict (server current version = \"%s\", client version referenced = \"%s\")",
        code: "MSG_VERSION_AWARE_CONFLICT",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_VERSION_AWARE_URL
     */
    MSGVERSIONAWAREURL: new Coding({
        display: "Version specific URL not recognised",
        code: "MSG_VERSION_AWARE_URL",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: MSG_WRONG_NS
     */
    MSGWRONGNS: new Coding({
        display: "This does not appear to be a FHIR element or resource (wrong namespace \"%s\")",
        code: "MSG_WRONG_NS",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: SEARCH_MULTIPLE
     */
    SEARCHMULTIPLE: new Coding({
        display: "Error: Multiple matches exist for %s search parameters \"%s\"",
        code: "SEARCH_MULTIPLE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: SEARCH_NONE
     */
    SEARCHNONE: new Coding({
        display: "Error: no processable search found for %s search parameters \"%s\"",
        code: "SEARCH_NONE",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
    /**
     * Code: UPDATE_MULTIPLE_MATCHES
     */
    UPDATEMULTIPLEMATCHES: new Coding({
        display: "Error: Multiple matches exist for the conditional update",
        code: "UPDATE_MULTIPLE_MATCHES",
        system: "http://terminology.hl7.org/CodeSystem/operation-outcome",
    }),
};
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
//# sourceMappingURL=OperationOutcomeValueSet.js.map