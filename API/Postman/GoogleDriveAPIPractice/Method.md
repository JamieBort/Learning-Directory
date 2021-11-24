# Method

1. Obtain `client id` and `client secret` credentials.

2. Use them to obtain a `token`. I used Postman to obtain the token.

3. With the token (and using Postman) I was able to make an api call.


## Details

1. Found this [Introduction to Google Drive API](https://developers.google.com/drive/api/v3/about-sdk) document.

2. I setup my `client id` and `client secret` credentials using [Next Steps](https://developers.google.com/drive/api/v3/about-sdk#next_steps) of the above document. These two are used to obtain a `token`.

    a. To this end I followed the `2. Learn how to enable the Drive API within your app's Cloud Platform project.` instruction, 
    
    >i. specifically I navigated to the [enable the Drive API](https://developers.google.com/drive/api/v3/enable-drive-api) link.

    >ii. and I followed the instructions under the [Enable the Drive API](https://developers.google.com/drive/api/v3/enable-drive-api#enable_the_drive_api) section.
    
    b. I then followed the `3. Learn how to authenticate your users so they can access the Google Drive API with your Google Drive app.` instruction, 
    
    >i. specifically I navigated to the [Authenticate your users](https://developers.google.com/drive/api/v3/about-auth) link.

    >ii. and I followed the instructions under the [Authorizing requests with OAuth](https://developers.google.com/drive/api/v3/about-auth#OAuth2Authorizing) section.

    c. **Of note** are the info I used from yesterday's use of Postman. See https://trello.com/c/oLdgSonr/468-google-gmail-api for more info and background. **Particularly** if there are error issues.

3. To obtain a token

    a. Set up the environment.
        ![](./01.png)

    b. Set up the collection and edit it.
        
        ![](./05.png)

        and 
        
        ![](./03.png)

    c. select the orange button.

    d. [what else?]

4. Fill in the api fields

    ![](./02.png)
    and
    ![](./04.png)

5. The api call
[HTTP request](https://developers.google.com/drive/api/v3/reference/files/list#http-request) from the `Files: list` page.
    >GET https://www.googleapis.com/drive/v3/files

    Which resulted in:

    ```
    {
        "kind": "drive#fileList",
        "nextPageToken": "~!!~AI9FV7S7aq4MybKtpiTrRgIpEWvXnrzBCOqROaWmMIKWU-Gok_LuR7gT_p-OwNQQAAw0Gs7VOHevcmQxlNRz539fw7SVoT7zgq1xUYOzrWRIWUDU_nkwSLEH9ArPJGbi0ogzmtP66qtjrkNqcWsw1qtn-wiXskuB2U0xtieW3pwoVSNj_-Y2AoL3Ik2KIKNbELtDpK8wbrVxUkmRASgmkEHFWF7LWyKJRVoimO7m6Pqv3o_eFvDnd_iaDMirGW_w0Q7cy-IUgrS4W7jbtCrvUV32LiuBTN-rpfp-kB8MbJlTW25DYo8GIQo=",
        "incompleteSearch": false,
        "files": [
            {
                "kind": "drive#file",
                "id": "1tJRXr8i9MeF-ifxOPdzBOh_KMTeY_yB4MEoIRC1WSn8",
                "name": "Physical Activity Tracker",
                "mimeType": "application/vnd.google-apps.spreadsheet"
            },
            ...,
            {
                "kind": "drive#file",
                "id": "1yNunzSVzywJMdSDYENOMbp6_2f-OuTXZxjyyC72HITI",
                "name": "Workout Progress v. 2.0",
                "mimeType": "application/vnd.google-apps.spreadsheet"
            },
        ]
    }
    ```


6. A second api call
[HTTP request](https://developers.google.com/drive/api/v3/reference/files/get#http-request) from the `Files: get` page.

    >GET https://www.googleapis.com/drive/v3/files/fileId

    I used `https://www.googleapis.com/drive/v3/files/1FV7WEq_JuHoBbPkrXmcqBAIqNb6fLM7qJxTxHdaPyek` 

    Which resulted in:

    ```
    {
    "kind": "drive#file",
    "id": "1tJRXr8i9MeF-ifxOPdzBOh_KMTeY_yB4MEoIRC1WSn8",
    "name": "Physical Activity Tracker",
    "mimeType": "application/vnd.google-apps.spreadsheet"
    }
    ```
