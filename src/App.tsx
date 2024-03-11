import { database } from '@/lib/firebase'
import './App.css'
import SignUpForm from './components/signup-form'
const imgSrc =
  'https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg'
// console.log(database)

function App() {
  return (
    <main>
      <div className="max-w-full min-h-full h-screen   grid grid-flow-col ">
        <div className="bg-slate-200 p-16">
          <SignUpForm />
        </div>
        <div
          className=""
          style={{
            backgroundImage: 'url(/bg-image.jpeg)'
          }}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Sign up here
          </h1>
        </div>
      </div>
    </main>
  )
}

export default App
