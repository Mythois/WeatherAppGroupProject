import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import CityWeek from '../../components/CityWeek/CityWeek'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

it('renders correctly', () => {
  const cityName = 'Trondheim'
  const queryClient = new QueryClient()
  const result = render(
    <QueryClientProvider client={queryClient}>
      <CityWeek cityName={cityName} />
    </QueryClientProvider>,
  )
  expect(result).toMatchSnapshot('src/test/snapshot/__snapshots__/CityWeekSnapshot.test.tsx.snap')
})
