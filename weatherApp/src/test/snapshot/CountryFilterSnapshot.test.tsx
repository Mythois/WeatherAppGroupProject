// CountryFilter.test.tsx
import { expect, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import CountryFilter from '../../components/CountryFilter/CountryFilter'

it('renders correctly', () => {
  const countries = ['USA', 'Canada', 'UK']
  const selectedCountry = 'USA'
  const onSelectCountry = vi.fn()

  const result = render(
    <CountryFilter countries={countries} selectedCountry={selectedCountry} onSelectCountry={onSelectCountry} />,
  )

  // Assertions based on the rendered component
  expect(result.getByText('All')).toBeInTheDocument()
  expect(result.getByText('USA')).toBeInTheDocument()
  expect(result.getByText('Canada')).toBeInTheDocument()
  expect(result.getByText('UK')).toBeInTheDocument()

  // Snapshot comparison
  expect(result).toMatchSnapshot('src/test/snapshot/__snapshots__/CountryFilter.test.tsx.snap')
})

it('handles country selection correctly', () => {
  const countries = ['USA', 'Canada', 'UK']
  const selectedCountry = 'USA'
  const onSelectCountry = vi.fn()

  const result = render(
    <CountryFilter countries={countries} selectedCountry={selectedCountry} onSelectCountry={onSelectCountry} />,
  )

  fireEvent.click(result.getByText('Canada'))

  expect(onSelectCountry).toHaveBeenCalledWith('Canada')
})
