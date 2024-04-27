import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"
import PropTypes from "prop-types"

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={3} />
      <spotLight
        position={[-1, 3, 1]}
        angle={1}
        penumbra={1}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if the user is on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 650px)")

    // Set the initial state of the isMobile state
    setIsMobile(mediaQuery.matches)

    // Update the isMobile state when the user changes the viewport
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    // Add the event listener to the mediaQuery
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the event listener when the component unmounts
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default ComputersCanvas
