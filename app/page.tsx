import { About } from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 px-10">
      <Intro />
      <div className="my-6"/>
      <About />
    </main>
  );
}
