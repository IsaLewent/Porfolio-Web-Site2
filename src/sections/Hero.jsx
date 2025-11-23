import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet.jsx";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import HeroContinue from "./HeroContinue.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help growing brands and startups 
  gain an unfair advantage through 
  premium driven webs/aps`;
  return (
    <div className="">
      <section id="Home" className="flex flex-col justify-center min-h-screen ">
        <AnimatedHeaderSection
          subtitle={"404 No Bugs Found"}
          title={"Isa"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={false}
        />
        <figure
          className="absolute inset-0 -z-50"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas
            shadows
            camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          >
            <ambientLight intensity={0.75} />

            <Float speed={0.7}>
              <Planet scale={isMobile ? 0.7 : 1} />
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Canvas>
        </figure>
      </section>
      <HeroContinue />
    </div>
  );
};

export default Hero;
