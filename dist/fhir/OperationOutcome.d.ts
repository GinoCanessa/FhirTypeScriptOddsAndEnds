import * as fhir from '../fhir.js';
import { IssueSeverityValueSetType } from '../fhirValueSets/IssueSeverityValueSet.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetType } from '../fhirValueSets/IssueTypeValueSet.js';
import { OperationOutcomeValueSetType } from '../fhirValueSets/OperationOutcomeValueSet.js';
/**
 * Valid arguments for the OperationOutcomeIssue type.
 */
export interface OperationOutcomeIssueArgs extends fhir.BackboneElementArgs {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: IssueSeverityValueSetEnum | null;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConceptArgs | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: fhir.FhirString | string | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: fhir.FhirString[] | string[] | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: fhir.FhirString[] | string[] | undefined;
}
/**
 * An error, warning, or information message that results from a system action.
 */
export declare class OperationOutcomeIssue extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: IssueSeverityValueSetEnum | null;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: fhir.FhirCode | null;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: fhir.FhirString | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: fhir.FhirString[] | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: fhir.FhirString[] | undefined;
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for severity
     */
    static severityRequiredValueSet(): IssueSeverityValueSetType;
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet(): IssueTypeValueSetType;
    /**
     * Example-bound Value Set for details
     */
    static detailsExampleValueSet(): OperationOutcomeValueSetType;
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
 * Valid arguments for the OperationOutcome type.
 */
export interface OperationOutcomeArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome" | undefined;
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssueArgs[] | null;
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare class OperationOutcome extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssue[] | null;
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=OperationOutcome.d.ts.map