"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertaintySubcomponentRating = void 0;
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
exports.CertaintySubcomponentRating = {
    /**
     * possible reason for increasing quality rating was checked and found to be absent.
     */
    certainty_subcomponent_rating_Absent: {
        code: "absent",
        display: "absent",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * critical concern.
     */
    certainty_subcomponent_rating_CriticalConcern: {
        code: "critical-concern",
        display: "critical concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * reduce quality rating by 1.
     */
    certainty_subcomponent_rating_ReduceRating1: {
        code: "downcode1",
        display: "reduce rating: -1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * reduce quality rating by 2.
     */
    certainty_subcomponent_rating_ReduceRating2: {
        code: "downcode2",
        display: "reduce rating: -2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * reduce quality rating by 3.
     */
    certainty_subcomponent_rating_ReduceRating3: {
        code: "downcode3",
        display: "reduce rating: -3",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * no change to quality rating.
     */
    certainty_subcomponent_rating_NoChangeToRating: {
        code: "no-change",
        display: "no change to rating",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * no serious concern.
     */
    certainty_subcomponent_rating_NoSeriousConcern: {
        code: "no-concern",
        display: "no serious concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * possible reason for increasing quality rating was checked and found to bepresent.
     */
    certainty_subcomponent_rating_Present: {
        code: "present",
        display: "present",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * serious concern.
     */
    certainty_subcomponent_rating_SeriousConcern: {
        code: "serious-concern",
        display: "serious concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * increase quality rating by 1.
     */
    certainty_subcomponent_rating_IncreaseRatingPlus1: {
        code: "upcode1",
        display: "increase rating: +1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
    /**
     * increase quality rating by 2.
     */
    certainty_subcomponent_rating_IncreaseRatingPlus2: {
        code: "upcode2",
        display: "increase rating: +2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating"
    },
};
//# sourceMappingURL=CertaintySubcomponentRating.js.map