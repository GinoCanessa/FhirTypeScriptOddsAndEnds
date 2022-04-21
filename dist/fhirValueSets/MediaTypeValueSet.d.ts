import { Coding } from '../fhir.js';
/**
 * Codes for high level media categories.
 */
export declare const MediaTypeValueSet: {
    /**
     * audio: The media consists of a sound recording
     */
    readonly Audio: Coding;
    /**
     * image: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
     */
    readonly Image: Coding;
    /**
     * video: The media consists of a series of frames that capture a moving image
     */
    readonly Video: Coding;
};
/**
 * Codes for high level media categories.
 */
export declare type MediaTypeValueSetType = typeof MediaTypeValueSet;
/**
 * Codes for high level media categories.
 */
export declare enum MediaTypeValueSetEnum {
    /**
     * audio: The media consists of a sound recording
     */
    Audio = "audio",
    /**
     * image: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
     */
    Image = "image",
    /**
     * video: The media consists of a series of frames that capture a moving image
     */
    Video = "video"
}
//# sourceMappingURL=MediaTypeValueSet.d.ts.map