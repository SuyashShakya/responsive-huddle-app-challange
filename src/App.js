import React from 'react';
import Box from '@material-ui/core/Box';
import {Header, BuildCommunity, GrowTogether, FlowingConversation, YourUsers, GetStarted, Footer} from './components'

const App = () => {
  return (
    <Box overflow='hidden'>
      <Header />
      <BuildCommunity />
      <GrowTogether />
      <FlowingConversation />
      <YourUsers />
      <GetStarted />
      <Footer />
    </Box>
    )
}

export default App;