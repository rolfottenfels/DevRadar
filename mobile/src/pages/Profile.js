import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const gitubUsername = navigation.getParam('github_username');

    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${gitubUsername}` }} />
}

export default Profile;