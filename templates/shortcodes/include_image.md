{# ensure image exists #} {% set _ = get_image_metadata(path=page.path ~ path) %}
{% set image = get_url(path=page.path ~ path) %}

<p>
  <img src="{{ image }}" />
</p>
