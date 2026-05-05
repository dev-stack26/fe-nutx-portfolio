# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```bash
# Node:

nvm install v24.14.1
nvm use 24.14.1
```

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Install

### 1. Tailwind

https://tailwindcss.nuxtjs.org/getting-started/installation

```bash
npm install -D @nuxtjs/tailwindcss

# add tailwind
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### 2. Eslint typescript

```bash
npm install -D @nuxt/eslint eslint typescript

# add eslint
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: {
    // options here
  }
})
```

### 3. Color mode

```bash
npm install @nuxtjs/color-mode

#add color mode
modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode',
  '@nuxt/eslint'
],

```

### 4. Nuxt content

https://content.nuxt.com/docs/getting-started/installation

```bash
npm install @nuxtjs/content

#add nuxt content module
modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode',
  '@nuxt/eslint',
  '@nuxt/content',
],

#add nuxt content config
content.config.ts
```

### 4. Taiwind typhography plugin

https://content.nuxt.com/docs/getting-started/installation

```bash
npm install -D @tailwindcss/typography

#add nuxt content config

```

### Plugins

#### 1. Vue (Official)

#### 2. Prettier ESLint Typescript

#### 3. Tailwind CSS IntelliSense
