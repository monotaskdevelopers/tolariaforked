import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useVaultConfig } from './useVaultConfig'
import { resetVaultConfigStore } from '../utils/vaultConfigStore'

function createStorageMock(): Storage {
  const values = new Map<string, string>()
  return {
    get length() { return values.size },
    clear: vi.fn(() => { values.clear() }),
    getItem: vi.fn((key: string) => values.get(key) ?? null),
    key: vi.fn((index: number) => Array.from(values.keys())[index] ?? null),
    removeItem: vi.fn((key: string) => { values.delete(key) }),
    setItem: vi.fn((key: string, value: string) => { values.set(key, value) }),
  }
}

describe('useVaultConfig', () => {
  const localStorageMock = createStorageMock()

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock, configurable: true })
    window.localStorage.clear()
    resetVaultConfigStore()
  })

  it('hydrates a stored vault config object', () => {
    window.localStorage.setItem('laputa:vault-config:/vault', JSON.stringify({
      zoom: 1.2,
      view_mode: 'all',
    }))

    const { result } = renderHook(() => useVaultConfig('/vault'))

    expect(result.current.config).toEqual(expect.objectContaining({
      zoom: 1.2,
      view_mode: 'all',
    }))
  })

  it('ignores non-object stored payloads and falls back to defaults', () => {
    window.localStorage.setItem('laputa:vault-config:/vault', JSON.stringify(['bad']))

    const { result } = renderHook(() => useVaultConfig('/vault'))

    expect(result.current.config).toEqual(expect.objectContaining({
      zoom: null,
      view_mode: null,
      editor_mode: null,
      git_setup_preference: 'prompt',
      ai_agent_permission_mode: 'safe',
    }))
  })
})
