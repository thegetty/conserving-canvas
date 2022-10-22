---
title: About
layout: page
order: 800
outputs:
  - html
---

{{ publication.description.full }}

{% backmatter %}

## Citation Information

### Chicago

Coddington, Jim, McClure, Ian, and Schwarz, Cynthia. *Conserving Canvas*. Los Angeles: the Getty Conservation Institute, 2023. https://www.getty.edu/publications/conserving-canvas.

### MLA
Coddington, Jim, McClure, Ian, and Schwarz, Cynthia. *Conserving Canvas*. the Getty Conservation Institute, 2023. https://www.getty.edu/publications/conserving-canvas. Accessed <span class="cite-current-date">Feb. 23, 2021</span>.

### Permanent URL

https://www.getty.edu/publications/conserving-canvas

## Revision History

Any revisions or corrections made to this publication after the first edition date will be listed here and in the project repository at github.com/thegetty/conservingcanvas, where a more detailed version history is available. The revisions branch of the project repository, when present, will show any changes currently under consideration but not yet published here.

### July 25, 2023

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

**Published by the Getty Conservation Institute, Los Angeles**
Getty Publications
1200 Getty Center Drive, Suite 500
Los Angeles, California 90049-1682
[getty.edu/publications](http://www.getty.edu/publications/)

Rachel Barth, *Project Editor*
Leslie Tilley, *Manuscript Editor*
Greg Albers, *Digital Publications Manager*
Kurt Hauser, *Cover Design*
Molly McGeehan, *Production*
Danielle Brink, *Image and Rights Acquisition*
Erin Cecele Dunigan and Dina Murokh, *Digital Assistant*

<div class="cip-data">

Library of Congress Cataloging-in-Publication Data

- Names:
- Title:
- Description:
- Identifiers: LCCN  (print) | LCCN (ebook) | ISBN
   9781606068243 (paperback) | ISBN 9781606068274 (ebook) | ISBN
   9781606068250
- Subjects:
- Classification:
- LC record available at
- LC ebook record available at

</div>

Front cover: *Title*, date (detail, plate/fig. 00)
Back cover: *Title*, date (detail, plate/fig. 00)
Title page: *Title*, date (detail, plate/fig. 00)

{% endbackmatter %}