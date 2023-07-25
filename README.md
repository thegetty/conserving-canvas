This is the repository for *Conserving Canvas*, edited by Cynthia Schwarz, Ian McClure, and Jim Coddington. This digital book was first published July 25, 2023, by the Getty Conservation Institute. It is available online at https://www.getty.edu/publications/conserving-canvas/ and may be downloaded there free of charge in multiple formats.

## About the Book

In 2019, Yale University, with the support of the Getty Foundation, held an international conference, where nearly four hundred attendees from more than twenty countries gathered to discuss a vital topic: the conservation of paintings on canvas. This was the first major symposium on the subject since 1974, when wax-resin and glue-paste lining reigned as the predominant conservation techniques. Over the past fifty years, such methods—often deemed destructive to artworks—have become less widely used in favor of more minimalist approaches to intervention. Recent decades have witnessed the reevaluation of traditional practices as well as focused research supporting significant new methodologies, procedures, and synthetic materials for the care and conservation of paintings on fabric supports.

*Conserving Canvas* compiles the proceedings of the conference, presenting a wide array of papers and posters that provide important global perspectives on the history, current state, and future needs of the field. Featuring an expansive glossary of terms that will be an invaluable resource for conservators, this publication promises to become a standard reference for the international conservation community.

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/conserving-canvas/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 18.16.0
- Quire CLI 1.0.0-rc.10

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`| Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |

### Figure Images Submodule

Many of figure images for *Conserving Canvas* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/conserving-canvas/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/conserving-canvas.git
```

### Previewing the Online Edition Locally

1. Install Node.js 18.16.0 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.10`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

### Creating a PDF Version

1. Run `quire build`

2. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

3. In `_site/pdf.css` find `/_assets/fonts/` and replace with `_assets/fonts/`

4. In `_site/pdf.html` find `_assets/tables/` and replace with `_assets/`

5. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

As of the first publication date (July 2023) Quire's EPUB functionality was outputting invalid EPUB files. For this publication, that output was taken and manually fixed. Any changes that need to be made to the EPUB will have to be done manually to those fixed source files. The files (`_epub-src`) can be found on the department server with the final e-book files. 

1. Copy the `_epub-src` directory to the project repo and change the name to `_epub`.

2. Make any necessary changes within the `_epub` files.

3. Run `quire epub` to create the EPUB file.

4. Validate:

    ```
    java -jar path/to/local/epubcheck-5.0.0/epubcheck.jar path/to/local/quire-project/epubjs.epub
    ```

5. Resave the updated `_epub` directory as `_epub-src` to the department server.

### Customizations

**_includes/components/analytics.js**
**_layouts/base.11ty.js**
Added Google Analytics 4

**_includes/components/abstract.js**
**_layouts/essay.liquid**
Added keywords

**_includes/components/copyright/licensing.js**
Updated the image exclusions language, and moved print/pdf statement to new location

**_includes/components/menu/item.js**
Added contributor names to sidebar menu

**_includes/components/navigation.js**
Add missing .nav-label span to hide labels on mobile, and remove title truncation

**_includes/components/page-header.js**
Added page title element for PDF footer

**_plugins/figures/iiif/config.js**
Changed default print-image.jpg size

**_plugins/filters/fullname.js**
Joined contributor names with a non-breaking space

**_plugins/shortcodes/cite.js**
Will return id/text if the reference doesn't match one in references.yaml

**_plugins/shortcodes/contributors.js**
Refactored logic to handle oxford commas correctly

**_plugins/shortcodes/figureGroup.js**
Add option to pass single caption for figuregroup

**_plugins/transforms/outputs/pdf/transform.js**
Remove title trunctation for PDF footers

**content/_assets/styles/epub.scss**
Completely custom css for the EPUB output

## License

© 2023 J. Paul Getty Trust

The text of this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>. All images are reproduced with the permission of the rights holders acknowledged in captions and are expressly excluded from the CC BY-NC license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights. 