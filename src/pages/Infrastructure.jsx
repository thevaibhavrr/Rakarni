import React from 'react'
import InfrastructureHeader from '../components/Infrastructure/InfrastructureHeader'
import AboutInfrastructure from '../components/Infrastructure/aboutInfrastructure'
import WorkDone from '../components/Infrastructure/workDone'
import Ourprocess from '../components/Infrastructure/ourprocess'

function Infrastructure() {
  return (
    <div>
        <InfrastructureHeader/>
        <AboutInfrastructure/>
        <WorkDone/>
        <Ourprocess/>
    </div>
  )
}

export default Infrastructure