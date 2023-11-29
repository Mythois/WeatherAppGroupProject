import { render } from '@testing-library/react'
import CityHeader from '../../components/CityHeader/CityHeader'

test('CityHeader snapshot test', () => {
  const props = {
    cityName: 'Example City',
    cityTempMax: 30,
    cityTempMin: 20,
    cityPrecipitation: 10,
    cloudCoverage: 50,
  }

  const { container } = render(<CityHeader {...props} />)
  expect(container).toMatchSnapshot('src/test/snapshot/__snapshots__/CityHeaderSnapshot.test.tsx.snap')
})
