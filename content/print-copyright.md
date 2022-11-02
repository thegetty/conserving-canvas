---
layout: page
class: backmatter
order: 4
toc: false
menu: false
outputs:
  - pdf
  - epub
---

{{ config.quire_credit_line }}

The free online edition of this open-access publication is available at getty.edu/publications/conserving-canvas/ and includes zoomable illustrations. Also available are free PDF and EPUB downloads of the book.

{% copyright %}

First edition, {{ publication.pub_date | date: "%Y" }}
{{ publication.repository_url | replace: "https://", "" }}

<div class="publisher no-break-container">

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}**
{{ press.address | markdownify }}
{% endfor %}

</div>
<div class="project-team no-break-container">

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

</div>
<div class="distribution no-break-container">

Distributed in the United States and Canada by the University of Chicago Press

Distributed outside the United States and Canada by Yale University Press, London

</div>
<div class="cip-data no-break-container">

{{ publication.library_of_congress_cip | markdownify }}

</div>
<div class="cover-image-credits">

Front cover:
Back cover:

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions or in the illustration credits at the back of this book. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings.

</div>
