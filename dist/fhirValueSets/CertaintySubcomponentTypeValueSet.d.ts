import { Coding } from '../fhir.js';
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare const CertaintySubcomponentTypeValueSet: {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    readonly DoseResponseGradient: Coding;
    /**
     * Imprecision: High quality evidence.
     */
    readonly Imprecision: Coding;
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    readonly Inconsistency: Coding;
    /**
     * Indirectness: concerns reducing external validity.
     */
    readonly Indirectness: Coding;
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    readonly LargeEffect: Coding;
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    readonly PlausibleConfounding: Coding;
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    readonly PublicationBias: Coding;
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    readonly RiskOfBias: Coding;
};
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare type CertaintySubcomponentTypeValueSetType = typeof CertaintySubcomponentTypeValueSet;
/**
 * The subcomponent classification of quality of evidence rating systems.
 */
export declare enum CertaintySubcomponentTypeValueSetEnum {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    DoseResponseGradient = "DoseResponseGradient",
    /**
     * Imprecision: High quality evidence.
     */
    Imprecision = "Imprecision",
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    Inconsistency = "Inconsistency",
    /**
     * Indirectness: concerns reducing external validity.
     */
    Indirectness = "Indirectness",
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    LargeEffect = "LargeEffect",
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    PlausibleConfounding = "PlausibleConfounding",
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    PublicationBias = "PublicationBias",
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    RiskOfBias = "RiskOfBias"
}
//# sourceMappingURL=CertaintySubcomponentTypeValueSet.d.ts.map