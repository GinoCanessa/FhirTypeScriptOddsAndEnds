import * as fhir from '../fhir.js';
import { NarrativeStatusValueSetType } from '../fhirValueSets/NarrativeStatusValueSet.js';
import { NarrativeStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Narrative type.
 */
export interface NarrativeArgs extends fhir.FhirElementArgs {
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusValueSetEnum | null;
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: fhir.FhirXhtml | string | undefined;
}
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export declare class Narrative extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusValueSetEnum | null;
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: fhir.FhirXhtml | null;
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NarrativeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): NarrativeStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Narrative.d.ts.map