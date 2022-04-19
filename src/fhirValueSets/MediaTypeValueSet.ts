// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes for high level media categories.
 */
export const MediaTypeValueSet = {
  /**
   * The media consists of a sound recording
   */
  media_type_Audio: new Coding({
    code: "audio",
    display: "Audio",
    system: "http://terminology.hl7.org/CodeSystem/media-type"
  }),
  /**
   * The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
   */
  media_type_Image: new Coding({
    code: "image",
    display: "Image",
    system: "http://terminology.hl7.org/CodeSystem/media-type"
  }),
  /**
   * The media consists of a series of frames that capture a moving image
   */
  media_type_Video: new Coding({
    code: "video",
    display: "Video",
    system: "http://terminology.hl7.org/CodeSystem/media-type"
  }),
};
