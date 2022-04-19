// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export const CertaintySubcomponentTypeValueSet = {
    /**
     * higher certainty due to dose response relationship.
     */
    certainty_subcomponent_type_DoseResponseGradient: Coding.FromStrict({
        code: "DoseResponseGradient",
        display: "Dose response gradient",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * High quality evidence.
     */
    certainty_subcomponent_type_Imprecision: Coding.FromStrict({
        code: "Imprecision",
        display: "Imprecision",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * concerns that findings are not similar enough to support certainty.
     */
    certainty_subcomponent_type_Inconsistency: Coding.FromStrict({
        code: "Inconsistency",
        display: "Inconsistency",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * concerns reducing external validity.
     */
    certainty_subcomponent_type_Indirectness: Coding.FromStrict({
        code: "Indirectness",
        display: "Indirectness",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * higher certainty due to large effect size.
     */
    certainty_subcomponent_type_LargeEffect: Coding.FromStrict({
        code: "LargeEffect",
        display: "Large effect",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * higher certainty due to risk of bias in opposite direction.
     */
    certainty_subcomponent_type_PlausibleConfounding: Coding.FromStrict({
        code: "PlausibleConfounding",
        display: "Plausible confounding",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * likelihood that what is published misrepresents what is available to publish.
     */
    certainty_subcomponent_type_PublicationBias: Coding.FromStrict({
        code: "PublicationBias",
        display: "Publication bias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
    /**
     * methodologic concerns reducing internal validity.
     */
    certainty_subcomponent_type_RiskOfBias: Coding.FromStrict({
        code: "RiskOfBias",
        display: "Risk of bias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type"
    }),
};
//# sourceMappingURL=CertaintySubcomponentTypeValueSet.js.map