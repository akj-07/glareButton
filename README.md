# GlareButton

`GlareButton` is a customizable, animated button component for React applications. Perfect for adding modern and elegant UI elements to your projects.

## ✨ Features

- Customizable: Easily tweak styles, animations, and text.
- Predefined Styles: Includes default animated glare effects.
- Reusable: Drop-in component for quick integration.
- Lightweight: Minimal dependencies, fast rendering.
- Compatible: Supports React versions ^16.0.0 || ^17.0.0 || ^18.0.0.

## 📦 Installation

Install the package via npm or Yarn:

```bash

# Using npm
npm install glarebutton

# Using Yarn
yarn add glarebutton

```

## 🚀 Usage

Basic Example

```tsx
import React from "react";
import { GlareButton } from "glarebutton";

function App() {
  return (
    <div>
      <h1>Welcome to GlareButton</h1>
      <GlareButton
        icon="Provide a valid icon for image"
        iconAlt="Provide icon description"
        bgColor="#6139f0"
        padding="24px 40px"
        color="text-color"
      >
        Click Me
      </GlareButton>
    </div>
  );
}

export default App;
```

### 🙌 Contributing

We welcome contributions! If you have ideas, bug reports, or feature suggestions:

Fork the repository.
Create a new branch (git checkout -b feature/my-feature).
Commit your changes (git commit -m 'Add new feature').
Push your branch (git push origin feature/my-feature).
Open a pull request.

### 📝 License

This project is licensed under the MIT License.
