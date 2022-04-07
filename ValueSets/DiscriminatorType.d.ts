import { Coding } from '../strictmodels';
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare const DiscriminatorType: {
    /**
     * The slices are differentiated by the presence or absence of the nominated element.
     */
    discriminator_type_Exists: Coding;
    /**
     * The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
     */
    discriminator_type_Pattern: Coding;
    /**
     * The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
     */
    discriminator_type_Profile: Coding;
    /**
     * The slices are differentiated by type of the nominated element.
     */
    discriminator_type_Type: Coding;
    /**
     * The slices have different values in the nominated element.
     */
    discriminator_type_Value: Coding;
};
//# sourceMappingURL=DiscriminatorType.d.ts.map