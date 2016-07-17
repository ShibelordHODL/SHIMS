import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { UserDashboard } from './Pages'

export default (
  <Route path="/" component={UserDashboard}>
    <IndexRoute component={UserDashboard} />
    <Route path="notes" component={UserDashboard} />
  </Route>
);