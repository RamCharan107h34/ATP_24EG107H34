# React API Call UserCount
## About

- Fetches user data from `https://jsonplaceholder.typicode.com/users`
- Displays user cards with name and email
- Includes an `Add` button to increment a counter
- Built with React 19, Vite, and Tailwind CSS

## Project Structure

- `src/App.jsx` - main app component, handles API fetch, loading, and error states
- `src/components/APIUsers.jsx` - renders the user list and `Add` buttons
- `src/components/UserCount.jsx` - displays the current count

## Notes

- The app uses browser `fetch` inside a React `useEffect` hook.
- Loading and error states are handled before rendering the user list.
