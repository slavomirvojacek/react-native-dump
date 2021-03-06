import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

configure(() => {
  require('../src/Containers/LoginContainer/Login.main.component.story')
  require('../src/Containers/ApolloContainer/Apollo.container.story')
}, module)

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'})
AppRegistry.registerComponent('AwesomeProject', () => StorybookUI)
export default StorybookUI
