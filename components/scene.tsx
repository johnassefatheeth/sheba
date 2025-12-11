"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0))
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0))
  const scrollYRef = useRef(0)
  const basePositionsRef = useRef<Float32Array | null>(null)
  const scatterPositionsRef = useRef<Float32Array | null>(null)
  const scatterVelocityRef = useRef<Float32Array | null>(null)
  const positionAttrRef = useRef<THREE.BufferAttribute | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const particlesAltRef = useRef<THREE.Points | null>(null)
  const materialRef = useRef<THREE.PointsMaterial | null>(null)
  const materialAltRef = useRef<THREE.PointsMaterial | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 36

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Helper to read scroll Y from the actual scrolling element
    const readScrollY = () => {
      const scrollingElement = document.scrollingElement || document.documentElement
      return scrollingElement?.scrollTop ?? window.scrollY
    }

    // Build logo-shaped particles from the SVG in /public
    const loadLogoPoints = async () => {
      const response = await fetch("/sheba-logo22.svg")
      const svgText = await response.text()

      const img = new Image()
      const svgBlob = new Blob([svgText], { type: "image/svg+xml" })
      const url = URL.createObjectURL(svgBlob)

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = reject
        img.src = url
      })

      const targetWidth = 340
      const aspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1
      const width = targetWidth
      const height = Math.max(160, Math.round(targetWidth / aspect))
      const canvas = document.createElement("canvas")
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext("2d")
      if (!ctx) throw new Error("Canvas not supported")

      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(img, 0, 0, width, height)
      const imageData = ctx.getImageData(0, 0, width, height).data

      const rawPoints: number[] = []
      const sampleStep = 2
      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const idx = (y * width + x) * 4
          if (imageData[idx + 3] > 100) {
            rawPoints.push(x - width / 2, height / 2 - y, (Math.random() - 0.5) * 2)
          }
        }
      }

      URL.revokeObjectURL(url)
      if (!rawPoints.length) throw new Error("No visible pixels in SVG")

      const total = rawPoints.length / 3
      const targetCount = Math.min(2600, Math.max(1400, Math.floor(total * 0.9)))
      const positions = new Float32Array(targetCount * 3)
      const spreadScale = 0.18
      for (let i = 0; i < targetCount; i++) {
        const pick = Math.floor(Math.random() * total) * 3
        positions[i * 3] = rawPoints[pick] * spreadScale
        positions[i * 3 + 1] = rawPoints[pick + 1] * spreadScale
        positions[i * 3 + 2] = rawPoints[pick + 2]
      }

      return positions
    }

    const buildScatterPositions = (count: number) => {
      const scatter = new Float32Array(count)
      for (let i = 0; i < count; i += 3) {
        scatter[i] = THREE.MathUtils.randFloatSpread(140)
        scatter[i + 1] = THREE.MathUtils.randFloatSpread(140)
        scatter[i + 2] = THREE.MathUtils.randFloatSpread(80)
      }
      return scatter
    }

    const buildScatterVelocities = (count: number) => {
      const vel = new Float32Array(count)
      for (let i = 0; i < count; i += 3) {
        vel[i] = THREE.MathUtils.randFloatSpread(0.15)
        vel[i + 1] = THREE.MathUtils.randFloatSpread(0.15)
        vel[i + 2] = THREE.MathUtils.randFloatSpread(0.08)
      }
      return vel
    }

    const makeSprite = (shape: "circle" | "triangle") => {
      const size = 64
      const canvas = document.createElement("canvas")
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext("2d")
      if (!ctx) return null
      ctx.clearRect(0, 0, size, size)
      ctx.fillStyle = "white"
      if (shape === "circle") {
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, size / 2.4, 0, Math.PI * 2)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.moveTo(size / 2, size * 0.15)
        ctx.lineTo(size * 0.85, size * 0.85)
        ctx.lineTo(size * 0.15, size * 0.85)
        ctx.closePath()
        ctx.fill()
      }
      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    const circleMap = makeSprite("circle")
    const triangleMap = makeSprite("triangle")

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.18,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.1,
      map: circleMap ?? undefined,
    })

    // Secondary material for some triangle sprites to break uniformity
    const particlesMaterialAlt = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.18,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.1,
      map: triangleMap ?? undefined,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    const particlesAlt = new THREE.Points(particlesGeometry, particlesMaterialAlt)
    scene.add(particles)
    scene.add(particlesAlt)
    particlesRef.current = particles
    particlesAltRef.current = particlesAlt
    materialRef.current = particlesMaterial
    materialAltRef.current = particlesMaterialAlt

    // Seed scroll value immediately
    scrollYRef.current = readScrollY()

    const seedBlankGeometry = () => {
      // Small placeholder cloud so something renders immediately
      const placeholder = new Float32Array(300 * 3)
      for (let i = 0; i < placeholder.length; i += 3) {
        placeholder[i] = THREE.MathUtils.randFloatSpread(30)
        placeholder[i + 1] = THREE.MathUtils.randFloatSpread(30)
        placeholder[i + 2] = THREE.MathUtils.randFloatSpread(10)
      }
      const positionAttr = new THREE.BufferAttribute(placeholder, 3)
      particlesGeometry.setAttribute("position", positionAttr)
      positionAttrRef.current = positionAttr
    }

    seedBlankGeometry()

    const initLogoParticles = async () => {
      try {
        const basePositions = await loadLogoPoints()
        const scatterPositions = buildScatterPositions(basePositions.length)
        const scatterVelocities = buildScatterVelocities(basePositions.length)
        const workingPositions = new Float32Array(basePositions.length)
        workingPositions.set(basePositions)

        const positionAttr = new THREE.BufferAttribute(workingPositions, 3)
        particlesGeometry.setAttribute("position", positionAttr)
        particlesGeometry.computeBoundingSphere()

        basePositionsRef.current = basePositions
        scatterPositionsRef.current = scatterPositions
        scatterVelocityRef.current = scatterVelocities
        positionAttrRef.current = positionAttr
      } catch (error) {
        console.error("Failed to build logo particles", error)
        // Fallback to a random scatter if SVG load fails
        const fallback = buildScatterPositions(1600)
        const fallbackVel = buildScatterVelocities(fallback.length)
        const positionAttr = new THREE.BufferAttribute(fallback, 3)
        particlesGeometry.setAttribute("position", positionAttr)
        particlesGeometry.computeBoundingSphere()
        basePositionsRef.current = fallback
        scatterPositionsRef.current = buildScatterPositions(fallback.length)
        scatterVelocityRef.current = fallbackVel
        positionAttrRef.current = positionAttr
      }
    }

    initLogoParticles()

    // Pointer movement state
    const handlePointerMove = (event: PointerEvent) => {
      // Normalize pointer to [-1, 1] range to drive parallax
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      pointerTargetRef.current.set(x, y)
    }
    window.addEventListener("pointermove", handlePointerMove)
    const handleScroll = () => {
      scrollYRef.current = readScrollY()
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()
      const scrollY = scrollYRef.current
      const scrollMax = Math.max(1, (document.documentElement.scrollHeight || 1) - window.innerHeight)
      const scrollProgress = Math.min(1, Math.max(0, scrollY / scrollMax))
      const morph = scrollProgress < 0.5 ? scrollProgress * 2 : (1 - scrollProgress) * 2
      const scale = 1 + morph * 0.6

      if (
        basePositionsRef.current &&
        scatterPositionsRef.current &&
        positionAttrRef.current &&
        materialRef.current &&
        scatterVelocityRef.current
      ) {
        const base = basePositionsRef.current
        const scatter = scatterPositionsRef.current
        const scatterVel = scatterVelocityRef.current
        const posAttr = positionAttrRef.current
        const arr = posAttr.array as Float32Array

        for (let i = 0; i < arr.length; i += 3) {
          const bx = base[i] * scale
          const by = base[i + 1] * scale
          const bz = base[i + 2] * scale
          const sx = scatter[i]
          const sy = scatter[i + 1]
          const sz = scatter[i + 2]

          const tx = bx + (sx - bx) * morph
          const ty = by + (sy - by) * morph
          const tz = bz + (sz - bz) * morph

          // Add gentle jitter while scattered
          if (morph > 0.35) {
            arr[i] += scatterVel[i] * morph
            arr[i + 1] += scatterVel[i + 1] * morph
            arr[i + 2] += scatterVel[i + 2] * morph

            // soft bounds to keep particles in view
            if (Math.abs(arr[i]) > 160) scatterVel[i] *= -1
            if (Math.abs(arr[i + 1]) > 160) scatterVel[i + 1] *= -1
            if (Math.abs(arr[i + 2]) > 100) scatterVel[i + 2] *= -1
          }

          // Smoothly blend towards target for a softer morph
          arr[i] = THREE.MathUtils.lerp(arr[i], tx, 0.18)
          arr[i + 1] = THREE.MathUtils.lerp(arr[i + 1], ty, 0.18)
          arr[i + 2] = THREE.MathUtils.lerp(arr[i + 2], tz, 0.18)
        }

        posAttr.needsUpdate = true
        materialRef.current.opacity = THREE.MathUtils.lerp(0.6, 0.18, morph)
        if (materialAltRef.current) {
          materialAltRef.current.opacity = materialRef.current.opacity
        }
        const rotY = elapsedTime * 0.08
        particlesRef.current?.rotation.set(0, rotY, 0)
        particlesAltRef.current?.rotation.set(0, rotY, 0)
      }

      // Subtle camera sway on time for perceived motion even without scrolling
      camera.position.z = 30 + Math.cos(elapsedTime * 0.2) * 1.5

      // Pointer-driven parallax
      pointerCurrentRef.current.lerp(pointerTargetRef.current, 0.06)
      camera.position.x = pointerCurrentRef.current.x * 3
      camera.position.y = pointerCurrentRef.current.y * 2

      // Scroll-linked camera depth
      camera.position.z = 30 - scrollY * 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameRef.current)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
