import Lesson from './Components/Lesson/Lesson'
import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Introducion from './Components/Week1Component/Introduction/Introducion';
import Features from './Components/Week1Component/Features/Features';
import Usage from './Components/Week1Component/Usage/Usage';
import Interaction from './Components/Week1Component/Interaction/Interaction';
import Preparation from './Components/Week1Component/Preparation/Preparation';
import Week1quiz from './Components/Week1Component/Week1quiz/Week1quiz';
import Week1Copy from './Components/Week1Copy';
import IntroductionCopy from './Components/IntroductionCopy';
import FeaturesCopy from './Components/Week1Component/Features/FeaturesCopy';
import InteractionCopy from './Components/Week1Component/Interaction/InteractionCopy';
import PreparationCopy from './Components/Week1Component/Preparation/PreparationCopy';
import UsageCopy from './Components/Week1Component/Usage/UsageCopy';
import Week1quizCopy from './Components/Week1Component/Week1quiz/Week1quizCopy';
const Applayout = ()=>{
  return(
    <>
      <Lesson/>
    </>
  )
}


const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>
  },
  {
    path:"/introduction",
    element:<Introducion/>
  },
  {
    path:"/features",
    element:<Features/>
  },
  {
    path:"/usage",
    element:<Usage/>
  },
  {
    path:"/interaction",
    element:<Interaction/>
  },
  {
    path:"/preparation",
    element:<Preparation/>
  },
  {
    path:"/week-1-quiz",
    element:<Week1quiz/>
  },
  {
    path:"/introductionCopy",
    element:<IntroductionCopy/>
  },
  {
    path:"/featuresCopy",
    element:<FeaturesCopy/>
  },
  {
    path:"/usageCopy",
    element:<UsageCopy/>
  },
  {
    path:"/interactionCopy",
    element:<InteractionCopy/>
  },
  {
    path:"/preparationCopy",
    element:<PreparationCopy/>
  },
  {
    path:"/week-1-quizCopy",
    element:<Week1quizCopy/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)