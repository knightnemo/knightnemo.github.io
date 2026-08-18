<h2 id="publications" style="margin: 2px 0px 0px;">Publications</h2>

<p style="font-size:12px; color:#828282; margin: 5px 0px -10px;">* equal contribution&emsp;† project lead&emsp;‡ corresponding author</p>

<div class="publication-filter">
<input class="publication-filter-input" type="radio" id="pub-filter-selected" name="pub-filter" checked>
<label class="publication-filter-label" for="pub-filter-selected">Selected</label>
<span class="publication-filter-separator">|</span>
<input class="publication-filter-input" type="radio" id="pub-filter-all" name="pub-filter">
<label class="publication-filter-label" for="pub-filter-all">All</label>

<div class="publications publication-list publication-list-selected">
<ol class="bibliography">

{% for link in site.data.publications.main %}
{% if link.selected %}
{% include publication_entry.html link=link %}
{% endif %}
{% endfor %}
</ol>
</div>

<div class="publications publication-list publication-list-all">
<ol class="bibliography">

{% for link in site.data.publications.main %}
{% include publication_entry.html link=link highlight_selected=true %}
{% endfor %}
</ol>
</div>

</div>
