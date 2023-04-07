---
title: Glossary
layout: page
class: backmatter
order: 700
---

This glossary is based on the *Handbook of Terms Used in the Lining of Paintings*, selected and edited by Westby Percival-Prescott and Gillian Lewis for the Conference on Comparative Lining Techniques, Greenwich, London, 1974, and reprinted in *Lining Paintings: Papers from the Greenwich Conference on Comparative Lining Techniques* {% cite 'Villers 2003' %}. The main contributors to the *Handbook* were David Bomford, Alan Cummings, Gerry Hedley, Gillian Lewis, Joyce Plesters, and Westby Percival-Prescott.

In this version, the editors Cynthia Schwarz, Jim Coddington, and Ian McClure have reviewed the terms used in the 1974 version, removing those no longer current and adding terms not current in 1974, and taking notice of terms used in the papers included in this publication.

<dl class="glossary-list">
{% for entry in glossary.entries %}
<dt>{{ entry.term | markdownify }}</dt>
{% if entry.definition %}
<dd>{{ entry.definition | markdownify }}{% if entry.see_also %} See also {% for term in entry.see_also %}{% if forloop.first == true %}{% elsif forloop.length == 2 and forloop.last == true %} and {% elsif forloop.length > 2 and forloop.last == true %}, and {% elsif forloop.length > 2 and forloop.last != true %}, {% endif %}<em>{{ term }}</em>{% endfor %}.{% endif %}</dd>
{% elsif entry.see %}
<dd>See {% for term in entry.see %}{% if forloop.first == true %}{% elsif forloop.length == 2 and forloop.last == true %} and {% elsif forloop.length > 2 and forloop.last == true %}, and {% elsif forloop.length > 2 and forloop.last != true %}, {% endif %}<em>{{ term }}</em>{% endfor %}.</dd>
{% endif %}
{% endfor %}
</dl>


