# [PolyQuity website](https://polyquity-epfl.github.io/)

## build

it uses [Zola](https://www.getzola.org/) to generate a static website.

it is automatically built and deployed via GitHub Actions.

## update content

### the easy way

- go to the section director you want to add to and
  click on the file you want to modify or
  create a new file with the "add file" button (with a ".md" extension)
  - if you need to create an intermediate directory,
    write the name of the directory then a slash in the filename
- use the template in each section as a starting point or write what you want
- open a [pull request (PR)](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/)
  using the "commit changes…" button
- now the changes can be seen, discussed and modified on the opened PR
- when everyone agrees with the changes,
  it will be merged and deploy to the real website

### the hard way

- clone the repository using `git`
- spin a local server for preview with `zola serve` & open a browser to it
- update the website as wanted
- commit, make a PR and discuss until agreement

### syntax

the pages in the [content](./content) folder
are written using [Markdown](https://commonmark.org/),
a human readable way to format text, see link for information on the syntax.
every file ending in `.md` uses this format.

the Markdown files in there are augmented with
a metadata block at the beginning of the file,
enclosed between `+++` markers.
its content varies between each section and documented below.
it is written in [TOML](https://toml.io/).

there is a special marker, `<!-- more -->`,
which separates the introduction
from the body of text.

## sections

there are multiple sections where you can add content,
each with its own specificities.

sections usually have a presentation page that is described
in its `_index.md` file.

### [events](./content/events)

every past and upcoming events.

#### template

```markdown
+++
title = "Event title"
date = 2024-11-15

[extra]
location = "Where it is"
image = "filename.jpg" # optional
start = 09:15:00 # optional
end = 11:00:00 # optional
+++

Very few line of introduction.

<!-- more -->

The rest of the page.
```

note that "date", "start" & "end" are written, without quotes, in the
[ISO datetime](https://en.wikipedia.org/wiki/ISO_8601) format,
the first one is a date, the latters are times.

if you want to add an image, instead of creating a Markdown file,
create a directory (without ".md" extension) and put the template
inside it under "index.md". you can then put your image in the same folder
and write its filename in the "image" metadata field. 

### [blog](./content/blog)

for statements, reviews and more.

### single page sections

some sections are composed of a single page

- [paye-ton-epfl](./content/paye-ton-epfl.md) to describe the project and offer resources
- [support](./content/support.md) for helpful links and way to contact
