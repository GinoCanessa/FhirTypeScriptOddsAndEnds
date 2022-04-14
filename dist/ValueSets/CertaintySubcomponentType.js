"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertaintySubcomponentType = void 0;
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
exports.CertaintySubcomponentType = {
    /**
     * higher certainty due to dose response relationship.
     */
    certainty_subcomponent_type_DoseResponseGradient: {
        code: "DoseResponseGradient",
        display: "Dose response gradient",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * High quality evidence.
     */
    certainty_subcomponent_type_Imprecision: {
        code: "Imprecision",
        display: "Imprecision",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * concerns that findings are not similar enough to support certainty.
     */
    certainty_subcomponent_type_Inconsistency: {
        code: "Inconsistency",
        display: "Inconsistency",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * concerns reducing external validity.
     */
    certainty_subcomponent_type_Indirectness: {
        code: "Indirectness",
        display: "Indirectness",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * higher certainty due to large effect size.
     */
    certainty_subcomponent_type_LargeEffect: {
        code: "LargeEffect",
        display: "Large effect",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * higher certainty due to risk of bias in opposite direction.
     */
    certainty_subcomponent_type_PlausibleConfounding: {
        code: "PlausibleConfounding",
        display: "Plausible confounding",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * likelihood that what is published misrepresents what is available to publish.
     */
    certainty_subcomponent_type_PublicationBias: {
        code: "PublicationBias",
        display: "Publication bias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
    /**
     * methodologic concerns reducing internal validity.
     */
    certainty_subcomponent_type_RiskOfBias: {
        code: "RiskOfBias",
        display: "Risk of bias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    },
};
//# sourceMappingURL=CertaintySubcomponentType.js.map