//
// CUSTOMIZED FILE
// Adds contributor names to sidebar menu
//
/**
 * Renders a menu item
 *
 * @param      {Object}  eleventyConfig
 * @param      {Object}  params
 * @property      {Object}  data Page data
 * @property      {String}  title Page title
 * @property      {String}  url Page url
 */
module.exports = function(eleventyConfig) {
  const contributors = eleventyConfig.getFilter('contributors')
  const pageTitle = eleventyConfig.getFilter('pageTitle')
  const { contributorDivider } = eleventyConfig.globalData.config.tableOfContents

  return function(params) {
    const { currentURL, page } = params
    const { data, url } = page
    const { contributor: pageContributors, label, layout, title } = data

    const titleText = pageTitle({ label, title })

    const pageContributorsElement = pageContributors
      ? `<span class="contributor-divider">${contributorDivider}</span><span class="contributor">${contributors({ context: pageContributors, format: 'string' })}</span>`
      : ''
    /**
     * Check if item is a reference to a built page or just a heading
     * @type {Boolean}
     */
    const isPage = !!layout
    return isPage
      ? `<a href="${url}" class="${currentURL === url ? 'active' : ''}">${titleText}${pageContributorsElement}</a>`
      : titleText
  }
}
