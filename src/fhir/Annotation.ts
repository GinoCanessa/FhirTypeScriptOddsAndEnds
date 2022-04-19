// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export type IAnnotation = fhir.IFhirElement & {
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorReference?: fhir.IReference|undefined;
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorString?: string|undefined;
  _authorString?: fhir.IFhirElement|undefined;
  /**
   * The text of the annotation in markdown format.
   */
  text: string|null;
  _text?: fhir.IFhirElement|undefined;
  /**
   * Indicates when this particular annotation was made.
   */
  time?: string|undefined;
  _time?: fhir.IFhirElement|undefined;
}
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export class Annotation extends fhir.FhirElement implements fhir.IAnnotation {
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  public authorReference?: fhir.Reference|undefined;
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  public authorString?: string|undefined;
  public _authorString?: fhir.FhirElement|undefined;
  /**
   * The text of the annotation in markdown format.
   */
  public text: string|null;
  public _text?: fhir.FhirElement|undefined;
  /**
   * Indicates when this particular annotation was made.
   */
  public time?: string|undefined;
  public _time?: fhir.FhirElement|undefined;
  /**
   * Default constructor for Annotation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IAnnotation> = {}) {
    super(source);
    if (source["authorReference"]) { this.authorReference = new fhir.Reference(source.authorReference!); }
    if (source["authorString"]) { this.authorString = source.authorString; }
    if (source["_authorString"]) { this._authorString = new fhir.FhirElement(source._authorString!); }
    this.text = null;
    if (source["text"]) { this.text = source.text; }
    if (this.text === undefined) { this.text = null }
    if (source["_text"]) { this._text = new fhir.FhirElement(source._text!); }
    if (source["time"]) { this.time = source.time; }
    if (source["_time"]) { this._time = new fhir.FhirElement(source._time!); }
  }
  /**
   * Check if the current Annotation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["text"] === undefined) { missingElements.push("text"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Annotation from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IAnnotation):Annotation {
    var dest:Annotation = new Annotation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `Annotation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
