const chalkFactory = require('~lib/chalk')
const mime = require('mime-types')
const path = require('path')
const titleCase = require('~plugins/filters/titleCase')
const { error } = chalkFactory('Figure Processing:IIIF:Annotations')

/**
 * Quire Figure Annotations conform to the W3C Web Annotation Format
 * @see {@link https://www.w3.org/TR/annotation-model/#annotations}
 */
module.exports = class AnnotationFactory {
  constructor(iiifConfig) {
    this.iiifConfig = iiifConfig
  }

  /**
   * 
   * @param  {Figure} figure
   * @param  {Object} data Annotation item data defined on a figure in `figures.yaml`
   * 
   * @typedef {Object} Annotation
   * @property {String} id
   * @property {String} format The annotation resource's media type
   * @property {String} label The label rendered in the UI to select an annotation
   * @property {String} motivation
   * @property {String} url The url for the annotation resource
   * 
   * @return {Annotation}
   */
  create(figure, data) {
    /**
     * If an id is not provided, compute id from the `label` or `src` properties
     * @return {String}
     */
    const id = () => {
      switch(true) {
        case !!data.id:
          return data.id
        case !!data.src:
          return path.parse(data.src).name
          break;
        case !!data.label:
          return data.label.split(' ').join('-').toLowerCase()
          break;
        default:
          error(`Unable to set an id for annotation on figure "${this.figure.id}". Annotations must have an 'id', 'label', or 'src' property.`)
          break;
      }
    }

    /**
     * Filepath is the input path OR the path to a `tiles` directory 
     * if the image is an image service (figure.preset === 'zoom')
     * @return {String}
     */
    const filepath = () => {
      return figure.preset === "zoom"
        ? [
            this.iiifConfig.outputDir,
            data.id,
            this.iiifConfig.imageServiceDirectory,
          ].join('/')
        : [this.iiifConfig.inputDir, data.src].join('/');
    }

    /**
     * Media-type of the annotation resource
     * @return {String}
     */
    const format = () => {
      return data.text && !data.src ? 'text/plain' : mime.lookup(data.src)
    }

    /**
     * The URL where the annotation resource is served
     * @return {String}
     */
    const url = () => {
      return new URL(filepath(), process.env.URL).href
    }

    return {
      id: id(),
      format: format(),
      label: data.label || titleCase(path.parse(data.src).name),
      motivation: data.src ? 'painting' : 'text',
      type: figure.src || data.target || data.text ? 'annotation' : 'choice',
      url: url(),
      ...data
    }
  }
}
