"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTiming = void 0;
/**
 * Real world event relating to the schedule.
 */
exports.EventTiming = {
    /**
     * before meal (from lat. ante cibus)
     */
    v3_TimingEvent_AC: {
        code: "AC",
        display: "AC",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * before lunch (from lat. ante cibus diurnus)
     */
    v3_TimingEvent_ACD: {
        code: "ACD",
        display: "ACD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * before breakfast (from lat. ante cibus matutinus)
     */
    v3_TimingEvent_ACM: {
        code: "ACM",
        display: "ACM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * before dinner (from lat. ante cibus vespertinus)
     */
    v3_TimingEvent_ACV: {
        code: "ACV",
        display: "ACV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Event occurs during the afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Afternoon: {
        code: "AFT",
        display: "Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the early afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyAfternoon: {
        code: "AFT.early",
        display: "Early Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the late afternoon. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateAfternoon: {
        code: "AFT.late",
        display: "Late Afternoon",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Description: meal (from lat. ante cibus)
     */
    v3_TimingEvent_C: {
        code: "C",
        display: "C",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Description: lunch (from lat. cibus diurnus)
     */
    v3_TimingEvent_CD: {
        code: "CD",
        display: "CD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Description: breakfast (from lat. cibus matutinus)
     */
    v3_TimingEvent_CM: {
        code: "CM",
        display: "CM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Description: dinner (from lat. cibus vespertinus)
     */
    v3_TimingEvent_CV: {
        code: "CV",
        display: "CV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Event occurs during the evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Evening: {
        code: "EVE",
        display: "Evening",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the early evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyEvening: {
        code: "EVE.early",
        display: "Early Evening",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the late evening. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateEvening: {
        code: "EVE.late",
        display: "Late Evening",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Description: Prior to beginning a regular period of extended sleep (this would exclude naps).  Note that this might occur at different times of day depending on a person's regular sleep schedule.
     */
    v3_TimingEvent_HS: {
        code: "HS",
        display: "HS",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Event occurs during the morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Morning: {
        code: "MORN",
        display: "Morning",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the early morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_EarlyMorning: {
        code: "MORN.early",
        display: "Early Morning",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the late morning. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_LateMorning: {
        code: "MORN.late",
        display: "Late Morning",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs during the night. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Night: {
        code: "NIGHT",
        display: "Night",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * Event occurs around 12:00pm. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_Noon: {
        code: "NOON",
        display: "Noon",
        system: "http://hl7.org/fhir/event-timing"
    },
    /**
     * after meal (from lat. post cibus)
     */
    v3_TimingEvent_PC: {
        code: "PC",
        display: "PC",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * after lunch (from lat. post cibus diurnus)
     */
    v3_TimingEvent_PCD: {
        code: "PCD",
        display: "PCD",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * after breakfast (from lat. post cibus matutinus)
     */
    v3_TimingEvent_PCM: {
        code: "PCM",
        display: "PCM",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * after dinner (from lat. post cibus vespertinus)
     */
    v3_TimingEvent_PCV: {
        code: "PCV",
        display: "PCV",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
    /**
     * Event occurs [offset] after subject goes to sleep. The exact time is unspecified and established by institution convention or patient interpretation.
     */
    event_timing_AfterSleep: {
        code: "PHS",
        display: "After Sleep",
        system: "http://hl7.org/fhir/event-timing"
    },
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
    v3_TimingEvent_WAKE: {
        code: "WAKE",
        display: "WAKE",
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent"
    },
};
//# sourceMappingURL=EventTiming.js.map