import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigator from "./HomeNavigator";
import MyWorkoutNavigator from "./MyWorkoutNavigator";
import StatisticsNavigator from "./StatisticsNavigator";
import SettingsNavigator from "./SettingsNavigator";
import { connect } from 'react-redux'

const MainNavigator = ({ currentUser, passwordResetting, navigation }) => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home"
                           component={HomeNavigator}
                           initialParams={{rootNavigation: navigation}}
            />
            <Drawer.Screen name="My Workout"
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

const mapStateToProps = store => ({ currentUser: store.currentUser, passwordResetting: store.passwordResetting })

export default connect(mapStateToProps)(MainNavigator)
