import { render } from '@testing-library/react'
import Navbar from '../../components/Navbar/Navbar'

describe('Navbar component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
