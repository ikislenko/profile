import { mount, createLocaleVue } from '@vue/test-utils'
import App from '../App'

test('App has a .center-content class', () => {
	const vue = createLocaleVue()
	const app = mount(App, { vue })

	expect(app.classes()).toContain('center-content')
})