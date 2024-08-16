# 2024 React Workshop

## Prerequisite

- Install extensions [Wave](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) ([Firefox](https://addons.mozilla.org/en-CA/firefox/addon/wave-accessibility-tool/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)), [HeadingsMap](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) ([Firefox](https://addons.mozilla.org/en-CA/firefox/addon/headingsmap/)) and [Axe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) ([Firefox](https://addons.mozilla.org/en-CA/firefox/addon/axe-devtools/))
- Optional extensions and tools:
- - [Accessibility checker extension](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?pli=1) ([Firefox](https://addons.mozilla.org/en-CA/firefox/addon/accessibility-checker/))
- - [VisBug extension](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?pli=1) ([Firefox](https://addons.mozilla.org/en-CA/firefox/addon/visbug/))
- Participants should bring their laptops with access to GitHub (each participant will get an invitation to an organization or a coupon for complimentary Copilot access).
- Basic accessibility knowledge (not mandatory)
- [Visual Studio Code](https://code.visualstudio.com/)
- Basic knowledge of React 
- Sample code snippets and exercises will be provided by the workshop facilitators.
- Snacks and water


# Samle app

This is a basic React application created using TypeScript.

## Project Structure

```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   �   └── App.tsx
│   │   └── Contact.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## File Descriptions

- `public/index.html`: This file is the HTML template for the React application. It includes a div element with an id of "root" where the React components will be rendered.

- `src/components/App.tsx`: This file exports a functional component `App` which serves as the root component of the application. It can be customized to include other components and logic.

- `src/components/Contact.tsx`: This file exports a functional component `Contact` which includes a form to contact us. It contains input fields for name, email, and message, and a submit button.

- `src/index.tsx`: This file is the entry point of the React application. It renders the `App` component into the DOM element with the id "root".

- `src/react-app-env.d.ts`: This file is a declaration file that allows you to extend the global types in your React application.

- `src/types/index.ts`: This file exports interfaces or types that can be used throughout the application.

- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

- `README.md`: This file contains the documentation for the project.
