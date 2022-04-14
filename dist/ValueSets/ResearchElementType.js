"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchElementType = void 0;
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
exports.ResearchElementType = {
    /**
     * The element defines an exposure within the population that is being researched.
     */
    research_element_type_Exposure: {
        code: "exposure",
        display: "Exposure",
        system: "http://hl7.org/fhir/research-element-type"
    },
    /**
     * The element defines an outcome within the population that is being researched.
     */
    research_element_type_Outcome: {
        code: "outcome",
        display: "Outcome",
        system: "http://hl7.org/fhir/research-element-type"
    },
    /**
     * The element defines the population that forms the basis for research.
     */
    research_element_type_Population: {
        code: "population",
        display: "Population",
        system: "http://hl7.org/fhir/research-element-type"
    },
};
//# sourceMappingURL=ResearchElementType.js.map