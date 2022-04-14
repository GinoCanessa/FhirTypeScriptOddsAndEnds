"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaType = void 0;
/**
 * Codes for high level media categories.
 */
exports.MediaType = {
    /**
     * The media consists of a sound recording
     */
    media_type_Audio: {
        code: "audio",
        display: "Audio",
        system: "http://terminology.hl7.org/CodeSystem/media-type"
    },
    /**
     * The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
     */
    media_type_Image: {
        code: "image",
        display: "Image",
        system: "http://terminology.hl7.org/CodeSystem/media-type"
    },
    /**
     * The media consists of a series of frames that capture a moving image
     */
    media_type_Video: {
        code: "video",
        display: "Video",
        system: "http://terminology.hl7.org/CodeSystem/media-type"
    },
};
//# sourceMappingURL=MediaType.js.map