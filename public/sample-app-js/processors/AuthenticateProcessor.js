//
// Welcome to the annotated FaceTec Device SDK core code for performing secure Authentication against a previously enrolled user.
//
//
// This is an example self-contained class to perform Authentication with the FaceTec SDK.
// You may choose to further componentize parts of this in your own Apps based on your specific requirements.
//
var AuthenticateProcessor = /** @class */ (function () {
    function AuthenticateProcessor(sessionToken, sampleAppControllerReference) {
        var _this = this;
        this.latestNetworkRequest = new XMLHttpRequest();
        //
        // Part 10:  This function gets called after the FaceTec SDK is completely done.  There are no parameters because you have already been passed all data in the processSessionWhileFaceTecSDKWaits function and have already handled all of your own results.
        //
        this.onFaceTecSDKCompletelyDone = function () {
            //
            // DEVELOPER NOTE:  onFaceTecSDKCompletelyDone() is called after you signal the FaceTec SDK with success() or cancel().
            // Calling a custom function on the Sample App Controller is done for demonstration purposes to show you that here is where you get control back from the FaceTec SDK.
            //
            _this.success = _this.latestSessionResult.isCompletelyDone;
            // Log success message
            if (_this.success) {
                DeveloperStatusMessages.logMessage("Authenticated");
            }
            _this.sampleAppControllerReference.onComplete(_this.latestSessionResult, null, _this.latestNetworkRequest.status);
        };
        // Helper function to ensure the session is only cancelled once
        this.cancelDueToNetworkError = function (networkErrorMessage, faceScanResultCallback) {
            if (_this.cancelledDueToNetworkError === false) {
                console.log(networkErrorMessage);
                _this.cancelledDueToNetworkError = true;
                faceScanResultCallback.cancel();
            }
        };
        //
        // DEVELOPER NOTE:  This public convenience method is for demonstration purposes only so the Sample App can get information about what is happening in the processor.
        // In your code, you may not even want or need to do this.
        //
        this.isSuccess = function () {
            return _this.success;
        };
        //
        // DEVELOPER NOTE:  These properties are for demonstration purposes only so the Sample App can get information about what is happening in the processor.
        // In the code in your own App, you can pass around signals, flags, intermediates, and results however you would like.
        //
        this.success = false;
        this.sampleAppControllerReference = sampleAppControllerReference;
        this.latestSessionResult = null;
        this.cancelledDueToNetworkError = false;
        //
        // Part 1:  Starting the FaceTec Session
        //
        // Required parameters:
        // - FaceTecFaceScanProcessor:  A class that implements FaceTecFaceScanProcessor, which handles the FaceScan when the User completes a Session.  In this example, "this" implements the class.
        // - sessionToken:  A valid Session Token you just created by calling your API to get a Session Token from the Server SDK.
        //
        new FaceTecSDK.FaceTecSession(this, sessionToken);
    }
    //
    // Part 2:  Handling the Result of a FaceScan
    //
    AuthenticateProcessor.prototype.processSessionResultWhileFaceTecSDKWaits = function (sessionResult, faceScanResultCallback) {
        var _this = this;
        this.latestSessionResult = sessionResult;
        //
        // Part 3:  Handles early exit scenarios where there is no FaceScan to handle -- i.e. User Cancellation, Timeouts, etc.
        //
        if (sessionResult.status !== FaceTecSDK.FaceTecSessionStatus.SessionCompletedSuccessfully) {
            console.log("Session was not completed successfully, cancelling.  Session Status: " + FaceTecSDK.FaceTecSessionStatus[sessionResult.status]);
            this.latestNetworkRequest.abort();
            faceScanResultCallback.cancel();
            return;
        }
        // IMPORTANT:  FaceTecSDK.FaceTecSessionStatus.SessionCompletedSuccessfully DOES NOT mean the Authenticate was Successful.
        // It simply means the User completed the Session and a 3D FaceScan was created.  You still need to perform the Authentication on your Servers.
        //
        // Part 4:  Get essential data off the FaceTecSessionResult
        //
        var parameters = {
            faceScan: sessionResult.faceScan,
            auditTrailImage: sessionResult.auditTrail[0],
            lowQualityAuditTrailImage: sessionResult.lowQualityAuditTrail[0],
            sessionId: sessionResult.sessionId,
            externalDatabaseRefID: this.sampleAppControllerReference.getLatestEnrollmentIdentifier()
        };
        //
        // Part 5:  Make the Networking Call to Your Servers.  Below is just example code, you are free to customize based on how your own API works.
        //
        this.latestNetworkRequest = new XMLHttpRequest();
        this.latestNetworkRequest.open("POST", Config.BaseURL + "/match-3d-3d");
        this.latestNetworkRequest.setRequestHeader("Content-Type", "application/json");
        this.latestNetworkRequest.setRequestHeader("X-Device-Key", Config.DeviceKeyIdentifier);
        this.latestNetworkRequest.setRequestHeader("X-User-Agent", FaceTecSDK.createFaceTecAPIUserAgentString(sessionResult.sessionId));
        this.latestNetworkRequest.onreadystatechange = function () {
            //
            // Part 6:  In our Sample, we evaluate a boolean response and treat true as was successfully processed and should proceed to next step,
            // and handle all other responses by cancelling out.
            // You may have different paradigms in your own API and are free to customize based on these.
            //
            if (_this.latestNetworkRequest.readyState === XMLHttpRequest.DONE) {
                try {
                    var responseJSON = JSON.parse(_this.latestNetworkRequest.responseText);
                    var scanResultBlob = responseJSON.scanResultBlob;
                    // In v9.2.0+, we key off a new property called wasProcessed to determine if we successfully processed the Session result on the Server.
                    // Device SDK UI flow is now driven by the proceedToNextStep function, which should receive the scanResultBlob from the Server SDK response.
                    if (responseJSON.wasProcessed) {
                        // Demonstrates dynamically setting the Success Screen Message.
                        FaceTecSDK.FaceTecCustomization.setOverrideResultScreenSuccessMessage("Authenticated");
                        // In v9.2.0+, simply pass in scanResultBlob to the proceedToNextStep function to advance the User flow.
                        // scanResultBlob is a proprietary, encrypted blob that controls the logic for what happens next for the User.
                        faceScanResultCallback.proceedToNextStep(scanResultBlob);
                    }
                    else {
                        // CASE:  UNEXPECTED response from API.  Our Sample Code keys off a wasProcessed boolean on the root of the JSON object --> You define your own API contracts with yourself and may choose to do something different here based on the error.
                        _this.cancelDueToNetworkError("Unexpected API response, cancelling out.", faceScanResultCallback);
                    }
                }
                catch (_a) {
                    // CASE:  Parsing the response into JSON failed --> You define your own API contracts with yourself and may choose to do something different here based on the error.  Solid server-side code should ensure you don't get to this case.
                    _this.cancelDueToNetworkError("Exception while handling API response, cancelling out.", faceScanResultCallback);
                }
            }
        };
        this.latestNetworkRequest.onerror = function () {
            // CASE:  Network Request itself is erroring --> You define your own API contracts with yourself and may choose to do something different here based on the error.
            _this.cancelDueToNetworkError("XHR error, cancelling.", faceScanResultCallback);
        };
        //
        // Part 7:  Demonstrates updating the Progress Bar based on the progress event.
        //
        this.latestNetworkRequest.upload.onprogress = function (event) {
            var progress = event.loaded / event.total;
            faceScanResultCallback.uploadProgress(progress);
        };
        //
        // Part 8:  Actually send the request.
        //
        var jsonStringToUpload = JSON.stringify(parameters);
        this.latestNetworkRequest.send(jsonStringToUpload);
        //
        // Part 9:  For better UX, update the User if the upload is taking a while.  You are free to customize and enhance this behavior to your liking.
        //
        window.setTimeout(function () {
            if (_this.latestNetworkRequest.readyState === XMLHttpRequest.DONE) {
                return;
            }
            faceScanResultCallback.uploadMessageOverride("Still Uploading...");
        }, 6000);
    };
    return AuthenticateProcessor;
}());
var AuthenticateProcessor = AuthenticateProcessor;