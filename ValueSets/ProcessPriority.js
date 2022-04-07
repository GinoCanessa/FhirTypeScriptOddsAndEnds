/**
 * This value set includes the financial processing priority codes.
 */
export var ProcessPriority = {
    /**
     * Later, when possible.
     */
    process_priority_Deferred: {
        code: "deferred",
        display: "Deferred",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    },
    /**
     * With best effort.
     */
    process_priority_Normal: {
        code: "normal",
        display: "Normal",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    },
    /**
     * Immediately in real time.
     */
    process_priority_Immediate: {
        code: "stat",
        display: "Immediate",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    }
};
