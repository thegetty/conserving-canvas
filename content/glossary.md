---
title: Glossary
layout: page
class: backmatter
order: 700
---

This glossary is based on the *Handbook of Terms Used in the Lining of Paintings*, selected and edited by Westby Percival-Prescott and Gillian Lewis for the Conference on Comparative Lining Techniques, Greenwich, London, 1974, and reprinted in *Lining Paintings: Papers from the Greenwich Conference on Comparative Lining Techniques* ({% cite 'Villers 2003b' %}). The main contributors to the *Handbook* were David Bomford, Alan Cummings, Gerry Hedley, Gillian Lewis, Joyce Plesters, and Westby Percival-Prescott.

In this revised and expanded version, the editors, Cynthia Schwarz, Jim Coddington, and Ian McClure, have reviewed the terms used in the 1974 version, removing those no longer current and adding terms not current in 1974, taking notice of terms used in the papers included in this publication.

---

{% assign alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z' | split: ', ' %}
{% assign letters = '' | split: '' %}
{% for entry in glossary.entries %}
{% assign this = entry.term | downcase | replace: '*', '' | slice: 0 %}
{% assign letters = letters | concat: this %}
{% endfor %}
{% assign uniqLetters = letters | uniq %}
<div class="glossary-navigation">
{% for letter in alphabet %}{% if uniqLetters contains letter %}<a href="#{{ letter }}" >{{ letter | upcase }}</a> {% else %}<span>{{ letter | upcase }}</span> {% endif %}{% endfor %}
</div>

<dl class="glossary-list">
{% assign lastLetter = '' %}
{% for entry in glossary.entries %}
{% assign thisLetter = entry.term | downcase | slice: 0 %}
<dt id="#{{ entry.term | downcase | replace: ' ', '-' }}">{% if thisLetter != lastLetter %}<span id='#{{ thisLetter }}'></span>{% endif %}{% if entry.aat %}<a href="http://vocab.getty.edu/page/aat/{{ entry.aat }}" target="_blank">{{ entry.term | markdownify }}</a>{% else %}{{ entry.term | markdownify }}{% endif %}</dt>
{% assign lastLetter = thisLetter %}
{% if entry.definition %}
<dd>{{ entry.definition | markdownify }}{% if entry.see_also %} See also {% for term in entry.see_also %}{% if forloop.first == true %}{% elsif forloop.length == 2 and forloop.last == true %} and {% elsif forloop.length > 2 and forloop.last == true %}, and {% elsif forloop.length > 2 and forloop.last != true %}, {% endif %}<a href="#{{ term | downcase | replace: ' ', '-' }}"><em>{{ term }}</em></a>{% endfor %}.{% endif %}</dd>
{% elsif entry.see %}
<dd>See {% for term in entry.see %}{% if forloop.first == true %}{% elsif forloop.length == 2 and forloop.last == true %} and {% elsif forloop.length > 2 and forloop.last == true %}, and {% elsif forloop.length > 2 and forloop.last != true %}, {% endif %}<a href="#{{ term | downcase | replace: ' ', '-' }}"><em>{{ term }}</em></a>{% endfor %}.</dd>
{% endif %}
{% endfor %}
</dl>


