import BackgroundMusic from "@/components/BackgroundMusic";
import Timeline from "../components/Timeline";
import RoseIntro from "@/components/RoseIntro";
import Petals from "@/components/Petals";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import Future from "@/components/Future"

export default function Home() {

  return <main className="relative min-h-screen bg-gradient-to-b from-rose-100 via-pink-50 to-pink-50">
    <BackgroundMusic />
    <RoseIntro />
    <Petals />
    <Timeline />
    <Gallery />
    <LoveLetter />
    <Future />
  </main>;
}
