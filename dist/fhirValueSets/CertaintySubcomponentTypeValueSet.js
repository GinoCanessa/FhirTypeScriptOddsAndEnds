// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/certainty-subcomponent-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export const CertaintySubcomponentTypeValueSet = {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    DoseResponseGradient: new Coding({
        display: "Dose response gradient",
        code: "DoseResponseGradient",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * Imprecision: High quality evidence.
     */
    Imprecision: new Coding({
        display: "Imprecision",
        code: "Imprecision",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    Inconsistency: new Coding({
        display: "Inconsistency",
        code: "Inconsistency",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * Indirectness: concerns reducing external validity.
     */
    Indirectness: new Coding({
        display: "Indirectness",
        code: "Indirectness",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    LargeEffect: new Coding({
        display: "Large effect",
        code: "LargeEffect",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    PlausibleConfounding: new Coding({
        display: "Plausible confounding",
        code: "PlausibleConfounding",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    PublicationBias: new Coding({
        display: "Publication bias",
        code: "PublicationBias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    RiskOfBias: new Coding({
        display: "Risk of bias",
        code: "RiskOfBias",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-type",
    }),
};
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
//# sourceMappingURL=CertaintySubcomponentTypeValueSet.js.map