.PHONY: all
.DEFAULT_GOAL := all

.PHONY: fontawesome
all: fontawesome
FONT_AWESOME_VERSION := 6.6.0
private FONT_AWESOME_FILES := \
	$(addprefix sass/fontawesome/,fontawesome.scss brands.scss solid.scss) \
	$(addprefix static/fontawesome/webfonts/,fa-brands-400.woff2 fa-solid-900.woff2)
fontawesome: $(FONT_AWESOME_FILES)
$(FONT_AWESOME_FILES) &:
	curl 'https://use.fontawesome.com/releases/v${FONT_AWESOME_VERSION}/fontawesome-free-${FONT_AWESOME_VERSION}-web.zip' \
		> fontawesome.zip
	unzip -uj fontawesome.zip \
		'fontawesome-free-${FONT_AWESOME_VERSION}-web/scss/*' \
		-d sass/fontawesome
	mkdir -p static/fontawesome
	unzip -uj fontawesome.zip \
		'fontawesome-free-${FONT_AWESOME_VERSION}-web/webfonts/*' \
		-d static/fontawesome/webfonts
	rm fontawesome.zip
