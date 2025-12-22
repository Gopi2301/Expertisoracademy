// src/main.jsx

// --- 1. Import Core React Libraries ---

// `createRoot` is the modern React 18+ API for creating the root of a React application.
// It enables concurrent features and provides better performance than the older `ReactDOM.render`.
import { createRoot } from 'react-dom/client';

// `BrowserRouter` is a component from React Router that uses the browser's History API
// (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
// It provides the routing context for all other React Router components (like <Routes>, <Route>, <Link>).
import { BrowserRouter } from 'react-router-dom';


// --- 2. Import Application-Specific Components and Context ---

// `App.jsx` is the main root component of your application. It contains the primary layout,
// header, footer, and the <Routes> definition for all your pages.
import App from './App.jsx';

// `CourseContextProvider` is a custom React Context Provider you've created.
// It's responsible for managing and providing state related to courses (e.g., fetching course data,
// managing the current course) to any child components that need it, without "prop drilling".
import CourseContextProvider from './context/CourseContextProvider.jsx';


// --- 3. Import Global Styles ---

// `index.css` contains your global styles, including Tailwind CSS base styles, components,
// and utilities. Importing it here ensures that these styles are applied to the entire application.
import './index.css';

import { FormProvider } from './context/FormContext.jsx';


// --- 4. Application Root Creation and Rendering ---

// First, we get a reference to the root DOM element in your `index.html` file.
// This is the anchor point where your entire React application will be mounted.
const rootElement = document.getElementById('root');

// Next, we use `createRoot` to initialize the React application at that anchor point.
const root = createRoot(rootElement);

// Finally, we call `root.render()` to render your application's component tree.
// The component tree is wrapped in providers to make their context available to all children.
root.render(
  // <BrowserRouter> must wrap your entire application (or at least the part that uses routing)
  // to provide the necessary routing context.
  <BrowserRouter>
    <FormProvider>
      {/* By wrapping <App /> with <CourseContextProvider>, you ensure that any component
        inside <App> can access the course context via the `useContext` hook. */}
      <CourseContextProvider>

        {/* <App /> is the entry point of your component hierarchy. */}
        <App />

      </CourseContextProvider>
    </FormProvider>
  </BrowserRouter>
);

// Note on <StrictMode>:
// React's <StrictMode> is a development tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants. It does not render any visible UI
// and only runs in development mode. It's good practice to wrap your app in <StrictMode> during
// development to catch issues early, like so:
//
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       ...
//     </BrowserRouter>
//   </React.StrictMode>
// );
//