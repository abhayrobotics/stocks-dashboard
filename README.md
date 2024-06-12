# SETUP
## Initialise App
-   cd to designated folder
-   npx create-react-app ./
-   delete the icon, and app.css code
-   create a component folder
-   Edit the App.js file
    
        import Body from "./components/Body";
        const App = () => {
        return (
            <div>
                    <Body />
            </div>
        )
        }
##    configure tailwind 
    - follow https://tailwindcss.com/docs/guides/create-react-app

##   configure react-router-dom
    - npm i -D react-router-dom
    - set up the main component as <Body /> in app.js
    - Set the path in the Body component using createBrowserRouter and RouterProvider methods
            
            import { RouterProvider, createBrowserRouter } from "react-router-dom";

            const Body = () => {
            const appRouter = createBrowserRouter([
                {
                path: "/",
                element: <DashBoard />,
                },
                {
                path: "/login",
                element: <Login />,
                },
            ]);
            return (
                <div>
                <RouterProvider router={appRouter} />
                </div>
            );
            };

            export default Body;
# configure firebase hosting
    - create a project in firebase website
    - npm install firebase
    - npm install -g firebase-tools
    - firebase login
    - firebase init
        - deploy  (optionally github action)
        - public directory to be :build 
        - single page app -NO
        - npm run build
    - firebase deploy