//
// CUSTOMIZE FILE -- Conserving Canvas
// Adds keywords
//
const { html } = require('~lib/common-tags')

/**
 * Publication abstract
 * @param      {Object}  eleventyConfig
 */
module.exports = function(eleventyConfig) {
  const markdownify = eleventyConfig.getFilter('markdownify')
  return function (params) {
    const { abstract, keywords } = params

    const keywordsElement = keywords
      ? html`
         <p><span class="keywords-heading">KEYWORDS:</span> ${markdownify(keywords)}</p>
      `
      : ''

    return html`
      <section class="section quire-page__abstract">
        <div class="container">
          <div class="content">
            <p>${markdownify(abstract)}</p>
            ${markdownify(keywordsElement)}
          </div>
        </div>
      </section>
    `
  }
}
