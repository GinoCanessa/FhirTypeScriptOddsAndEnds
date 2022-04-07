import { Coding } from '../strictmodels';
/**
 * Code of parameter that is input to the guide.
 */
export declare const GuideParameterCode: {
    /**
     * If the value of this string 0..* parameter is one of the metadata fields then all conformance resources will have any specified [Resource].[field] overwritten with the ImplementationGuide.[field], where field is one of: version, date, status, publisher, contact, copyright, experimental, jurisdiction, useContext.
     */
    guide_parameter_code_ApplyMetadataValue: Coding;
    /**
     * The value of this string 0..* parameter is a parameter (name=value) when expanding value sets for this implementation guide. This is particularly used to specify the versions of published terminologies such as SNOMED CT.
     */
    guide_parameter_code_ExpansionProfile: Coding;
    /**
     * The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in JSON format. If not present, the Publication Tool decides whether to generate JSON.
     */
    guide_parameter_code_GenerateJSON: Coding;
    /**
     * The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in Turtle format. If not present, the Publication Tool decides whether to generate Turtle.
     */
    guide_parameter_code_GenerateTurtle: Coding;
    /**
     * The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in XML format. If not present, the Publication Tool decides whether to generate XML.
     */
    guide_parameter_code_GenerateXML: Coding;
    /**
     * The value of this string singleton parameter is the name of the file to use as the builder template for each generated page (see templating).
     */
    guide_parameter_code_HTMLTemplate: Coding;
    /**
     * The value of this string 0..1 parameter is a subfolder of the build context's location that contains files that are part of the html content processed by the builder.
     */
    guide_parameter_code_PagesPath: Coding;
    /**
     * The value of this string 0..* parameter is a subfolder of the build context's location that is to be scanned to load resources. Scope is (if present) a particular resource type.
     */
    guide_parameter_code_ResourcePath: Coding;
    /**
     * The value of this string 0..1 parameter is a subfolder of the build context's location that is used as the terminology cache. If this is not present, the terminology cache is on the local system, not under version control.
     */
    guide_parameter_code_TerminologyCachePath: Coding;
    /**
     * The value of this string 0..1 parameter is either "warning" or "error" (default = "error"). If the value is "warning" then IG build tools allow the IG to be considered successfully build even when there is no internal broken links.
     */
    guide_parameter_code_BrokenLinksRule: Coding;
};
//# sourceMappingURL=GuideParameterCode.d.ts.map