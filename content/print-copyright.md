---
title: Copyright
class: backmatter
layout: base.11ty.js
order: 4
toc: false
outputs:
  - epub
  - pdf
---

{% copyright %}

{% if publication.identifier.isbn %}
ISBN: {{ publication.identifier.isbn }}
{% endif %}
