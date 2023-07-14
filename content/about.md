---
title: About
order: 800
layout: page
outputs:
  - html
---

{{ publication.description.full }}

{% backmatter %}

<div class="citation-info">

## Citation Information

### Chicago

{% citation context='publication', type='chicago' %}

### MLA

{% citation context='publication', type='mla' %}

### Permanent URL

{{ config.baseURL }}

</div>
<div class="revision-history">

## Revision History

{{ publication.revision_statement | markdownify }}

{% for revision in publication.revision_history %}

### {{ revision.date }}

{% for item in revision.summary %}
- {{ item | markdownify }}
{% endfor %}

{% endfor %}

</div>
<div class="other-formats">

## Other Formats

{% for link in publication.resource_link %}
{% if link.type == "other-format" %}
- [{{ link.name }}]({{ link.url }})
{% endif %}
{% endfor %}

</div>
<div class="copyright">

## Copyright

{{ config.quire_credit_line | markdownify }}

{% copyright %}

</div>
<div class="publisher">

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}**
{{ press.address | markdownify }}
{% endfor %}

</div>
<div class="project-team">

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

</div>
<div class="cip-data">

{{ publication.library_of_congress_cip | markdownify }}

</div>
<div class="cover-image-credits">

Front cover: Conservation of Anne-Louis Girodet-Trioson, *The Death of Camille*, 1785 (detail, fig. 35.1)

Illustration Credits
Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings.

</div>

## Getty Conservation Institute

Timothy P. Whalen, *John E. and Louise Bryson Director*
Jeanne Marie Teutonico, *Associate Director, Strategic Initiatives and Publications*

The Getty Conservation Institute (GCI) works internationally to advance conservation practice in the visual arts—broadly interpreted to include objects, collections, architecture, and sites. The Institute serves the conservation community through scientific research, education and training, field projects, and the dissemination of information. In all its endeavors, the GCI creates and delivers knowledge that contributes to the conservation of the world’s cultural heritage.

{% endbackmatter %}
