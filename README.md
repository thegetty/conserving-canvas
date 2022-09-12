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

While the paged.js work is ongoing, a PDF of French Silver can be created with PrinceXML on the command line.

1. Comment out `outputs: [pdf, epub]` from `content/print-half-title-page.md`, `content/print-title-page.md`, and `content/print-copyright.md` so that these pages will appear online.

2. Run `npm run dev` to see the preview.

3. With the preview running, run this command in another Terminal window.

    ```
    prince http://localhost:8080/ http://localhost:8080/title-pages/ http://localhost:8080/copyright/ http://localhost:8080/contents/ .... --style=bin/application.css --style=content/_assets/styles/custom.css -o output.pdf
    ```

(Note that `bin/application.css`) is a static output of the SCSS styles in `content/_assets/styles/`. So changes to those files would necessitate manual changes be made to `bin/application.css` to keep them aligned.

## Customizations Made to 11ty Templates/Files

TK