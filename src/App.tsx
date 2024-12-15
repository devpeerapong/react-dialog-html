import { useState } from "react";
import { Dialog } from "./Dialog";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-slate-200 p-4">
      <div className="mx-auto flex max-w-lg flex-col gap-4">
        <h1 className="text-2xl font-bold">React Dialog HTML</h1>
        <button
          onClick={() => setOpen(true)}
          className="rounded-2xl bg-blue-300 px-4 py-2 hover:bg-blue-400"
        >
          Open Dialog
        </button>
        <button
          onClick={() => setIsFullscreenOpen(true)}
          className="rounded-2xl bg-blue-300 px-4 py-2 hover:bg-blue-400"
        >
          Open Fullscreen Dialog
        </button>
        <div className="min-h-dvh rounded-2xl bg-slate-300 p-4 leading-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ullam
          molestiae? Corrupti unde magni ipsa atque dolores animi, quidem
          quibusdam velit aut sit laudantium ex odio optio. Corrupti, voluptatum
          est!
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <div className="flex max-w-md flex-col gap-4 rounded-2xl bg-white p-4">
          <h1 className="text-xl font-bold">Modal Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quam
            laboriosam eum quod velit voluptatibus consectetur assumenda dolor.
            Similique cupiditate praesentium et saepe odit, architecto accusamus
            incidunt soluta. Reiciendis, obcaecati?
          </p>
          <div className="text-right">
            <button
              autoFocus
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-2 hover:underline"
            >
              Close
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-green-300 px-4 py-2 hover:bg-green-400"
            >
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog
        fullscreen
        open={isFullscreenOpen}
        onOpenChange={setIsFullscreenOpen}
      >
        <div className="flex h-full flex-col gap-4 bg-white p-4">
          <h1 className="text-xl font-bold">Fullscreen Modal Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quam
            laboriosam eum quod velit voluptatibus consectetur assumenda dolor.
            Similique cupiditate praesentium et saepe odit, architecto accusamus
            incidunt soluta. Reiciendis, obcaecati?
          </p>
          <div className="text-right">
            <button
              onClick={() => setIsFullscreenOpen(false)}
              className="rounded-2xl px-4 py-2 hover:underline"
            >
              Close
            </button>
            <button
              onClick={() => setIsFullscreenOpen(false)}
              className="rounded-2xl bg-green-300 px-4 py-2 hover:bg-green-400"
            >
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
