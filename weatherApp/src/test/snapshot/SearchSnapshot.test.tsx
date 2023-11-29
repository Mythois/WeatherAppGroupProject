// Search.test.tsx
import { expect, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Search } from '../../components/Search/Search'

it('renders correctly', () => {
  const onFilterMock = vi.fn()

  const result = render(<Search onFilter={onFilterMock} />)

  expect(result.getByPlaceholderText('Search...')).toBeInTheDocument()

  expect(result).toMatchSnapshot('path-to-your-snapshot-folder/Search.test.tsx.snap')
})

it('calls onFilter correctly on input change', () => {
  const onFilterMock = vi.fn()

  const result = render(<Search onFilter={onFilterMock} />)

  const input = result.getByPlaceholderText('Search...')
  fireEvent.change(input, { target: { value: 'New York' } })

  expect(onFilterMock).toHaveBeenCalledWith('New York')
})
