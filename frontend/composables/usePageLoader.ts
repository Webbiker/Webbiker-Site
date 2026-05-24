let _pendingCallback: (() => void) | null = null

function waitForImages(container: Element): Promise<void> {
  const images = Array.from(container.querySelectorAll<HTMLImageElement>('img'))
  if (!images.length) return Promise.resolve()
  return Promise.allSettled(
    images.map(img => {
      if (img.complete) return Promise.resolve()
      return new Promise<void>(resolve => {
        img.addEventListener('load', () => resolve(), { once: true })
        img.addEventListener('error', () => resolve(), { once: true })
        setTimeout(resolve, 5000)
      })
    })
  ).then(() => {})
}

export function usePageLoader() {
  const visible = useState('page-loader-visible', () => true)

  function show() {
    visible.value = true
  }

  async function hideWhenReady(container: Element, onHidden: () => void) {
    await waitForImages(container)
    if (!visible.value) {
      onHidden()
      return
    }
    _pendingCallback = onHidden
    visible.value = false
  }

  function notifyHidden() {
    const cb = _pendingCallback
    _pendingCallback = null
    cb?.()
  }

  return { visible, show, hideWhenReady, notifyHidden }
}
