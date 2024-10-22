import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigator from "./HomeNavigator";
import MyWorkoutNavigator from "./MyWorkoutNavigator";
import StatisticsNavigator from "./StatisticsNavigator";
import SettingsNavigator from "./SettingsNavigator";
import DrawerContent from "../../components/DrawerContent";

const MainNavigator = ({ navigation }) => {
 const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent props={props} rootNavigation={navigation} />}>
      <Drawer.Screen name="Home"
                     component={HomeNavigator}
                     initialParams={{rootNavigation: navigation}}
      />
      <Drawer.Screen name="My Workouts"
                     component={MyWorkoutNavigator}
                     initialParams={{rootNavigation: navigation}}
      />
      <Drawer.Screen name="Stats"
                     component={StatisticsNavigator}
                     initialParams={{rootNavigation: navigation}}
      />
      <Drawer.Screen name="Settings"
                     component={SettingsNavigator}
                     initialParams={{rootNavigation: navigation}}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator