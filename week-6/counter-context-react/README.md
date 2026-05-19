# Counter Context React

## Features

- Global shared counter state via `React.createContext`
- `CounterContextProvider` wraps the app in `src/main.jsx`
- Tailwind CSS classes


## Project structure

- `src/main.jsx` - application entry point
- `src/App.jsx` - renders the main layout
- `src/components/CounterContextProvider.jsx` - context provider and shared counter state
- `src/components/Counter1.jsx` - counter component consuming context
- `src/components/Counter2.jsx` - counter component consuming context
- `src/components/Counter3.jsx` - counter component consuming context
- `src/components/Counter4.jsx` - counter component consuming context
- `src/components/RouterLayout.jsx` - grid layout for counter components

## How it works

The `CounterContextProvider` exposes:

- `counter` value
- `incrementCounter()` function
- `decrementCounter()` function

All counter components use `useContext(counterContextObj)` to read and update the shared state.
