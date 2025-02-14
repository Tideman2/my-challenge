
export default function menuItemsToRoute(item) {
 let route = item.replaceAll(" ", "-").toLowerCase()
 return route
}