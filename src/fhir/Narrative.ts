// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative

import * as fhir from '../fhir.js'

import { NarrativeStatusValueSet, NarrativeStatusValueSetType, NarrativeStatusValueSetEnum } from '../fhirValueSets/NarrativeStatusValueSet.js'

/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export type INarrative = fhir.IFhirElement & { 
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status: NarrativeStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Narrative.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  div: string|null;
  /**
   * Extended properties for primitive element: Narrative.div
   */
  _div?: fhir.IFhirElement|undefined;
}

/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement implements INarrative {
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  public status: NarrativeStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Narrative.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  public div: string|null;
  /**
   * Extended properties for primitive element: Narrative.div
   */
  public _div?: fhir.FhirElement|undefined;
  /**
   * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<INarrative> = { }) {
    super(source);
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['div']) { this.div = source.div; }
    else { this.div = null; }
    if (source['_div']) { this._div = new fhir.FhirElement(source._div!); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():NarrativeStatusValueSetType {
    return NarrativeStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["status"]) { results.push(["status",'Missing required element: Narrative.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (!this["div"]) { results.push(["div",'Missing required element: Narrative.div']); }
    if (this["_div"]) { results.push(...this._div.doModelValidation()); }
    return results;
  }
}
