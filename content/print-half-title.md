---
layout: base.11ty.js
class: half-title-page
order: 2
outputs:
  - epub
  - pdf
toc: false
menu: false
---

<section class="half-title">

{% if publication.short_title %}
  {{ publication.short_title | markdownify }}
{% elsif publication.title %}
  {{ publication.title | markdownify }}
{% endif %}

</section>
