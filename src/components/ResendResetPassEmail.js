import React from 'react'
import { Portal, Text, Button, Dialog } from 'react-native-paper'
import { verifyEmailUsername } from '../redux/actions/users/actionCreators'
import { connect } from 'react-redux'

const ResendResetPassEmail = ({ visible, hideResendEmailModal, resetPassEmailExpired, verifyEmailUsername }) => {

    const userData = resetPassEmailExpired.user_data

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideResendEmailModal}>
                <Dialog.Title>Password Reset Period Expired</Dialog.Title>
                <Dialog.Content>
                    <Text>{resetPassEmailExpired.message}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button
                        onPress={hideResendEmailModal}
                        mode="contained"
                    >Close
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => {
                            verifyEmailUsername(userData)
                            hideResendEmailModal()
                        }}
                        >Resend Email
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

const mapDispatchToProps = dispatch => { return { verifyEmailUsername: userData => dispatch(verifyEmailUsername(userData)) } }

export default connect(null, mapDispatchToProps)(ResendResetPassEmail)