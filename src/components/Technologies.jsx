import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb"
import { SiMysql } from "react-icons/si";;
import {DiRedis} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import { CiCloudOff } from "react-icons/ci";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { SiSpringboot } from "react-icons/si";
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <CiCloudOff className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoHtml5 className='text-7xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-7xl text-blue-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-7xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql className='text-7xl text-blue-200'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies