import { render } from '@testing-library/react';
import CityList from '../../components/CityList/CityList';

// Mock localStorage for testing
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  removeItem: jest.fn(),
  length: 0,
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

test('CityList snapshot test', () => {
  // Mock cityCountries data
  jest.mock('../CountryFilter/cityCountries', () => ({
    Oslo: 'Norway',
    Bergen: 'Norway',
    Stavanger: 'Norway',
    Trondheim: 'Norway',
    Stockholm: 'Sweden',
    København: 'Denmark',
    Helsinki: 'Finland',
    Berlin: 'Germany',
    Paris: 'France',
    London: 'United Kingdom',
  }));

  const props = {
    filter: 'lon',
    showFavoritesOnly: false,
    selectedCountry: 'United Kingdom',
  };

  const { container } = render(<CityList {...props} />);
  expect(container).toMatchSnapshot();
});
