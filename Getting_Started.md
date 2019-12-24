# Getting Started

> Every good story starts with an `npm install`

This first step is just a sanity checkup, to make sure everything works correctly.
We’ll start by adding `wix-style-react` and add a simple `Button` component.

## Installing wix-style-react
```bash
npm install wix-style-react -D
```

## Adding a Button component
Open `src/components/App.js` (or `src/App.js` if you are using create-react-app) and replace its content with the following lines of code:

```js
import React from 'react';
import Button from 'wix-style-react/Button';

export default () => (
  <Button>
    Hello world
  </Button>
);
```

If all went well, you should see a standard primary `wix-style-react` button appearing on the screen.

## Fonts
`wix-style-react` is using `Helvetica` as it's main fonts. You are also advised to enable font-smoothing to get sharp fonts.

To add the fonts, simply open your main `index.html/index.ejs` file and add the following snippet inside the `<head></head>` tag.

```html
<link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
<style>
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
  }
</style>
```

## What's next?
That's it, your app is running with a `wix-style-react` component and you're ready to start!

In the next step, we will introduce the very first basic concept of `wix-style-react` - layout.

Next step - [Layout](./Basic/Layout/Layout.md).
