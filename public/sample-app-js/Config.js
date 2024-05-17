Config = (function () {
    // -------------------------------------
    // REQUIRED
    // Available at https://dev.facetec.com/account
    // NOTE: This field is auto-populated by the FaceTec SDK Configuration Wizard.
    var DeviceKeyIdentifier = "dK1ECy0mpHEV83I6FozfTw8O7xNtbMo1";

    // -------------------------------------
    // REQUIRED
    // The URL to call to process FaceTec SDK Sessions.
    // In Production, you likely will handle network requests elsewhere and without the use of this variable.
    // See https://dev.facetec.com/security-best-practices?link=facetec-server-rest-endpoint-security for more information.
    // NOTE: This field is auto-populated by the FaceTec SDK Configuration Wizard.
    var BaseURL = "https://api.facetec.com/api/v3.1/biometrics";

    // -------------------------------------
    // REQUIRED
    // The FaceScan Encryption Key you define for your application.
    // Please see https://dev.facetec.com/facemap-encryption-keys for more information.
    // NOTE: This field is auto-populated by the FaceTec SDK Configuration Wizard.
    var PublicFaceScanEncryptionKey =
        "-----BEGIN PUBLIC KEY-----\n" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5PxZ3DLj+zP6T6HFgzzk\n" +
        "M77LdzP3fojBoLasw7EfzvLMnJNUlyRb5m8e5QyyJxI+wRjsALHvFgLzGwxM8ehz\n" +
        "DqqBZed+f4w33GgQXFZOS4AOvyPbALgCYoLehigLAbbCNTkeY5RDcmmSI/sbp+s6\n" +
        "mAiAKKvCdIqe17bltZ/rfEoL3gPKEfLXeN549LTj3XBp0hvG4loQ6eC1E1tRzSkf\n" +
        "GJD4GIVvR+j12gXAaftj3ahfYxioBH7F7HQxzmWkwDyn3bqU54eaiB7f0ftsPpWM\n" +
        "ceUaqkL2DZUvgN0efEJjnWy5y1/Gkq5GGWCROI9XG/SwXJ30BbVUehTbVcD70+ZF\n" +
        "8QIDAQAB\n" +
        "-----END PUBLIC KEY-----"
        ;


    // -------------------------------------
    // Convenience method to initialize the FaceTec SDK.
    // NOTE: This function is auto-populated by the FaceTec SDK Configuration Wizard based on your UI Customizations you picked in the Configuration Wizard GUI.

    function initializeFromAutogeneratedConfig(FaceTecSDK, callback) {
        FaceTecSDK.initializeInDevelopmentMode(this.DeviceKeyIdentifier, this.PublicFaceScanEncryptionKey,
            function (initializedSuccessfully) {
                callback(initializedSuccessfully);
            });
    };


    // This app can modify the customization to demonstrate different look/feel preferences
    // NOTE: This function is auto-populated by the FaceTec SDK Configuration Wizard based on your UI Customizations you picked in the Configuration Wizard GUI.
    function retrieveConfigurationWizardCustomization(FaceTecSDK) {
        var sdkImageDirectory = "../../core-sdk/FaceTec_images/";

        // For Color Customization
        var outerBackgroundColor = "#ffffff";
        var frameColor = "#ffffff";
        var borderColor = "#417FB2";
        var ovalColor = "#417FB2";
        var dualSpinnerColor = "#417FB2";
        var textColor = "#417FB2";
        var buttonAndFeedbackBarColor = "#417FB2";
        var buttonAndFeedbackBarTextColor = "#ffffff";
        var buttonColorHighlight = "#396E99";
        var buttonColorDisabled = "#B9CCDE";

        // For Frame Corner Radius Customization
        let frameCornerRadius = "20px";

        // For Cancel Button Customization
        var cancelButtonImage = sdkImageDirectory + "FaceTec_cancel.png";
        var cancelButtonLocation = FaceTecSDK.FaceTecCancelButtonLocation.TopLeft;

        // For image Customization
        var yourAppLogoImage = sdkImageDirectory + "FaceTec_your_app_logo.png";
        var securityWatermarkImage = FaceTecSDK.FaceTecSecurityWatermarkImage.FaceTec;


        // Set a default customization
        var defaultCustomization = new FaceTecSDK.FaceTecCustomization();


        // Set Frame Customization
        defaultCustomization.frameCustomization.borderCornerRadius = frameCornerRadius;
        defaultCustomization.frameCustomization.backgroundColor = frameColor;
        defaultCustomization.frameCustomization.borderColor = borderColor;

        // Set Overlay Customization
        defaultCustomization.overlayCustomization.brandingImage = yourAppLogoImage;
        defaultCustomization.overlayCustomization.backgroundColor = outerBackgroundColor;

        // Set Guidance Customization
        defaultCustomization.guidanceCustomization.backgroundColors = frameColor;
        defaultCustomization.guidanceCustomization.foregroundColor = textColor;
        defaultCustomization.guidanceCustomization.buttonBackgroundNormalColor = buttonAndFeedbackBarColor;
        defaultCustomization.guidanceCustomization.buttonBackgroundDisabledColor = buttonColorDisabled;
        defaultCustomization.guidanceCustomization.buttonBackgroundHighlightColor = buttonColorHighlight;
        defaultCustomization.guidanceCustomization.buttonTextNormalColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.guidanceCustomization.buttonTextDisabledColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.guidanceCustomization.buttonTextHighlightColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.guidanceCustomization.retryScreenImageBorderColor = borderColor;
        defaultCustomization.guidanceCustomization.retryScreenOvalStrokeColor = borderColor;

        // Set Oval Customization
        defaultCustomization.ovalCustomization.strokeColor = ovalColor;
        defaultCustomization.ovalCustomization.progressColor1 = dualSpinnerColor;
        defaultCustomization.ovalCustomization.progressColor2 = dualSpinnerColor;

        // Set Feedback Customization
        defaultCustomization.feedbackCustomization.backgroundColor = buttonAndFeedbackBarColor;
        defaultCustomization.feedbackCustomization.textColor = buttonAndFeedbackBarTextColor;

        // Set Cancel Customization
        defaultCustomization.cancelButtonCustomization.customImage = cancelButtonImage;
        defaultCustomization.cancelButtonCustomization.location = cancelButtonLocation;

        // Set Security Watermark Customization
        defaultCustomization.securityWatermarkCustomization.setSecurityWatermarkImage(securityWatermarkImage);

        // Set Result Screen Customization
        defaultCustomization.resultScreenCustomization.backgroundColors = frameColor;
        defaultCustomization.resultScreenCustomization.foregroundColor = textColor;
        defaultCustomization.resultScreenCustomization.activityIndicatorColor = buttonAndFeedbackBarColor;
        defaultCustomization.resultScreenCustomization.resultAnimationBackgroundColor = buttonAndFeedbackBarColor;
        defaultCustomization.resultScreenCustomization.resultAnimationForegroundColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.resultScreenCustomization.uploadProgressFillColor = buttonAndFeedbackBarColor;

        // Set ID Scan Customization
        defaultCustomization.idScanCustomization.selectionScreenBackgroundColors = frameColor;
        defaultCustomization.idScanCustomization.selectionScreenForegroundColor = textColor;
        defaultCustomization.idScanCustomization.reviewScreenBackgroundColors = frameColor;
        defaultCustomization.idScanCustomization.reviewScreenForegroundColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.idScanCustomization.reviewScreenTextBackgroundColor = buttonAndFeedbackBarColor;
        defaultCustomization.idScanCustomization.captureScreenForegroundColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.idScanCustomization.captureScreenTextBackgroundColor = buttonAndFeedbackBarColor;
        defaultCustomization.idScanCustomization.buttonBackgroundNormalColor = buttonAndFeedbackBarColor;
        defaultCustomization.idScanCustomization.buttonBackgroundDisabledColor = buttonColorDisabled;
        defaultCustomization.idScanCustomization.buttonBackgroundHighlightColor = buttonColorHighlight;
        defaultCustomization.idScanCustomization.buttonTextNormalColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.idScanCustomization.buttonTextDisabledColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.idScanCustomization.buttonTextHighlightColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.idScanCustomization.captureScreenBackgroundColor = frameColor;
        defaultCustomization.idScanCustomization.captureFrameStrokeColor = borderColor;

        // Set Initial Loading Customization
        defaultCustomization.initialLoadingAnimationCustomization.backgroundColor = buttonAndFeedbackBarTextColor;
        defaultCustomization.initialLoadingAnimationCustomization.foregroundColor = buttonAndFeedbackBarColor;


        return defaultCustomization;
    };


    function retrieveLowLightConfigurationWizardCustomization(FaceTecSDK) {
        var defaultCustomization = retrieveConfigurationWizardCustomization(FaceTecSDK);
        this.currentLowLightCustomization = defaultCustomization;
        return defaultCustomization;
    }


    function retrieveDynamicDimmingConfigurationWizardCustomization(FaceTecSDK) {
        var defaultCustomization = retrieveConfigurationWizardCustomization(FaceTecSDK);
        this.currentDynamicDimmingCustomization = defaultCustomization;
        return defaultCustomization;
    }


    var currentCustomization;
    var currentLowLightCustomization;
    var currentDynamicDimmingCustomization;

    // -------------------------------------
    // Boolean to indicate the FaceTec SDK Configuration Wizard was used to generate this file.
    // In this Sample App, if this variable is true, a "Config Wizard Theme" will be added to this App's "Toggle Colors & Themes" menu,
    // and choosing this option will set the FaceTec SDK UI/UX Customizations to the Customizations that you selected in the
    // Configuration Wizard.
    var wasSDKConfiguredWithConfigWizard = true;


    return {
        wasSDKConfiguredWithConfigWizard,
        DeviceKeyIdentifier,
        BaseURL,
        PublicFaceScanEncryptionKey,
        initializeFromAutogeneratedConfig,
        currentCustomization,
        currentLowLightCustomization,
        currentDynamicDimmingCustomization,
        retrieveConfigurationWizardCustomization,
        retrieveLowLightConfigurationWizardCustomization,
        retrieveDynamicDimmingConfigurationWizardCustomization
    };



})();