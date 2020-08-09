import { renderHook } from '@testing-library/react-hooks'
import { Navigation, SearchBarCancelPressedEvent } from 'react-native-navigation'
import useNavigationSearchBarCancelPress from './useNavigationSearchBarCancelPress'

describe('useNavigationSearchBarCancelPress', () => {
  let triggerEvent: (event: SearchBarCancelPressedEvent) => void
  let mockRemoveSubscription: () => void
  let mockHandler: () => void

  beforeEach(() => {
    mockHandler = jest.fn(() => {})
    mockRemoveSubscription = jest.fn()

    Navigation.events = jest.fn().mockReturnValue({
      registerSearchBarCancelPressedListener: jest.fn(callback => {
        triggerEvent = callback

        return { remove: mockRemoveSubscription }
      }),
    })
  })

  it('should remove the event listener on unmount', () => {
    const { result, unmount } = renderHook(() => {
      useNavigationSearchBarCancelPress(() => {})
    })

    unmount()

    expect(mockRemoveSubscription).toHaveBeenCalledTimes(1)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should never call the handler if no event was triggered', () => {
    const { result } = renderHook(() => {
      useNavigationSearchBarCancelPress(() => {})
    })

    expect(mockHandler).toBeCalledTimes(0)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should call handler twice when componentId is not provided', () => {
    const { result } = renderHook(() => {
      useNavigationSearchBarCancelPress(mockHandler)
    })

    const event1 = { componentId: 'COMPONENT_ID_1', componentName: 'COMPONENT_NAME_1' }
    triggerEvent(event1)

    const event2 = { componentId: 'COMPONENT_ID_2', componentName: 'COMPONENT_NAME_2' }
    triggerEvent(event2)

    expect(mockHandler).toBeCalledTimes(2)
    expect(mockHandler).toHaveBeenNthCalledWith(1, event1)
    expect(mockHandler).toHaveBeenNthCalledWith(2, event2)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should call handler once if componentId provided', () => {
    const { result } = renderHook(() => {
      useNavigationSearchBarCancelPress(mockHandler, 'COMPONENT_ID_1')
    })

    const event = { componentId: 'COMPONENT_ID_1', componentName: 'COMPONENT_NAME_1' }
    triggerEvent(event)

    expect(mockHandler).toBeCalledTimes(1)
    expect(mockHandler).toBeCalledWith(event)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })

  it('should never call the handler if componentId does not match', () => {
    const { result } = renderHook(() => {
      useNavigationSearchBarCancelPress(mockHandler, 'COMPONENT_ID_1')
    })

    const event = { componentId: 'COMPONENT_ID_2', componentName: 'COMPONENT_NAME_2' }
    triggerEvent(event)

    expect(mockHandler).toBeCalledTimes(0)

    expect(result.current).toBeUndefined()
    expect(result.error).toBeUndefined()
  })
})
