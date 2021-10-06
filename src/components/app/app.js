import React, { Component } from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service'
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages'
import './app.css'
import { SwapiServiceProvider} from '../swapi-service-context'

export default class App extends Component {

  swapiService = new SwapiService()
  state = {
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header/>

            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}