/**
 * The way in which a person authenticated a composition.
 */
export var CompositionAttestationMode = {
    /**
     * The person authenticated the content and accepted legal responsibility for its content.
     */
    composition_attestation_mode_Legal: {
        code: "legal",
        display: "Legal",
        system: "http://hl7.org/fhir/composition-attestation-mode"
    },
    /**
     * The organization authenticated the content as consistent with their policies and procedures.
     */
    composition_attestation_mode_Official: {
        code: "official",
        display: "Official",
        system: "http://hl7.org/fhir/composition-attestation-mode"
    },
    /**
     * The person authenticated the content in their personal capacity.
     */
    composition_attestation_mode_Personal: {
        code: "personal",
        display: "Personal",
        system: "http://hl7.org/fhir/composition-attestation-mode"
    },
    /**
     * The person authenticated the content in their professional capacity.
     */
    composition_attestation_mode_Professional: {
        code: "professional",
        display: "Professional",
        system: "http://hl7.org/fhir/composition-attestation-mode"
    }
};
