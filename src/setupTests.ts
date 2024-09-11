// src/setupTests.ts
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// Add a div with the ID 'root' to the document body
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
