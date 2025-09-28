export const decodeText = (encodedText: string): string => {
  try {
    return atob(encodedText)
  } catch (error) {
    console.error('Failed to decode text:', error)
    return encodedText
  }
}

const DECODE_CONFIG = [
  { selector: '[data-encoded-email]', attribute: 'data-encoded-email', hrefPrefix: 'mailto:' },
  { selector: '[data-encoded-phone]', attribute: 'data-encoded-phone', hrefPrefix: 'tel:' },
] as const

export const useTextDecoder = () => {
  const decodePageContent = (): void => {
    DECODE_CONFIG.forEach(({ selector, attribute, hrefPrefix }) => {
      document.querySelectorAll(selector).forEach(element => {
        const encoded = element.getAttribute(attribute)
        if (encoded) {
          const decoded = decodeText(encoded)
          element.textContent = decoded
          if (element.tagName === 'A') {
            ;(element as HTMLAnchorElement).href = `${hrefPrefix}${decoded}`
          }
          element.removeAttribute(attribute)
        }
      })
    })
  }

  return { decodeOnLoad: decodePageContent }
}
