import {expect, it} from 'vitest'
import { render } from '@testing-library/react'
import CityListElement from '../../components/CityListElement/CityListElement'

it('renders correctly', () =>{
    const cityName = 'Trondheim'
    const result = render(<CityListElement cityName={cityName}/>)
    expect(result).toMatchSnapshot('src/test/snapshot/__snapshots__/CityListElement.test.tsx.snap')
})
