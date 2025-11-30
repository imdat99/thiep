import { Hono } from 'hono'
import { renderer } from './renderer'
import { Invitation } from './invi'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
	return c.render(<Invitation />)
})

export default app
