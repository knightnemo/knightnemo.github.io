<h2 id="experience" style="margin: 2px 0px -15px;">Experience</h2>

<br>
<h3 id="academic-experience" style="margin: 20px 0px -10px;">Academic Experience</h3>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.academic_experience.academic %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 200; height=40%; object-fit: contain;">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
      {% if link.time %} 
      <div class="time">
      {{ link.time }}
      </div>
      {% endif %}
      {% if link.description %} 
      <div class="description">
      {{ link.description }}
      </div>
      {% endif %}
      {% if link.language %} 
      <div class="language">
      <strong>Language: </strong>{{ link.language }}</div>
      {% endif %}
    <div class="links">
      <!-- {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Lab Website</a>
      {% endif %} -->
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>

<h3 id="industry-experience" style="margin: 20px 0px -10px;">Industry Experience</h3>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.industry_experience.industry %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 200; height=40%; object-fit: contain;">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
      {% if link.time %} 
      <div class="time">
      {{ link.time }}
      </div>
      {% endif %}
      {% if link.description %} 
      <div class="description">
      {{ link.description }}
      </div>
      {% endif %}
      {% if link.language %} 
      <div class="language">
      <strong>Language: </strong>{{ link.language }}</div>
      {% endif %}
    <div class="links">
      <!-- {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Lab Website</a>
      {% endif %} -->
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>

