"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionStatus = void 0;
/**
 * The workflow/clinical status of the composition.
 */
exports.CompositionStatus = {
    /**
     * The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.
     */
    composition_status_Amended: {
        code: "amended",
        display: "Amended",
        system: "http://hl7.org/fhir/composition-status"
    },
    /**
     * The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.
     */
    composition_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/composition-status"
    },
    /**
     * This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.
     */
    composition_status_Final: {
        code: "final",
        display: "Final",
        system: "http://hl7.org/fhir/composition-status"
    },
    /**
     * This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.
     */
    composition_status_Preliminary: {
        code: "preliminary",
        display: "Preliminary",
        system: "http://hl7.org/fhir/composition-status"
    },
};
//# sourceMappingURL=CompositionStatus.js.map