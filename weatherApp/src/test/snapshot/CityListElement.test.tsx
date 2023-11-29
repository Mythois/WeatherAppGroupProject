import { render } from '@testing-library/react';
import CityListElement from '../../components/CityListElement/CityListElement';

// Mock useWeatherHook
jest.mock('../../utils/api_hooks/useWeatherHook', () => ({
  __esModule: true,
  default: () => ({ data: { hourly: { temperature_2m: [20, 25, 30], rain: [0, 0, 0], cloudcover: [50, 60, 70] } }, isLoading: false }),
}));

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

test('CityListElement snapshot test', () => {
  const props = {
    cityName: 'TestCity',
  };

  const { container } = render(<CityListElement {...props} />);
  expect(container).toMatchSnapshot();
});
