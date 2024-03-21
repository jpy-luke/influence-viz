# Influence Product Browser

This is a graph display based browser for production chains in the [Influence](https://influenceth.io) game. It is built
using [Vue 3](https://vuejs.org/), utilizing the [Graphology](https://github.com/graphology/graphology) and
[Sigma.js](https://github.com/jacomyal/sigma.js) libraries for graph display.

Application can be found at https://influence-viz.threehappylads.fi.

This project is licensed under the AGPLv3 license. See the [LICENSE](LICENSE) file for details.

## Features

Currently this application presents an interface for adding products and production processes as a manually buildable
graph. The graph can be navigated and zoomed, and the nodes can be dragged around. Nodes may be selected from a list of
all products, or by clicking on them in the graph. When a node is selected, controls are presented for expanding the
graph from that node.

Now the features aim to answer the following questions:

* Where can I use a given product
* What other input products do I need for a given production process
* What do I need to produce a given product

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
