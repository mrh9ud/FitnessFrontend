import React from 'react'
import { Appbar, Menu} from "react-native-paper";
import { View } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'


const NavBar = ({ title, drawerNavigation }) => {

  // menu functionality
  const [menuVisible, setMenuVisible] = React.useState(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  return (
    <View>
      <Appbar.Header >
        <Appbar.Action icon='menu' onPress={() => drawerNavigation.openDrawer()} />
        <Appbar.Content title={title}/>
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon={MORE_ICON}
              onPress={openMenu}
              color="white" />
          }>
          <Menu.Item onPress={() => {alert("Logging out...")}}
                     title="Logout" />
        </Menu>
      </Appbar.Header>
     </View>
  )
};



export default NavBar;