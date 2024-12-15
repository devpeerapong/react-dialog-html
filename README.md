# React Dialog Demo

This repository demonstrates the use of the `<dialog>` HTML element in a React application. The `Dialog` component integrates the native `<dialog>` tag with React's state management, leveraging React Portals to render the dialog element directly in the `<body>` of the document. This ensures proper isolation and consistent behavior, regardless of where the component is used in the React tree.

- **React integration**: Utilizes the `<dialog>` HTML tag with a custom React component for declarative usage.
- **Portal rendering**: The dialog is rendered in the `<body>` using React Portals for consistent and isolated behavior.
- **Accessibility**: Ensures proper management of focus and screen overflow when the dialog is open.
- **Fullscreen support**: Includes a customizable `fullscreen` mode.
- **Scroll locking**: Automatically locks scrolling on the `<body>` when the dialog is open to prevent background interaction.
- **Event handling**: Handles `open` and `close` state changes via controlled props.

## Usage

The custom `Dialog` component provides an easy-to-use interface to incorporate a modal in your React applications. Here's an example:

```jsx
import { useState } from "react";
import { Dialog } from "./Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <h1>Hello, World!</h1>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Dialog>
    </div>
  );
}
```
