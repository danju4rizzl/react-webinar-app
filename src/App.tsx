import { ThemeProvider } from "@/components/theme-provider";
import { database } from "@/lib/firebase";
import "./App.css";
import LoginForm from "./components/login-form";
import { ModeToggler } from "./components/mode-toggler";

function App() {
  return (
    <main>
      <div className="dark:bg-neutral-900 max-w-full min-h-full h-screen grid grid-flow-col">
        <div className=" dark:text-neutral-100 p-24 space-y-8 grid justify-center content-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Let's get <span className="text-">creative!</span>
            </h1>
            <p className="scroll-m-20 text-md">Log in to Drawh.ai to start creating magic.</p>
          </div>

          <LoginForm />
          <ModeToggler />
        </div>

        <div
          className="p-24 "
          style={{
            backgroundImage: "url(/login-screen-bg-image.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </main>
  );
}

export default App;
