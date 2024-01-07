const config = {
    appId: "io.ionic.starter",
    appName: "UniqueConnections",
    webDir: "www",
    bundledWebRuntime: false,
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            launchFadeOutDuration: 3000,
            backgroundColor: "#ffffffff",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: true,
            androidSpinnerStyle: "large",
            iosSpinnerStyle: "small",
            spinnerColor: "#999999",
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: "launch_screen",
            useDialog: true,
        },
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"],
        },
        LocalNotifications: {
            sound: "message.wav",
            iconColor: "#57cc99",
            smallIcon: "ic_stat_name",
        },
    },
};
export default config;
//# sourceMappingURL=capacitor.config.js.map