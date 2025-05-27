import { customRender } from '@src/test-utils'
import { TestComponent } from '@src/TestComponent'
import { test } from 'vitest'

test('renders the component and checks for content', () => {
  // Render the TestComponent
  customRender(<TestComponent />)
})
