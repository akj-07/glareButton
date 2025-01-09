# GlareButton

`GlareButton` is a customizable React button component with a modern, interactive hover effect. It features a glowing animation, a moving border, and can be styled easily through props to suit your needs.

### Features:
- Interactive hover effects (glow, border animation)
- Customizable background color, padding, and text
- Icon support alongside the text
- Easy integration with React and TypeScript

---

## Installation

To install the `GlareButton` component, you can use either `npm` or `yarn`:

### Using npm:
```bash
npm install glare-button


###Usage

```tsx
import { GlareButton } from 'glare-button';

const MyComponent = () => {
  return (
    <div>
      <GlareButton 
        bgColor="#ff6347" 
        padding="15px 30px" 
        onClick={() => alert("Button Clicked!")}
        icon="path/to/icon.png"
      >
        Click Me!
      </GlareButton>
    </div>
  );
};