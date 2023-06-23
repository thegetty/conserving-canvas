# conserving-canvas

https://www.getty.edu/publications/conserving-canvas/

| branch | about |
| --- | --- |
| `main` | The primary branch. Currently the same as `prototype`. |
| `forthcoming` | A static placeholder page that is displayed at the book’s final URL on getty.edu prior to publication |
| `first-pages`, `second-pages`, `final-pages`| 11ty versions of the project at various stages. All working branches should be made off of these. |

## Using the 11ty Version

1. Clone this repository and select the appropriate branch.

2. In Terminal, make sure you are using Node 17.5.0 or higher, with `node --version`. (See section on NVM below.)

3. Run `npm install` to install the project dependencies. This just needs to be done once when first cloning the project, or whenever the core template/code files are updated.

4. See the preview with `npm run dev`. I find it needs to be stopped and restarted often to get it to refresh changes, especially with YAML.

## Using NVM to Manage Different Node Verisons

The full instructions are here: https://github.com/nvm-sh/nvm. But this condensed version should cover the basics.

1. Install the script with the following command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Verify with this command, which should return `nvm`. If it does not, see the Troubleshooting info at https://github.com/nvm-sh/nvm#troubleshooting-on-macos.

```
command -v nvm
```

3. Install the versions of node you want to use:

```
nvm install 14.18.1
```

```
nvm install 17.5.0
```

4. Optionally, set a default version to use with `nvm alias default 14.18.1` or `nvm alias default 17.5.0`. This default will be the one used every time you open a new Terminal window.

5. To choose/change a Node version to run use `nvm use 14` or `nvm use 17`. This will be the version used for as long as that Terminal window is open, or until you change it again.

## Creating a PDF Version

While the paged.js work is ongoing, a PDF of French Silver should be created with PrinceXML (First pages was created using Prince 14.2.)

1. Run `quire build`

2. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile _work-files/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

3. In `_site/pdf.css` find `/_assets/fonts/` and replace with `_assets/fonts/`

4. In `_site/pdf.htmle` find `_assets/tables/` and replace with `_assets/`

5. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

## Customizations Made to 11ty Templates/Files

**_includes/components/abstract.js**
**_layouts/essay.liquid**
Added keywords

**_includes/components/copyright/licensing.js**
Added a comma after "view a coopy of this license"

**_includes/components/menu/item.js**
Added contributor names to sidebar menu

**_includes/components/navigation.js**
Add missing .nav-label span to hide labels on mobile

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