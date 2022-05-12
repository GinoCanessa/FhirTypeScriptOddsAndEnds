import * as fhir from '../fhirJson.js';
/**
 * An error, warning, or information message that results from a system action.
 */
export interface OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: 'error' | 'fatal' | 'information' | 'warning' | null;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElement;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElement;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: (fhir.FhirElement | null)[];
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.expression
     */
    _expression?: (fhir.FhirElement | null)[];
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export interface OperationOutcome extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssue[] | null;
}
//# sourceMappingURL=OperationOutcome.d.ts.map