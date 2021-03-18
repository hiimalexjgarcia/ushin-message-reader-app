import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders', () => {
  render(<App />)
})

test('renders messagesPanel', () => {
  const { container } = render(<App />)
  const messagesPanel = container.getElementsByClassName('messagesPanel')[0]
  expect(messagesPanel).toHaveClass('messagesPanel')
})

test('renders messagePane', () => {
  const { container } = render(<App />)
  const messagePane = container.getElementsByClassName('messagePane')[0]
  expect(messagePane).toHaveClass('messagePane')
})
