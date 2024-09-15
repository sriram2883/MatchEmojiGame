The game consists of emojis, if two same emojis are clicked they will be removed from the array. Emoji removal is based on comparing the emoji name and ID of the emoji. The optimal solution for the game is 8 steps. They are arranged in the format of [0 - 1 - 2 - 3], [4 - 5 - 6 - 7], [0 - 1 - 2 - 3], [4 - 5 - 6 - 7]. These numbers are the ID's of the emojis. A step is considered after clicking on 2 emojis irrespective of whether they are the same or not. The minimum steps to empty the grid are considered the best score. The time limit is 90 seconds and the timer starts when the start is clicked or any emoji div is clicked. This game has also been hosted on Netlify which can be played using the link provided above for submission "https://matchemojigame.netlify.app/".


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

    const [emojislist, setEmojisList] = React.useState([
        {
        id: 0,
        emojiNmae:'Smiling Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_Emoji_large.png?v=1571606036',
        },
        {
        id: 1,
        emojiNmae:'Smiling Emoji with Eyes Opened',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1571606036',
        },
        {
        id: 2,
        emojiNmae:'Smiling Emoji with Smiling Eyes',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035',
        },
        {
        id: 3,
        emojiNmae:'Smiling Face with Tightly Closed eyes',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smiling_Face_with_Tightly_Closed_eyes_large.png?v=1571606036',
        },
        {
        id: 4,
        emojiNmae:'Smirk Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Smirk_Face_Emoji_large.png?v=1571606036',
        },
        {
        id: 5,
        emojiNmae:'Unamused Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Unamused_Face_Emoji_761d8bf8-c78c-45b1-80b1-a86a80d2452d_large.png?v=1571606036',
        },
        {
        id: 6,
        emojiNmae:'Sad Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Sad_Face_Emoji_large.png?v=1571606037',
        },
        {
        id: 7,
        emojiNmae:'Relieved Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Relieved_Emoji_large.png?v=1571606037',
        },
        {
        id: 8,
        emojiNmae:'Persevering Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Persevering_Face_Emoji_large.png?v=1571606037',
        },
        {
        id: 9,
        emojiNmae:'Tired Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Tired_Face_Emoji_a5bdf862-1509-419f-9e2a-c9208ae1938b_large.png?v=1571606036',
        },
        {
        id: 10,
        emojiNmae:'Weary Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Weary_Face_Emoji_91a42b7e-9581-4fa5-8de4-57481355d505_large.png?v=1571606036',
        },
        {
        id: 11,
        emojiNmae:'Confounded Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Confounded_Face_Emoji_large.png?v=1571606037',
        },
        {
        id: 12,
        emojiNmae:'Disappointed Face Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Disappointed_Face_Emoji_large.png?v=1571606037',
        },
        {
        id: 13,
        emojiNmae:'Sad Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Very_sad_large.png?v=1571606093',
        },
        {
        id: 14,
        emojiNmae:'Happy Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090',
        },
        {
        id: 15,
        emojiNmae:'Angry Emoji',
        status:'hidden',
        emojiUrl: 'https://emojiisland.com/cdn/shop/products/Angry_Emoji_large.png?v=1571606038',
        },
        ]);