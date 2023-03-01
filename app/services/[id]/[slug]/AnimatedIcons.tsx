'use client'
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import * as cashAnim from '../../../../assets/animations/cash_anim.json'
import * as gainsAnim from '../../../../assets/animations/gains_anim.json'
import * as newShineAnim from '../../../../assets/animations/new_shine_anim.json'
import * as workAnim from '../../../../assets/animations/work_anim.json'
import * as walletAnim from '../../../../assets/animations/cash_in_wallet.json'

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

const CrashAnim = () => {
  const [paused, setPaused] = useState(true)

  return (
    <div>
      <Lottie
        options={cashAnimOpts}
        height={400}
        width={400}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const GainsAnim = () => {
  const [paused, setPaused] = useState(true)

  return (
    <div>
      <Lottie
        options={gainsAnimOpts}
        height={400}
        width={400}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const NewShineAnim = () => {
  const [paused, setPaused] = useState(true)

  return (
    <div>
      <Lottie
        options={newShineAnimOpts}
        height={400}
        width={400}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const WorkAnim = () => {
  const [paused, setPaused] = useState(true)

  return (
    <div>
      <Lottie
        options={workAnimOpts}
        height={400}
        width={400}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

const WalletAnim = () => {
  const [paused, setPaused] = useState(true)

  return (
    <div>
      <Lottie
        options={walletAnimOpts}
        height={400}
        width={400}
        isStopped={!paused}
        isPaused={false}
      />
    </div>
  )
}

export { CrashAnim, GainsAnim, NewShineAnim, WorkAnim, WalletAnim }
