---
title: About
layout: page
class: backmatter
order: 503
toc: false
outputs:
  - html
---

{{ publication.description.full }}

## Citation Information

### Chicago

Bremer-David, Charissa. *French Silver in the J. Paul Getty Museum*. Los Angeles: J. Paul Getty Museum, 2023. http://www.getty.edu/publications/french-silver/.

### MLA

Bremer-David, Charissa. *French Silver in the J. Paul Getty Museum*. The J. Paul Getty Museum, 2023. http://www.getty.edu/publications/french-silver/. Accessed <span class="cite-current-date">Feb. 23, 2021</span>.

### Permanent URL

http://www.getty.edu/publications/french-silver/

## Revision History

Any revisions or corrections made to this publication after the first edition date will be listed here and in the project repository at [github.com/thegetty/french-silver/](https://github.com/thegetty/french-silver/), where a more detailed version history is available. The revisions branch of the project repository, when present, will show any changes currently under consideration but not yet published here.

### April 12, 2023

  - First edition

## Other Formats

{% for link in publication.resource_link %}
{% if link.type == "other-format" %}
- [{{ link.name }}]({{ link.url }})
{% endif %}
{% endfor %}

## Copyright

This publication was created using Quire™, a multiformat publishing tool from Getty.

© 2023 J. Paul Getty Trust


<svg class="quire-copyright__icon">
<switch>
  <use xlink:href="#cc"></use>
</switch>
<switch>
  <use xlink:href="#cc-by"></use>
</switch>
<switch>
  <use xlink:href="#cc-by-nc"></use>
  <foreignObject width="135" height="30">
      <img src="../img/icons/cc-by-nc.png" alt="CC BY-NC" />
  </foreignObject>
</switch>
</svg>


Unless otherwise indicated, the text and images of this work are licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

**Published by the J. Paul Getty Museum, Los Angeles**
Getty Publications
1200 Getty Center Drive, Suite 500
Los Angeles, California 90049-1682
[getty.edu/publications](http://www.getty.edu/publications/)

Ruth Evans Lane, *Project Editor*
Zsofia Jilling, *Manuscript Editor*
Greg Albers, *Digital Publications Manager*
Kurt Hauser, *Cover Design*
Victoria Gallina, *Production*
Nancy Rivera, *Image and Rights Acquisition*
Erin Cecele Dunigan and Dina Murokh, *Digital Assistants*

<div class="cip-data">

Library of Congress Cataloging-in-Publication Data

- Names:
- Title:
- Description:
- Identifiers: LCCN  (print) | LCCN (ebook) | ISBN
   9781606068281 (paperback) | ISBN 9781606068298 (ebook) | ISBN
   9781606068304
- Subjects:
- Classification:
- LC record available at
- LC ebook record available at

</div>

Front cover:
Back cover:

{% endbackmatter %}
