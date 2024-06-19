# SETUP

## Tech Stack
-   React
-   react-rounter-dom for navigation
-   Tailwind for Styling
-   React-redux for store
-   Firebase Authentication
-   Firebase Hosting
-   chartjs


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
## configure firebase hosting
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

## configure Github
    - create a repo in github website
        git add .
        git commit -m "commit statement"
        git remote add origin https://github.com/abhayrobotics/stocks-dashboard.git
        git branch -M main
        git push -u origin main

## configure Redux
    -   npm install @reduxjs/toolkit react-redux
    -   create a appstore.js file 
            import {configureStore} from "@reduxjs/toolkit";
            const appStore = configureStore({
                reducer:{
                    stock:stockReducer

                }
            })

            export default appStore

    - add store in our app.js
            const App = () => {
                return (
                    <div>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                    </div>
                );
                };
    - create StockSlice.js
                import { createSlice } from "@reduxjs/toolkit";

                const stockSlice = createSlice({
                    name:"stock",
                    initialState:{
                        stockId :null,
                        stockname:null
                    },
                    reducers:{
                        addStockName:(state,action)=>{
                            state.stockname = action.payload;
                        }
                    }
                })

                export const {addStockName}  = stockSlice.actions
                export default stockSlice.reducer


## Design Guide
    - <DashBoard>
        -   <header>
            -   <Login>
        -   <searchBar>
            -   <Suggestion>
           
        -   <StockDetails />
                -   <StockDescription content={stockDetails[0]} />
                -   <StockChart/>
   

## Work flow -Developer Guide
-   initialise app
-   configure tailwind
-   configure react-router
-   configure firebase Hosting
-   Configure Github
-   setup API financialmodelling prep (250 request per day)
-   search Api request
-   creating 2nd api if first api limit crossed.
-   setup redux store
-   Search flow
    -   adding search data in stockslice in stockList variable using useDispatch(addStcockList(json))
    -   using the data to show data in Suggestion component using useSelector
    -   using onclick method to save the symbol in redux store stockname
    -   creating useStockinfo Hook to search stock details and saving the data in redux store
    -   using the data to show company details
-   charts
-   npm install --save chart.js react-chartjs-2
-   data extracted and saved in redux store
-   pending chart


    

       


# features to add
-  color based theme
-  stock search 
-  stock details
    - info
    - financial
    - ratios
-  Api limit crossed for the day.- hardcoded data for top 50 companies.
-  Use chartjs to show the chart
    -three chart

# Prefixed 
- button- mx-2 px-4 py-0.5
- any component - bg-white bg-opacity-20  w-[80%] sm:w-[100%] py-3 px-3 