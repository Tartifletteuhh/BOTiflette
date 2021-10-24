var politesse = ["bonjour","salut","yo","wesh","hey","hola","hello","hellow","ohayo","👋","coucou","pouet","cc","slt","wsh","bjr","pouet","koukou","bonsoir","au revoir"]
module.exports = (client) => {
    client.on('message', message =>{
        politesse.forEach(politesseMot => {
            if(message.content.toLowerCase().startsWith(politesseMot)) {
                message.react('👋')
                console.log('👋')
            }
        })
    })
}