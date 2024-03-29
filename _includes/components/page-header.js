//
// CUTSOMIZED FILE
// Added page title element for PDF footer; lines 28, 61–62, and 71
//
const { html } = require('~lib/common-tags')
const path = require('path')

/**
 * Publication page header
 *
 * @param      {Object}  eleventyConfig
 */
module.exports = function(eleventyConfig) {
  const contributors = eleventyConfig.getFilter('contributors')
  const markdownify = eleventyConfig.getFilter('markdownify')
  const pageTitle = eleventyConfig.getFilter('pageTitle')
  const slugify = eleventyConfig.getFilter('slugify')

  const { labelDivider } = eleventyConfig.globalData.config.pageTitle
  const { imageDir } = eleventyConfig.globalData.config.figures

  return function (params) {
    const {
      byline_format: bylineFormat,
      image,
      label,
      pageContributors,
      short_title: shortTitle,
      subtitle,
      title
    } = params

    const classes = ['quire-page__header', 'hero']

    if (title == 'title page' || title == 'half title page') {
      classes.push('is-screen-only')
    }

    const pageLabel = label
      ? `<span class="label">${label}<span class="visually-hidden">${labelDivider}</span></span>`
      : ''

    const imageElement = image
      ? html`
          <section
            class="${classes} hero__image"
           style="background-image: url('${path.join(imageDir, image)}');"
          >
          </section>
        `
      : ''

    const contributorsElement = pageContributors
      ? html`
          <div class="quire-page__header__contributor">
            ${contributors({ context: pageContributors, format: bylineFormat })}
          </div>
        `
      : ''

    const runningFeetLabel = label ? `${markdownify(label)}${labelDivider}` : ''
    const runningFeetTitle = shortTitle ? shortTitle : title

    return html`
      <section class="${classes}">
        <div class="hero-body">
          <h1 class="quire-page__header__title" id="${slugify(title)}">
            ${pageLabel}
            ${pageTitle({ title, subtitle })}
          </h1>
          <span class="pdf-footers__title">${runningFeetLabel}${markdownify(runningFeetTitle)}</span>
          ${contributorsElement}
        </div>
      </section>
      ${imageElement}
    `
  }
}
