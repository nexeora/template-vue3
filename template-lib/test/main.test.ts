
import { test, expect } from 'vitest'
import { createCounter } from "@/main"

test('count', () => {
  const counter = createCounter()
  expect(counter.value).toBe(0)
  counter.inc()
  expect(counter.value).toBe(1)
})