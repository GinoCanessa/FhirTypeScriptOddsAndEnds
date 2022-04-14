import { Coding } from '../strictmodels';
/**
 * The workflow/clinical status of the composition.
 */
export declare const CompositionStatus: {
    /**
     * The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.
     */
    composition_status_Amended: Coding;
    /**
     * The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.
     */
    composition_status_EnteredInError: Coding;
    /**
     * This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.
     */
    composition_status_Final: Coding;
    /**
     * This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.
     */
    composition_status_Preliminary: Coding;
};
//# sourceMappingURL=CompositionStatus.d.ts.map