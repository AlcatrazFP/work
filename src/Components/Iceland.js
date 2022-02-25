/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: robaskew (https://sketchfab.com/robaskew)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/iceland-1901-geology-658f6b8533cf489996e69da02d9d69e9
title: Iceland 1901 Geology
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Geo_Iceland/iceland.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group scale={[1, 1, 0]}>
              <group position={[0, -36.76, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
              </group>
              <group position={[0, 36.76, 0]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
              </group>
              <group position={[-50, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
              </group>
              <group position={[50, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
              </group>
              <group position={[0, 0, -895.72]} rotation={[Math.PI, 0, 0]}>
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
              </group>
              <mesh geometry={nodes.mesh_0.geometry} material={materials.material_0} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/iceland.gltf')
