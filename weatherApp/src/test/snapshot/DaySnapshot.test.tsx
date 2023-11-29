import { expect, it } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import Day from '../../components/Day/Day'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

it('renders correctly', async () => {
  const cityName = 'Trondheim'
  const day = 1
  const queryClient = new QueryClient()

  const result = render(
    <QueryClientProvider client={queryClient}>
      <Day cityName={cityName} day={day} />
    </QueryClientProvider>,
  )

  await waitFor(() => {
    expect(result.getByText('Loading weather data...')).toBeInTheDocument()
  })

  expect(result).toMatchSnapshot('src/test/snapshot/__snapshots__/Day.test.tsx.snap')
})
