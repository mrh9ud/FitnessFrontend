import React from 'react'
import { Appbar, Menu } from "react-native-paper";
import { View } from 'react-native';
import { logOutUser } from '../redux/actions/users/actionCreators'
import { connect } from 'react-redux'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const NavBar = ({ props, drawerNavigation, rootNavigation, logOutUser, menuOptions }) => {
  const [menuVisible, setMenuVisible] = React.useState(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  const { options } = props.scene.descriptor

  return (
    <View>
      <Appbar.Header>
        {props.previous
        ?
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        :
        <Appbar.Action icon='menu' onPress={() => drawerNavigation.openDrawer()} />
        }

        <Appbar.Content title={
                          options.headerTitle !== undefined
                          ? options.headerTitle
                          : props.scene.route.name
                        } 
        />
        
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon={MORE_ICON}
              onPress={openMenu}
              color="white" />
          }>

          {menuOptions.map(option => <Menu.Item onPress={() => option.execFunc()} title={option.title} />)}

          {/*Always have the logout button in the navbar menu*/}
          <Menu.Item onPress={() => {
            logOutUser()
            rootNavigation.navigate('Auth')
          }}
          title="Logout" />
        </Menu>
      </Appbar.Header>
     </View>
  )
};

const mapStateToProps = store => ({
  menuOptions: store.navBarMenuOptions
})
const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)