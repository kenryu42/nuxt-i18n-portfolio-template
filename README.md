# Nuxt i18n Portfolio Template

![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/kenxdrgn/i18n-nuxt-portfolio-template?logo=lgtm&logoWidth=18) ![GitHub](https://img.shields.io/github/license/kenxdrgn/i18n-nuxt-portfolio-template?color=brightgreen)

## A multi-language🌎 portfolio template for Developers.

<br>

### Lighthouse Score:

<p align="center"><b>Desktop</b></p>

<p align="center">
<img src="readme_file/nuxt-i18n-desktop.jpeg" alt="i18n-lighthouse-desktop" />
</p>

<br>

<p align="center"><b>Mobile</b></p>

<p align="center">
<img src="readme_file/nuxt-i18n-mobile.jpeg" alt="i18n-lighthouse-mobile" />
</p>


<br>

### Desktop View:

<img src="readme_file/i18n-nuxt.gif" width="800px" />

---

<br>

### Mobile View:

<img src="readme_file/i18n-nuxt_mobile.gif" height="800px" />

---

# Features

✅ **Internationalization** 🌐

✅ **Mobile-first UI Design** 📱

✅ **Fully Responsive** 🖥

✅ **Full Static Generation** 🚀

✅ **Styled with Tailwindcss 2.0** 🎨

✅ **Dark Mode (Auto & Manual)** 🌚

<br>

[![Demo Example](https://img.shields.io/badge/-Demo%20Example%20🚀-informational?style=for-the-badge)](https://nuxt-i18n.web.app/)

<br>

[![Live Example](https://img.shields.io/badge/-Live%20Example%20🚀-success?style=for-the-badge)](https://liewjenglung.com/)

# Usage

```bash
# Download this repository to local machine
$ git clone https://github.com/kenxdrgn/nuxt-i18n-portfolio-template

# Go into the repository
$ cd nuxt-i18n-portfolio-template

# Install dependencies
$ npm install

# Serve with hot reload at localhost:3000
$ npm run dev
```

```bash
# build for production and launch server
$ npm run build
$ npm run start
```

```bash
# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



# Language

nuxt.config.js

```javascript
export default {
  /*
   ** You can edit i18n config here
   */
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en_US',
        file: 'en.json'
      },
      {
        code: 'jp',
        iso: 'ja_JP',
        file: 'jp.json'
      },
      {
        code: 'cn',
        iso: 'zh_CN',
        file: 'cn.json'
      }
    ],
    lazy: true,
    langDir: 'lang/',
  },
}
```

The language json files are in the **lang** directory.

```
lang
├── cn.json
├── en.json
└── jp.json
```

For more customization features, please refer to the [i18n documentation](https://i18n.nuxtjs.org/).

For lite version without i18n features, check out [lite-nuxt-portfolio-template](https://github.com/kenxdrgn/lite-nuxt-portfolio-template).

