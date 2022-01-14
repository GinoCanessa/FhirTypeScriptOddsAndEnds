// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhirModels.Element {
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  div: string;
  _div?: fhirModels.Element;
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status: NarrativeStatusEnum;
  _status?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: Narrative) {
    super(source);
    if (source["div"] === undefined) { throw 'Missing required element div';}
    this.div = source.div;
    if (source["_div"] !== undefined) { this._div = source._div; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
  }
}
/**
 * Code Values for the Narrative.status field
 */
export enum NarrativeStatusEnum {
  GENERATED = "generated",
  EXTENSIONS = "extensions",
  ADDITIONAL = "additional",
  EMPTY = "empty",
}
