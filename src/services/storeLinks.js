// Busca links salvos.
export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}


//Salvar um link no Storage.
export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    // já tem um link salvo com ID não vai duplicar

    const haslink = linksStored.some( link => link.id === newLink.id)

    if(haslink) {
        console.log('esselink ja existe na sua lista')
        return;
    }

    //Adcinar novvo link na lisat..
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucess!!')
}





//Deletar algum link slavo.

export function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id) 
    })

    localStorage.setItem('@encurtalink', JSON.stringify(myLinks));
    console.log('Link deletado com sucesso!!')

    return myLinks;
}
