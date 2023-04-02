'use client'
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import * as cashAnim from '../../../../assets/animations/cash_anim.json'
import * as gainsAnim from '../../../../assets/animations/gains_anim.json'
import * as newShineAnim from '../../../../assets/animations/new_shine_anim.json'
import * as workAnim from '../../../../assets/animations/work_anim.json'
import * as walletAnim from '../../../../assets/animations/cash_in_wallet.json'
import * as softwareAnim from '../../../../assets/animations/97525-code-dark.json'

const commonSettings = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const cashAnimOpts = { ...commonSettings, animationData: cashAnim }
const gainsAnimOpts = { ...commonSettings, animationData: gainsAnim }
const newShineAnimOpts = { ...commonSettings, animationData: newShineAnim, loop: true }
const workAnimOpts = { ...commonSettings, animationData: workAnim }
const walletAnimOpts = { ...commonSettings, animationData: walletAnim }
const softwareAnimOpts = { ...commonSettings, animationData: softwareAnim, loop: true }

const CrashAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={cashAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const GainsAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={gainsAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const NewShineAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={newShineAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const WorkAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={workAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const WalletAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={walletAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const SoftwareAnim = (props: any) => {
  const [paused, setPaused] = useState(true)

  return (
    <div className={props.className ? props.className : ''}>
      <Lottie
        options={softwareAnimOpts}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

type LottieIconProps = {
  className?: String
  icon: String
}
const LottieIcon : React.FC<LottieIconProps> = (props: any) => {
  return (
    <>
      {
        props.icon === 'CrashAnim'
          ? <CrashAnim className={props.className} />
          : props.icon === 'GainsAnim'
            ? <GainsAnim className={props.className} />
            : props.icon === 'NewShineAnim'
              ? <NewShineAnim className={props.className} />
              : props.icon === 'WorkAnim'
                ? <WorkAnim className={props.className} />
                : props.icon === 'WalletAnim'
                  ? <WalletAnim className={props.className} />
                  : props.icon === 'SoftwareAnim'
                    ? <SoftwareAnim className={props.className} />
                    : null
      }
    </>
  )
}

export { CrashAnim, GainsAnim, NewShineAnim, WorkAnim, WalletAnim, LottieIcon }
