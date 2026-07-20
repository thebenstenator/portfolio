import { useCallback, useState } from 'react'

// Copies the email to the clipboard and flags a short-lived "copied" state.
// Pairs with a mailto: link so visitors WITH a mail client still get their
// compose window, while everyone else gets the address on their clipboard
// instead of a click that silently does nothing.
export function useCopyEmail(email) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    if (!navigator.clipboard) return
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }, [email])

  return { copied, copy }
}
