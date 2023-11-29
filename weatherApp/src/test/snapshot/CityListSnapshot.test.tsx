// CityList.test.tsx
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import CityList from '../../components/CityList/CityList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

it('renders correctly', () => {
  const filter = 'Os'
  const showFavoritesOnly = false
  const selectedCountry = null

  const queryClient = new QueryClient()

  const result = render(
    <QueryClientProvider client={queryClient}>
      <CityList filter={filter} showFavoritesOnly={showFavoritesOnly} selectedCountry={selectedCountry} />
    </QueryClientProvider>,
  )

  expect(result).toMatchSnapshot('path-to-your-snapshot-folder/CityList.test.tsx.snap')
})
