import { marked } from 'marked'

export function useMarkdown() {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl

  function renderMarkdown(content: string | undefined | null): string {
    if (!content) return ''
    const html = marked.parse(content) as string
    // Strapi stores uploaded image paths as /uploads/… — prepend the API base URL
    return html.replace(/src="(\/uploads\/[^"]+)"/g, `src="${strapiUrl}$1"`)
  }

  return { renderMarkdown }
}
