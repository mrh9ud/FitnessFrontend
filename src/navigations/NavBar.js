import React from 'react'
import { Appbar, Menu} from "react-native-paper";
import { View } from 'react-native';
import { logOutUser } from '../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { deleteCredentials } from '../encryption/SecureStore'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'


const NavBar = ({ props, drawerNavigation, logOutUser }) => {

  // menu functionality
  const [menuVisible, setMenuVisible] = React.useState(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  return (
    <View>
      <Appbar.Header>

        {props.previous
          ?
          <Appbar.BackAction onPress={() => props.navigation.goBack()} />
          :
          <Appbar.Action icon='menu' onPress={() => drawerNavigation.openDrawer()} />}
        <Appbar.Content title={props.scene.route.name} />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon={MORE_ICON}
              onPress={openMenu}
              color="white" />
          }>
          <Menu.Item onPress={() => {
            deleteCredentials()
            logOutUser()
          }}
          title="Logout" />
        </Menu>
      </Appbar.Header>
     </View>
  )
};

const mapDispatchToProps = dispatch => { return { logOutUser: () => dispatch(logOutUser()) } }

export default connect(null, mapDispatchToProps)(NavBar)