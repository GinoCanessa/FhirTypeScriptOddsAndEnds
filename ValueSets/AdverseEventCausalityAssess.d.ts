import { Coding } from '../strictmodels';
/**
 * Codes for the assessment of whether the entity caused the event.
 */
export declare const AdverseEventCausalityAssess: {
    /**
     * i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.
     */
    adverse_event_causality_assess_Certain: Coding;
    /**
     * i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.
     */
    adverse_event_causality_assess_ConditionalClassified: Coding;
    /**
     * i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.
     */
    adverse_event_causality_assess_Possible: Coding;
    /**
     * i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.
     */
    adverse_event_causality_assess_ProbablyLikely: Coding;
    /**
     * i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.
     */
    adverse_event_causality_assess_UnassessableUnclassifiable: Coding;
    /**
     * i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.
     */
    adverse_event_causality_assess_Unlikely: Coding;
};
//# sourceMappingURL=AdverseEventCausalityAssess.d.ts.map