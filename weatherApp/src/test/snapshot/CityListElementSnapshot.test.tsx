import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // Import ReactQueryClientProvider
import CityListElement from '../../components/CityListElement/CityListElement'

it('renders correctly', () => {
  const cityName = 'Trondheim'

  // Create a new QueryClient
  const queryClient = new QueryClient()

  const result = render(
    <QueryClientProvider client={queryClient}>
      <CityListElement cityName={cityName} />
    </QueryClientProvider>,
  )

  expect(result).toMatchSnapshot('src/test/snapshot/__snapshots__/CityListElement.test.tsx.snap')
})
