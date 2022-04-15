// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Real world event relating to the schedule.
 */
export var EventTimingValueSet = {
    /**
     * before meal (from lat. ante cibus)
     */
    v3_TimingEvent_AC: Coding.FactoryCreateStrict({
        code: "AC",
        display: "AC",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * before lunch (from lat. ante cibus diurnus)
     */
    v3_TimingEvent_ACD: Coding.FactoryCreateStrict({
        code: "ACD",
        display: "ACD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * before breakfast (from lat. ante cibus matutinus)
     */
    v3_TimingEvent_ACM: Coding.FactoryCreateStrict({
        code: "ACM",
        display: "ACM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * before dinner (from lat. ante cibus vespertinus)
     */
    v3_TimingEvent_ACV: Coding.FactoryCreateStrict({
        code: "ACV",
        display: "ACV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Event occurs during the afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Afternoon: Coding.FactoryCreateStrict({
        code: "AFT",
        display: "Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the early afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyAfternoon: Coding.FactoryCreateStrict({
        code: "AFT.early",
        display: "Early Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the late afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateAfternoon: Coding.FactoryCreateStrict({
        code: "AFT.late",
        display: "Late Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Description: meal (from lat. ante cibus)
     */
    v3_TimingEvent_C: Coding.FactoryCreateStrict({
        code: "C",
        display: "C",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Description: lunch (from lat. cibus diurnus)
     */
    v3_TimingEvent_CD: Coding.FactoryCreateStrict({
        code: "CD",
        display: "CD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Description: breakfast (from lat. cibus matutinus)
     */
    v3_TimingEvent_CM: Coding.FactoryCreateStrict({
        code: "CM",
        display: "CM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Description: dinner (from lat. cibus vespertinus)
     */
    v3_TimingEvent_CV: Coding.FactoryCreateStrict({
        code: "CV",
        display: "CV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Event occurs during the evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Evening: Coding.FactoryCreateStrict({
        code: "EVE",
        display: "Evening",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the early evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyEvening: Coding.FactoryCreateStrict({
        code: "EVE.early",
        display: "Early Evening",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the late evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateEvening: Coding.FactoryCreateStrict({
        code: "EVE.late",
        display: "Late Evening",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    v3_TimingEvent_HS: Coding.FactoryCreateStrict({
        code: "HS",
        display: "HS",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Event occurs during the morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Morning: Coding.FactoryCreateStrict({
        code: "MORN",
        display: "Morning",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the early morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyMorning: Coding.FactoryCreateStrict({
        code: "MORN.early",
        display: "Early Morning",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the late morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateMorning: Coding.FactoryCreateStrict({
        code: "MORN.late",
        display: "Late Morning",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs during the night. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Night: Coding.FactoryCreateStrict({
        code: "NIGHT",
        display: "Night",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Event occurs around 12:00pm. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Noon: Coding.FactoryCreateStrict({
        code: "NOON",
        display: "Noon",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * after meal (from lat. post cibus)
     */
    v3_TimingEvent_PC: Coding.FactoryCreateStrict({
        code: "PC",
        display: "PC",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * after lunch (from lat. post cibus diurnus)
     */
    v3_TimingEvent_PCD: Coding.FactoryCreateStrict({
        code: "PCD",
        display: "PCD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * after breakfast (from lat. post cibus matutinus)
     */
    v3_TimingEvent_PCM: Coding.FactoryCreateStrict({
        code: "PCM",
        display: "PCM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * after dinner (from lat. post cibus vespertinus)
     */
    v3_TimingEvent_PCV: Coding.FactoryCreateStrict({
        code: "PCV",
        display: "PCV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
    /**
     * Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_AfterSleep: Coding.FactoryCreateStrict({
        code: "PHS",
        display: "After Sleep",
        system: "http://hl7.org/fhir/event-timing"
    }),
    /**
     * Description: Upon waking up from a regular period of sleep, in order to start regular activities (this would exclude waking up from a nap or temporarily waking up during a period of sleep)
     *
     *
     *                            Usage Notes: e.g.
     *
     *                         Take pulse rate on waking in management of thyrotoxicosis.
     *
     *                         Take BP on waking in management of hypertension
     *
     *                         Take basal body temperature on waking in establishing date of ovulation
     */
    v3_TimingEvent_WAKE: Coding.FactoryCreateStrict({
        code: "WAKE",
        display: "WAKE",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    }),
};
//# sourceMappingURL=EventTimingValueSet.js.map