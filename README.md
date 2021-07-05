# Zustand Todo Manager

Small todo manager project designed for testing purposes;

## Development Environment

- Please do install the project dependencies by running the following script:

```bash
  npm run install
```

- To start the development run:

```bash
  npm run start
```

- To run it alongside the _json-server_:

```bash
  npm run dev
```

## Libraries utilized

- React SPA, bootstraped with create-react-app typescript template;
- Zustand as its global state manager;
- Styled-Components. CSS-in-JS library;
- json-server in order to mock a simple REST backend;

## Folder structure

- Eventhough there is no such thing as __the__ right way of structuring it ([see explanation](https://react-file-structure.surge.sh/)), I tried [Grouping by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes);

## Considerations

- Although I am most excited about unit testing and I think it is of most importance, e.g. [istanbul-badges-readme](https://github.com/olavoparno/istanbul-badges-readme), I did not do any in this project. It should be tested;
- The __three dotted__ button on each __TODO__ could show an option to edit the very TODO with its __PUT__ method altogether;
- I am too outdated with styled-components which led to non-optimal componentization regarding its styling and semantics;

## 