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
    - index.css    
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer base {
            :root {
                --main-color: #031d2a;
                --second-color: #fc8019;
            

            }
        }

        /* ********************** custom css CLass */
        @layer components {

            .x-btn {
                @apply border-[1px] border-gray-600 px-2 py-1 mx-2 font-medium rounded-md 
                        hover:text-second-color hover:border-second-color;
            }
            
            .__bannerScroll::-webkit-scrollbar{
                display: none;
            }

        }

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

# configure Github
    - create a repo in github website
        git add .
        git commit -m "commit statement"
        git remote add origin https://github.com/abhayrobotics/stocks-dashboard.git
        git branch -M main
        git push -u origin main

# configure Redux


## Design Guide
    - <DashBoard>
       - <header>
       - <search>
       - <Suggestion>

## Work flow -Developer Guide
-   

# Prefixed 
- button- mx-2 px-4 py-0.5
- any component - bg-white bg-opacity-20  w-[80%] sm:w-[100%] py-3 px-3 