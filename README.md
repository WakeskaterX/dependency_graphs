# dependency_graphs
A repository showcasing madge and how it can help you graph dependencies and clean up your services.

## Installation

### Madge
`npm i -g madge`

### GraphVis

Mac OSX
`brew install graphviz || port install graphviz`

Ubuntu
`apt-get install graphviz`

## Usage

### To Generate a Graph
`madge --image graph.svg path/src/app.js`

For example, from the root of this project:
`madge --image ./graphs/main.svg ./main.js`

