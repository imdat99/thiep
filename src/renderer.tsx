import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'
export const renderer = jsxRenderer(({ children }, c) => {
	const isGallery = c.req.path.toLowerCase().includes('gallery')
	return (
		<html>
			<head>
				<ViteClient />
				{!isGallery && <Link href="/src/style.css" rel="stylesheet" />}
				<Link href="/src/style2.css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
			</head>
			<body class="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">{children}</body>
		</html>
	)
})
