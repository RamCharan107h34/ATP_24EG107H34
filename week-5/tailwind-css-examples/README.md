# Introduction to Tailwind CSS

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Instead of writing custom CSS, you apply pre-built classes directly in your markup to style elements.

## Getting Started

### Installation

This project uses Tailwind CSS v4 with the CLI. The dependencies are already installed:

```json
{
  "dependencies": {
    "@tailwindcss/cli": "^4.2.2",
    "tailwindcss": "^4.2.2"
  }
}
```

### Setup

1. The CSS is imported in `src/input.css`:
   ```css
   @import "tailwindcss";
   ```

2. Build the CSS using the Tailwind CLI:
   ```bash
   npx @tailwindcss/cli -i src/input.css -o src/output.css --watch
   ```

3. Link the compiled CSS in your HTML:
   ```html
   <link href="./output.css" rel="stylesheet">
   ```


### Common Utilities

- **Spacing**: `m-4` (margin), `p-4` (padding), `mx-auto` (center)
- **Colors**: `bg-red-500`, `text-green-600`, `border-blue-300`
- **Typography**: `text-lg`, `font-bold`, `text-center`
- **Layout**: `flex`, `grid`, `block`, `inline-block`
- **Sizing**: `w-full`, `h-32`, `max-w-md`


## Project Structure

- `src/input.css`: Source CSS with Tailwind imports
- `src/output.css`: Compiled CSS (generated)
- `src/task1.html`, `task2.html`, `task3.html`: Example HTML files
- `src/images/`: Image assets

## Tasks

This project contains three tasks demonstrating different aspects of Tailwind CSS:

1. **Task 1**: Basic layout and styling
2. **Task 2**: Themed page layout with navigation, hero section, and grid-based content sections
3. **Task 3**: City guide layout with navbar, centered hero section, and multi-column article grid
