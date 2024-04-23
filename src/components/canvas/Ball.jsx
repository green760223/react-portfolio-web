import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"
import CanvasLoader from "../Loader"
import PropTypes from "prop-types"

const Ball = (prop) => {
  const [decal] = useTexture([prop.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          flatShading
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default BallCanvas
