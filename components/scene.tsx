"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

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

    // Gold material
    const goldMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    })

    // Create floating rings
    const rings: THREE.Mesh[] = []
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.TorusGeometry(8 + i * 3, 0.1, 16, 100)
      const ring = new THREE.Mesh(geometry, goldMaterial.clone())
      ring.position.z = -i * 15
      ring.rotation.x = Math.random() * Math.PI
      ring.rotation.y = Math.random() * Math.PI
      scene.add(ring)
      rings.push(ring)
    }

    // Create golden particles/orbs
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 100
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100
      positions[i + 1] = (Math.random() - 0.5) * 100
      positions[i + 2] = (Math.random() - 0.5) * 100
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Create golden lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.2,
    })

    for (let i = 0; i < 8; i++) {
      const lineGeometry = new THREE.BufferGeometry()
      const linePositions = new Float32Array([
        -50 + Math.random() * 100,
        -50 + Math.random() * 100,
        -50 + Math.random() * 50,
        -50 + Math.random() * 100,
        -50 + Math.random() * 100,
        -50 + Math.random() * 50,
      ])
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3))
      const line = new THREE.Line(lineGeometry, lineMaterial)
      scene.add(line)
    }

    // Scroll-linked camera movement
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate rings
      rings.forEach((ring, i) => {
        // Slightly faster spin so motion is visible at a glance
        ring.rotation.x += 0.005 * (i + 1)
        ring.rotation.y += 0.01 * (i + 1)
      })

      // Move particles
      particles.rotation.y = elapsedTime * 0.15
      particles.rotation.x = elapsedTime * 0.05

      // Subtle camera sway on time for perceived motion even without scrolling
      camera.position.x = Math.sin(elapsedTime * 0.2) * 2
      camera.position.z = 30 + Math.cos(elapsedTime * 0.2) * 1.5

      // Scroll-linked camera
      camera.position.y = -scrollY * 0.01
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
