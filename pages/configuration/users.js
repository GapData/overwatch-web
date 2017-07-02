import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import CustomHead from '../../components/CustomHead'
import TopMenu from '../../components/TopMenu'
import ConfigurationMenu from '../../components/ConfigurationMenu'

class IndexPage extends Component {

  render() {
    return (
      <div>
        <CustomHead />
        <TopMenu activeItem="configuration" />
        <Container>
          <Grid>
            <Grid.Column width={3}>
              <ConfigurationMenu activeItem="users" />
            </Grid.Column>
            <Grid.Column width={12}>

              <h1>Users</h1>

              <p>todo :)</p>

            </Grid.Column>
          </Grid>

        </Container>

      </div>
    )
  }

}

export default IndexPage;