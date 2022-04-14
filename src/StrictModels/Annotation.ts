// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export class Annotation extends fhirModels.Element implements fhirInterfaces.IAnnotation {
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorReference?: fhirModels.Reference|undefined;
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  authorString?: string|undefined;
  _authorString?: fhirModels.Element|undefined;
  /**
   * The text of the annotation in markdown format.
   */
  text: string;
  _text?: fhirModels.Element|undefined;
  /**
   * Indicates when this particular annotation was made.
   */
  time?: string|undefined;
  _time?: fhirModels.Element|undefined;
  /**
   * Default constructor for Annotation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IAnnotation) {
    super(source);
    if (source["authorReference"] !== undefined) {
      this.authorReference = new fhirModels.Reference(source.authorReference);
    }
    if (source["authorString"] !== undefined) {
      this.authorString = source.authorString;
    }
    if (source["_authorString"] !== undefined) {
      this._authorString = new fhirModels.Element(source._authorString);
    }
    {
      this.text = source.text;
    }
    if (source["_text"] !== undefined) {
      this._text = new fhirModels.Element(source._text);
    }
    if (source["time"] !== undefined) {
      this.time = source.time;
    }
    if (source["_time"] !== undefined) {
      this._time = new fhirModels.Element(source._time);
    }
  }
}
