module.exports = async function (context, req) {
    const messages = [
        "Jangan lupa minum",
    ];

    const images = [
        'https://tekplat.blob.core.windows.net/test/furina.gif'
    ];

    const motd = messages[Math.floor(Math.random() * messages.length)];
    const imageUrl = images[Math.floor(Math.random() * images.length)];

    context.res = {
        headers: { "Content-Type": "application/json" },
        body: {
            motd,
            imageUrl
        }
    };
}
