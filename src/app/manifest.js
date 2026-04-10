export default function manifest() {
  return {
    name: 'Froven Innovations',
    short_name: 'Froven',
    description: 'Commercial Refrigeration, Rentals & AMC Services in Vasai Virar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f2a47',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
