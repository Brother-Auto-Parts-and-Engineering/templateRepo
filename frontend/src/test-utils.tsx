import { render } from 'vitest-browser-react'

// This import is to make sure that type is respected by linter in all other test files
import '@vitest/browser/matchers.d.ts'

export function customRender(element: JSX.Element) {
  return render(<div>{element}</div>)
}
