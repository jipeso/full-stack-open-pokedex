import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import axiosMock from 'axios'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/App'

jest.mock('axios')

describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur', id: 1 }]
        }
      }
    )
    render(<Router><App/></Router>)
    await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=50')
    })
  })

  it('shows error', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error())
    render(<Router><App/></Router>)
    await expect(screen.getByTestId('error')).toBeVisible()
  })
})
