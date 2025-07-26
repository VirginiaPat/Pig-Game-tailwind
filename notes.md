# Simple Tailwind Starter

This is a simple Tailwind starter project using the Tailwind CLI. It is meant to be used as a starting point for your projects. This is the same setup used in my [Tailwind From Scratch Course](https://www.traversymedia.com/tailwind-css-course).

## Usage

Clone the repo:

```bash
git clone
```

Install the dependencies:

```bash
npm install
```

Build or watch the CSS file:

```bash
# Build once
npm run build

# Watch for changes
npm run watch

#To start lite-live server(my addition):
npm start
```

This will watch the `src/input.css` file and build it to `css/style.css`, which will be your final CSS file.

## License

This project is open source and available under the [MIT License](LICENSE).

/////////////////////////////////////////////////////////////////////////////////////////////////////
//As alternative, instead of often glitchy built-in live server, I installed lite-server:
npm install --save-dev lite-server

added "start": "lite-server" to the scripts

      "scripts": {
        "build": "tailwindcss -i ./input.css -o ./css/style.css",
        "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch",
        "start": "lite-server"
      },

and started it by

    npm start

Then opened http://localhost:3000/ on the frontend.


