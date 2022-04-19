// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * A code that indicates how the page is generated.
 */
export const GuidePageGenerationValueSet = {
  /**
   * Page will be generated by the publication process - no source to bring across.
   */
  guide_page_generation_Generated: new Coding({
    code: "generated",
    display: "Generated",
    system: "http://hl7.org/fhir/guide-page-generation"
  }),
  /**
   * Page is proper xhtml with no templating.  Will be brought across unchanged for standard post-processing.
   */
  guide_page_generation_HTML: new Coding({
    code: "html",
    display: "HTML",
    system: "http://hl7.org/fhir/guide-page-generation"
  }),
  /**
   * Page is markdown with templating.  Will use the template to create a file that imports the markdown file prior to post-processing.
   */
  guide_page_generation_Markdown: new Coding({
    code: "markdown",
    display: "Markdown",
    system: "http://hl7.org/fhir/guide-page-generation"
  }),
  /**
   * Page is xml with templating.  Will use the template to create a file that imports the source file and run the nominated XSLT transform (see parameters) if present prior to post-processing.
   */
  guide_page_generation_XML: new Coding({
    code: "xml",
    display: "XML",
    system: "http://hl7.org/fhir/guide-page-generation"
  }),
};
