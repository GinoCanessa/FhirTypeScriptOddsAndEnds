"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdverseEventCausalityAssess = void 0;
/**
 * Codes for the assessment of whether the entity caused the event.
 */
exports.AdverseEventCausalityAssess = {
    /**
     * i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.
     */
    adverse_event_causality_assess_Certain: {
        code: "Certain",
        display: "Certain",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
    /**
     * i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.
     */
    adverse_event_causality_assess_ConditionalClassified: {
        code: "Conditional-Classified",
        display: "Conditional/Classified",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
    /**
     * i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.
     */
    adverse_event_causality_assess_Possible: {
        code: "Possible",
        display: "Possible",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
    /**
     * i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.
     */
    adverse_event_causality_assess_ProbablyLikely: {
        code: "Probably-Likely",
        display: "Probably/Likely",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
    /**
     * i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.
     */
    adverse_event_causality_assess_UnassessableUnclassifiable: {
        code: "Unassessable-Unclassifiable",
        display: "Unassessable/Unclassifiable",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
    /**
     * i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.
     */
    adverse_event_causality_assess_Unlikely: {
        code: "Unlikely",
        display: "Unlikely",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess"
    },
};
//# sourceMappingURL=AdverseEventCausalityAssess.js.map