export function shuffle(elements: any[]) : any[] {
    return elements
    .map(data => ({data, randomize: Math.random()}))
    .sort((object1, object2) => object1.randomize - object2.randomize)
    .map(object => object.data)

}