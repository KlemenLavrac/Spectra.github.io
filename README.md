# SPECTRA — Landing Page & Documentation Site

A Jekyll-powered static site serving as the public-facing landing page, documentation hub, blog, and use case library for SPECTRA.

## Quick Start

```bash
# Install dependencies (requires Ruby >= 3.1)
bundle install

# Run locally
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

The site will be available at `http://localhost:4000`.

### Troubleshooting `bundle install`

**`cannot load such file -- webrick`** — Already fixed in this Gemfile (webrick is included). If you still see it, run `gem install webrick`.

**`Gem::Ext::BuildError` or native extension errors** — Install build tools:
```bash
# macOS
xcode-select --install

# Ubuntu/Debian
sudo apt-get install build-essential ruby-dev

# Fedora
sudo dnf install gcc gcc-c++ make ruby-devel
```

**`Your Ruby version is X but your Gemfile specified Y`** — Install Ruby 3.1+ via [rbenv](https://github.com/rbenv/rbenv) or [asdf](https://asdf-vm.com):
```bash
# rbenv
rbenv install 3.3.0
rbenv local 3.3.0

# asdf
asdf install ruby 3.3.0
asdf local ruby 3.3.0
```

**Permission errors on macOS** — Don't use system Ruby. Use rbenv/asdf, or prefix with:
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

## Directory Structure

```
├── _config.yml          # Site-wide configuration, nav links, collections
├── _layouts/
│   ├── default.html     # Base layout (head, nav, footer)
│   ├── landing.html     # Scroll-snap landing page
│   ├── doc.html         # Documentation pages
│   ├── post.html        # Blog posts
│   └── usecase.html     # Industry use cases
├── _includes/
│   ├── head.html        # <head> with meta, fonts, CSS
│   ├── nav.html         # Navigation bar (letter nav + standard links)
│   └── footer.html      # Site footer
├── _docs/               # Documentation collection (auto-routed to /docs/:slug/)
├── _usecases/           # Use case collection (auto-routed to /usecases/:slug/)
├── _posts/              # Blog posts (standard Jekyll blog)
├── assets/
│   ├── css/main.css     # All styles (design tokens, layouts, components)
│   └── js/landing.js    # Landing page scroll-snap + letter nav logic
├── docs/index.html      # Documentation listing page
├── blog/index.html      # Blog listing page
├── usecases/index.html  # Use cases listing page
└── index.html           # Landing page content
```

## Adding Content

### New documentation page

Create a file in `_docs/`:

```markdown
---
title: Your Page Title
description: Short description for the listing card.
category: Setup
order: 6
---

Your markdown content here.
```

### New blog post

Create a file in `_posts/` with the date prefix:

```markdown
---
title: "Your Post Title"
date: 2026-05-01
author: Your Name
---

Post content here.
```

### New use case

Create a file in `_usecases/`:

```markdown
---
title: "Company X Reduces Batch Failures by 40%"
description: Short summary for the card.
industry: Pharma
---

Use case content here.
```

## Customization

All design tokens live in CSS custom properties at the top of `assets/css/main.css`:

```css
:root {
    --brand: #1a2634;
    --brand-light: #2c3e50;
    --off-white: #f4f6f8;
    --nav-height: 3.5rem;
    /* ... */
}
```

Navigation links are configured in `_config.yml` under `nav_links`.

## Deployment

Build the `_site/` folder and deploy to any static host (GitHub Pages, Netlify, Cloudflare Pages, S3):

```bash
bundle exec jekyll build
# _site/ contains the production build
```

For GitHub Pages, push to the `gh-pages` branch or configure in repository settings.
