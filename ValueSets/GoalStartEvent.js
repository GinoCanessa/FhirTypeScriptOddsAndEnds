/**
 * Identifies types of events that might trigger the start of a goal.
 */
export var GoalStartEvent = {
    GoalStartEvent_DischargeFromHospital: {
        code: "308283009",
        display: "Discharge from hospital",
        system: "http://snomed.info/sct"
    },
    GoalStartEvent_AdmissionToHospital: {
        code: "32485007",
        display: "Admission to hospital",
        system: "http://snomed.info/sct"
    },
    GoalStartEvent_Childbirth: {
        code: "386216000",
        display: "Childbirth",
        system: "http://snomed.info/sct"
    },
    GoalStartEvent_CompletionTimeOfProcedure: {
        code: "442137000",
        display: "Completion time of procedure",
        system: "http://snomed.info/sct"
    }
};
