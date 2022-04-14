import * as fhirInterfaces from '../optionalinterfaces';
/**
 * An error, warning, or information message that results from a system action.
 */
export interface IOperationOutcomeIssue extends fhirInterfaces.IBackboneElement {
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    _diagnostics?: fhirInterfaces.IElement | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    _expression?: fhirInterfaces.IElement[] | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    _location?: fhirInterfaces.IElement[] | undefined;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity?: OperationOutcomeIssueSeverityEnum | undefined;
    _severity?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the OperationOutcome.issue.severity field
 */
export declare enum OperationOutcomeIssueSeverityEnum {
    FATAL = "fatal",
    ERROR = "error",
    WARNING = "warning",
    INFORMATION = "information"
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export interface IOperationOutcome extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue?: fhirInterfaces.IOperationOutcomeIssue[] | undefined;
}
//# sourceMappingURL=IOperationOutcome.d.ts.map