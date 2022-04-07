/**
 * A code that indicates how the page is generated.
 */
export var GuidePageGeneration = {
    /**
     * Page will be generated by the publication process - no source to bring across.
     */
    guide_page_generation_Generated: {
        code: "generated",
        display: "Generated",
        system: "http://hl7.org/fhir/guide-page-generation"
    },
    /**
     * Page is proper xhtml with no templating.  Will be brought across unchanged for standard post-processing.
     */
    guide_page_generation_HTML: {
        code: "html",
        display: "HTML",
        system: "http://hl7.org/fhir/guide-page-generation"
    },
    /**
     * Page is markdown with templating.  Will use the template to create a file that imports the markdown file prior to post-processing.
     */
    guide_page_generation_Markdown: {
        code: "markdown",
        display: "Markdown",
        system: "http://hl7.org/fhir/guide-page-generation"
    },
    /**
     * Page is xml with templating.  Will use the template to create a file that imports the source file and run the nominated XSLT transform (see parameters) if present prior to post-processing.
     */
    guide_page_generation_XML: {
        code: "xml",
        display: "XML",
        system: "http://hl7.org/fhir/guide-page-generation"
    }
};