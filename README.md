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

## Bad vs Good
To see the difference between a good graph of a repo and a poorly constructed one, you can view them with:

### Good
`git checkout master`

### Bad
`git checkout legacy`